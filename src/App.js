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
		accessToken: 'H4sIAAAAAAAEAB3Tx86jVgBA4Xf5t0SimBppFlTTezM72gUbTLv0KO-emezP6pPOPz9ufvVjXv38_eP4Ypapw-0DRxlFmc2a3r7DmFYIKJQ00ZJLtySlFgkDUVpjqIUo3dt6LJOEYp1UYhCs4DxSWkdPM_QlLIrDTdj9rc5Wwd3ujyyn_mjKQvcKIuneZ3mJ491j9CCoX5cayISIRes1SeNcjmephIaQJLgWmo0ZjVfs4E9u6jf5ugBLSXIOP8IjnGporHpY4qGV2sXjiYf95pPX80BmhVcR7l1no_B6j4OW-uyBOimRxBJcc5i2Jt6x_mHtQKpUVa96O_mUrhpvqjtYbyN3-83d-4PlN43EE8JlCX9QHQ45XV-74DjOffkMw0cMcQ02YuK_smlAtvqjz4E6cfYl9iHteFMnPrTK1hfxI1PJJdNDMl9FMho5aeVa8kXwdZ_iDTpiJVjJNlyyk1eHAVG3bhdQSN8ntq5PjOedGPX9qi2XtS5zxSge63N106tTdDoA6UGWNghfzQtCc-PFVKjWyBsdtp1L-50M41XleHDTGzOYqCqqKM6jRA_jafc9f4ZejvcI98Xj5Y0Mrky7rYpg7tAzKefYb0PYkskUCcxU_cPhIrs8tUgexWFXuZl9vuuJraS8190KWwHWmQtNbx025I1Ka4dxg05oUSLsvzq4LasSD6rGkXZEsbF8qW-QcKYk5YUxrCvwX1KhHzfShZTHERqv5xVwkBsHU8BcuLIGuQCJXcgWVdjKzgryLH5SnnM2IyQGOoAmn2tmpr_JI5fOImM1awNkc8DKJLw4q6wKEh8LL_QhW0bXStCy4g5wy0zah69QQD33568fcbmmdTTq6_cOH5lfwsfa3SLnmqbC9vVAgODpP8ypwQYpqLvnSTSjzvW-kOdGMwEvZL8ZpUBE8zbI1NeMVpI0wJPLt6kXPrJlagqtLpvyIJngrrcazwb8zGcReDxiMOloo18_RUpO7b3hZALeClfx84pmErkfHU6PHuxe0BILUOcf3jN98vTebOCuqIpnqWP49WeWHIPQBb2DJb6ZykurFdVGDd5xAQSbF-z7ln-NQPHwT7B6od_P9ryTBw40iVNEk4xKvT8bGlfSUPN84GMBuejt2VXlHNOTA72yrimMfbP4WNVNPmFtPb8O7wzWoi_KjFVcy2qLPVOjJwu_GnV8WHRmesxNbkIkrpj_9esP8zW19aLFv5WPg7QCm7ZVzw7V6kSM-VFLx_9V8G6GfN2W-nemT3U9R5chyUpGGU13dHtRl5M8i1PIxEypzlTHjSCwPfAdaVMEm-snjm1_pHXnOpKhUPw8nTazb_7lkZozpfa2hkXDrB3kS4K5vL7lvqmvfxc6sBgqYu44Jo3RkvkVQ1C3kVfwroIilvF75NSpI9uUOqP9ynIj61a7ysdGCNX8StsLjBBR7Jq4iCxocUA1szHLH6jgT7F-Uq6vJ7ccHW8qRxv1KZ9XGR1oFDpo7mLwAZ6VH4FkzhepUL7zuGxNjGeirn_LpYIFO03jy3yVVLBaJusWfBAE6ELIb-lbcRLG4wAUpKa5ASWbzHWCi3fQa9GSCp13QnhvIfe1ObYhA6lvkT_M__4HT6GaXAIGAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzI0MTQ4NDY3LCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=',
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
