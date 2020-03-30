#!/bin/sh

date=`date "+%Y/%m/%d-%H:%M:%S"`
echo $date
mv /Users/reyn/Downloads/*.jpg ./ && git commit -am "$date" && git push
