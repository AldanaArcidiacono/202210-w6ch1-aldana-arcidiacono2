import { characters } from '../../data/characters';
import { CardItem } from '../card.item/card.item';

export function CardList() {
    return (
        <>
            {characters.map((item) => (
                <div key={item.id} className="app container">
                    <ul
                        key={item.id}
                        className="characters-list row list-unstyled"
                    >
                        <CardItem item={item}></CardItem>
                    </ul>
                </div>
            ))}
        </>
    );
}
