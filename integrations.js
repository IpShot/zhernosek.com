// If client side
if (typeof window !== 'undefined') {
  // Google analytics
  if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
  }
}
