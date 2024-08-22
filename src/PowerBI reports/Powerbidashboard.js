
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

import './Powerbidashboard.css';
export default function Powerbidashboard() {
    return (
      <PowerBIEmbed
	embedConfig = {{
		type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
		id: 'f3acd1c0-6d59-4ba8-9df9-cccebb9ef6f5',
		embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f3acd1c0-6d59-4ba8-9df9-cccebb9ef6f5&groupId=89a53315-f7ac-4882-bd34-072a887dd2bc&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
		accessToken: "H4sIAAAAAAAEAB2TNY7FBgBE77KtI5kpUgp_MzN2Zmb6dpS7Z5P-FTPzNH__WOkzzGnx8-fPWMQ-7uDb-M2_M_yoCxnxxsC_4yuWCnjBycqgpIdGAZ3obWiQRz1viQJq8QyaMicXrRO9PVp7G4ORN-t1XA_fD6DgEo0JG7p_9o0fGOWIVCaL7W9lKUsX8-VZCLjHNFfWJnI3HYOf4nkoL-xiFW_9VC2Yl3SbFal7La5Os1QI01cLATbFfJ1jKqvfCB1hVS9biykK94MlichplIhQZcTxUcHUMp-w1ZBy3MxYwJrlt0c5w7zgwwHldcTC-k1Cu1eJNE607KDkxsHkVXkSKONuA6HMHWTzHUYlh4Xp7I9-c0gLUsxodMX7gL_9s4TjIMBXh30t24JBRIos0TeMKMctv-c7fBqvrGaGxHsxk4rFLHYLsM3qiADMXZ93ws238Ejs7wp6tMilaeUm1Ar26qGctnmm4dXbqQIS4GrK2v6csOdVnOfn5I6UG06YNokljG33JPPYBrnUh94OkT-9YZmZhkR1pm3HU58VYuIr55kToYvHyS6cu3K1TAJr2dmHRneJeVhMKP39KlYytyrbn4wBOE1JXd7L5fkHVXwbE0E73Vr2kQpgtoQh4wCkq3ML3qUCp7k5cVFYoveVh6a8UaXqypDhGxSGp2WgRsvzA7X8xokgyrwlVzeLeo6IvgBThbtVO2vVeo9C_HgCgxKlU7PzXHFiuruO0jNB3d1kM_tLt9t9YDH8ZoFLHcujIHYzBKMafx2L-7HISVF5zzE7_GbFOj-El_xeDwYegoUVO-0lrQK5_E4KtOujFKuN3k6n28Ozmv_zxw-7Pcsxq-Xze4dAfnNZeCD400WAiGAkHekj45tB1t_VNptlx5DLXBv3tgn1hjR53UxxaLxvO1Qt748ZlLqjy7o8wRGc0uIlDvhNNEhutAqvCQSy7vkfkfUMu4Td_lXPvgBN_fIhaDhtYhopu6PfUDNbGXh5SwtQLb7WAtl6VLqGByt8ihCcmNe_x3tpZR62koV81zUUdgQkN-EwuA6sz09eEVE1V2aeWZKOGeVlf3pxwmDVcyxjcSG5_2y37MoPr9utXIgyTHJI2m_momPYcNKlQkCbQARkkqClanqcDhYmegdvr4fO6jc7FyjBCBf9jVcVX9_BdBP328s8y1BcpESgHmuVI5WIwYcIVP_1138zP0tTbnLwu7JNb_lDKe-YpmiU0Y85tu_G_E-5bT2lx7mVv9jCTrysMedtGjlq3TY-i6ma1XiBn1pp8UN0DleuGM6cfsn68XmmoQCfqk2IqPlZ2glBVD9vzU590mVXqRcgILyLKX4KaN_XRZnYHv51o38cra6Gj5MffC2PQ6HQJntHRGmJ9oN3w4AUxFqB3YAQZU4Da4bWlnYZOyaWWcjNd6PkagZ0Lp_VCOO3nh4gtbItI_WJnARE8Gd5M55ybigTcyF51aR-nFiilWk_plmJ3sEic8o-w3Z02B4lfs_LGVotRL7ZpSvyQGTBOCZ0UjSurROBtNPmFTzwuDMDK7rGCEhiH0wjW6KHqAbzsFbCCp4Z65e3eu2-MFkbc2J2m78p0qQg_pPxz7-gcVkeAgYAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzI0MzIyNzY5LCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",
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
  