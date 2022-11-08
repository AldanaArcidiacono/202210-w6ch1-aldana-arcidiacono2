import { Character } from '../../models/character';

export function CardItem({ item }: { item: Character }) {
    return (
        <>
            <li key={item.id}>
                <div className="card character__card">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="character__picture card-img-top"
                    />
                    <h2 className="character__name card-title h4">
                        {item.name}
                    </h2>
                    <p>Edad: {item.age} años</p>
                    <div className="characteractions">
                        <button className="characteraction btn">Habla</button>
                        <button className="character__action btn">Muere</button>
                    </div>
                </div>
            </li>
        </>
    );
}
