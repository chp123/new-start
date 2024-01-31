import React, { useEffect, useState } from 'react';
import './index.scss';
import classnames from 'classnames';
import IMAGES from '@src/constants/imgs';

interface ICategoryItem {
    name: string;
    catNo: number;
}

interface IProps {
    data: Array<ICategoryItem>;
    curCatNo: number;
    onClick: Function;
}

const Category = (props: IProps) => {
    const { data, curCatNo, onClick } = props;
    return (
        <div className={classnames('component-category')}>
            {data.map((item, index) => {
                return (
                    <CategoryItem
                        key={index}
                        data={item}
                        curCatNo={curCatNo}
                        onClick={onClick}></CategoryItem>
                );
            })}
        </div>
    );
};
export default Category;

const CategoryItem = (props: any) => {
    const { data, curCatNo, onClick } = props;
    const handleClick = () => {
        onClick(data);
    };
    return (
        <div
            className={classnames('category-item', {
                'category-item-active': curCatNo == data.catNo,
            })}
            onClick={handleClick}>
            {data.name}
        </div>
    );
};
