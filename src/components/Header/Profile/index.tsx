import {useCallback, useContext, useEffect, useRef, useState} from "react";
import { appContext } from "../../../AppContext";
import { useNavigate } from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";

const Profile = () => {
    const menuRef = useRef<HTMLDivElement>(null);


  const { account, setIsMenuOpen, isMobile } = useContext(appContext);
  const navigate = useNavigate();

  const [quickActions, setQuickActionsMenu] = useState(false);


    const onClose = useCallback(()=> {
        setQuickActionsMenu(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);


  const handleAction = (to: string) => {
      navigate(to);
      onClose();
  }

  const getProfileImage = () => {
    if (!account) return null;

    const defaultImage = "./assets/default_profile.gif";

    if (!account.profile || account.profile === "0x00") {
      return (
          <div className="w-12 h-12 bg-mediumDarkContrast rounded-full flex items-center justify-center overflow-hidden">
            <img
                src={defaultImage}
                alt="default-profile"
                className="w-full h-full object-cover transform scale-[1.60] transition-transform duration-300 hover:scale-150"
            />
          </div>
      );
    } else {
      let imageUrl;
      try {
        imageUrl = decodeURIComponent(account.profile);
      } catch (error) {
        console.error("Error decoding profile URL:", error);
        imageUrl = defaultImage;
      }

      return (
          <img
              src={imageUrl}
              alt={`${account.name}'s profile`}
              className="w-12 h-12 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.src = defaultImage;
                e.currentTarget.className = "w-12 h-12 rounded-full object-cover transform scale-[1.60] transition-transform duration-300 hover:scale-150";
              }}
          />
      );
    }
  };
  return (
    <div>
      {account && (
        <div
          onClick={() => {
              if (isMobile) {
                  setIsMenuOpen(false);
                  navigate("/wallet")
              }

              // Open quick action drop down on desktop..
              if (!quickActions) {
                  setQuickActionsMenu(true);
              }
          }}
          ref={menuRef}
          className="flex items-center space-x-4 rounded-full px-4 pr-0 py-2 cursor-pointer transition-colors duration-200 relative"
        >
            <AnimatePresence>
                {quickActions &&
                    <motion.div
                         initial={{height: 0, opacity: 0}}
                         animate={{height: "auto", opacity: 1}}
                         exit={{height: 0, opacity: 0}}
                         transition={{duration: 0.3, ease: "easeInOut"}}
                         className="absolute right-0 top-full z-[9998] bg-[#17191C] flex flex-col gap-1 w-[264px]"
                    >
                    <button onClick={() => handleAction('/wallet')} type="button" className="py-3 bg-lightDarkContrast w-full text-left whitespace-nowrap font-semibold">
                        My wallet
                    </button>
                    <button onClick={() => handleAction("/wallet/deposit")} type="button" className="py-3 bg-lightDarkContrast w-full text-left whitespace-nowrap font-semibold">
                        Deposit
                    </button>
                    <button onClick={() => handleAction("/wallet/withdraw")} type="button" className="py-3 bg-lightDarkContrast w-full text-left whitespace-nowrap font-semibold">
                        Withdraw
                    </button>
                    <button onClick={() => handleAction("/blocked_users")} type="button" className="py-3 bg-lightDarkContrast w-full text-left whitespace-nowrap font-semibold">
                        Manage blocked users
                    </button>
                        <button onClick={() => handleAction("/hidden_listings")} type="button" className="py-3 bg-lightDarkContrast w-full text-left whitespace-nowrap font-semibold">
                        Manage hidden listings
                    </button>

                </motion.div>}
            </AnimatePresence>

            <div className="flex items-center gap-4 flex-row-reverse md:flex-row">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">
                  {account.name}
                </span>
              </div>
              {getProfileImage()}
            </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
