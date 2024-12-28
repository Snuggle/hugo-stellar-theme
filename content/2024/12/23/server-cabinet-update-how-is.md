---
layout: post
title: "📌 Server Cabinet Update: How is it Going?"
microblog: false
guid: http://snuggle.micro.blog/2024/12/23/server-cabinet-update-how-is/
post_id: 4549044
date: 2024-12-23T19:28:12-0000
lastmod: 2024-12-24T11:23:59-0000
type: post
categories:
- "Blogs"
images:
- https://posts.snugg.ie/uploads/2024/7f4818f79a.jpg
- https://posts.snugg.ie/uploads/2024/4f955244b2.jpg
photos:
- https://posts.snugg.ie/uploads/2024/7f4818f79a.jpg
- https://posts.snugg.ie/uploads/2024/4f955244b2.jpg
photos_with_metadata:
- url: https://posts.snugg.ie/uploads/2024/7f4818f79a.jpg
  width: 450
  height: 600
  sizes:
    medium: https://posts.snugg.ie/uploads/2024/7f4818f79a-m.jpg
    small: https://posts.snugg.ie/uploads/2024/7f4818f79a-s.jpg
- url: https://posts.snugg.ie/uploads/2024/4f955244b2.jpg
  width: 450
  height: 600
  sizes:
    medium: https://posts.snugg.ie/uploads/2024/4f955244b2-m.jpg
    small: https://posts.snugg.ie/uploads/2024/4f955244b2-s.jpg
url: /2024/12/23/server-cabinet-update-how-is/
mastodon:
  id: 113703787303531562
  username: Snuggle
  hostname: tech.lgbt
bluesky:
  id: bafyreigvyaghl3wcknkbkq7rfxuwbsa67jezoxdumz5ul5pkl5a4vn33se
  url: 'at://did:plc:c3kzsky6pdao56ftmai5szq2/app.bsky.feed.post/3ldyo26retf26'
  link: 'https://bsky.app/profile/did:plc:c3kzsky6pdao56ftmai5szq2/post/3ldyo26retf26'
  handle: snugg.ie
  hostname: bsky.social
  did: 'did:plc:c3kzsky6pdao56ftmai5szq2'
threads:
  id: 18026011493294926
  url: https://www.threads.net/@snugg.ie/post/DD7r_y3KUjz
  username: snugg.ie
---
It has been a long time since I've given an update on how [the server cabinet is going](https://posts.snugg.ie/posts/server-cabinet). Well, snugg.ie has had a bit of an upgrade!

<img src="uploads/2024/7f4818f79a.jpg" width="450" height="600" alt="">

<!--more-->


As you might've noticed, we're in a totally new cabinet now! The [older wooden cabinet](https://posts.snugg.ie/posts/server-cabinet)  outlived its lifespan after a few house moves. It was also never originally designed to be disassembled, which was its biggest hindrance.

The setup has now moved into a whole new 24U enclosure (Lehmann) made of metal. It's disassemble-able and has sound-dampening foam, which gets everywhere 🌨️!

## We've expanded!
- totally new network setup! New VLANs, FTTx XGS-PON full-fibre wired directly into router using a WAS-110 ONT/ONU 'on a stick' SFP+ module
- a lot more smart-home gear running through a Home Assistant ZBT-1, including [Everything presence sensors](https://shop.everythingsmart.io/products/everything-presence-lite), smart light bulbs (Philips Hue & Twinkly), and more!
- using Docker containers for pretty much all of my services with docker-compose
- switched from Plex to Jellyfin

<img src="uploads/2024/4f955244b2.jpg" width="450" height="600" alt="">

## What's inside?

**Top to bottom:** 
* Unifi Dream Machine Pro*
* Cisco Meraki MS225-48FP*
* Silver patch panel*
* Blanking plate*
* Cisco Meraki MX100* (currently unused)
* Homebrew Opnsense router* (currently unused)
* 10 blanking plates*
* cuddle server* (4c/4t Intel Xeon E3-1225v2 & 14 GiB DDR3)
* [hug server](https://posts.snugg.ie/posts/hug-server) (16c/32t 2x Intel E5-2630v3 & 64 GiB DDR4)
* Eaton 5PX 1500 UPS

*new!


## How much power does it all draw?

On average the whole cabinet draws 340 watts, about 8.38 kWh total a day, which using current UK energy prices is around £2/day. It's an expensive hobby to keep, so bear in mind if you're looking to getting into self-hosting things yourself!
