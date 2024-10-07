import './styles/EditMode.css'
import CrossButton from './CrossButton'

export default function EditMode({cvData, handleChange, handleImageChange, handleExperienceChange, handleAddExperienceButton}){
	console.log(cvData.workexperiences)
	
	const handleButtonClick = () => {
		document.getElementById('import-profile-picture').click()
	}
	
	return (
	<>	
	{/* <img src="./src/assets/Capture d’écran 2024-09-25 à 17.31.55.png" alt="" className="cvimage"></img> */}
	
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
					
					<div className="profile-picture-container">
						
						<img src={cvData.profil.avatar.value} alt="" className="profile-picture profile-picture-edit"/>
						
						<input 
							type="file" 
							accept='image/*'
							id='import-profile-picture'
							onChange={(event) => handleImageChange(["profil", "avatar", "value"], event.target.files[0])}/>
						
						<button onClick={handleButtonClick} className="import-profile-picture">
							importer une photo
						</button>
						
							
					</div>
					
					<div className="profile-name-and-badges">
						
						<input className="profile-name" 
							
							type='text'
							value={cvData.profil.name.value} 
							onChange={(event) => handleChange(["profil", "name", "value"], event.target.value)} 
							placeholder={cvData.profil.name.placeholder}/>
						
						
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
					<div className='profile-info graduation-icon'>
						<svg viewBox="0 -3 24 24" id="meteor-icon-kit__solid-graduation-cap" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M0.522074 5.12131C0.549569 5.10633 0.577846 5.09259 0.606828 5.08019L11.1724 0.27766C11.6982 0.03863 12.3018 0.03863 12.8276 0.27766L23.4138 5.08956C24.1954 5.44483 24.1954 6.555 23.4138 6.9103L12.8276 11.7222C12.3018 11.9612 11.6982 11.9612 11.1724 11.7222L2 7.5529V10.4999C2 11.0522 1.55228 11.4999 1 11.4999C0.447715 11.4999 0 11.0522 0 10.4999V5.99993C0 5.98437 0.000355195 5.9689 0.00105792 5.95352C0.015847 5.6237 0.189526 5.3001 0.522074 5.12131zM20 10.462V12.724C20 13.0995 19.8943 13.4675 19.6949 13.7858C18.1427 16.2633 15.5333 17.4999 12 17.4999C8.46671 17.4999 5.85733 16.2633 4.30518 13.7859C4.10583 13.4677 4.00009 13.0998 4 12.7241V10.462L11.1724 13.7222C11.6982 13.9612 12.3018 13.9612 12.8276 13.7222L20 10.462z" fill="currentColor"/>
						</svg>
						
						<input className="profile-job-title text-icon" 
							
							type='text'
							value={cvData.profil.jobtitle.value} 
							onChange={(event) => handleChange(["profil", "jobtitle", "value"], event.target.value)} 
							placeholder={cvData.profil.jobtitle.placeholder}/>
							
					</div>
					<div className='profile-info phone-icon'>
						<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" fill="currentColor"/>
						</svg>
						
						<input className="profile-phone-number text-icon"
						
							type='text'
							value={cvData.profil.phonenumber.value} 
							onChange={(event) => handleChange(["profil", "phonenumber", "value"], event.target.value)} 
							placeholder={cvData.profil.phonenumber.placeholder}/>
							
					</div>
					<div className='profile-info mail-icon'>
						<svg version="1.1" id="_x32_" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
							<g>
								<polygon className="st0" points="512,295.199 445.92,226.559 512,169.6 	"/>
								<polygon className="st0" points="66.16,226.559 0,295.279 0,169.6 	"/>
								<path className="st0" d="M512,357.6v63.199c0,15.281-12.4,27.682-27.68,27.682H27.68c-15.281,0-27.68-12.4-27.68-27.682V357.6 l98.959-102.721L212,352.238c11.76,10.082,27.359,15.682,44,15.682c16.641,0,32.32-5.6,44.08-15.682l112.959-97.359L512,357.6z"/>
								<path className="st0" d="M512,91.119v27.68l-241.442,208c-7.76,6.72-21.359,6.72-29.119,0L0,118.799v-27.68 c0-15.279,12.398-27.6,27.68-27.6H484.32C499.6,63.519,512,75.84,512,91.119z"/>
							</g>
						</svg>
						<input className="profile-mail text-icon"
						
							type='text'
							value={cvData.profil.email.value} 
							onChange={(event) => handleChange(["profil", "email", "value"], event.target.value)} 
							placeholder={cvData.profil.email.placeholder}/>
					</div>
				</div>
			</div>
	
			<div className="goal cv-box">
				<svg 
					viewBox="0 0 24 24" 
					xmlns="http://www.w3.org/2000/svg" 
					className="goal-icon" 
					fill="currentColor"
				>
					<path 
					d="M21.92,5.62A1,1,0,0,0,21,5H19V3a1,1,0,0,0-.62-.92,1,1,0,0,0-1.09.21l-3,3A1,1,0,0,0,14,6V8.59l-2.21,2.2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L15.41,10H18a1,1,0,0,0,.71-.29l3-3A1,1,0,0,0,21.92,5.62Z"
					/>
					<path 
					d="M12,22A10,10,0,0,1,12,2h.42a1,1,0,1,1-.18,2H12a8,8,0,1,0,8,8,1.93,1.93,0,0,0,0-.24,1,1,0,0,1,.91-1.09,1,1,0,0,1,1.09.91c0,.14,0,.28,0,.42A10,10,0,0,1,12,22Zm5.88-8.8a1,1,0,0,0-2-.4A4,4,0,1,1,11.2,8.08a1,1,0,1,0-.4-2,6,6,0,1,0,7.08,7.08Z"
					/>
				</svg>
				
				<input className="goal-title" 
							
					type='text'
					value={cvData.goal.value} 
					onChange={(event) => handleChange(["goal", "value"], event.target.value)} 
					placeholder={cvData.goal.placeholder}/>
					
			</div>
			
			<div className="cv-columns">
				<div className="left-column cv-column">
					<div className="intro cv-box">
						
						<div className="intro-title title">
							<svg
								viewBox="0 0 512 512"
								fill="currentColor"
								height="1em"
								width="1em"
								className='intro-title-icon title-icon'
							>
								<path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7h450.6c17 0 30.7-13.8 30.7-30.7 0-89.1-72.2-161.3-161.3-161.3H161.3z" />
							</svg>
							<p className="intro-title-text title-text">Intro</p>

						</div>
						
						<div className="intro-aboutme">
							<svg
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className='intro-aboutme-icon'
								fill='currentColor'
							>
								<path
								d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"
								/>
								<path d="M7 7h10v2H7zm0 4h7v2H7z" />
							</svg>
							
							
							<textarea className="intro-aboutme-text" 
							
							type='text'
							value={cvData.intro.aboutme.value} 
							onChange={(event) => handleChange(["intro", "aboutme", "value"], event.target.value)} 
							placeholder={cvData.goal.placeholder}/>							
							
						</div>
						
						<div className="intro-line"></div>
						
						<div className="intro-informations">
							
							<div className="intro-information location">
								
								<svg
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
									fill='currentColor'
									className='intro-information-icon'
									>
									<path
									d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0M192 128a64 64 0 1 1 0 128a64 64 0 1 1 0-128"
									/>
								</svg>

								<input className="intro-information-text gray" 
							
									type='text'
									value={cvData.intro.location.value} 
									onChange={(event) => handleChange(["intro", "location", "value"], event.target.value)} 
									placeholder={cvData.intro.location.placeholder}/>
								
							</div>
							<div className="intro-information age">
								
								<svg
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill='currentColor'
									className='intro-information-icon'
									>
									<g
									fill='none'
									stroke="#000000"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									>
									<path d="M8 2v4m8-4v4" />
									<rect width="18" height="18" x="3" y="4" rx="2" />
									<path
										d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"
									/>
									</g>
								</svg>
								
								<input className="intro-information-text gray" 
							
									type='text'
									value={cvData.intro.age.value} 
									onChange={(event) => handleChange(["intro", "age", "value"], event.target.value)} 
									placeholder={cvData.intro.age.placeholder}/>
								
							</div>
							<div className="intro-information langages">
								
								<svg
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									className='intro-information-icon'
									>
									<path
									fill="#000000"
									d="m478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4ZM334.83 362L368 281.65L401.17 362Zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9Z"
									/>
								</svg>
								
								<input className="intro-information-text gray" 
								
									type='text'
									value={cvData.intro.spokenlangages.value} 
									onChange={(event) => handleChange(["intro", "spokenlangages", "value"], event.target.value)} 
									placeholder={cvData.intro.spokenlangages.placeholder}/>
								
							</div>
							<div className="intro-information mobility">
								
								<svg
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className='intro-information-icon'
									>
									<g
									fill="none"
									stroke="#000000"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									>
									<path
										d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
									/>
									<circle cx="7" cy="17" r="2" />
									<path d="M9 17h6" />
									<circle cx="17" cy="17" r="2" />
									</g>
								</svg>

								<input className="intro-information-text gray" 
								
									type='text'
									value={cvData.intro.mobility.value} 
									onChange={(event) => handleChange(["intro", "mobility", "value"], event.target.value)} 
									placeholder={cvData.intro.mobility.placeholder}/>								
								
								
							</div>
							
						</div>
						
						<div className="intro-link">
							<svg
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className='intro-link-icon'
								>
								<path
								d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
								/>
							</svg>
							
							<input className="intro-link-text" 
								
								type='text'
								value={cvData.intro.websiteurl.value} 
								onChange={(event) => handleChange(["intro", "websiteurl", "value"], event.target.value)} 
								placeholder={cvData.intro.websiteurl.placeholder}/>
							
						</div>
						
					</div>
					
					<div className="skills cv-box">
						
						<div className="skills-title title">
							<svg
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className='title-icon'
								>
								<path
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
								/>
							</svg>
							
							<p className="skills-title-text title-text">Compétences</p>

						</div>
						
						<div className="skills-icons">
							
							<div className="skill skill1"></div>
							<div className="skill skill2"></div>
							<div className="skill skill3"></div>
							<div className="skill skill4"></div>
							<div className="skill skill5"></div>
							<div className="skill skill6"></div>
							
						</div>
						
					</div>
					
					<div className="hobbies cv-box">
						
						<div className="hobbies-title title">
							<svg
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className='hobbies-title-icon title-icon'
								>
								<g
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								>
								<circle cx="12" cy="12" r="10" />
								<path d="M12 6v6l4 2" />
								</g>
							</svg>

							<p className="skills-title-text title-text">Centres d'intéret</p>

						</div>
						
						<div className="hobbies-images">
							
							<div className="hobbie hobbie1"></div>
							<div className="hobbie hobbie2"></div>
							<div className="hobbie hobbie3"></div>
							<div className="hobbie hobbie4"></div>
							<div className="hobbie hobbie5"></div>
							<div className="hobbie hobbie6"></div>
							
						</div>
						
					</div>
				</div>
				
				<div className="right-column cv-column">
					<div className="work-experiences-box cv-box">
						
						<div className="work-experiences-title publications-title">
							
							<img 
								src={cvData.profil.avatar.value === "" ? cvData.profil.avatar.placeholder : cvData.profil.avatar.value} 
								alt="" 
								className="profile-picture-mini" />
								
								<p className="work-experiences-name publications-profile-name">
									{cvData.profil.name.value === "" ? cvData.profil.name.placeholder : cvData.profil.name.value}
								</p>
								
								<p className="work-experiences-title-text publications-title-text">
									&nbsp;&nbsp;à publié ses expériences professionnelles.
								</p>
								
						</div>
						
						{
							cvData.workexperiences.map( workExperience => { return (
								
							<div className={`work-experience work-experience-${workExperience.key}`}>
								<div className="dot-experience"></div>
								
								<div className="work-experience-text">
									<input className="work-experience-title" 
								
										type='text'
										value={workExperience.title.value} 
										onChange={(event) => {console.log("hello handleExp"), handleExperienceChange(workExperience.key, "title", event.target.value)}} 
										placeholder={workExperience.title.placeholder}/>
									
									<div className="work-experience-infos">
										
										<svg
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											className='experience-duration-icon'
											fill='currentColor'
											>
											<g
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											>
											<circle cx="12" cy="12" r="10" />
											<path d="M12 6v6l4 2" />
											</g>
										</svg>
										
										<input className="work-experience-duration" 
								
											type='text'
											value={workExperience.duration.value} 
											onChange={(event) => {handleExperienceChange(workExperience.key, "duration", event.target.value)}} 
											placeholder={workExperience.duration.placeholder}/>
											
										<input className="work-experience-company" 
							
											type='text'
											value={workExperience.company.value} 
											onChange={(event) => {handleExperienceChange(workExperience.key, "company", event.target.value)}} 
											placeholder={workExperience.company.placeholder}/>
												
										
									</div>
									
									<textarea className="work-experience-projects"
						
										type='text'
										value={workExperience.projects.value} 
										onChange={(event) => {handleExperienceChange(workExperience.key, "projects", event.target.value)}} 
										placeholder={workExperience.projects.placeholder}/>
									
									
								</div>
							</div>
								
							)
									
									
									
								
							})
						}
						
							
						
						<CrossButton
							id={"add-experience-button"} // + add-button
							addOrDeleteStyle={"add"}
							buttonSize={"2vw"}
							handleOnClick={handleAddExperienceButton}
						/>
						
					</div>
					<div className="school-path-box cv-box"></div>
				</div>
			</div>
		</div>
	
		
	</div>
	
	</>
	
	)
}