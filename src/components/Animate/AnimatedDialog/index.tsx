import { ReactElement, useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { createPortal } from 'react-dom';

interface AnimatedDialogProps {
    children: ReactElement;
    display: boolean;
    dismiss: () => void;
    extraClass?: string;
    noRest?: boolean;
}

const AnimatedDialog = ({
    children,
    display,
    extraClass,
    noRest,
    dismiss,
}: AnimatedDialogProps) => {
    const [show, setShow] = useState(display);

    // Update the show state based on display and noRest
    useEffect(() => {
        if (display) {
            setShow(true);
            document.body.classList.add('overflow-hidden');
        } else if (!noRest) {
            // Wait for animation to finish before hiding
            const timeout = setTimeout(() => setShow(false), 300); // 300ms matches the animation duration
            return () => clearTimeout(timeout);
        } else {
            setShow(false);
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [display, noRest]);

    // Define transitions
    const transitions = useTransition(display, {
        from: { opacity: 0, transform: 'translateY(100%) scale(1)' },
        enter: { opacity: 1, transform: 'translateY(0%) scale(1)' },
        leave: { opacity: 0, transform: 'translateY(150%) scale(1)' },
        config: { duration: 300 }, // Match the duration of the timeout
    });

    return (
        <>
            {show &&
                createPortal(
                    transitions((styles, item) =>
                        item ? (
                            <animated.div
                                style={styles}
                                className={`fixed top-0 right-0 left-0 bottom-0 md:grid md:grid-cols-[1fr_minmax(0,_560px)_1fr] z-[22] overflow-y-scroll`}
                            >
                                <div />
                                <div className={`pt-[54px] z-[23] h-full ${extraClass || ''}`}>{children}</div>
                                <div />
                            </animated.div>
                        ) : null
                    ),
                    document.body
                )}

            {show &&
                createPortal(
                    <div
                        onClick={dismiss}
                        className={`fixed backdrop-blur-sm left-0 right-0 top-0 bottom-0 z-[21] bg-neutral-200/100 dark:bg-black/90`}
                    />,
                    document.body
                )}
        </>
    );
};

export default AnimatedDialog;
