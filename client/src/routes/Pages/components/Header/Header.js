import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Menu, X, Github } from 'preact-feather';
import { Link } from 'preact-router/match';

import Pill from '../../../../components/Pill/Pill';
import { useOnHistoryPush } from '../../../../hooks';

import './Header.scss';
import pkg from '../../../../../package.json';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useOnHistoryPush(() => setMenuOpen(false));

  return (
    <header class="page-header">
      <a class="brand" href="/">
        <svg width="116" height="45" viewBox="0 0 116 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9605 2.76095C23.4669 3.09213 23.6792 3.73258 23.4722 4.30457L18.6418 17.6498L28.2691 18.1004C28.7823 18.1245 29.2329 18.4527 29.4171 18.9367C29.6013 19.4207 29.4842 19.9689 29.1187 20.3333L5.95621 43.4333C5.51475 43.8736 4.82565 43.9356 4.314 43.581C3.80235 43.2264 3.61229 42.5552 3.86106 41.9814L11.3706 24.6603L2.55617 24.4415C2.03534 24.4286 1.57298 24.1018 1.38305 23.6123C1.19311 23.1227 1.31265 22.566 1.68634 22.1997L21.3551 2.92012C21.7879 2.49581 22.454 2.42977 22.9605 2.76095ZM5.69874 21.9074L13.36 22.0975C13.7909 22.1082 14.1882 22.3347 14.4197 22.7016C14.6512 23.0685 14.6864 23.5276 14.5137 23.9261L8.93702 36.789L25.199 20.5709L16.762 20.1759C16.3505 20.1567 15.9728 19.9409 15.7446 19.5949C15.5165 19.249 15.4652 18.8141 15.6065 18.4237L19.1004 8.77087L5.69874 21.9074Z" fill="#3BE8B0" />
          <path d="M25.3623 3.85665C25.3623 5.5873 23.9719 6.99027 22.2567 6.99027C20.5415 6.99027 19.1511 5.5873 19.1511 3.85665C19.1511 2.12599 20.5415 0.723022 22.2567 0.723022C23.9719 0.723022 25.3623 2.12599 25.3623 3.85665Z" fill="#3BE8B0" />
          <path d="M6.21117 22.3973C6.21117 24.1279 4.82076 25.5309 3.10559 25.5309C1.39042 25.5309 0 24.1279 0 22.3973C0 20.6666 1.39042 19.2636 3.10559 19.2636C4.82076 19.2636 6.21117 20.6666 6.21117 22.3973Z" fill="#3BE8B0" />
          <path d="M8.79916 41.7213C8.79916 43.4519 7.40875 44.8549 5.69358 44.8549C3.97841 44.8549 2.58799 43.4519 2.58799 41.7213C2.58799 39.9906 3.97841 38.5877 5.69358 38.5877C7.40875 38.5877 8.79916 39.9906 8.79916 41.7213Z" fill="#3BE8B0" />
          <path d="M30.7971 19.2636C30.7971 20.9943 29.4067 22.3973 27.6915 22.3973C25.9763 22.3973 24.5859 20.9943 24.5859 19.2636C24.5859 17.533 25.9763 16.13 27.6915 16.13C29.4067 16.13 30.7971 17.533 30.7971 19.2636Z" fill="#3BE8B0" />
          <path d="M42.9826 21.6421V23.5986H47.066C48.5734 23.5986 49.8895 23.3849 51.0144 22.9577C52.1393 22.5304 53.0223 21.9063 53.6635 21.0855C54.3047 20.2647 54.6253 19.2696 54.6253 18.1002C54.6253 17.0882 54.4454 16.2112 54.0854 15.469C53.7254 14.7269 53.208 14.1141 52.533 13.6306C51.8581 13.1471 51.0594 12.7817 50.137 12.5343C49.2146 12.2869 48.1909 12.1633 47.066 12.1633H39.9454V35.776H47.471C49.1358 35.776 50.6038 35.5343 51.8749 35.0508C53.1461 34.5673 54.1472 33.8195 54.8784 32.8076C55.6096 31.7956 55.9752 30.5137 55.9752 28.962C55.9752 27.8376 55.7502 26.8706 55.3003 26.061C54.8503 25.2515 54.2316 24.5881 53.4442 24.0708C52.6568 23.5536 51.7512 23.1713 50.7276 22.9239C49.7039 22.6765 48.6184 22.5529 47.471 22.5529H42.9826V24.7455H47.2347C47.9097 24.7455 48.5284 24.8242 49.0908 24.9816C49.6533 25.139 50.1482 25.3752 50.5757 25.69C51.0032 26.0048 51.3294 26.3984 51.5543 26.8706C51.7793 27.3429 51.8918 27.9051 51.8918 28.5573C51.8918 29.4343 51.6893 30.1652 51.2844 30.7499C50.8794 31.3346 50.3282 31.7731 49.6308 32.0654C48.9333 32.3578 48.1347 32.504 47.2347 32.504H43.9275V15.4353H46.796C47.8984 15.4353 48.7983 15.7052 49.4958 16.2449C50.1932 16.7846 50.5419 17.5492 50.5419 18.5387C50.5419 19.1909 50.3844 19.7474 50.0695 20.2085C49.7545 20.6695 49.3158 21.0237 48.7534 21.271C48.1909 21.5184 47.5384 21.6421 46.796 21.6421H42.9826ZM63.5345 9.46465H59.8899V35.776H63.5345V9.46465ZM70.4864 30.9523C70.4864 30.4575 70.5989 30.0415 70.8239 29.7042C71.0488 29.3668 71.4032 29.1026 71.8869 28.9114C72.3706 28.7203 72.9949 28.6247 73.7599 28.6247C74.6373 28.6247 75.4697 28.7372 76.2571 28.962C77.0446 29.1869 77.787 29.5467 78.4844 30.0415V28.1862C78.282 27.9388 77.9332 27.6633 77.4383 27.3598C76.9433 27.0562 76.319 26.7919 75.5653 26.567C74.8116 26.3422 73.9173 26.2297 72.8824 26.2297C71.6001 26.2297 70.5089 26.4321 69.609 26.8369C68.7091 27.2417 68.0172 27.8095 67.5335 28.5404C67.0498 29.2713 66.808 30.1427 66.808 31.1547C66.808 32.2116 67.0555 33.1111 67.5504 33.8533C68.0454 34.5954 68.7091 35.1576 69.5415 35.5399C70.3739 35.9222 71.2738 36.1133 72.2412 36.1133C73.1412 36.1133 74.0242 35.9503 74.8904 35.6242C75.7566 35.2981 76.4765 34.8034 77.0502 34.14C77.6239 33.4766 77.9107 32.6501 77.9107 31.6606L77.3708 29.6367C77.3708 30.4238 77.1908 31.0984 76.8308 31.6606C76.4709 32.2229 75.9871 32.6501 75.3797 32.9425C74.7723 33.2348 74.1086 33.381 73.3886 33.381C72.8262 33.381 72.3256 33.2854 71.8869 33.0943C71.4482 32.9031 71.1051 32.6276 70.8576 32.2678C70.6101 31.908 70.4864 31.4695 70.4864 30.9523ZM67.8541 21.7433L69.339 24.307C69.564 24.1495 69.9071 23.9584 70.3683 23.7335C70.8295 23.5086 71.3751 23.3062 72.005 23.1263C72.635 22.9464 73.3212 22.8565 74.0636 22.8565C74.536 22.8565 74.9747 22.9014 75.3797 22.9914C75.7847 23.0813 76.139 23.2275 76.4427 23.4299C76.7465 23.6323 76.9771 23.8965 77.1346 24.2226C77.292 24.5487 77.3708 24.9479 77.3708 25.4201V35.776H80.948V24.7117C80.948 23.6773 80.6667 22.8059 80.1043 22.0975C79.5418 21.3891 78.7713 20.8438 77.7926 20.4615C76.8139 20.0792 75.6834 19.888 74.401 19.888C72.9612 19.888 71.69 20.0904 70.5876 20.4952C69.4852 20.9 68.5741 21.316 67.8541 21.7433ZM84.5589 23.6323H92.3882L83.3777 35.776H97.8889V32.4028H89.8571L98.7326 20.2591H84.5589V23.6323ZM107.777 36.1133C109.577 36.1133 111.123 35.7592 112.417 35.0508C113.711 34.3424 114.762 33.2911 115.572 31.8968L112.4 30.6487C111.905 31.4807 111.286 32.0992 110.544 32.504C109.802 32.9088 108.935 33.1111 107.946 33.1111C107.001 33.1111 106.202 32.9031 105.549 32.4871C104.897 32.0711 104.402 31.4751 104.065 30.6993C103.727 29.9234 103.558 28.9845 103.558 27.8826C103.558 27.028 103.66 26.2803 103.862 25.6394C104.065 24.9985 104.351 24.4588 104.723 24.0202C105.094 23.5817 105.544 23.25 106.073 23.0251C106.601 22.8002 107.214 22.6878 107.912 22.6878C108.677 22.6878 109.346 22.8565 109.92 23.1938C110.493 23.5311 110.943 24.0034 111.27 24.6106C111.596 25.2177 111.759 25.9374 111.759 26.7694C111.759 26.9269 111.72 27.118 111.641 27.3429C111.562 27.5678 111.478 27.7477 111.388 27.8826L112.535 26.3309H102.006V28.8609H115.674C115.674 28.7709 115.679 28.6303 115.69 28.4392C115.702 28.248 115.707 28.0513 115.707 27.8489C115.707 26.1847 115.398 24.7624 114.779 23.5817C114.161 22.4011 113.278 21.4959 112.13 20.8662C110.983 20.2366 109.588 19.9217 107.946 19.9217C106.708 19.9217 105.594 20.1129 104.605 20.4952C103.615 20.8775 102.765 21.4228 102.057 22.1312C101.348 22.8396 100.802 23.6942 100.42 24.6949C100.037 25.6956 99.8463 26.8032 99.8463 28.0175C99.8463 29.6367 100.172 31.0535 100.825 32.2678C101.477 33.4822 102.4 34.4267 103.592 35.1014C104.785 35.776 106.179 36.1133 107.777 36.1133Z" fill="#3BE8B0" />
        </svg>
        <Pill>v{pkg.version}</Pill>
      </a>
      
      <button class="thin icon mobile-menu" onClick={toggleMenu} aria-label="Toggle Menu">
         {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      <nav style={{ display: isMenuOpen ? 'flex' : 'none' }}>
        <Link activeClassName="active" href="/how-it-works">How it works</Link>
        <a href="https://github.com/blenderskool/blaze">
          GitHub&nbsp;
          <Github size={16} style="margin-bottom: 4px" />
        </a>
        <a href="https://www.buymeacoffee.com/akashhamirwasia">Donate</a>
        <a
          class="ph-desktop"
          href="https://www.producthunt.com/posts/blaze-2?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-blaze-2"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=174403&theme=dark&period=daily"
            alt="Blaze - Fast peer to peer file sharing web app ⚡ | Product Hunt Embed"
            style="width: 250px; height: 54px;"
            width="250px"
            height="54px"
          />
        </a>
      </nav>
    </header>
  );
}

export default Header;