import { useState } from 'react'
import './PrintMode.css'

export default function PrintMode(){
	
	
	return (
	<>	
	<img src="./src/assets/Capture d’écran 2024-09-25 à 17.31.55.png" alt="" class="cvimage"></img>
	
	<div className='cv-background'>
		{/* <div className="small-notes">
		<span className="note-cvbg">.cv-background</span>
		<span className="note-cv">.cv</span>
		<span className="note-cvbox">.cv-box</span>
		<span className="note-cvcol">.cv-columns</span>
		</div> */}
		
		
		<div className="cv" data-info=".cv">
	
			<div className="profile cv-box">
				<div className="profile-infos-1">
					<img src="./src/assets/user.png" alt="" className="profile-avatar"/>
					<div className="profile-name-and-badges">
						<p className="profile-name">Prénom Nom</p>
						<div className="motivation-badge profile-badge">
							<p>Motivation</p>
							<p>100 %</p>
						</div>
						<div className="availability-badge profile-badge">
							<p>Disponibility : ASAP</p>
						</div>
					</div>
				</div>
				
				<div className="profile-infos-2">
					<div className='profile-icon graduation-icon'>
						<svg viewBox="0 -3 24 24" id="meteor-icon-kit__solid-graduation-cap" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.522074 5.12131C0.549569 5.10633 0.577846 5.09259 0.606828 5.08019L11.1724 0.27766C11.6982 0.03863 12.3018 0.03863 12.8276 0.27766L23.4138 5.08956C24.1954 5.44483 24.1954 6.555 23.4138 6.9103L12.8276 11.7222C12.3018 11.9612 11.6982 11.9612 11.1724 11.7222L2 7.5529V10.4999C2 11.0522 1.55228 11.4999 1 11.4999C0.447715 11.4999 0 11.0522 0 10.4999V5.99993C0 5.98437 0.000355195 5.9689 0.00105792 5.95352C0.015847 5.6237 0.189526 5.3001 0.522074 5.12131zM20 10.462V12.724C20 13.0995 19.8943 13.4675 19.6949 13.7858C18.1427 16.2633 15.5333 17.4999 12 17.4999C8.46671 17.4999 5.85733 16.2633 4.30518 13.7859C4.10583 13.4677 4.00009 13.0998 4 12.7241V10.462L11.1724 13.7222C11.6982 13.9612 12.3018 13.9612 12.8276 13.7222L20 10.462z" fill="currentColor"/>
						</svg>
						<p className="profile-title">Job title</p>
					</div>
					<div className='profile-icon phone-icon'>
						<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" fill="currentColor"/>
						</svg>
						<p className="profile-phone-number">01 23 45 67 89</p>
					</div>
					<div className='profile-icon mail-icon'>
						<svg version="1.1" id="_x32_" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
							<g>
								<polygon class="st0" points="512,295.199 445.92,226.559 512,169.6 	"/>
								<polygon class="st0" points="66.16,226.559 0,295.279 0,169.6 	"/>
								<path class="st0" d="M512,357.6v63.199c0,15.281-12.4,27.682-27.68,27.682H27.68c-15.281,0-27.68-12.4-27.68-27.682V357.6 l98.959-102.721L212,352.238c11.76,10.082,27.359,15.682,44,15.682c16.641,0,32.32-5.6,44.08-15.682l112.959-97.359L512,357.6z"/>
								<path class="st0" d="M512,91.119v27.68l-241.442,208c-7.76,6.72-21.359,6.72-29.119,0L0,118.799v-27.68 c0-15.279,12.398-27.6,27.68-27.6H484.32C499.6,63.519,512,75.84,512,91.119z"/>
							</g>
						</svg>
						<p className="profile-mail">nomprenom@gmail.com</p>
					</div>
				</div>
			</div>
	
			<div className="goal cv-box">
				
			</div>
			
			<div className="cv-columns">
				<div className="left-column cv-column">
					<div className="intro cv-box"></div>
					<div className="skills cv-box"></div>
					<div className="hobbies cv-box"></div>
				</div>
				
				<div className="right-column cv-column">
					<div className="work-experience cv-box"></div>
					<div className="school-path cv-box"></div>
				</div>
			</div>
		</div>
	
		
	</div>
	
	</>
	
	)
}