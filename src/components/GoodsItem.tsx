import type { GoodItemType } from '../consts/types';

export default function GoodsItem(props: GoodItemType) {
	const { mainId, name, description, full_background, price } = props;

	return (
		<div className='card' id={String(mainId)}>
			<div className='card-image waves-effect waves-block waves-light'>
				<img className='activator' src={full_background} alt={name} />
			</div>
			<div className='card-content'>
				<span className='card-title activator grey-text text-darken-4'>{name}</span>
				<p>
					<a href='#'>This is a link</a>
				</p>
			</div>
			<div className='card-reveal'>
				<span className='card-title grey-text text-darken-4'>
					Card Title<i className='material-icons right'>close</i>
				</span>
				<p>{description}</p>
				<div className='card-action'>
					<button>Купить</button>
					<span className='right'>{price}</span>
				</div>
			</div>
		</div>
	);
}
