import {prisma} from '../config/prismaConfig.js';

async function getAllVideo() {
  const videos = await prisma.videos.findMany();
  return videos;
}

async function getVideo(videoId) {
  const video = await prisma.videos.update({
    where: {id: videoId},
    data: {views: {increment: 1}}
  });
  return video;
}

async function addVideo(data) {
  const video = await prisma.videos.create({data});
  return video;
}

export default {
  getAllVideo,
  getVideo,
  addVideo
};