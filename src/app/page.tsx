"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import BaseFooter from '@/components/sections/layouts/footer/BaseFooter';

const theme: SiteTheme = { styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" };

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759830514588-3566ca81.jpg"
          logoWidth={150}
          logoHeight={50}
          navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer" }]}
          buttonText="Buy MemePulse"
          onButtonClick={() => {}}
        />
      </div>
      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Welcome to MemePulse"
          subtitle="The fun way to enjoy meme coins"
          contractAddress="0x123456..."
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout
          title="About MemePulse"
          descriptions={["MemePulse is a community-focused memecoin, aiming to bring joy and fun to crypto transactions.", "Join us in creating a vibrant community around our unique token!"]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Tokenomics"
          description="Explore the token distribution, liquidity, and supply metrics of MemePulse."
          tokenData={[{ value: "1M", description: "Total Supply" }, { value: "100K", description: "Liquidity" }, { value: "50K", description: "Marketing Fund" }]}
        />
      </div>
      <div id="footer" data-section="footer">
        <BaseFooter
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759830514588-3566ca81.jpg"
          logoWidth={150}
          logoHeight={50}
          columns={[
            { title: "Links", items: [{ label: "Privacy Policy", onClick: () => {} }]},
            { title: "Socials", items: [{ label: "Twitter", onClick: () => {} }]},
            { title: "Support", items: [{ label: "Contact Us", onClick: () => {} }]},
          ]}
          copyrightText="© 2023 MemePulse"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}