import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './App.css';


function App() {
  return (
    
    
    <PowerBIEmbed
	embedConfig = {{
		type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
		id: 'f3acd1c0-6d59-4ba8-9df9-cccebb9ef6f5',
		embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f3acd1c0-6d59-4ba8-9df9-cccebb9ef6f5&groupId=89a53315-f7ac-4882-bd34-072a887dd2bc&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
		accessToken: "H4sIAAAAAAAEAB2Tx66DVgBE_-VtiQSm2pGyoBjTLr3v6L0aLiXKv-cl-7MYnZn5-8dMrn5K8p8_f2htLWvRxQxvozUF2OchCCobZv4gxZ7bNMUbK--hkZeknTPdgko20Dphsv1seow9KsiLFL4yWjXX852PI1hHD9fDD3wiOhLfE_jqtnx0F0Eudry_JN984LeRl_zF7hHCHB2IsyOb9JFJ0L7UCKcVar6QFZpknyj0-uhdjxZQQ6IH5C67-zaOMqlx5hhlho8wN66ofqmhkkWRvJzFbBNbcHFTI5-NXwjgGvTIedlcw11mA1BnfVqwLtrBxGkVxWxSOTnCgGUdtfjdJ3rkvKogsCbOtx6uwu_9kUVtu_p5bjdNCw3FSLQkK21KOpya70lfmb6369EhAzjRxtPq1Ho1cJwumRPhyVaQx_LYHITEZdcSXqbD7FvXpwXg4Wg8rtgXwyJcthycy1f8GiD_Fq_u8vPijJp7PTDMz7HwmwG4G_sCtIJHbra7O0Z0auya0icrbkHjhyKijtKe1JI8mOa5xctwMp-oCQT9m6ST1yvC046kE0Tg7Ct_ZLRnbcTQO8BiKc5Sz3IqfIKbP2r-4TDkLWIPr43KHWUxNsW_L7LcRZgNT5cLbL8SEmmvzEuBSfRxo2GIxStym8XZvAOz1W48Xn4eXxL_Ni77magoZLgMGmJLmF5X2ZhLUxYZZgRTPW3mKEjM9dBFvJA80-BnwRWNUJdn9Lnwx8edfcNlU7JUIfI8pqHtaC5quLQgwZB0fHNrxVkKHXSRi2431VZ6uRRe7UnI4uzu9wYnG1ZSZ4cxYq-rJnxIktL5NBVKMadv9ChMmfr544dfr3mb1OL6vYOoTtvJK9GXeMz4R9uBUEuDau0B9Gfn0ZNS008cUhmA71DGXy5mkBySIZjD01C_nM9JONgptygDHk6ZrLev5QXAeB3hwAEvD7tDbw9J2zBmnHYYLS7xBAR2A1sUUwcYKp249vJ2P2kUvaiC3STzKUyXT3Xye-exqhMt25KQB_TfAwfCfO_vWyhoZCSDD8u8epUEt8Gj_i3chOHqpnP1JUCx54NCHpErwOvA3DvDc-M3g5VgGveotJT2U4BUq-EXQdUuehR1uvhQbj6_fZSksxSJhW5x5zCZPCxqG0APt_pJRO7DBdfv3l-SFZjM1FyxDBaZRHPqrcmR8OwPSA7DC7uP46-__tN8zXWxyv6v5Y14JAQFPRqqjH4iWrtemcz-TzlNNSbbvha_GDcke5TIFEeh2LTqJyxjIZedqmMQ_81dVKCrrNxixUsJE-rYPSveK4k7XyFinuWWWtsrP67OR4lBgabkFR_5i84tC_GONEFrGogpaNOSVRKBuWlOb74PGESOjDeeYMMG7lNSK7QaTmNvhHQg_eaVF4PV1jozBAK9KUQwC0y9fd6mPcqppIdeyDpGjafdmTrOVs051NVRGWybeCmI3ELrZcqry8_54LeczWwFjg2J8X7bOCQiXi7RJy5w-9wOY2kQLlUvs3hsi3W-MgYHe6bOjIyOVZYtYtPNIeUDYllnussCQnTW-7HTBwS75LK4WSnJygl2iyeujbYkbrDWN3lEWkv-V8Y__wKpa8c1AgYAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzI0MTU2MTQwLCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",
		tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
		settings: {
			panes: {
				filters: {
					expanded: false,
					visible: false
				}
			},
			
		}
	}}

	eventHandlers = {
		new Map([
			['loaded', function () {console.log('Report loaded');}],
			['rendered', function () {console.log('Report rendered');}],
			['error', function (event) {console.log(event.detail);}],
			['visualClicked', () => console.log('visual clicked')],
			['pageChanged', (event) => console.log(event)],
		])
	}

	cssClassName = { "Embed-container" }

	getEmbeddedComponent = { (embeddedReport) => {
		window.report = embeddedReport;
	}}
/>
      
    
  );
}

export default App;
