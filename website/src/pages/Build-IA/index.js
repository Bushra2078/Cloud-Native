import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './../index.module.css';

const CampaignFeatures = [
  {
    title: "#30Days Of IA",
    linkTitle: "#30DaysOfIA",
    svgpath: "../img/svg/60-days-of-IA-azure-icon-blog.svg",
    link: "/Cloud-Native/30-days-of-ia-2024",
    description: (
      <>
        Join us on a #30Day journey that starts by demystifying Intelligent Apps and ends with you building on Azure OpenAI.
      </>
    ),
  },
  {
    title: "Learn Live",
    linkTitle: "Learn Live",
    svgpath: "../img/svg/60-days-of-IA-azure-icon-learn-live.svg",
    link: "/Cloud-Native/Build-IA/LearnLive",
    description: (
      <>
        Deconstruct an enterprise-grade end to end reference sample for AI infused serverless or Kubernetes Application.
      </>
    ),
  },
  {
    title: "Demo Bytes",
    linkTitle: "Demo Bytes",
    svgpath: "../img/svg/60-days-of-IA-azure-icon-demobytes.svg",
    link: "/Cloud-Native/Build-IA/DemoBytes",
    description: (
      <>
        Join us for Snackable AI Demos with the SMEs on building intelligent app architectures - ask your questions live.
      </>
    ),
  },
  // {
  //   title: "Free Trial",
  //   linkTitle: "Free Trial",
  //   svgpath: "../img/svg/60-days-of-IA-azure-icon-hack-together.svg",
  //   link: "/Cloud-Native/Build-IA/FreeTrial",
  //   description: (
  //     <>
  //       Dive into an extensive suite of free services designed to help get started building intelligent apps while minimizing upfront costs.
  //     </>
  //   ),
  // },
  {
    title: "AI Skills Challenge",
    linkTitle: "AI Skills Challenge",
    svgpath: "../img/svg/60-days-of-IA-azure-icon-cloud-skills.svg",
    link: "/Cloud-Native/Build-IA/CloudSkills",
    description: (
      <>
        Join us on a learning journey to skill up on your core skills for developing intelligent apps and earn a badge in your Microsoft Learn profile.
      </>
    ),
  },
  {
    title: "Community Gallery",
    linkTitle: "Community Gallery",
    svgpath: "../img/svg/60-days-of-IA-azure-icon-community-gallery.svg",
    link: "/Cloud-Native/Build-IA/CommunityGallery",
    description: (
      <>
        Explore the Community Showcase for videos, blog posts and open-source projects for the community.
      </>
    ),
  },
];

const LearnSkillsCards = [
  {
    title: "Cloud Native Security",
    link: "/Cloud-Native/downloads/cloud-native-security-with-aks.pdf",
    description: (
      <>
        This guide provides an overview of best practices in cloud-native security for each stage in your container app's journey from code to cloud and how AKS works better with Microsoft Defender for Containers. 
      </>
    ),
  },
  {
    title: "Intro to Platform Engineering",
    link: "/Cloud-Native/downloads/platform-engineering-an-introduction.pdf",
    description: (
      <>
        This e-book shares our best learnings so your organization can build the foundation of a platform engineering practice and you can start seeing the benefits for yourself.
      </>
    ),
  },
  {
    title: "Code to cloud with GitHub and AKS",
    link: "/Cloud-Native/downloads/code-to-cloud-with-aks.pdf",
    description: (
      <>
        Using the recommendations in this e-book, you can get a noncontainerized application deployed on a Kubernetes cluster—in minutes. 
      </>
    ),
  },
];

function Feature({ svgpath, title, linkTitle, description, link, className }) {
  return (
    <div className={clsx(className, 'card-col')}>
      <Link className="card-link" to={link}  data-bi-area="BodyGrid" data-bi-name={title}>
        <div className="card">
          <div className="card-body">
            <div className="text--center">
              <img width="150px" height="150px" src={svgpath} alt="" role="presentation" />
            </div>
            <div fill="#00ff00" className="text--center padding-horiz--md">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

const DownloadLink = ({ link, children }) => {
  if (!link) {
    console.error("Error: 'link' prop is required for the download functionality.");
    return null; // Exit early if the link is not provided
  }

  const handleDownload = (e) => {
    e.preventDefault();
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.download = ''; // Provide a filename if necessary
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <a
      className="card-link"
      href={link}
      data-bi-area="BodyGrid"
      data-bi-name="Download Link"
      onClick={handleDownload}
    >
      {children}
    </a>
  );
};

function LearnValuableSkills({ title, description, link, className }) {
  return (
    <div className={clsx(className, 'card-col')}>
      {/* Wrap the entire card with the DownloadLink */}
      <DownloadLink link={link}>
        <div className="card">
          <div className="card-body">
            <div fill="#00ff00" className="padding-horiz--md">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </DownloadLink>
    </div>
  );
}

function CampaignHeader() {
  return (
    <header className={clsx("hero hero--primary heroAzure")} style={{ backgroundImage: 'url(/Cloud-Native/img/hero-bg.png)' }}>
      <div className="container">
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col col--6">
            <h1 className="hero__title">Build Intelligent Apps!</h1>
            <p>
              Join us on a learning journey to explore building intelligent apps. Combine the power of AI, cloud-scale data, and modern app development to create highly differentiated digital experiences. Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure for your users.
            </p>
            <div className={styles.buttonsFFIA}>
              <Link className="button button--primary button--lg" to="/30-days-of-ia-2024" data-bi-area="Hero" data-bi-name="#IntelligentApps">
                Get Started
              </Link>
            </div>
          </div>
          <div className="col col--1 hide-on-mobile"></div>
          <div className="col col--5">
            <img
              className="hide-on-mobile"
              src="../img/30-days-of-ia/30-days-of-ia-2024-hero-image.png"
              alt=""
              role="presentation"
              width="100%"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CampaignFeatures.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
              className={idx < 2 ? 'col col--6 card-col' : 'col col--4 card-col'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LearnValuableSkillsSection() {
  return (
    <section className={styles.features} style={{ paddingTop: '0rem' }}>
      <div className="container">
        <div className="row">
          <div className='col text--center'>
            <h2 style={{ paddingBottom: '1rem' }}>Learn valuable skills</h2>
          </div>
        </div>
        <div className="row">
          {LearnSkillsCards.map((props, idx) => (
            <LearnValuableSkills
              key={idx}
              {...props}
              className={'col col--4 card-col'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BuildIA() {
  return (
    <Layout
      title={`Intelligent Apps`}
      description="Join us for a month-long celebration of intelligent apps. From AI to cloud-scale data and cloud-native technology, build differentiated digital experiences on Azure!"> 
      <CampaignHeader />
      <main>
        <FeaturesSection />
        <LearnValuableSkillsSection />
      </main>
    </Layout>
  );
}