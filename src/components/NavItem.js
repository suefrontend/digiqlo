import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav, StyledUl, StyledLi, StyledLink, StyledNavWrapper } from '../styles/StyledNavItem';
import { StyledHeader, StyledHeaderLink } from '../styles/StyledHeader';
import { Button } from '../styles/Button';

const NavItem = () => (
	<StyledNav>
		<StyledHeader>
			<StyledHeaderLink>DIGIQLO</StyledHeaderLink>
		</StyledHeader>
		<StyledNavWrapper>
			<Link to="/digiqlo/additem">
				<Button>
					<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
				Add Item
			</Button>
			</Link>
		</StyledNavWrapper>
		<StyledUl>
			<StyledLi>
				<StyledNavWrapper>
					<Link to="/digiqlo">
						<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
							<path class="cls-1" d="M122.49081,90.475A388.16482,388.16482,0,0,1,72.54434,56.54108H66.86067v-6.8507a11.47338,11.47338,0,1,0-14.33244-11.112,2.86065,2.86065,0,0,0,5.7213,0,5.7511,5.7511,0,0,1,6.12265-5.739,5.75169,5.75169,0,0,1,.66457,11.397,4.72654,4.72654,0,0,0-3.89739,4.64328v7.66146H55.45566A388.16483,388.16483,0,0,1,5.50919,90.475a7.44393,7.44393,0,0,0-2.62545,10.41912L52.09594,72.646a23.91217,23.91217,0,0,1,23.8081,0l49.21222,28.24813A7.44393,7.44393,0,0,0,122.49081,90.475Z" /></svg>
						<span>Closet</span>
					</Link>
				</StyledNavWrapper>
			</StyledLi>
			<StyledLi>
				<StyledNavWrapper>
					<Link to="/digiqlo/reports">
						<svg viewBox="0 0 20 20" fill="currentColor" class="chart-bar w-6 h-6"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
						<span>Reports</span>
					</Link>
				</StyledNavWrapper>
			</StyledLi>
			<StyledLi>
				<StyledNavWrapper>
					<Link to="/digiqlo/organize">
						<svg id="_x32_" viewBox="0 0 512 512" >
							<g>
								<path class="st0" d="M332.571,140.81l-16.665,16.648c-41.547-24.17-95.688-18.468-131.288,17.116l153.521,153.52
		c35.583-35.592,41.294-89.732,17.115-131.278l16.666-16.657L332.571,140.81z"></path>
								<path class="st0" d="M0,299.943c0,0,9.585,18.251,28.989,45.303c14.864-9,51.042-31.664,90.012-61.833l6.324,6.332
		c0,0-42.7,39.908-82.445,74.058c5.748,7.405,12.09,15.206,19.026,23.278c21.441-18.549,45.223-39.781,62.447-57.014l8.756,4.865
		c0,0-29.692,31.691-60.914,63.788c6.558,7.279,13.584,14.701,21.079,22.196c18.954,18.954,37.494,34.692,54.158,47.448
		c16.576-19.124,44.934-52.032,53.69-63.482l9.712,11.665c0,0-26.052,39.42-40.502,68.401
		c26.269,17.935,43.907,26.331,43.907,26.331c31.331-54.654,114.695-169.502,114.695-169.502L172.997,185.825
		C172.997,185.825,98.372,248.208,0,299.943z"></path>

								<rect x="334.304" y="62.854" transform="matrix(0.7071 -0.7071 0.7071 0.7071 67.7361 328.4017)" class="st0" width="191.963" height="39.163"></rect>
							</g>
						</svg>
						<span>Organize</span>
					</Link>
				</StyledNavWrapper>
			</StyledLi>
			<StyledLi>
				<StyledNavWrapper>
					<Link to="/digiqlo/wishlist">
						<svg viewBox="0 0 20 20" fill="currentColor" class="heart w-6 h-6"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
						<span>Wishlist</span>
					</Link>
				</StyledNavWrapper>
			</StyledLi>
		</StyledUl>
	</StyledNav>
);

export default NavItem;
