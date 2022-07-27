# Site Changes

I changed the map to UCSD which is relevant to our location.

Firstly, the map shows the location which is different from Sandieo location.

I changed the contact's content order. I moved the position of map to the right side of the website by using flex.
I also moved to the phone, email, location part to the left side by using flex.
I used the padding, so I modified the space between title phone and phone number, title email and email contents etc..
I styled the contact form.

# 3rd Party Script

Answer: I used Google Analytics for tracking for 3rd party Javascript.
I added

```
<!-- Global site tag (gtag.js) - Google Analytics -->
<script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-KE8DS5WDVP"
    ></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
    dataLayer.push(arguments);
    }
    gtag("js", new Date());

        gtag("config", "G-KE8DS5WDVP");
</script>
```

in all html files related to my website. So I can track the user by using Google Analytics.

The reason why I chose this is to analyze the visitors. Google Analytics offers data visualization
and where you rank in search engines.

In adition, if I know how many visitors came and what and where they clicked like keyword, I can improve my website and set up the future goal about prospective other clients. I can upgrade user experience and design of my website.

Therefore, from this third party javascript, I can get feedback from visitors.
