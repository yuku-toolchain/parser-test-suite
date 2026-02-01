let indices = ("..ab").match(/(?<x>a)|(?<x>b)/d).indices;
indices = ("..ba").match(/(?<x>a)|(?<x>b)/d).indices;