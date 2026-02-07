# Video Placement

Place your hero background video at:
`/public/hero-video.mp4`

## Recommended Video Characteristics

- **Duration**: 15-60 seconds (loopable)
- **Resolution**: 1920x1080 or 4K
- **Codec**: H.264
- **Mood**: Slow, meditative nature scenes
  - Flowing water
  - Mountain landscapes
  - Candle flames
  - Turning pages
  - Gentle hands
  - Soft light

## Video Optimization

For web performance, compress your video:

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k -movflags +faststart public/hero-video.mp4
```

This ensures:
- Fast loading
- Smooth playback
- Reasonable file size
- Browser compatibility

Once placed, the video will automatically load and play on the hero section.
