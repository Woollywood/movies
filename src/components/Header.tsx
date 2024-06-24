export default function Header() {
	return (
		<nav>
			<div className='nav-wrapper container'>
				<a href='#' className='brand-logo'>
					Logo
				</a>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<a href='#'>Repo</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
