# Eyevinn - Cast Receiver

A basic custom cast receiver that can be configured using environment variables. The main intention is to be able to quickly spin up a cast receiver without having to write any code.

We also set some recommended default options for an optimal playback experience.

---
<div align="center">

## Quick Demo: Open Source Cloud

Run this service in the cloud with a single click.

[![Badge OSC](https://img.shields.io/badge/Try%20it%20out!-1E3A8A?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8yODIxXzMxNjcyKSIvPgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI3IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8yODIxXzMxNjcyIiB4MT0iMTIiIHkxPSIwIiB4Mj0iMTIiIHkyPSIyNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQzE4M0ZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzREQzlGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=)](https://app.osaas.io/browse/eyevinn-cast-receiver)

</div>

---

## Requirements

- Docker OR Node.js 20

## Installation / Usage

The Cast Receiver can be run either as a Node.js application or as a Docker container. The Cast Receiver is built using the Google chromecast [CAF SDK](https://developers.google.com/cast/docs/web_receiver/basic).

### Configuration

You configure the Cast Receiver by setting environment variables. The following environment variables are available:

- `TITLE` - Title of the application
- `CAST_RECEIVER_OPTIONS` - JSON of the options for the cast receiver, this can override recommended defaults. For a full list of options see [docs](https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.CastReceiverOptions)
- `PLAYBACK_LOGO_IMAGE` - URL to the playback logo image. See [docs](https://developers.google.com/cast/docs/web_receiver/customize_ui#playback_logo)
- `LOGO` - URL to your logo image.
- `CAST_MEDIA_PLAYER_STYLE` - Gives you full access to style the `cast-media-player` element. See [docs](https://developers.google.com/cast/docs/web_receiver/customize_ui). Note this may override other ENV variables that may set style options, eg. `LOGO`. The format is [[style, value]] eg. `[["--splash-image", "url(https://github.com/eyevinn.png"], ["--splash-size", "contain"]]`

### Node

1. `npm install`
2. `cp .env.sample` `.env`
3. Modify `.env` to your needs
4. `npm run build`
5. Host the `dist` folder on a web server

### Docker

1. `docker build . -t <your-image-name>`
2. `docker run -p 8080:8080 <your-image-name> -e ENV_VARIABLE=value`VALUE

*You can also create a .env file before running `docker build` if you want to add a default set of env variables*

## Development

1. `npm install`
2. `cp .env.sample` `.env`
3. Modify `.env` to your needs
4. `npm run dev`

### Contributing

See [CONTRIBUTING](CONTRIBUTING.md)

# Support

Join our [community on Slack](http://slack.streamingtech.se) where you can post any questions regarding any of our open source projects. Eyevinn's consulting business can also offer you:

- Further development of this component
- Customization and integration of this component into your platform
- Support and maintenance agreement

Contact [sales@eyevinn.se](mailto:sales@eyevinn.se) if you are interested.

# About Eyevinn Technology

[Eyevinn Technology](https://www.eyevinntechnology.se) is an independent consultant firm specialized in video and streaming. Independent in a way that we are not commercially tied to any platform or technology vendor. As our way to innovate and push the industry forward we develop proof-of-concepts and tools. The things we learn and the code we write we share with the industry in [blogs](https://dev.to/video) and by open sourcing the code we have written.

Want to know more about Eyevinn and how it is to work here. Contact us at work@eyevinn.se!
