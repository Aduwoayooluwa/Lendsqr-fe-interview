import { Link } from "@tanstack/react-router";

export function SearchItem({ item }: { item: string}) {
    return <Link to={`/${item}`}>
        { item }
    </Link>
} 

