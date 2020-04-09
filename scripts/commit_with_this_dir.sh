#!/bin/sh

date=`date "+%Y/%m/%d-%H:%M:%S"`
echo $date
git add ../ && git commit -am "wallpaper on $date" && git push
