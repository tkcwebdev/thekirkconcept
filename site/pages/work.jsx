import Head from 'next/head';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';
// import Tilt from 'react-tilt';
import Button from '../components/Button/Button';
import Section from '../components/Section';
import SubHero from '../components/SubHero';
import Page from '../templates/Page';
import styles from '../styles/Work.module.scss';
import WordRiver from '../components/WordRiver';
import CaseStudyCard from '../components/CaseStudyCard';
import DominanceContact from '../components/DominanceContact';

import svvc from '../utilities/caseStudies/svvc';
import fng from '../utilities/caseStudies/fng';
import pff from '../utilities/caseStudies/pff';

import LogoCard from '../components/LogoCard';

const Work = () => {
	const equippdLogo = '/logos/gray_equippd_logo.svg';
	const resortsLogo = '/logos/gray_resorts_world_logo.svg';
	const kinemedixLogo = '/logos/gray_kinemedix_logo.svg';
	const grubberLogo = '/logos/gray_grubber_logo.svg';
	const projectGuardianLogo = '/logos/gray_project_guardian_logo.svg';
	const showbixLogo = '/logos/gray_cheatsheet_logo.svg';
	return (
		<Page className={styles.Work}>
			<Head>
				<title>The Work Created by The Kirk Concept</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Section
				className={`${styles.workHero} bg-gray-dark text-center align-items-center`}
			>
				<h1 className='fs-8xl font-weight-bold text-white'>
					work<span className='text-primary'>.</span>
				</h1>
				<p className='fs-md font-weight-bold text-white-50 mb-20 nmt-2'>
					dominance speaks through our body of work.
				</p>
			</Section>
			<SubHero tagline='We take pride in the brands we work with.'>
				<Col className='nmt-4'>
					<CaseStudyCard casestudy={svvc} />
					<CaseStudyCard casestudy={fng} />
					<CaseStudyCard casestudy={pff} />
				</Col>
			</SubHero>
			<Section fullWidth className='py-50' containerClass='px-0'>
				<WordRiver
					words={[
						'abc hyundai',
						'the10jewelry',
						'svvc',
						'ylm',
						'lone star',
						'forgottennotgone',
						'firefly energy',
						'showbiz',
						'cheatsheet',
						'remoter',
						'press forward',
						'equippd',
						'level up',
						'encore',
						'kinemedix',
						'inthisorder',
						'mysologym',
						'fairway chevy',
						'jav imagery',
						'blue steel jewelry',
						'forrest and harold',
					]}
					colors={['#e6fd36', '#454545', '#A5A5A5']}
				/>
			</Section>

			<Section
				containerClass='font-display'
				className='text-center font-weight-light pb-50'
			>
				<hr className='primary small-width' />
				<p className='fw-light fs-sm mw-lg'>
					TKC exists to establish industry visual dominance for SMB’s
					through impeccable branding, cohesive design systems, and
					intentional web and mobile app experiences.
				</p>
			</Section>
			<Section className='text-center font-weight-light pb-50'>
				<h1 className='fs-lg font-weight-bold text-gray-dark mb-50'>
					More work
				</h1>
				<Row>
					<Col xs={4}>
						<LogoCard
							logoSrc='/logos/gray_equippd_logo.svg'
							logoAlt='Equippd Life Logo'
						/>
					</Col>
					<Col xs={4}>
						<LogoCard
							logoSrc='/logos/gray_resorts_world_logo.svg'
							logoAlt='Resorts World Las Vegas Logo'
						/>
					</Col>
					<Col xs={4}>
						<LogoCard
							logoSrc='/logos/gray_kinemedix_logo.svg'
							logoAlt='Kinemedix Logo'
						/>
					</Col>
				</Row>
				<Row>
					<Col xs={4}>
						<LogoCard
							logoSrc='/logos/gray_grubber_logo.svg'
							logoAlt='Grubber App Logo'
						/>
					</Col>
					<Col xs={4}>
						<LogoCard
							logoSrc='/logos/gray_project_guardian_logo.svg'
							logoAlt='Project Guardian Las Vegas'
						/>
					</Col>
					<Col xs={4}>
						<LogoCard
							logoSrc='/logos/gray_cheatsheet_logo.svg'
							logoAlt='Showbiz Cheatsheet Logo'
						/>
					</Col>
				</Row>
				<Row>
					<Col xs={4}>
						<LogoCard
							logoSrc='/logos/gray_firefly_energy_logo.svg'
							logoAlt='Firefly Energy Logo'
						/>
					</Col>
					<Col xs={4}>
						<LogoCard
							logoSrc='/logos/gray_the10_logo.svg'
							logoAlt='The10 Jewelry Logo'
						/>
					</Col>
					<Col xs={4}>
						<LogoCard
							logoSrc='/logos/gray_inthisorder_logo.svg'
							logoAlt='InThisOrder Logo'
						/>
					</Col>
				</Row>
				<Row>
					<Col xs={4}>
						<LogoCard
							logoSrc='/logos/gray_mysologym_logo.svg'
							logoAlt='Mysologym Logo'
						/>
					</Col>
					<Col xs={4}>
						<LogoCard
							logoSrc='/logos/gray_icoa_logo.svg'
							logoAlt='Investment Club of America Logo'
						/>
					</Col>
					<Col xs={4}>
						<LogoCard
							logoSrc='/logos/gray_vegas_flag_logo.svg'
							logoAlt='Vegas Flag Logo'
						/>
					</Col>
				</Row>
			</Section>

			<DominanceContact />
		</Page>
	);
};

export default Work;