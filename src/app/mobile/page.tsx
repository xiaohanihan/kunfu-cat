'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';

declare global {
  interface Window {
    TripettoStudio: any;
    TripettoChat: any;
  }
}

export default function MobilePage() {
  useEffect(() => {
    // Load external scripts after component mounts
    const loadScript = (src: string, integrity?: string, crossOrigin?: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        if (integrity) script.integrity = integrity;
        if (crossOrigin) script.crossOrigin = crossOrigin;
        
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        
        document.body.appendChild(script);
      });
    };

    // Load all external scripts
    Promise.all([
      loadScript('https://cdn.jsdelivr.net/npm/@tripetto/runner'),
      loadScript('https://cdn.jsdelivr.net/npm/@tripetto/runner-chat'),
      loadScript('https://cdn.jsdelivr.net/npm/@tripetto/studio'),
      loadScript(
        'https://code.jquery.com/jquery-3.2.1.slim.min.js',
        'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN',
        'anonymous'
      ),
      loadScript(
        'https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js',
        'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q',
        'anonymous'
      ),
      loadScript(
        'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js',
        'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl',
        'anonymous'
      )
    ]).then(() => {
      // Initialize Tripetto form after all scripts are loaded
      if (typeof window.TripettoStudio !== 'undefined' && typeof window.TripettoChat !== 'undefined') {
        window.TripettoStudio.form({
          runner: window.TripettoChat,
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNXJDSXRlVlNpT1lmczdveisxSWVydjhOaDZZZDRZZ1FDUXd4QWlqYVJuTT0iLCJkZWZpbml0aW9uIjoidjA0MjF5R1k0Nnp2UHZBU1VyWFRyelM4U3JpZTA2blB4b2lZVWNETFdCbz0iLCJ0eXBlIjoiY29sbGVjdCJ9.K5L8qatb6CF3yV_XTFAVN-2pLELkiHKc5Q-HtnZA65I",
          element: "tripetto-120y198"
        });
      }
    }).catch(error => {
      console.error('Error loading scripts:', error);
    });

    // Cleanup function
    return () => {
      // Note: In a real application, you might want to implement proper script cleanup
    };
  }, []);

  return (
    <>
      <Head>
        <title>$9000, It's over 9000!</title>
        <meta name="description" content="$9000, It's over 9000!" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      </Head>
      
      <noscript>$9000, It's over 9000!</noscript>
      <div id="root">
        <div>
          <div className="cursor">
            <div className="mainContent">
              <div className="garden">
                <div className="mob">
                  <div className="deskz">
                    <div className="">
                      <br />
                      <div className="MuiGrid-root MuiGrid-container backallm css-1d3bbye">
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 centerall css-15j76c0">
                          &nbsp;&nbsp;&nbsp;
                          <div className="MuiGrid-root MuiGrid-container css-op399x">
                            <div className="MuiGrid-root MuiGrid-item css-1wxaqej"></div>
                            <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
                              <div style={{ color: 'white', fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>
                                It's Over 9000!
                              </div>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item css-1wxaqej">
                              <a
                                href="https://x.com/Over9000bnb"
                                className="matrix-text socmob"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: 'white', fontSize: '22px' }}
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="MuiGrid-root MuiGrid-container css-1d3bbye">
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6 centerall css-iol86l">
                          {' '}
                          <br />
                          <div className="centeritall">
                            <img
                              src="/static/media/do.d7469074d8ab441f2775.gif"
                              className="centeritallnined"
                              alt="9000 meme"
                            />
                          </div>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6 centerall css-iol86l">
                          <br />
                          <h1 className="opacity-bg text-4xl md:text-5xl mb-4 text-center anos_text">$9000</h1>
                          <p> it's OVER 9000!</p>
                          <div
                            style={{
                              cursor: 'pointer',
                              textAlign: 'center',
                              padding: '20px',
                              fontSize: '20px',
                              fontWeight: 'bold',
                              background: 'rgb(17, 17, 17)',
                              color: 'rgb(255, 204, 0)',
                              borderRadius: '12px',
                              boxShadow: 'rgba(255, 204, 0, 0.4) 0px 0px 12px',
                              width: '90%',
                              maxWidth: '500px',
                              overflowWrap: 'break-word',
                              margin: '40px auto',
                            }}
                          >
                            <span
                              style={{
                                fontSize: 'clamp(0.8rem, 3.5vw, 1.2rem)',
                                color: 'rgb(255, 255, 255)',
                                display: 'block',
                                marginTop: '10px',
                                wordBreak: 'break-all',
                              }}
                            >
                              0xd19cc8a170daa38cb5093b9bb3ac82abea1b6b52
                            </span>
                          </div>
                          <style jsx>{`
                            @keyframes slideUp {
                              from {
                                opacity: 0;
                                transform: translate(-50%, 30px);
                              }
                              to {
                                opacity: 1;
                                transform: translate(-50%, 0);
                              }
                            }
                          `}</style>
                          <div className="centerall">
                            &nbsp;&nbsp;
                            <a href="https://dexscreener.com/bsc/0xec3450665dc480d84d2240353b96938c6f61082c">
                              <button className="buy-btn">Buy Now</button>
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </div>
                        </div>
                      </div>
                      <br /> <br />
                      <div className="backof1">
                        <div className="container">
                          <div className="MuiGrid-root MuiGrid-container css-1d3bbye">
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 centerall css-15j76c0">
                              {' '}
                              <br />
                              <h1 className="opacity-bg text-4xl md:text-5xl mb-4 text-center anos_textg">
                                The legendary meme coin that breaks all limits. It's not just power...
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="backof2">
                        <br />
                        <br />
                        <div className="container">
                          <h1
                            className="opacity-bg text-4xl md:text-5xl mb-4 text-center anos_textgb"
                            style={{ fontWeight: 900 }}
                          >
                            Cz Knows... It's Over 9000!
                          </h1>
                          <br />
                          <div className="centeritall">
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-isbt42">
                              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 centerall css-1ha4th6">
                                <img
                                  src="/static/media/cz5.8ed4cd3722abf13572ca.jpg"
                                  className="centeritallninecm"
                                  alt="cz5"
                                />
                              </div>
                              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 centerall css-1ha4th6">
                                <img
                                  src="/static/media/cz1.63f72d584a2f5eda3bf3.jpg"
                                  className="centeritallninecm"
                                  alt="cz1"
                                />
                              </div>
                              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 centerall css-1ha4th6">
                                <img
                                  src="/static/media/cz2.3cbf0ba26f34cb894d65.jpg"
                                  className="centeritallninecm"
                                  alt="cz2"
                                />
                              </div>
                              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 centerall css-1ha4th6">
                                <img
                                  src="/static/media/cz3.1f245d8759ace5a93f98.jpg"
                                  className="centeritallninecm"
                                  alt="cz3"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <br />
                        <section></section>
                        <img
                          src="/static/media/cloud.e13ca652cb8b9c1e3b76.png"
                          className="centeritallninec"
                          alt="cloud"
                        />
                      </div>
                      <div className="backofhow">
                        <div className="container">
                          <div className="container">
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-isbt42">
                              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 centerall css-15j76c0">
                                <h1
                                  className="opacity-bg text-4xl md:text-5xl mb-4 text-center anos_textgb"
                                  style={{ fontWeight: 900 }}
                                >
                                  How to Buy
                                </h1>
                              </div>
                              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6 centerall css-iol86l">
                                <div className="addbghow">
                                  <h4 className="htb_h">Create a Wallet</h4>
                                  <div className="centerall">
                                    <img
                                      src="/static/media/meta.d2e72e457c897f56ce27.png"
                                      alt="wallet"
                                      style={{ width: '50px' }}
                                    />
                                  </div>
                                  <p className="htb_hp">
                                    Download <strong>MetaMask</strong> or <strong>Trust Wallet</strong> from the App Store or
                                    Google Play Store for free. For desktop, download the <strong>MetaMask Chrome extension</strong>{' '}
                                    at metamask.io.
                                  </p>
                                </div>
                              </div>
                              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6 centerall css-iol86l">
                                <div className="addbghow">
                                  <h4 className="htb_h">Get Some BNB</h4>
                                  <div className="centerall">
                                    <img
                                      src="/static/media/bnb.27f54c9b112c188df5b5.png"
                                      alt="bnb"
                                      style={{ width: '50px' }}
                                    />
                                  </div>
                                  <p className="htb_hp">
                                    Make sure you have <strong>BNB (Binance Coin)</strong> in your wallet to swap for $9000. You
                                    can purchase BNB directly on Binance, or buy from an exchange like Coinbase/Kraken and
                                    transfer it to your wallet.
                                  </p>
                                </div>
                              </div>
                              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6 centerall css-iol86l">
                                <div className="addbghow">
                                  <h4 className="htb_h">Go to PancakeSwap</h4>
                                  <div className="centerall">
                                    <img
                                      src="/static/media/pan.07f5948015ed7ae78b9c.png"
                                      alt="pancake"
                                      style={{ width: '50px' }}
                                    />
                                  </div>
                                  <p className="htb_hp">
                                    Visit{' '}
                                    <a
                                      href="https://pancakeswap.finance"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      pancakeswap.finance
                                    </a>{' '}
                                    in Chrome or inside your wallet's browser. Connect your wallet, then paste the official $9000
                                    contract address to load the token.
                                  </p>
                                </div>
                              </div>
                              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6 centerall css-iol86l">
                                <div className="addbghow">
                                  <h4 className="htb_h">Swap BNB for $9000</h4>
                                  <div className="centerall">
                                    <h2>$9000</h2>
                                  </div>
                                  <p className="htb_hp">
                                    Paste the $9000 Contract Address on PancakeSwap and swap your BNB for $9000 tokens. Once
                                    confirmed, the tokens will appear in your wallet.
                                  </p>
                                </div>
                                <br />
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div className="MuiGrid-root MuiGrid-container css-1d3bbye">
                              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0">
                                <div
                                  className="marquee-container"
                                  style={{
                                    '--pause-on-hover': 'running',
                                    '--pause-on-click': 'running',
                                    '--width': '100%',
                                    '--transform': 'none',
                                  } as React.CSSProperties}
                                >
                                  <div
                                    className="marquee"
                                    style={{
                                      '--play': 'running',
                                      '--direction': 'normal',
                                      '--duration': '153.32640625s',
                                      '--delay': '0s',
                                      '--iteration-count': 'infinite',
                                      '--min-width': '100%',
                                    } as React.CSSProperties}
                                  >
                                    <div className="initial-child-container">
                                      <div
                                        className="child"
                                        style={{ '--transform': 'none' } as React.CSSProperties}
                                      >
                                        <p className="">
                                          &nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                          9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="marquee"
                                    style={{
                                      '--play': 'running',
                                      '--direction': 'normal',
                                      '--duration': '153.32640625s',
                                      '--delay': '0s',
                                      '--iteration-count': 'infinite',
                                      '--min-width': '100%',
                                    } as React.CSSProperties}
                                  >
                                    <div
                                      className="child"
                                      style={{ '--transform': 'none' } as React.CSSProperties}
                                    >
                                      <p className="">
                                        &nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER
                                        9000!&nbsp;&nbsp;&nbsp;&nbsp;it's OVER 9000!&nbsp;&nbsp;&nbsp;&nbsp;
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="backoffooter">
                        {' '}
                        <div className="MuiGrid-root MuiGrid-container css-1d3bbye">
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 centerall css-15j76c0">
                            <br />
                            <h1 className="opacity-bg text-4xl md:text-5xl mb-4 text-center anos_textg">
                              JOIN $9000
                            </h1>
                            <br />
                            <div className="container centerall">
                              &nbsp;&nbsp; &nbsp;&nbsp;
                              <a
                                href="https://x.com/Over9000bnb"
                                className="matrix-text socmob"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: 'white', fontSize: '22px' }}
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                </svg>
                              </a>
                              &nbsp;&nbsp;
                            </div>
                          </div>
                          <div className="container">
                            <br /> <br />
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="footer">
                      <div className="MuiGrid-root MuiGrid-container css-1d3bbye">
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 centerall css-15j76c0">
                          <div
                            className="marquee-container backofit"
                            style={{
                              '--pause-on-hover': 'running',
                              '--pause-on-click': 'running',
                              '--width': '100%',
                              '--transform': 'none',
                            } as React.CSSProperties}
                          >
                            <div
                              className="marquee"
                              style={{
                                '--play': 'running',
                                '--direction': 'normal',
                                '--duration': '31.85859375s',
                                '--delay': '0s',
                                '--iteration-count': 'infinite',
                                '--min-width': '100%',
                              } as React.CSSProperties}
                            >
                              <div className="initial-child-container">
                                <div
                                  className="child"
                                  style={{ '--transform': 'none' } as React.CSSProperties}
                                >
                                  <p className="fotx">
                                    &nbsp;&nbsp;&nbsp;&nbsp;Buy <strong>$9000</strong> or Cry&nbsp;&nbsp;&nbsp;&nbsp;Buy{' '}
                                    <strong>$9000</strong> or Cry&nbsp;&nbsp;&nbsp;&nbsp;Buy <strong>$9000</strong> or
                                    Cry&nbsp;&nbsp;&nbsp;&nbsp;Buy <strong>$9000</strong> or Cry &nbsp;&nbsp;&nbsp;&nbsp;Buy{' '}
                                    <strong>$9000</strong> or Cry&nbsp;&nbsp;&nbsp;&nbsp;Buy <strong>$9000</strong> or
                                    Cry&nbsp;&nbsp;&nbsp;&nbsp;Buy <strong>$9000</strong> or Cry&nbsp;&nbsp;&nbsp;&nbsp;Buy{' '}
                                    <strong>$9000</strong> or Cry
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="marquee"
                              style={{
                                '--play': 'running',
                                '--direction': 'normal',
                                '--duration': '31.85859375s',
                                '--delay': '0s',
                                '--iteration-count': 'infinite',
                                '--min-width': '100%',
                              } as React.CSSProperties}
                            >
                              <div
                                className="child"
                                style={{ '--transform': 'none' } as React.CSSProperties}
                              >
                                <p className="fotx">
                                  &nbsp;&nbsp;&nbsp;&nbsp;Buy <strong>$9000</strong> or Cry&nbsp;&nbsp;&nbsp;&nbsp;Buy{' '}
                                  <strong>$9000</strong> or Cry&nbsp;&nbsp;&nbsp;&nbsp;Buy <strong>$9000</strong> or
                                  Cry&nbsp;&nbsp;&nbsp;&nbsp;Buy <strong>$9000</strong> or Cry &nbsp;&nbsp;&nbsp;&nbsp;Buy{' '}
                                  <strong>$9000</strong> or Cry&nbsp;&nbsp;&nbsp;&nbsp;Buy <strong>$9000</strong> or
                                  Cry&nbsp;&nbsp;&nbsp;&nbsp;Buy <strong>$9000</strong> or Cry&nbsp;&nbsp;&nbsp;&nbsp;Buy{' '}
                                  <strong>$9000</strong> or Cry
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}