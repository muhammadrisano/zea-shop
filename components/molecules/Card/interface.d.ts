interface ICardProps {
    title?: string;
    price?: string|number;
    imageUrl: string;
    linkUrl?: string;
    rating?: number;
    color?: string ;
    variant?: 'default' | 'featured' | 'category'| 'cart';
    className?: string;
    reviews?: number;
}

export type { ICardProps };