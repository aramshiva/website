---
title: "Building A NAS
excerpt: "My first NAS"
coverImage: "/assets/blog/covers/live/cover.jpg"
date: "2023-01-24"
author:
  name: Aram Shiva
  picture: "/assets/blog/authors/aram.jpeg"
ogImage:
  url: "/assets/blog/covers/live/cover.jpg"
---

# Building an NAS

This was a fun one. My family and I have a collective of around 10TB of photos, videos, backups, and files. These were on a collective of 3-5 hard drives, which was very inefficient, especially considering some of these drives were over 10 years old.

So, my dad and I decided to build a NAS to store all of these files. We did some research and decided on getting 2 14TB WD Red Plus Drives (my dad had a discount at WD). We were originally considering going with some WD Gold enterprise-class drives but realized that would be really loud, especially considering this was probably going to be placed near the TV and living room.

Next was the NAS itself. We were considering Synology or QNAP. After watching a lot of videos (especially from [NASCompares](https://www.youtube.com/@nascompares) & [SpaceRex](https://www.youtube.com/@SpaceRexWill), two NAS YouTubers), we decided that Synology would work because there are lots of photos and videos and this was for the family. We only had 2 drives, so we wanted to get a two-bay NAS. The original one we were planning to get is a DS723+, but then we discovered that the brand new DS224+ would be coming out in a week, and we decided on that. This runs on a 64-bit Intel Celeron J4125 and has 2GB of built-in memory (we added 16GB a couple of days after).

We ordered all the parts and 2 weeks later they were here. We set everything up (props to Synology for making setup easy!) and in 30 minutes it was done. We installed some basic packages including: OpenVPN, Minecraft Server (via Docker), Homebridge, Plex Home Media Server. That's it! We backed up over 5TB of photos/videos from over 10 years ago.
