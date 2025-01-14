import {useContext, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {appContext} from "../../AppContext.tsx";

const HelpSection = () => {
    const { isMobile } = useContext(appContext)
    const whatMakesAgoraUniqueRef = useRef(null);
    const whatCanYouDoOnAgoraRef = useRef(null);
    const browseTheMarketplace = useRef(null);
    const moreDetailsAndOtherSellers = useRef(null);
    const buyingProcess = useRef(null);
    const payment = useRef(null);
    const putAgoraInWriteMode = useRef(null);
    const depositMinimaForListingFees = useRef(null);
    const depositNFTsToList = useRef(null);
    const listingAnNFT = useRef(null);
    const storingYourNFT = useRef(null);

    const walletFeatures = useRef(null);
    const deposits = useRef(null);
    const withdrawals = useRef(null);
    const managingYourNFTCollection = useRef(null);
    const theAgoraGlobalActivityFeed = useRef(null);
    const decentralization = useRef(null);
    const efficiencyAndReliability = useRef(null);
    const minimaNodeModes = useRef(null);
    const marketplaceMechanics = useRef(null);
    const walletFuncionality = useRef(null);
    const activityFeed = useRef(null);
    const marketInitializer = useRef(null);
    const coinManagement = useRef(null);
    const expiredCoinAutomation = useRef(null);
    const orderBookUpdates = useRef(null);

    const blockASeller = useRef(null);
    const viewBlockedSellers = useRef(null);
    const hideAListing = useRef(null);
    const unhideListing = useRef(null);

    const [section, setSection] = useState("How to use Agora");

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    };

    return <div className="pt-4 space-y-8">
        <div className="space-x-8">
            {['How to use Agora', 'Technical Explanation'].map((t, i) =>
                <button key={i} className={`p-0 text-grey80 ${t === section && "text-lightOrange"}`} type="button" onClick={() => setSection(t)}>
                    {t}
                    {t===section&&<div className="mt-1 h-1 bg-lightOrange"></div>}
                </button>
            )}
        </div>

        {section === "How to use Agora" ? (
            <div className={"grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-10"}>
                <nav className="bg-darkContrast p-6 md:max-w-md rounded-lg h-max">

                    <div className="space-y-2">
                        <h3 className="text-lightOrange">Welcome to the Agora Marketplace</h3>

                        <ul className="grid gap-4">
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(whatCanYouDoOnAgoraRef);
                            }}>&#x2014; What Can You Do on Agora?</Link>
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(whatMakesAgoraUniqueRef);
                            }}>&#x2014; What Makes Agora Unique?</Link>
                        </ul>
                    </div>

                    <div className="space-y-2 mt-4">
                        <h3 className="text-lightOrange">Buying an NFT on Agora</h3>

                        <ul className="grid gap-4">
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(browseTheMarketplace);
                            }}>&#x2014; Browse the Marketplace</Link>
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(buyingProcess);
                            }}>&#x2014; Buying Process</Link>
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(moreDetailsAndOtherSellers);
                            }}>&#x2014; More details and other sellers</Link>
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(payment);
                            }}>&#x2014; Payment</Link><Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(storingYourNFT);
                            }}>&#x2014; Storing your NFT</Link>
                        </ul>
                    </div>

                    <div className="space-y-2 mt-4">
                        <h3 className="text-lightOrange">Selling or Listing an NFT</h3>

                        <ul className="grid gap-4">
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(putAgoraInWriteMode);
                            }}>&#x2014; Put Agora in Write mode</Link>
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(depositMinimaForListingFees);
                            }}>&#x2014; Deposit Minima for listing fees</Link>
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(depositNFTsToList);
                            }}>&#x2014; Deposit NFTs to List</Link>
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(listingAnNFT);
                            }}>&#x2014; Listing an NFT</Link>
                        </ul>
                    </div>

                    <div className="space-y-2 mt-4">
                        <h3 className="text-lightOrange">Agora Marketplace Wallet</h3>

                        <ul className="grid gap-4">
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(walletFeatures);
                            }}>&#x2014; Wallet Features</Link>
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(deposits);
                            }}>&#x2014; Deposits</Link>
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(withdrawals);
                            }}>&#x2014; Withdrawals</Link>
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(managingYourNFTCollection);
                            }}>&#x2014; Managing Your NFT Collection</Link>
                        </ul>
                    </div>

                    <div className="space-y-2 mt-4">
                        <h3 className="text-lightOrange">Activity Feed</h3>

                        <ul className="grid gap-4">
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(theAgoraGlobalActivityFeed);
                            }}>&#x2014; The Agora Global Activity Feed shows real-time, on-chain market activity,
                                including:</Link>
                        </ul>
                    </div>

                    <div className="space-y-2 mt-4">
                        <h3 className="text-lightOrange">Blocking sellers and Hiding listings</h3>

                        <ul className="grid gap-4">
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(blockASeller);
                            }}>&#x2014; Block a seller</Link>

                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(viewBlockedSellers);
                            }}>&#x2014; View blocked sellers / unblock blocked sellers</Link>

                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(hideAListing);
                            }}>&#x2014; Hide a listing</Link>

                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(unhideListing);
                            }}>&#x2014; Unhide a listing</Link>
                        </ul>
                    </div>
                </nav>

                <section>
                    <h1 className="text-lightOrange text-2xl">Welcome to the Agora Marketplace</h1>
                    <p className="!mt-6">The Agora Marketplace is your gateway to a dynamic and decentralized platform
                        for
                        buying, selling, and managing NFTs (Non-Fungible Tokens) within the Minima ecosystem. Designed
                        for
                        ease of use and powered by Minima's unique blockchain technology, Agora empowers users to securely
                        trade digital assets while maintaining full ownership and control.</p>

                    <section className="mt-10 space-y-4">
                        <div className="space-y-2">
                            <h2 className="font-bold" ref={whatCanYouDoOnAgoraRef}>What Can You Do On Agora?</h2>
                            <ul className="list-disc space-y-1 list-inside">
                                <li>Discover: Browse listed NFTs, from digital art to unique collectibles.
                                </li>
                                <li>Trade: Buy NFTs directly from sellers or list your own creations for sale.
                                </li>
                                <li>Manage: Deposit and hold your NFTs within Agora ready for trading, or withdraw to
                                    external wallets.
                                </li>
                            </ul>

                            <p className="!mt-6">Whether you're an artist looking to showcase your work or a collector
                                seeking the next addition to your portfolio, Agora provides the tools and community to
                                help
                                you succeed.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="font-bold" ref={whatMakesAgoraUniqueRef}>What Makes Agora Unique?</h2>
                            <ul className="list-disc space-y-1 list-inside">
                                <li>Decentralized and Transparent: Built on the Minima network, every transaction is
                                    on-chain, ensuring transparency and trust.
                                </li>
                                <li>User-Friendly Interface: Intuitive tools make it simple to explore, buy, and sell
                                    NFTs,
                                    even for beginners.
                                </li>
                                <li>Global Access: Connect with a global community of creators and collectors in a truly
                                    borderless marketplace.
                                </li>
                                <li>Flexibility: Seamlessly switch between wallets, deposit assets, and choose storage
                                    options tailored to your needs.
                                </li>
                            </ul>

                            <p>
                            Explore. Connect. Trade. Welcome to Agora.
                            </p>
                        </div>

                    </section>

                    <section className="mt-20">
                        <h1 className="text-lightOrange text-2xl">Buying an NFT on Agora</h1>

                        <section className="mt-6 space-y-4">
                            <ul className="list-none space-y-4 list-inside">
                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>1.</span>
                                    <div ref={browseTheMarketplace}>
                                        Browse the Marketplace
                                        <ul className="list-disc list-inside mt-2">
                                            <li>View all NFTs listed for sale.</li>
                                            <li>Use the search bar or category filter to find specific NFTs.</li>
                                            <li>Multiple sellers or quantities of the same NFT are grouped under one
                                                artwork.
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>Select the NFT card to view details including:</li>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Created by: Original creator of the NFT.</li>
                                    <li>Total minted: Total supply of the NFT.</li>
                                    <li>Floor price: Lowest current price for the NFT.
                                    </li>
                                </ul>
                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>2.</span>
                                    <div ref={buyingProcess}>
                                        Buying process
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Use the 'Buy it now' option to purchase an NFT at the floor (lowest) price.</li>
                                            <li>If multiple sellers exist, you can select a seller based on their quantity available for sale.</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>3.</span>
                                    <div ref={moreDetailsAndOtherSellers}>
                                        More details and other sellers
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Select 'More info' to view additional NFT details, descriptions, and all sellers with their listing prices.</li>
                                            <li>Select a seller and select 'Buy' to start the purchase process.</li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>4.</span>
                                    <div ref={payment}>
                                        Payment
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Pay using your Agora wallet or main Minima node wallet.
                                            </li>
                                            <li>The purchased NFT will be deposited into the wallet chosen at checkout.
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>5.</span>
                                    <div ref={storingYourNFT}>
                                        Storing your NFT
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Your purchased NFTs will be stored in your Agora wallet.  Optionally, withdraw them to your main Minima node wallet or to another NFT-compatible Minima wallet.
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </section>

                    <section className="mt-20">
                        <h1 className="text-lightOrange text-2xl">Selling or Listing an NFT</h1>

                        <section className="mt-6 space-y-4">
                            <ul className="list-none space-y-4 list-inside">
                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>1.</span>
                                    <div ref={putAgoraInWriteMode}>
                                        Put Agora in Write mode & unlock your node
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Switch Agora to write-mode to list NFTs <a target="_blank"
                                                                                                      href="https://docs.minima.global/docs/user-guides/mds/minidapp-permissions">[Learn
                                                how here]</a></li>
                                            <li>Unlock your node from the Security MiniDapp.</li>
                                            <li>Optionally use The Safe MiniDapp to ensure large amounts of Minima are
                                                locked securely. <a target="_blank"
                                                                    href="https://docs.minima.global/docs/user-guides/security/create-a-safe">[Learn
                                                    how here]</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>2.</span>
                                    <div ref={depositMinimaForListingFees}>
                                        Deposit Minima for listing fees
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Navigate to your Agora wallet and deposit Minima to cover listing fees.</li>
                                            <li>A fee of 0.0000001 MINIMA is charged hourly from your Agora wallet whilst your listing is live and your node is online.
                                            </li>
                                            <li>A fee of 0.0000001 MINIMA is also charged anytime you change the listing price, the supply of the listing changes, or you disable the listing.</li>
                                            <li>A fee of 0.0.0001 MINIMA is also charged anytime a seller sells an NFT for the coin notify event (notifying user(s) of the sale).</li>
                                            <li>A fee of 0.0.0001 MINIMA is also charged anytime a buyer cancels a purchase request (notifying user(s) of the cancellation).</li>
                                            <li>Ensure your Agora wallet has sufficient Minima to cover fees.</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>3.</span>
                                    <div ref={depositNFTsToList}>
                                        Deposit NFTs to List
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Deposit the NFTs to list into your Agora wallet - the deposited quantity determines the amount that will be listed (e.g., depositing 5 identical NFTs will list all 5 in a single listing).
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>4.</span>
                                    <div ref={listingAnNFT}>
                                        Listing an NFT
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Navigate to your Agora wallet.</li>
                                            <li>Select an NFT to sell.</li>
                                            <li>Click the List button.</li>
                                            <li>Enter your desired listing price.</li>
                                            <li>Click to list (wait for on-chain transaction to process).</li>
                                            <li>Active listings can be found in your Active listings tab.</li>
                                        </ul>
                                        <span className="pt-10 text-sm">
                                            <div className={"h-4"}/>
                                            Active listings can be found in your Agora wallet tab and can be cancelled at any time. <br/>
                                            Note: If your node disconnects from the Minima network for more than 1 hour, your listings will be removed from the marketplace.
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </section>


                    <section className="mt-20">
                        <h1 className="text-lightOrange text-2xl">Agora Marketplace Wallet</h1>

                        <section className="mt-6 space-y-4">
                            <ul className="list-none space-y-4 list-inside">
                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>1.</span>
                                    <div ref={walletFeatures}>
                                        Wallet Features
                                        <ul className="list-disc list-inside mt-2">
                                            <li>View confirmed/unconfirmed balances (separate from your main Minima
                                                wallet)
                                            </li>
                                            <li>Track pending purchases and active listings</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>2.</span>
                                    <div ref={deposits}>
                                        Deposits
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Use the Deposit button to:
                                                <ul className="list-disc list-inside pl-6">
                                                    <li>Add NFTs for storage or listing from your main Minima node wallet.
                                                    </li>
                                                    <li>Add Minima for buying NFTs or paying listing fees.</li>
                                                </ul>
                                            </li>
                                            <li>Alternatively, deposit manually using your Agora wallet address.</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>3.</span>
                                    <div ref={withdrawals}>
                                        Withdrawals
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Withdraw Minima or NFTs to:
                                                <ul className="list-disc list-inside pl-6">
                                                    <li>Your main Minima node wallet.</li>
                                                    <li>Any other Minima wallet address (ensure NFT compatibility). <i>e.g The Public Wallet</i></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>4.</span>
                                    <div ref={managingYourNFTCollection}>
                                        Managing your NFT Collection
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Store your NFTs in the Agora wallet or manage them for listings.</li>
                                            <li>To list or withdraw an NFT, click the List / Withdraw button on the NFT
                                                card and follow the instructions.
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </section>


                    <section className="mt-20">
                        <h1 className="text-lightOrange text-2xl">Activity Feed</h1>

                        <section className="mt-6 space-y-4">
                            <ul className="list-none space-y-4 list-inside">
                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>1.</span>
                                    <div ref={theAgoraGlobalActivityFeed}>
                                        The Agora Global Activity Feed shows real-time, on-chain market activity,
                                        including:
                                        <ul className="list-disc list-inside mt-2">
                                            <li>New purchase requests</li>
                                            <li>Completed sales</li>
                                            <li>Cancelled purchases</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </section>


                    <section className="mt-20">
                        <h1 className="text-lightOrange text-2xl">Blocking sellers and Hiding listings</h1>

                        <section className="mt-6 space-y-4">
                            <p>You have complete control over which sellers and listing you see in your marketplace.</p>
                            <ul className="list-none space-y-4 list-inside">
                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>1.</span>
                                    <div ref={blockASeller}>
                                        <p>Block a seller</p>
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Open a listing</li>
                                            <li>Select the user to view their profile</li>
                                            <li>Select <strong>Block user</strong></li>
                                            <li><i>(Optionally)</i> Add a reason for blocking them. <br/> This reason is
                                                not shared with anyone and is a note for you only.
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <p>Once blocked, wait a few minutes for them to be removed from your marketplace.</p>
                            <ul className="list-none space-y-4 list-inside">
                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>2.</span>
                                    <div ref={viewBlockedSellers}>
                                        <p>View blocked sellers / unblock blocked sellers</p>
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Go to {!isMobile ? "your profile" : "the menu"}</li>
                                            <li>Select <strong>Manage blocked users</strong></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <p>If you do not wish to see a particular listing, you can hide it from your
                                marketplace. </p>
                            <ul className="list-none space-y-4 list-inside">
                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>3.</span>
                                    <div ref={hideAListing}>
                                        <p>Hide a listing</p>
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Select the NFT listing</li>
                                            <li>Choose <strong>Hide listing</strong></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="grid grid-cols-[auto_1fr] gap-4">
                                    <span>4.</span>
                                    <div ref={unhideListing}>
                                        <p>Unhide a listing</p>
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Go to {!isMobile ? "your profile" : "the menu"}</li>
                                            <li>Choose <strong>Manage hidden listings</strong></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>


            </div>
        ) : <div className={"grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-10"}>
            <nav className="bg-darkContrast p-6 md:max-w-md rounded-lg h-max">
                <div className="space-y-2">
                    <h3 className="text-lightOrange">Understanding Agora: A Technical Overview</h3>
                </div>

                <div className="space-y-2 mt-4">
                    <h3 className="text-lightOrange">The Key Principles of Agora</h3>

                    <ul className="grid gap-4">
                        <Link to="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(decentralization);
                        }}>&#x2014; Decentralization</Link>
                        <Link to="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(efficiencyAndReliability);
                        }}>&#x2014; Efficiency and Reliability</Link>
                    </ul>
                </div>

                <div className="space-y-2 mt-4">
                    <h3 className="text-lightOrange">Technical Explanation</h3>

                    <ul className="grid gap-4">
                        <Link to="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(minimaNodeModes);
                        }}>&#x2014; Minima Node Modes</Link>
                        <Link to="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(marketplaceMechanics);
                        }}>&#x2014; Marketplace Mechanics</Link>
                        <Link to="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(walletFuncionality);
                        }}>&#x2014; Wallet Functionality</Link>
                        <Link to="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(activityFeed);
                        }}>&#x2014; Activity Feed</Link>
                    </ul>
                </div>

                <div className="space-y-2 mt-4">
                    <h3 className="text-lightOrange">Behind-the-Scenes Processes</h3>

                    <ul className="grid gap-4">
                        <Link to="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(marketInitializer);
                        }}>&#x2014; Market Initializer</Link>
                        <Link to="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(coinManagement);
                        }}>&#x2014; Coin Management</Link>
                        <Link to="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(expiredCoinAutomation);
                        }}>&#x2014; Expired Coin Automation</Link>
                        <Link to="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(orderBookUpdates);
                        }}>&#x2014; Order Book Updates</Link>
                    </ul>
                </div>

            </nav>
            <section className="space-y-8">
                <div>
                    <h1 className="text-2xl text-lightOrange mb-4">Understanding Agora: A Technical Overview</h1>
                    <p className="text-gray-200">
                        Agora is a fully decentralized, on-chain marketplace for buying and selling NFTs on the Minima
                        blockchain.
                        Here is an explanation of how the backend system operates, addressing the challenges and
                        solutions
                        that enable
                        this innovative marketplace in a decentralized environment.
                    </p>
                </div>

                <div className="space-y-6">
                    <h2 className="text-xl text-lightOrange">The Key Principles of Agora</h2>

                    <div className="space-y-4">
                        <div ref={decentralization}>
                            <h3 className="font-bold mb-2">1. Decentralization</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>No central server or database acts as the single source of truth for the order
                                    book
                                </li>
                                <li>All data, including orders and listings, are stored and processed directly on the
                                    Minima
                                    blockchain
                                </li>
                            </ul>
                        </div>

                        <div ref={efficiencyAndReliability}>
                            <h3 className="font-bold mb-2">2. Efficiency and Reliability</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The Minima network, KISS smart contracts, the MiniDapp system, and web development frameworks are leveraged to create a seamless user experience.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-xl text-lightOrange">Technical Explanation</h2>

                    <div className="space-y-6">
                        <div ref={minimaNodeModes}>
                            <h3 className="font-bold mb-2">1. Agora Permissions</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Buyers: Users purchasing NFTs can keep Agora in read-mode</li>
                                <li>Sellers: Users selling NFTs must switch Agora to write-mode and have their node unlocked to enable listing functionality <a target="_blank"
                                                                                                                                                                href="https://docs.minima.global/docs/user-guides/mds/minidapp-permissions">[Learn how to enable write-mode here]</a>. This ensures that Agora can
                                    publish a transaction containing your order book to the network each hour whilst you
                                    are online.
                                </li>
                            </ul>
                        </div>

                        <div ref={marketplaceMechanics}>
                            <h3 className="font-bold mb-2">2. Marketplace Mechanics</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold">Data Handling:</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>The marketplace aggregates and displays all active listings, presenting a
                                            unified view of available NFTs.  To achieve this, all current market data including the latest listings and the status of each seller's items - is consolidated into a single, cohesive dataset.  This dataset is then displayed on the user interface, offersing users an organized and intuitive view of the marketplace.
                                        </li>
                                        <li>Listings are stored on the Minima blockchain, and each NFT listing is broadcast to a unique address (less than 32-byte in size). This ensures persistence without overloading an individual’s coin database.
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold">Order Maintenance:</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>The order book is rebroadcast every 60 minutes to maintain its availability
                                            and
                                            prevent data pruning
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold">Listing Process:</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>A fee of 0.0000001 MINIMA is required to list an NFT or when any changes are made to a listing.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold">Buying Process:</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Buyers browse NFTs, select a seller, and initiate a purchase request</li>
                                        <li>The request locks the required Minima amount, signaling the seller to
                                            transfer
                                            the NFT.  Upon transfer, the Minima is automatically released to the seller.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div ref={walletFuncionality}>
                            <h3 className="font-bold mb-2">3. Wallet Functionality</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold">Agora Wallet Features:</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Separate from your main Minima wallet, the Agora wallet allows for:
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>Managing purchased NFTs</li>
                                                <li>Depositing NFTs and Minima for listing or purchasing</li>
                                                <li>Withdrawing assets to external wallets</li>
                                                <li>Viewing your confirmed/unconfirmed Agora wallet balance</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold">Why does Agora wallet need to be a separate
                                        Wallet?</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>To avoid liquidity issues. When you list an NFT, all balances in the Agora
                                            wallet become available for transactions, ensuring smooth sales and
                                            purchases
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold">Integration with Minima:</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>The Agora wallet remains synced to your main wallet using your default
                                            public
                                            key, ensuring compatibility even during quick re-syncs
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold">Control Options:</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Cancel active listings or purchase requests at any time</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div ref={activityFeed}>
                            <h3 className="font-bold mb-2">4. Activity Feed</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold">Live Updates:</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>A real-time feed shows all on-chain market activity, such as new purchase requests, sales, and cancellations.
                                        </li>
                                        <li>The feed monitors spends on the DEX contract and coin events using coin notifications.
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold">Event Management:</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>For each transaction, the feed identifies whether the action is:
                                            <ul className="list-disc pl-6 mt-2">
                                                <li>Making a new purchase request (buyer)</li>
                                                <li>Canceling a purchase request (buyer)</li>
                                                <li>Completing a sale by transferring the NFT and Minima (seller).</li>
                                            </ul>
                                        </li>
                                        <li>A transaction fee of 0.0001 MINIMA is applied</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-xl text-lightOrange">Behind-the-Scenes Processes</h2>

                    <div className="space-y-4">
                        <div ref={marketInitializer}>
                            <h3 className="font-bold mb-2">1. Market Initializer:</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Runs every 60 seconds to ensure the marketplace reflects the latest data</li>
                            </ul>
                        </div>

                        <div ref={coinManagement}>
                            <h3 className="font-bold mb-2">2. Coin Management:</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Maintains a pool of at least 10 ready-to-use coins for handling simultaneous
                                    transactions
                                </li>
                            </ul>
                        </div>

                        <div ref={expiredCoinAutomation}>
                            <h3 className="font-bold mb-2">3. Expired Coin Automation:</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Automatically manages expired coins older than 30 minutes, canceling or republishing
                                    them as necessary
                                </li>
                            </ul>
                        </div>

                        <div ref={orderBookUpdates}>
                            <h3 className="font-bold mb-2">4. Order Book Updates:</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Re-publishes the order book every 60 minutes unless a change occurs, such as a
                                    balance
                                    adjustment, cancellation, or new listing
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-gray-200 mt-6">
                        Agora provides a sophisticated system to balance decentralization, efficiency, and usability.
                        Whether you're a buyer or seller,
                        the platform ensures a secure, seamless experience while keeping all operations entirely
                        on-chain.
                    </p>
                </div>
            </section>
            </div>
        }


        </div>
        }


        export default HelpSection;
