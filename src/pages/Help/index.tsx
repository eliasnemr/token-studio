import { useRef } from "react";
import { Link } from "react-router-dom";

const HelpSection = () => {
  const welcomeToTokenStudio = useRef(null);
  const navigateToCreatingSimple = useRef(null);
  const enterYourSimpleTokenDetails = useRef(null);
  const reviewYourSimpleTokenDetails = useRef(null);
  const afterYourSimpleTokenCreation = useRef(null);
  const whereIsYourSimpleToken = useRef(null);

  const navigateToCreatingCustomToken = useRef(null);
  const enterYourCustomTokenDetails = useRef(null);
  const reviewYourCustomTokenCreation = useRef(null);
  const afterYourCustomTokenCreation = useRef(null);
  const whereIsYourCustomToken = useRef(null);

  const navigateToNFT = useRef(null);
  const enterYourNFTDetails = useRef(null);
  const reviewYourNFTDetails = useRef(null);
  const afterYourNFTCreation = useRef(null);
  const whereIsMyNFT = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white dark:bg-black space-y-8 px-4 md:px-28 py-10">
      <div
        className={"grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-10"}
      >
        <nav className="bg-grey10 text-black dark:text-grey20 dark:bg-darkContrast p-6 md:max-w-md rounded-lg h-max">
          <div className="space-y-2">
            <h3 className="text-lightOrange">Welcome to Token Studio</h3>

            <ul className="grid gap-4">
              <Link
                className="text-black dark:text-grey20 hover:text-grey100 dark:hover:text-grey10"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(welcomeToTokenStudio);
                }}
              >
                &#x2014; What can Token Studio do?
              </Link>
            </ul>
          </div>

          <div className="space-y-2 mt-4">
            <h3 className="text-lightOrange">Creating a Simple Token</h3>

            <ul className="grid gap-4">
              <Link
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(navigateToCreatingSimple);
                }}
              >
                &#x2014; Navigate to
              </Link>
              <Link
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(enterYourSimpleTokenDetails);
                }}
              >
                &#x2014; Enter your Simple Token Details
              </Link>
              <Link
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(reviewYourSimpleTokenDetails);
                }}
              >
                &#x2014; Review your Simple Token Details
              </Link>
              <Link
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(afterYourSimpleTokenCreation);
                }}
              >
                &#x2014; After your Simple Token creation
              </Link>
              <Link
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(whereIsYourSimpleToken);
                }}
              >
                &#x2014; Where is your Simple Token?
              </Link>
            </ul>
          </div>

          <div className="space-y-2 mt-4">
            <h3 className="text-lightOrange">Creating a Custom Token</h3>

            <ul className="grid gap-4">
              <Link
                to="#"
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(navigateToCreatingCustomToken);
                }}
              >
                &#x2014; Navigate to
              </Link>
              <Link
                to="#"
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(enterYourCustomTokenDetails);
                }}
              >
                &#x2014; Enter your Custom Token Details
              </Link>
              <Link
                to="#"
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(reviewYourCustomTokenCreation);
                }}
              >
                &#x2014; Review your Custom Token Details
              </Link>
              <Link
                to="#"
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(afterYourCustomTokenCreation);
                }}
              >
                &#x2014; After your Custom Token creation
              </Link>
              <Link
                to="#"
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(whereIsYourCustomToken);
                }}
              >
                &#x2014; Where is your Custom Token?
              </Link>
            </ul>
          </div>

          <div className="space-y-2 mt-4">
            <h3 className="text-lightOrange">Creating an NFT</h3>

            <ul className="grid gap-4">
              <Link
                to="#"
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(navigateToNFT);
                }}
              >
                &#x2014; Navigate to
              </Link>
              <Link
                to="#"
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(enterYourNFTDetails);
                }}
              >
                &#x2014; Enter your NFT Details
              </Link>
              <Link
                to="#"
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(reviewYourNFTDetails);
                }}
              >
                &#x2014; Review your NFT Details
              </Link>
              <Link
                to="#"
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(afterYourNFTCreation);
                }}
              >
                &#x2014; After your NFT creation
              </Link>
              <Link
                to="#"
                className="text-black dark:text-grey40 hover:text-grey100 dark:hover:text-grey60"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(whereIsMyNFT);
                }}
              >
                &#x2014; Where is my NFT?
              </Link>
            </ul>
          </div>
        </nav>

        <section className="text-black dark:text-grey20">
          <h1 className="text-lightOrange text-2xl">Welcome to Token Studio</h1>
          <p className="!mt-6">
            Token Studio is the ultimate MiniDapp for creating Simple Tokens,
            Custom Tokens and NFTs on the Minima blockchain! This guide will
            introduce you to the key features of Token Studio and how to use it.
          </p>

          <section className="mt-10 space-y-4">
            <div className="space-y-2">
              <h2 className="font-bold" ref={welcomeToTokenStudio}>
                What Can Token Studio do?
              </h2>
              <ul className="list-disc space-y-1 list-inside">
                <li>Create Simple tokens</li>
                <li>Custom tokens with custom attributes</li>
                <li>Create NFTs with custom attributes</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h1
                className="text-lightOrange text-2xl mt-10 mb-4"
                ref={enterYourSimpleTokenDetails}
              >
                Creating a Simple Token
              </h1>
              <ul className="list-none space-y-4 list-inside">
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>1.</span>
                  <div ref={navigateToCreatingSimple}>
                    <span className="font-bold">Navigate to</span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Choose 'Simple' from the 3 button navigation at the top
                        of the studio widget
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>2.</span>
                  <div ref={enterYourSimpleTokenDetails}>
                    <span className="font-bold">
                      {" "}
                      Enter your Simple Token details
                    </span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Choose and enter a name for your Simple Token in the
                        field provided
                      </li>
                      <li>
                        An option to enter a burn is provided if you wish your
                        Simple Token creation transaction to have priority to be
                        included in the next block when the Minima network is
                        busy
                      </li>
                      <li>
                        Optionally you can add decimal places required for your
                        token where the default is 8 and maximum is 16
                      </li>
                      <li>
                        Once you are happy with your Simple Token details,
                        click/press the Review button
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>3.</span>
                  <div ref={reviewYourSimpleTokenDetails}>
                    <span className="font-bold">
                      Review your Simple Token details
                    </span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        A review of all your Simple Token details will be shown
                        to you before your Simple Token is created
                      </li>
                      <li>
                        If you are happy with the review, click/press the
                        ‘Create’ button
                      </li>
                      <li>
                        If you wish to edit the details fo your Simple Token, a
                        back arrow can be found at the top of the page which
                        will take you back to the previous page where you can
                        edit the details of your Custom Token
                      </li>
                      <li>
                        Should you wish to stop the creation of this Simple
                        Token, or start the process again with a fresh page,
                        click/press the ‘Cancel’ button
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>4.</span>
                  <div ref={afterYourSimpleTokenCreation}>
                    <span className="font-bold">
                      After your Simple Token creation
                    </span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        If your node is in read mode, you will be asked to
                        navigate to the home screen of your Minima node and open
                        the ‘Pending’ MiniDapp and approve the transaction
                      </li>
                      <li>
                        If your node is in write mode, you Simple Token will be
                        created
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>5.</span>
                  <div ref={whereIsYourSimpleToken}>
                    <span className="font-bold">
                      Where is your Simple Token?
                    </span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Once your Simple Token has been created, it will appear
                        in your balance in your Minima node wallet ready to be
                        stored away safely or transferred to Soko, the Minima
                        NFT marketplace to be traded.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h1
                className="text-lightOrange text-2xl mt-10 mb-4"
                ref={enterYourCustomTokenDetails}
              >
                Creating a Custom Token
              </h1>
              <ul className="list-none space-y-4 list-inside">
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>1.</span>
                  <div ref={navigateToCreatingCustomToken}>
                    <span className="font-bold">Navigate to</span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Choose 'Custom' from the 3 button navigation at the top
                        of the studio widget
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>2.</span>
                  <div ref={enterYourCustomTokenDetails}>
                    <span className="font-bold">
                      {" "}
                      Enter your Custom Token details
                    </span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Firstly, you will need to choose how you would like to
                        generate the image for your Custom Token. There are 2
                        options to choose from, you can upload an image from
                        your device or you can enter a URL where the image is
                        hosted.
                      </li>
                      <li>
                        When uploading an image, the file formats excepted are
                        jpg, png and svg
                      </li>
                      <li>
                        Please note that images that are uploaded are compressed
                        to fit on-chain. Please choose an image that is best
                        suited to be viewed at a smaller size
                      </li>
                      <li>
                        Please note that if you choose to generate your image
                        using a URL, your Custom Token will lose it’s image if
                        the URL is taken down
                      </li>
                      <li>
                        Choose and enter a name for your Custom Token in the
                        field provided
                      </li>
                      <li>
                        Choose and enter a total supply you wish your Custom
                        Token to have in the field provided
                      </li>
                      <li>
                        Enter a description for your Custom Token. Please note
                        that this will be made public if you transfer your
                        Custom Token to Soko, the Minima NFT marketplace to be
                        traded
                      </li>
                      <li>
                        Enter a ticker for your Custom Token. A ticker is a
                        unique combination of letters and numbers that represent
                        your Custom Token in a trading scenario
                      </li>
                      <li>
                        Enter a web validation for your Custom Token. Web
                        validation is a URL to signify that the Custom Token is
                        legit.
                      </li>
                      <li>
                        An option to enter a burn is provided if you wish your
                        Custom Token creation transaction to have priority to be
                        included in the next block when the Minima network is
                        busy
                      </li>

                      <li>
                        Additional meta data can be added to your Custom Token
                        which helps distinguish and find your Custom Token
                        should key words be entered in to a search in Soko, the
                        Minima NFT marketplace
                      </li>

                      <li>
                        Once you are happy with your Custom Token details,
                        click/press the Review button
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>3.</span>
                  <div ref={reviewYourCustomTokenCreation}>
                    <span className="font-bold">
                      Review your Custom Token details
                    </span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        A review of all your Custom Token details will be shown
                        to you before your Custom Token is created
                      </li>
                      <li>
                        If you are happy with the review, click/press the
                        ‘Create’ button
                      </li>
                      <li>
                        If you wish to edit the details fo your Custom Token, a
                        back arrow can be found at the top of the page which
                        will take you back to the previous page where you can
                        edit the details of your Custom Token
                      </li>
                      <li>
                        Should you wish to stop the creation of this Custom
                        Token, or start the process again with a fresh page,
                        click/press the ‘Cancel’ button
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>4.</span>
                  <div ref={afterYourCustomTokenCreation}>
                    <span className="font-bold">
                      After your Custom Token creation
                    </span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        If your node is in read mode, you will be asked to
                        navigate to the home screen of your Minima node and open
                        the ‘Pending’ MiniDapp and approve the transaction
                      </li>
                      <li>
                        If your node is in write mode, you Custom Token will be
                        created
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>5.</span>
                  <div ref={whereIsYourCustomToken}>
                    <span className="font-bold">
                      Where is your Custom Token?
                    </span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Once your Custom Token has been created, it will appear
                        in your balance in your Minima node wallet ready to be
                        stored away safely or transferred to Soko, the Minima
                        NFT marketplace to be traded.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h1
                className="text-lightOrange text-2xl mt-10 mb-4"
                ref={enterYourNFTDetails}
              >
                Creating an NFT
              </h1>
              <ul className="list-none space-y-4 list-inside">
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>1.</span>
                  <div ref={navigateToNFT}>
                    <span className="font-bold">Navigate to</span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Choose 'Non-fungible' from the 3 button navigation at
                        the top of the studio widget
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>2.</span>
                  <div ref={enterYourNFTDetails}>
                    <span className="font-bold"> Enter your NFT details</span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        NFT’s on Minima can only use a URL to generate its image
                      </li>
                      <li>
                        Please note that if the URL is taken down, your NFT will
                        lose it’s image
                      </li>
                      <li>
                        Choose and enter a name for your NFT in the field
                        provided
                      </li>
                      <li>
                        Choose and enter a total supply you wish your NFT to
                        have in the field provided
                      </li>
                      <li>
                        Enter a description for your NFT. Please note that this
                        will be made public if you transfer your NFT to Soko,
                        the Minima NFT marketplace to be traded
                      </li>

                      <li>
                        Enter a ticker for your NFT. A ticker is a unique
                        combination of letters and numbers that represent your
                        NFT in a trading scenario
                      </li>

                      <li>
                        Enter a web validation for your NFT. Web validation is a
                        URL to signify that the NFT is legit.
                      </li>

                      <li>
                        An option to enter a burn is provided if you wish your
                        NFT creation transaction to have priority to be included
                        in the next block when the Minima network is busy
                      </li>

                      <li>
                        Additional meta data can be added to your NFT which
                        helps distinguish and find your NFT should key words be
                        entered in to a search in Soko, the Minima NFT
                        marketplace
                      </li>

                      <li>
                        Once you are happy with your NFT details, click/press
                        the Review button
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>3.</span>
                  <div ref={reviewYourNFTDetails}>
                    <span className="font-bold">Review your NFT details</span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        A review of all your NFT details will be shown to you
                        before your NFT is created
                      </li>
                      <li>
                        If you are happy with the review, click/press the
                        ‘Create’ button
                      </li>
                      <li>
                        If you wish to edit the details fo your NFT, a back
                        arrow can be found at the top of the page which will
                        take you back to the previous page where you can edit
                        the details of your NFT
                      </li>
                      <li>
                        Should you wish to stop the creation of this NFT, or
                        start the process again with a fresh page, click/press
                        the ‘Cancel’ button
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>4.</span>
                  <div ref={afterYourNFTCreation}>
                    <span className="font-bold">After your NFT creation</span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        If your node is in read mode, you will be asked to
                        navigate to the home screen of your Minima node and open
                        the ‘Pending’ MiniDapp and approve the transaction
                      </li>
                      <li>
                        If your node is in write mode, you NFT will be created
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span>5.</span>
                  <div ref={whereIsMyNFT}>
                    <span className="font-bold">Where is your NFT?</span>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Once your NFT has been created, it will appear in your
                        balance in your Minima node wallet ready to be stored
                        away safely or transferred to Soko, the Minima NFT
                        marketplace to be traded.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default HelpSection;
