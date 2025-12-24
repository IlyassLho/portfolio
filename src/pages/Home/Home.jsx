import IconCloud from "../../components/IconCloud";
import Sparkles from "../../components/Sparkles/Sparkles";
import { useTranslation } from "react-i18next";
import "./Home.css";

function Home() {
    const { t } = useTranslation();

    return (
        <section className="home-section" id="home">
            <div className="home-content">
                {/* LEFT SIDE: */}
                <div className="home-header">
                    <div className="location-badge">
                        📍 {t('home_location')}
                    </div>

                    <h2 className="greeting">
                        {t('greeting')} <span className="wave">👋🏻</span>
                    </h2>

                    <Sparkles minSize={30} maxSize={70}>
                        <h1 className="hero-title-large">
                            {t('home_title_line1')}<br />
                            <span className="stroke-text">{t('home_title_line2')}</span>
                        </h1>
                    </Sparkles>

                    {/* Subtitle */}
                    {/* <h3 className="hero-subtitle">
                        & Computer Architect ("inchalaah")
                    </h3> */}
                </div>

                {/* RIGHT SIDE: */}
                <div className="home-cloud-container">
                    <IconCloud />
                </div>
            </div>
        </section>
    );
}

export default Home;