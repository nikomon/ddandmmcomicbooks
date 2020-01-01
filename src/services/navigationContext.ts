import React from 'react';
import nav from '../content/navigation/_nav.json';


export interface NavigationItem {
    id: string;
    title: string;
    slug: string;
    description: string;
    createdAt: string;
}

export function dynamicSort(property: keyof NavigationItem, sortOrder: number) {
    return (a: NavigationItem, b: NavigationItem) => {
        const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function getPost(id: string) {
    return require(`../content/posts/${id}.json`);
}

function getMenuItems(): Array<NavigationItem> {
    try {
        const { navigationItem } = nav;
        return navigationItem.map(({ id }) => {
            const post = getPost(id);
            const { slug, description, title, createdAt  } = post;
            return { slug, description, title, createdAt, id };
        }).sort(dynamicSort('createdAt', 1));
    } catch(e) {
        return [];
    }
}

export const navigationContext = React.createContext(getMenuItems());

