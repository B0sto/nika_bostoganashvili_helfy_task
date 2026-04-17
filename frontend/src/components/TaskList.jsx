import React, { useEffect, useMemo, useRef, useState } from 'react'
import "../styles/TaskList.css"
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
    const listRef = useRef(null);
    const animationRef = useRef(null);
    const positionRef = useRef(0);
    const isPausedRef = useRef(false);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const getCardWidth = () => {
        if (screenWidth <= 768) return 260;

        return 280;
    }

    const CARD_WIDTH = getCardWidth();
    const GAP = 16;
    const SPEED = 0.5;

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    })

    const getShouldAnimate = () => {
        if (screenWidth <= 400) return tasks.length >= 1;
        if (screenWidth <= 748) return tasks.length >= 2;
        return tasks.length > 2
    }


    const shouldAnimate = getShouldAnimate();

    const loopedTasks = useMemo(() => {
        if (!shouldAnimate) return tasks;
        if (!tasks || tasks.length === 0) return [];
        
        return [...tasks, ...tasks];
    }, [tasks, shouldAnimate])

    useEffect(() => {
        const listElement = listRef.current;

        if (!listElement || !tasks || tasks.length === 0) return;

        if (!shouldAnimate) {
            listElement.style.transform = "transform(0px)"
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            return;
        }

        positionRef.current = 0;

        const singleSetWidth = tasks.length * (CARD_WIDTH + GAP);

        const animate = () => {
            if (!isPausedRef.current) {
                positionRef.current -= SPEED;

                if (Math.abs(positionRef.current) >= singleSetWidth) {
                    positionRef.current = 0;
                }
            }

            if (listRef.current) {
                listRef.current.style.transform = `translateX(${positionRef.current}px)`
            }

            animationRef.current = requestAnimationFrame(animate);
        }

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        }
    }, [tasks, shouldAnimate])

    if (!tasks || tasks.length === 0) {
        return (
            <div className="taskListContainer">
                <div className="taskListEmpty">
                    <p>No tasks found</p>
                </div>
            </div>
        )
    }


    return (
        <div className='taskListContainer' 
        onMouseEnter={() => (isPausedRef.current = true)} 
        onMouseLeave={() => (isPausedRef.current = false)}
        >
            <div className="taskList" ref={listRef}>
                {loopedTasks.map((task, index) => (
                    <TaskItem key={`${task.id}-${index}`} task={task} />
                ))}
            </div>
        </div>
    )
}

export default TaskList