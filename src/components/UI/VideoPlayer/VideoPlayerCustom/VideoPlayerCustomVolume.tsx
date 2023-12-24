import React from 'react'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '../../../../hooks/useTypedSelector'

import { toggleVideoPlayerVolume, setVideoPlayerVolume } from '../../../../redux/actions/videoPlayer'

const VideoPlayerCustomVolume: React.FC = React.memo(() => {
	const dispatch = useDispatch()

	const { volume } = useTypedSelector(({ videoPlayer }) => videoPlayer)

	const toggleVolume = () => {
		dispatch(toggleVideoPlayerVolume(volume) as any)
	}

	const setVolume = (volume: number) => {
		localStorage.setItem("video-player-volume", String(volume))

		dispatch(setVideoPlayerVolume(volume))
	}

	return (
		<div className="video-player-content-controls-btns-block-volume">
			<button className={`video-player-content-controls-btns-block__btn video-player-content-controls-btns-block-volume__btn`} onClick={toggleVolume}>
				{volume ? (
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_6659_301)">
							<path d="M8.79811 1.86695C7.68171 2.89795 6.31394 4.15186 5.76683 4.6604L5.04849 5.32231C4.86384 5.49245 4.62194 5.5869 4.37086 5.5869H2.38066H1C0.447716 5.5869 0 6.03462 0 6.5869V10.0104V13.434C0 13.9863 0.447715 14.434 1 14.434H2.38806H4.37965C4.6299 14.434 4.87105 14.5278 5.05549 14.6969L7.8 17.2135L9.16455 18.4679C9.80407 19.0557 10.8375 18.6047 10.8413 17.7361L10.8535 14.9843C10.8609 12.2187 10.8609 7.72553 10.8535 4.98084L10.8414 2.26216C10.8375 1.39377 9.80465 0.942695 9.16502 1.53004L8.79811 1.86695Z" fill="white" />

							{volume > 30 ? (
								<path d="M12.894 5.96308C12.7018 6.1442 12.6427 6.25566 12.6427 6.45768C12.6427 6.75026 12.7018 6.86868 13.0641 7.31452C14.3727 8.93068 14.3358 11.1459 12.9828 12.7969C12.7388 13.0895 12.6427 13.2706 12.6427 13.4309C12.6427 13.7792 12.761 14.0021 13.0271 14.1553C13.5077 14.434 13.9291 14.3016 14.3949 13.7234C15.3634 12.5392 15.8144 11.1459 15.7257 9.64124C15.6592 8.48484 15.2525 7.41205 14.528 6.45071C14.077 5.86555 13.8848 5.72622 13.4781 5.72622C13.1972 5.72622 13.1085 5.76106 12.894 5.96308Z" fill="white" />
							) : null}

							{volume > 60 ? (
								<path d="M16.4872 3.30896C16.3393 3.35772 16.1619 3.49704 16.0584 3.63637C15.7996 3.99861 15.8662 4.29816 16.3393 4.85545C18.3429 7.22397 18.8383 10.2612 17.6701 13.0199C17.3966 13.6747 16.7682 14.6778 16.3098 15.2003C15.9327 15.6252 15.8292 15.9317 15.9697 16.2522C16.1101 16.5587 16.3837 16.7328 16.7386 16.7328C17.1748 16.7259 17.3227 16.6214 17.8919 15.9178C18.8309 14.7405 19.4963 13.3612 19.8216 11.9262C20.0582 10.8882 20.0582 9.13968 19.829 8.11564C19.4667 6.52038 18.7718 5.12714 17.6923 3.83839C17.2487 3.30199 16.9382 3.16963 16.4872 3.30896Z" fill="white" />
							) : null}
						</g>
						<defs>
							<clipPath id="clip0_6659_301">
								<rect width="20" height="20" fill="white" />
							</clipPath>
						</defs>
					</svg>
				) : (
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_6659_304)">
							<path d="M0.504164 0.0957375C0.255535 0.199333 0 0.565371 0 0.807093C0 0.896875 0.0414381 1.04881 0.096689 1.15241C0.276254 1.48391 18.7991 19.9377 19.0063 19.986C19.2273 20.0413 19.621 19.9239 19.7729 19.7581C19.9456 19.5717 20.0353 19.254 19.987 19.0261C19.9594 18.8672 19.5657 18.4321 18.5298 17.3893L17.4073 16.2613C17.2379 16.0911 17.2161 15.8235 17.3557 15.6281C17.998 14.7234 18.5574 13.501 18.8751 12.2993C19.0754 11.5189 19.0892 11.436 19.0892 10.0409C19.0961 8.68724 19.0823 8.54221 18.9096 7.86539C18.585 6.5739 18.1154 5.53104 17.3971 4.48127C16.8722 3.70776 16.5545 3.39007 16.2576 3.33482C15.5462 3.2036 15.0559 4.01164 15.491 4.60559C15.5738 4.723 15.8087 5.0476 16.0089 5.32385C17.9496 7.97589 18.0394 11.5465 16.2438 14.3712C16.0987 14.5922 15.9744 14.7717 15.9537 14.7717C15.933 14.7717 15.5531 14.4057 15.1042 13.9568L14.5406 13.3932C14.3918 13.2444 14.3597 13.015 14.4619 12.8311C14.7382 12.3407 15.042 11.3324 15.1249 10.6486C15.3045 9.19141 14.8625 7.61676 13.9301 6.38052C13.6539 6.00758 13.5088 5.87636 13.2878 5.80039C13.0323 5.7106 12.984 5.71751 12.7353 5.83492C12.4107 5.99377 12.1897 6.38052 12.2588 6.6775C12.2795 6.788 12.4453 7.07806 12.6248 7.32669C13.2395 8.16927 13.5365 9.03947 13.5365 10.0064C13.5365 10.6072 13.4191 11.2081 13.2119 11.6846C13.1552 11.8112 12.9893 11.8418 12.8912 11.7437L11.8651 10.7177L10.7822 9.63483C10.6885 9.54106 10.6358 9.41388 10.6358 9.28127V4.81278C10.6358 3.39079 10.6358 2.10138 10.6358 1.23146C10.6358 0.796408 10.1209 0.572124 9.80404 0.870197C9.36384 1.28425 8.79095 1.82917 8.19094 2.41627L6.19625 4.35229C6.00019 4.54259 5.68767 4.54026 5.49446 4.34705L3.56368 2.41627C2.30672 1.15932 1.18789 0.102646 1.0843 0.0612068C0.835669 -0.0285759 0.773512 -0.0216713 0.504164 0.0957375Z" fill="white" />
							<path d="M0.483459 10.0064V13.4264C0.483459 13.9787 0.931175 14.4264 1.48346 14.4264H2.71421L4.53188 14.4321C4.79233 14.4329 5.0422 14.5353 5.22831 14.7175L6.90637 16.3602C7.99067 17.4238 9.26834 18.6738 9.7587 19.1297C10.0891 19.4445 10.6358 19.2103 10.6358 18.7539V16.8782V14.2058C10.6358 13.9402 10.5302 13.6856 10.3423 13.4981L6.52652 9.68867L2.71704 5.87919C2.5295 5.69165 2.27515 5.5863 2.00993 5.5863H1.45035C0.916351 5.5863 0.483459 6.01919 0.483459 6.55319V10.0064Z" fill="white" />
						</g>
						<defs>
							<clipPath id="clip0_6659_304">
								<rect width="20" height="20" fill="white" />
							</clipPath>
						</defs>
					</svg>
				)}
			</button>

			<div className="video-player-content-controls-btns-block-volume-bar" >
				<input type="range" className='video-player-content-controls-btns-block-volume-bar__input' value={volume} min={0} max={100} onChange={(e: any) => setVolume(e.target.value)} step={1} />
			</div>
		</div>
	)
})

export default VideoPlayerCustomVolume