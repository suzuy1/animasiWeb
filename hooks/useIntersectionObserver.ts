
import { useState, useEffect, useRef, MutableRefObject } from 'react';

interface ObserverOptions {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
}

export const useIntersectionObserver = <T extends Element>(
    options: ObserverOptions = {}
): [MutableRefObject<T | null>, boolean] => {
    const { threshold = 0.1, root = null, rootMargin = '0px' } = options;
    const targetRef = useRef<T | null>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const node = targetRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { threshold, root, rootMargin }
        );

        observer.observe(node);

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, [targetRef, threshold, root, rootMargin]);

    return [targetRef, isIntersecting];
};
