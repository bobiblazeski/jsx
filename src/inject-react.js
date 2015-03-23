var version = 'react-with-addons-0.13.0',
    file = process.env.NODE_ENV === "production"
    ? version+".min.js"
    : version+".js";

Inject.rawHead(
    'react',
    '<script src="//fb.me/' + file + '"></script>'
);