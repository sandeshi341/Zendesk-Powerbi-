
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
		accessToken: "H4sIAAAAAAAEAB2Tx66rVgAA_-VuiYQxPdJbgAHTiwFTdpRDOfReovx73st-VjOaf37s5GqHJP_5-8fq6vdrMJ4zjQ0WUM-eyGQAjuSFlQq1Af_gOjJI9DvveS901qJqz_sZ07fMgDwPlKGEr5qNHIwOs2tJQVoOC5YAsYkIMo9mET2VzqWu9gLQ-WJWwS0tivGd29nP75IZWJmrMXbLc4O1rGWL7LtBr1zhEFQ1WSLhpN4-KfUk3-DYZDzn67WsP46-w0NVPxGaLOXVqsK6r8Edl2_2li5bNhjEu4x04bFhsYHGz8BvvCZWZS9OhfWCj7Jk1jj7hhDprxz9EKKN420GJ-qY1LiS9UT7KmPfzqMT6Q46YT796NGAVNhwiZs6jam0aA-fKV1RH00m9KxZJN7BfDkxyYWk6OO20N0cZbF0bLEZmbaHbYXmu9BbtyD7TZcLVRBt31Hhl7wt3W-6OuO240hwuDBx73v3oDl736yGgc2d4clhhmdP94lI3Umt_acrdeUqDort60A8rbVU5XOTGYzlLjTM48Wg_THN2K79sMIXW_wmfumveE_G0jqN6islEU3aerFR-KYWFIl-Z_Gx630ovKH0WcDuddkwqfrUM8O6BinZfZxjodChJ_KoTym4Vo9dSpOegjZPeNtq6vOibOYax7OVwQUDD70_iQETAoqN4WpJ2lpYOMsiGJ3LcuWxL5XCW3Mh3QnHbVFqqrbjWQOWu2iutjFG1dqUtWyvzRfzTDls18ZF0SeK3wWAuIW2ciD42doYCCxiKZWbcn2mFtKzMtfRUZVDKD4jsjZQ0YqD6LAHUtqvyq-swKUruluTAmmM5mPZqcOaP3_9vOZrXAcNXL93oIgwI-cXRrmr5-NLGy4SiZZaaWeDkwWEwIgPmJNmCFmpVDyTvjY7vafJP9RRxybRMKxnknKPxspWgfycdoK0DL0nNPKCr0Ll1cQhFExV0uyFKIIvE6Ol4OS2LkXgM285DY035Mez0M-gv6LkQcjhuBXC3RSy26pZS10HWss4izlkXL-VUlsTCft4omZ9XK4436zKsS6uJK_S7db0bRDHNN4RsX--vb3JPj3i5BO5Kr2exL3tk2JfHjJEmhAIlv4-iHCUYkfSfbjP0LjQ9smc2EFVY5ZtnZjGhPaUrknhiHaU0NjBSH9TXl3-gCiDSS0Attnlscpf3BGQ7ovjXcmVmbjFnV-__mi-xgrMyve3ZTeTWB5pczvRwnBPCIDzj8_xP-XWZZ-s2wx-Y3aAziSDj765WITrKpXZ0FvHR0lPjlhKo49HVl8VZN1Slh1BhJLR5_QFyIc5uh4pOLooHoh2b1VzChLj9EXl5WNwQPyOhjd2HE1gUy9PcxnZWdbb1gdQR7o2zxNwpDAxOoCnRdm7kacUZl1V-iiltgFC0wX11FOlcjIuJmH1TMmTFwfQGsD0oqpZSYJGvIkzFulNIk138IVWmAdfAyWlJTYrZPqgGDQyPh8-so8e2jZs1vFaNE2y-73UCwUfneeanWquGVU6_n0RKk8gJ7wGB42s8psslZbh-yBPyQeM-oQGZibeca0RPjQF4btXCkh0-Fjfisum7uafXi0EQPha9Pgnxr__AXF0gU4CBgAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzI0MzI5ODE1LCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",
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
  