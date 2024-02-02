import React, { FC, useRef, useEffect, memo } from 'react';
import classnames from 'classnames';
import IMAGES from '../../constants/imgs';

interface ImageProps {
    src: string; // 图片链接
    pending: string; // 图片加载时的占位链接
    fail: string; // 图片出错时的链接
    className?: string;
    onClick?: Function;
    [key: string]: any;
}
const Image: FC<ImageProps> = ({ pending, src, fail, className, ...other }) => {
    const imgRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
        imageInit();
    }, []);
    function imageInit() {
        const img = document.createElement('img');
        img.src = src;
        img.onload = () => {
            if (imgRef.current) {
                imgRef.current.src = src;
            }
        };
        img.onerror = () => {
            if (imgRef.current) {
                imgRef.current.src = fail || IMAGES.LOGO;
                imgRef.current.onerror = null;
            }
        };
    }
    return (
        <img
            className={classnames('component-image', className)}
            src={pending || IMAGES.LOGO}
            ref={imgRef}
            {...other}
        />
    );
};
export default memo(Image);
