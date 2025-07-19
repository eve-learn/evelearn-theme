'use client';
import { useState, useRef, type ReactNode, useEffect } from 'react';
import {
    useFloating,
    useInteractions,
    useHover,
    useRole,
    useDismiss,
    offset,
    flip,
    shift,
    arrow,
    FloatingArrow,
    FloatingPortal,
    type Placement
} from '@floating-ui/react';
import { tippyClassname } from './fieldStyle';
import clsx from 'clsx';

interface TippyProps {
    children: ReactNode;
    content: ReactNode;
    placement?: Placement;
    className?: string;
    disabled?: boolean;
    arrow?: boolean;
    visible?: boolean;
    wrapperClassname?: string;
}

const Tippy = ({ children, content, placement = 'top', className = '', wrapperClassname= '', disabled = false, arrow: useArrow = false, visible }: TippyProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const arrowRef = useRef(null);

    useEffect(() => {
        if (visible) {
            setIsOpen(true);
        }
    }, [visible]);

    const {
        x,
        y,
        strategy,
        refs,
        context,

    } = useFloating({
        placement,
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [
            offset(8),
            flip(),
            shift(),
            arrow({ element: arrowRef })
        ]
    });

    const hover = useHover(context, {
        enabled: !disabled,
    });
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
        dismiss,
        role,
    ]);

    return (
        <>
            {isOpen && (
                <FloatingPortal>
                    <div
                        ref={refs.setFloating}
                        className={clsx(`${className || tippyClassname}`)}
                        {...getFloatingProps()}
                        style={{
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                            zIndex: 9999,
                            width: 'max-content',
                        }}
                    >
                        {content}
                    </div>
                    {useArrow && <FloatingArrow
                        ref={arrowRef}
                        context={context}
                        className="fill-gray-900"
                        tipRadius={2}
                    />}
                </FloatingPortal>
            )}
            <div ref={refs.setReference} {...getReferenceProps()} className={wrapperClassname}>
                {children}
            </div>
        </>
    );
};

export default Tippy;
