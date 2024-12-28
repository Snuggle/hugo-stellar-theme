---
layout: post
title: "Let's look into Hug, the server running all the things..."
microblog: false
guid: http://snuggle.micro.blog/2020/12/23/lets-look-into.html
post_id: 4546939
date: 2020-12-23T21:53:00-0000
lastmod: 2024-12-22T23:03:38-0000
type: post
categories:
- "Blogs"
images:
- https://posts.snugg.ie/uploads/2024/hug-server.png
- https://snuggle.micro.blog/uploads/2024/95782e0212.jpg
- https://snuggle.micro.blog/uploads/2024/f8d7032133.jpg
- https://snuggle.micro.blog/uploads/2024/3a00b95541.jpg
- https://snuggle.micro.blog/uploads/2024/02b871fa4c.jpg
- https://snuggle.micro.blog/uploads/2024/a92dfe17f5.jpg
- https://snuggle.micro.blog/uploads/2024/7a3d385a3e.jpg
- https://snuggle.micro.blog/uploads/2024/fc2e975606.jpg
- https://snuggle.micro.blog/uploads/2024/d801df24cb.jpg
- https://snuggle.micro.blog/uploads/2024/6263627a1d.jpg
- https://snuggle.micro.blog/uploads/2024/0d3b92f896.jpg
photos:
- https://snuggle.micro.blog/uploads/2024/95782e0212.jpg
- https://snuggle.micro.blog/uploads/2024/f8d7032133.jpg
- https://snuggle.micro.blog/uploads/2024/3a00b95541.jpg
- https://snuggle.micro.blog/uploads/2024/02b871fa4c.jpg
- https://snuggle.micro.blog/uploads/2024/a92dfe17f5.jpg
- https://snuggle.micro.blog/uploads/2024/7a3d385a3e.jpg
- https://snuggle.micro.blog/uploads/2024/fc2e975606.jpg
- https://snuggle.micro.blog/uploads/2024/d801df24cb.jpg
- https://snuggle.micro.blog/uploads/2024/6263627a1d.jpg
- https://snuggle.micro.blog/uploads/2024/0d3b92f896.jpg
photos_with_metadata:
- url: https://snuggle.micro.blog/uploads/2024/95782e0212.jpg
  width: 0
  height: 0
- url: https://snuggle.micro.blog/uploads/2024/f8d7032133.jpg
  width: 0
  height: 0
- url: https://snuggle.micro.blog/uploads/2024/3a00b95541.jpg
  width: 0
  height: 0
- url: https://snuggle.micro.blog/uploads/2024/02b871fa4c.jpg
  width: 0
  height: 0
- url: https://snuggle.micro.blog/uploads/2024/a92dfe17f5.jpg
  width: 0
  height: 0
- url: https://snuggle.micro.blog/uploads/2024/7a3d385a3e.jpg
  width: 0
  height: 0
- url: https://snuggle.micro.blog/uploads/2024/fc2e975606.jpg
  width: 0
  height: 0
- url: https://snuggle.micro.blog/uploads/2024/d801df24cb.jpg
  width: 0
  height: 0
- url: https://snuggle.micro.blog/uploads/2024/6263627a1d.jpg
  width: 0
  height: 0
- url: https://snuggle.micro.blog/uploads/2024/0d3b92f896.jpg
  width: 0
  height: 0
url: /2020/12/23/lets-look-into.html
---
<img src="uploads/2024/hug-server.png" width="600" height="223" alt="">

Let me tell you the tale of my experiences with home servers (['Homelab'](https://reddit.com/r/homelab) equipment). As I was experimenting within tech, I found that I loved hosting little services and such to make my life easier. From [Nextcloud](https://nextcloud.com/), a cloud storage replacement similar to [Google Drive](https://drive.google.com/), to a personal VPN with [Wireguard](https://wireguard.com/), my requirements ended up expanding to the point where I was spending up to £35/month on a [rented VPS](https://en.wikipedia.org/wiki/Virtual_private_server).

This couldn't continue! Things were getting too expensive and I didn't like keeping my [NAS](https://simple.wikipedia.org/wiki/Network-attached_storage) storage in the cloud — it was slow.
Enter... Hug Server.
<!--more-->
## And so it begins...
### Let's find a chassis and motherboard!

![Inside of server purchased](https://snuggle.micro.blog/uploads/2024/95782e0212.jpg)
I ended up wandering upon an eBay listing for a Sandy Bridge server which was only £70.

This was awesome! It included an 8-thread [Intel Xeon E3-1240](https://ark.intel.com/content/www/us/en/ark/products/52273/intel-xeon-processor-e3-1240-8m-cache-3-30-ghz.html) CPU plus an [Intel S1200BTL](https://ark.intel.com/content/www/us/en/ark/products/53557/intel-server-board-s1200btl.html) motherboard. The most important part for me, though, was the [Ri-Vier RVS2-06A](https://web.archive.org/web/20201204043130/https://www.ri-vier.eu/rivier-2u-12bay-chassis-with-sas-backplane-rvs206a-p-323.html) chassis with **included rails** and a 12-bay hotswappable SAS/SATA backplane. This was perfect for building a custom server within, as there were no OEM or proprietary parts — I could fit any components I'd like because there weren't any weird form factors to think about. It even used a standard PSU.

![Motherboard purchased, ASUS Z10PE-D8 WS](https://snuggle.micro.blog/uploads/2024/f8d7032133.jpg)

The next part came along when I saw a motherboard that should've been worth about £500 at the time, which I bought for only £87. The ASUS Z10PE-D8 WS: a Haswell semi-workstation/server board with seven x16 PCIe lanes. It was so affordable 
because it *'had a bent CPU2 socket pin'* and the seller wasn't sure if the second socket would still work, as they only had one CPU to test with. I tested it myself, there were no issues!

![Screenshot of eBay listing for motherboard](https://snuggle.micro.blog/uploads/2024/3a00b95541.jpg)


### Now to make it smart, to hunt some CPU and memory!

![A picture of one of the CPUs used, Intel Xeon E5-2630 v3.](https://snuggle.micro.blog/uploads/2024/02b871fa4c.jpg)


As very few people actually have Haswell server motherboards, the CPUs sell for relatively cheap! I managed to purchase two Intel Xeon E5-2630 v3's for £30/ea, giving me a total of 32 threads at 2.4–3.2 GHz for £60.

I also didn't have too much issue finding memory. I found three 16 GB sticks of DDR4 RDIMM ECC for £20/ea (All prices including shipping) which would give me a total of 48 GB which I could easily expand up to 128 GB. 

### Putting it all together like LEGO


![Motherboard full assembled](https://snuggle.micro.blog/uploads/2024/a92dfe17f5.jpg)
![Installing motherboard into 2U chassis, next to PSU](https://snuggle.micro.blog/uploads/2024/7a3d385a3e.jpg)

All that was left was to put everything together! Pop the two processors in their socket, install the memory and we're off to the races! There actually wasn't any issue with bent CPU pins, everything worked pretty much out of the box. This motherboard also supports IPMI with an addin-module.

The motherboard was an extremely tight fit, as it is designed to the EEB specification, whereas this chassis was designed for a CEB motherboard. This wasn't too much of an issue, I just put in as many standoffs as I could and also added some cork spacers underneath for extra support. It just about fit with barely a millimetre of clearance. After this, I purchased two Supermicro SMH SNK-P0048AP4 heatsinks since I needed some fans in this chassis and then closed it up!



![Both heatsinks being shown with the fans running](https://snuggle.micro.blog/uploads/2024/fc2e975606.jpg)
![Overall photo of the final build, chassis closed](https://snuggle.micro.blog/uploads/2024/d801df24cb.jpg)


### Loading up new software

![Quick screenshot from neofetch, showing the operating system running (Red Hat Enterprise Linux) and system specs](https://snuggle.micro.blog/uploads/2024/6263627a1d.jpg)

For this server, I would like to be able to virtualise and/or containerize many different services. I had a few choices here! I could use something popular like Proxmox or VMWare's ESXi, but this would be entirely for personal use and I would also like my web dashboards to look aesthetically pleasing.

I am familiar with Fedora, as I use both Fedora and MacOS on my personal devices, and there is a web dashboard known as Cockpit which is included by default with Fedora server, but I would prefer a more stable release cycle for updates. This is why I'd chose Red Hat Enterprise Linux for my host OS and then I could use Cockpit's QEMU/KVM module plus some command-line to manage all of my virtual machines! (Plus Cockpit's Podman for Docker containers)

![Screenshot from the included server management web dashboard, Cockpit](https://snuggle.micro.blog/uploads/2024/0d3b92f896.jpg)

## What things are you running?
### Logical Topology Diagram

<embed class="centre" src="&#123;&#123; page.images }}/logical_topology.svg">

### Physical Topology Diagram

<embed class="centre" src="&#123;&#123; page.images }}/physical_topology.svg">

And... that's pretty much everything for now. More might be coming soon! (Including plans to create a DIY server cabinet)

## A Relevant Tweet Appears! 🐦

<div>
	<blockquote class="twitter-tweet tw-align-center" data-theme="dark"><p lang="en" dir="ltr">Here is my finished server rack/coffee table! It's going to stay in the living room (Don't worry, it's quiet!) and then all of the server stuff rack mounts into a hidden, fancy coffee table! 👩‍💻📐🛠️ <a href="https://twitter.com/EvieSnuggle/status/1288936442736136205">pic.twitter.com/MFsAdPG5l7</a></p>— Snuggle 🧋❄️ (@EvieSnuggle) <a href="https://twitter.com/EvieSnuggle/status/1288936442736136205?ref_src=twsrc%5Etfw">July 30, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
