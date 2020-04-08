#!/bin/sh

date=`date "+%Y/%m/%d-%H:%M:%S"`
echo $date
mv /Users/reyn/Downloads/*.jpg ../images/ && git add ./ && git commit -am "wallpaper on $date" && git push
