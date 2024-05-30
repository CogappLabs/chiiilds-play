var Vt = (d, n, e) => {
  if (!n.has(d))
    throw TypeError("Cannot " + e);
};
var de = (d, n, e) => (Vt(d, n, "read from private field"), e ? e.call(d) : n.get(d)), ue = (d, n, e) => {
  if (n.has(d))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(d) : n.set(d, e);
}, ye = (d, n, e, t) => (Vt(d, n, "write to private field"), t ? t.call(d, e) : n.set(d, e), e);
var vi = (d, n, e, t) => ({
  set _(i) {
    ye(d, n, i, e);
  },
  get _() {
    return de(d, n, t);
  }
}), ce = (d, n, e) => (Vt(d, n, "access private method"), e);
var Bi = (
  /** @class */
  function() {
    function d(n) {
      this.__jsonld = n, this.context = this.getProperty("context"), this.id = this.getProperty("id");
    }
    return d.prototype.getProperty = function(n) {
      var e = null;
      return this.__jsonld && (e = this.__jsonld[n], e || (e = this.__jsonld["@" + n])), e;
    }, d;
  }()
), ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function si(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
function pn(d) {
  if (d.__esModule)
    return d;
  var n = d.default;
  if (typeof n == "function") {
    var e = function t() {
      return this instanceof t ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    e.prototype = n.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(d).forEach(function(t) {
    var i = Object.getOwnPropertyDescriptor(d, t);
    Object.defineProperty(e, t, i.get ? i : {
      enumerable: !0,
      get: function() {
        return d[t];
      }
    });
  }), e;
}
var D = {};
(function(d) {
  Object.defineProperty(d, "__esModule", { value: !0 }), function(n) {
    n.BOOKMARKING = "oa:bookmarking", n.CLASSIFYING = "oa:classifying", n.COMMENTING = "oa:commenting", n.DESCRIBING = "oa:describing", n.EDITING = "oa:editing", n.HIGHLIGHTING = "oa:highlighting", n.IDENTIFYING = "oa:identifying", n.LINKING = "oa:linking", n.MODERATING = "oa:moderating", n.PAINTING = "sc:painting", n.QUESTIONING = "oa:questioning", n.REPLYING = "oa:replying", n.TAGGING = "oa:tagging", n.TRANSCRIBING = "oad:transcribing";
  }(d.AnnotationMotivation || (d.AnnotationMotivation = {})), function(n) {
    n.AUTO_ADVANCE = "auto-advance", n.CONTINUOUS = "continuous", n.FACING_PAGES = "facing-pages", n.HIDDEN = "hidden", n.INDIVIDUALS = "individuals", n.MULTI_PART = "multi-part", n.NO_NAV = "no-nav", n.NON_PAGED = "non-paged", n.PAGED = "paged", n.REPEAT = "repeat", n.SEQUENCE = "sequence", n.THUMBNAIL_NAV = "thumbnail-nav", n.TOGETHER = "together", n.UNORDERED = "unordered";
  }(d.Behavior || (d.Behavior = {})), function(n) {
    n.CANVAS = "canvas", n.CHOICE = "choice", n.OA_CHOICE = "oa:choice", n.CONTENT_AS_TEXT = "contentastext", n.DATASET = "dataset", n.DOCUMENT = "document", n.IMAGE = "image", n.MODEL = "model", n.MOVING_IMAGE = "movingimage", n.PDF = "pdf", n.PHYSICAL_OBJECT = "physicalobject", n.SOUND = "sound", n.TEXT = "text", n.TEXTUALBODY = "textualbody", n.VIDEO = "video";
  }(d.ExternalResourceType || (d.ExternalResourceType = {})), function(n) {
    n.ANNOTATION = "annotation", n.CANVAS = "canvas", n.COLLECTION = "collection", n.MANIFEST = "manifest", n.RANGE = "range", n.SEQUENCE = "sequence";
  }(d.IIIFResourceType || (d.IIIFResourceType = {})), function(n) {
    n.AUDIO_MP4 = "audio/mp4", n.CORTO = "application/corto", n.DICOM = "application/dicom", n.DRACO = "application/draco", n.EPUB = "application/epub+zip", n.GIRDER = "image/vnd.kitware.girder", n.GLB = "model/gltf-binary", n.GLTF = "model/gltf+json", n.IIIF_PRESENTATION_2 = 'application/ld+json;profile="http://iiif.io/api/presentation/2/context.json"', n.IIIF_PRESENTATION_3 = 'application/ld+json;profile="http://iiif.io/api/presentation/3/context.json"', n.JPG = "image/jpeg", n.M3U8 = "application/vnd.apple.mpegurl", n.MP3 = "audio/mp3", n.MPEG_DASH = "application/dash+xml", n.OBJ = "text/plain", n.OPF = "application/oebps-package+xml", n.PDF = "application/pdf", n.PLY = "application/ply", n.THREEJS = "application/vnd.threejs+json", n.USDZ = "model/vnd.usd+zip", n.VIDEO_MP4 = "video/mp4", n.WAV = "audio/wav", n.WEBM = "video/webm";
  }(d.MediaType || (d.MediaType = {})), function(n) {
    n.DOC = "application/msword", n.DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document", n.PDF = "application/pdf";
  }(d.RenderingFormat || (d.RenderingFormat = {})), function(n) {
    n.IMAGE_0_COMPLIANCE_LEVEL_0 = "http://library.stanford.edu/iiif/image-api/compliance.html#level0", n.IMAGE_0_COMPLIANCE_LEVEL_1 = "http://library.stanford.edu/iiif/image-api/compliance.html#level1", n.IMAGE_0_COMPLIANCE_LEVEL_2 = "http://library.stanford.edu/iiif/image-api/compliance.html#level2", n.IMAGE_0_CONFORMANCE_LEVEL_0 = "http://library.stanford.edu/iiif/image-api/conformance.html#level0", n.IMAGE_0_CONFORMANCE_LEVEL_1 = "http://library.stanford.edu/iiif/image-api/conformance.html#level1", n.IMAGE_0_CONFORMANCE_LEVEL_2 = "http://library.stanford.edu/iiif/image-api/conformance.html#level2", n.IMAGE_1_COMPLIANCE_LEVEL_0 = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0", n.IMAGE_1_COMPLIANCE_LEVEL_1 = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1", n.IMAGE_1_COMPLIANCE_LEVEL_2 = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2", n.IMAGE_1_CONFORMANCE_LEVEL_0 = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level0", n.IMAGE_1_CONFORMANCE_LEVEL_1 = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1", n.IMAGE_1_CONFORMANCE_LEVEL_2 = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2", n.IMAGE_1_LEVEL_0 = "http://iiif.io/api/image/1/level0.json", n.IMAGE_1_PROFILE_LEVEL_0 = "http://iiif.io/api/image/1/profiles/level0.json", n.IMAGE_1_LEVEL_1 = "http://iiif.io/api/image/1/level1.json", n.IMAGE_1_PROFILE_LEVEL_1 = "http://iiif.io/api/image/1/profiles/level1.json", n.IMAGE_1_LEVEL_2 = "http://iiif.io/api/image/1/level2.json", n.IMAGE_1_PROFILE_LEVEL_2 = "http://iiif.io/api/image/1/profiles/level2.json", n.IMAGE_2_LEVEL_0 = "http://iiif.io/api/image/2/level0.json", n.IMAGE_2_PROFILE_LEVEL_0 = "http://iiif.io/api/image/2/profiles/level0.json", n.IMAGE_2_LEVEL_1 = "http://iiif.io/api/image/2/level1.json", n.IMAGE_2_PROFILE_LEVEL_1 = "http://iiif.io/api/image/2/profiles/level1.json", n.IMAGE_2_LEVEL_2 = "http://iiif.io/api/image/2/level2.json", n.IMAGE_2_PROFILE_LEVEL_2 = "http://iiif.io/api/image/2/profiles/level2.json", n.AUTH_0_CLICK_THROUGH = "http://iiif.io/api/auth/0/login/clickthrough", n.AUTH_0_LOGIN = "http://iiif.io/api/auth/0/login", n.AUTH_0_LOGOUT = "http://iiif.io/api/auth/0/logout", n.AUTH_0_RESTRICTED = "http://iiif.io/api/auth/0/login/restricted", n.AUTH_0_TOKEN = "http://iiif.io/api/auth/0/token", n.AUTH_1_CLICK_THROUGH = "http://iiif.io/api/auth/1/clickthrough", n.AUTH_1_EXTERNAL = "http://iiif.io/api/auth/1/external", n.AUTH_1_KIOSK = "http://iiif.io/api/auth/1/kiosk", n.AUTH_1_LOGIN = "http://iiif.io/api/auth/1/login", n.AUTH_1_LOGOUT = "http://iiif.io/api/auth/1/logout", n.AUTH_1_PROBE = "http://iiif.io/api/auth/1/probe", n.AUTH_1_TOKEN = "http://iiif.io/api/auth/1/token", n.SEARCH_0 = "http://iiif.io/api/search/0/search", n.SEARCH_0_AUTO_COMPLETE = "http://iiif.io/api/search/0/autocomplete", n.SEARCH_1 = "http://iiif.io/api/search/1/search", n.SEARCH_1_AUTO_COMPLETE = "http://iiif.io/api/search/1/autocomplete", n.TRACKING_EXTENSIONS = "http://universalviewer.io/tracking-extensions-profile", n.UI_EXTENSIONS = "http://universalviewer.io/ui-extensions-profile", n.PRINT_EXTENSIONS = "http://universalviewer.io/print-extensions-profile", n.SHARE_EXTENSIONS = "http://universalviewer.io/share-extensions-profile", n.DOWNLOAD_EXTENSIONS = "http://universalviewer.io/download-extensions-profile", n.OTHER_MANIFESTATIONS = "http://iiif.io/api/otherManifestations.json", n.IXIF = "http://wellcomelibrary.org/ld/ixif/0/alpha.json";
  }(d.ServiceProfile || (d.ServiceProfile = {})), function(n) {
    n.IMAGE_SERVICE_2 = "ImageService2", n.IMAGE_SERVICE_3 = "ImageService3";
  }(d.ServiceType || (d.ServiceType = {})), function(n) {
    n.BOTTOM_TO_TOP = "bottom-to-top", n.LEFT_TO_RIGHT = "left-to-right", n.RIGHT_TO_LEFT = "right-to-left", n.TOP_TO_BOTTOM = "top-to-bottom";
  }(d.ViewingDirection || (d.ViewingDirection = {})), function(n) {
    n.CONTINUOUS = "continuous", n.INDIVIDUALS = "individuals", n.NON_PAGED = "non-paged", n.PAGED = "paged", n.TOP = "top";
  }(d.ViewingHint || (d.ViewingHint = {}));
})(D);
var gn = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), Ge = (
  /** @class */
  function(d) {
    gn(n, d);
    function n(e, t) {
      var i = d.call(this, e) || this;
      return i.options = t, i;
    }
    return n.prototype.getIIIFResourceType = function() {
      return W.normaliseType(this.getProperty("type"));
    }, n.prototype.getLabel = function() {
      var e = this.getProperty("label");
      return e ? ze.parse(e, this.options.locale) : new ze([], this.options.locale);
    }, n.prototype.getDefaultLabel = function() {
      return this.getLabel().getValue(this.options.locale);
    }, n.prototype.getMetadata = function() {
      var e = this.getProperty("metadata"), t = [];
      if (!e)
        return t;
      for (var i = 0; i < e.length; i++) {
        var r = e[i], l = new Ct(this.options.locale);
        l.parse(r), t.push(l);
      }
      return t;
    }, n.prototype.getRendering = function(e) {
      for (var t = this.getRenderings(), i = 0; i < t.length; i++) {
        var r = t[i];
        if (r.getFormat() === e)
          return r;
      }
      return null;
    }, n.prototype.getRenderings = function() {
      var e;
      this.__jsonld ? e = this.__jsonld.rendering : e = this.rendering;
      var t = [];
      if (!e)
        return t;
      Array.isArray(e) || (e = [e]);
      for (var i = 0; i < e.length; i++) {
        var r = e[i];
        t.push(new Lr(r, this.options));
      }
      return t;
    }, n.prototype.getRequiredStatement = function() {
      var e = null, t = this.getProperty("requiredStatement");
      return t && (e = new Ct(this.options.locale), e.parse(t)), e;
    }, n.prototype.getService = function(e) {
      return W.getService(this, e);
    }, n.prototype.getServices = function() {
      return W.getServices(this);
    }, n.prototype.getThumbnail = function() {
      var e = this.getProperty("thumbnail");
      return Array.isArray(e) && (e = e[0]), e ? new Br(e, this.options) : null;
    }, n.prototype.isAnnotation = function() {
      return this.getIIIFResourceType() === D.IIIFResourceType.ANNOTATION;
    }, n.prototype.isCanvas = function() {
      return this.getIIIFResourceType() === D.IIIFResourceType.CANVAS;
    }, n.prototype.isCollection = function() {
      return this.getIIIFResourceType() === D.IIIFResourceType.COLLECTION;
    }, n.prototype.isManifest = function() {
      return this.getIIIFResourceType() === D.IIIFResourceType.MANIFEST;
    }, n.prototype.isRange = function() {
      return this.getIIIFResourceType() === D.IIIFResourceType.RANGE;
    }, n.prototype.isSequence = function() {
      return this.getIIIFResourceType() === D.IIIFResourceType.SEQUENCE;
    }, n;
  }(Bi)
), mn = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), oi = (
  /** @class */
  function(d) {
    mn(n, d);
    function n(e, t) {
      return d.call(this, e, t) || this;
    }
    return n.prototype.getFormat = function() {
      var e = this.getProperty("format");
      return e ? e.toLowerCase() : null;
    }, n.prototype.getResources = function() {
      var e = [];
      if (!this.__jsonld.resources)
        return e;
      for (var t = 0; t < this.__jsonld.resources.length; t++) {
        var i = this.__jsonld.resources[t], r = new gt(i, this.options);
        e.push(r);
      }
      return e;
    }, n.prototype.getType = function() {
      var e = this.getProperty("type");
      return e ? W.normaliseType(e) : null;
    }, n.prototype.getWidth = function() {
      return this.getProperty("width");
    }, n.prototype.getHeight = function() {
      return this.getProperty("height");
    }, n.prototype.getMaxWidth = function() {
      return this.getProperty("maxWidth");
    }, n.prototype.getMaxHeight = function() {
      var e = this.getProperty("maxHeight");
      return e ? null : this.getMaxWidth();
    }, n;
  }(Ge)
), vn = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), zi = (
  /** @class */
  function(d) {
    vn(n, d);
    function n(e, t) {
      var i = d.call(this, e, t) || this;
      i.index = -1, i.isLoaded = !1;
      var r = {
        defaultLabel: "-",
        locale: "en-GB",
        resource: i,
        pessimisticAccessControl: !1
      };
      return i.options = Object.assign(r, t), i;
    }
    return n.prototype.getAttribution = function() {
      var e = this.getProperty("attribution");
      return e ? ze.parse(e, this.options.locale) : new ze([], this.options.locale);
    }, n.prototype.getDescription = function() {
      var e = this.getProperty("description");
      return e ? ze.parse(e, this.options.locale) : new ze([], this.options.locale);
    }, n.prototype.getHomepage = function() {
      var e = this.getProperty("homepage");
      return e ? typeof e == "string" ? e : (Array.isArray(e) && e.length && (e = e[0]), e["@id"] || e.id) : null;
    }, n.prototype.getIIIFResourceType = function() {
      return W.normaliseType(this.getProperty("type"));
    }, n.prototype.getLogo = function() {
      var e = this.getProperty("logo");
      if (!e) {
        var t = this.getProperty("provider");
        if (!t)
          return null;
        e = t.logo;
      }
      return e ? typeof e == "string" ? e : (Array.isArray(e) && e.length && (e = e[0]), e["@id"] || e.id) : null;
    }, n.prototype.getLicense = function() {
      return W.getLocalisedValue(this.getProperty("license"), this.options.locale);
    }, n.prototype.getNavDate = function() {
      return new Date(this.getProperty("navDate"));
    }, n.prototype.getRelated = function() {
      return this.getProperty("related");
    }, n.prototype.getSeeAlso = function() {
      return this.getProperty("seeAlso");
    }, n.prototype.getTrackingLabel = function() {
      var e = this.getService(D.ServiceProfile.TRACKING_EXTENSIONS);
      return e ? e.getProperty("trackingLabel") : "";
    }, n.prototype.getDefaultTree = function() {
      return this.defaultTree = new ti("root"), this.defaultTree.data = this, this.defaultTree;
    }, n.prototype.getRequiredStatement = function() {
      var e = null, t = this.getProperty("requiredStatement");
      if (t)
        e = new Ct(this.options.locale), e.parse(t);
      else {
        var i = this.getAttribution();
        i && (e = new Ct(this.options.locale), e.value = i);
      }
      return e;
    }, n.prototype.isCollection = function() {
      return this.getIIIFResourceType() === D.IIIFResourceType.COLLECTION;
    }, n.prototype.isManifest = function() {
      return this.getIIIFResourceType() === D.IIIFResourceType.MANIFEST;
    }, n.prototype.load = function() {
      var e = this;
      return new Promise(function(t) {
        if (e.isLoaded)
          t(e);
        else {
          var i = e.options;
          i.navDate = e.getNavDate();
          var r = e.__jsonld.id;
          r || (r = e.__jsonld["@id"]), W.loadManifest(r).then(function(l) {
            e.parentLabel = e.getLabel().getValue(i.locale);
            var s = Zi.parse(l, i);
            e = Object.assign(e, s), e.index = i.index, t(e);
          });
        }
      });
    }, n;
  }(Ge)
), yn = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), gt = (
  /** @class */
  function(d) {
    yn(n, d);
    function n(e, t) {
      return d.call(this, e, t) || this;
    }
    return n.prototype.getBody = function() {
      var e = [], t = this.getProperty("body");
      if (t)
        if (Array.isArray(t))
          for (var i = 0; i < t.length; i++) {
            var r = t[i];
            if (r.items)
              for (var l = 0; l < r.items.length; l++) {
                var s = r.items[l];
                e.push(new _t(s, this.options));
              }
            else
              e.push(new _t(r, this.options));
          }
        else if (t.items)
          for (var i = 0; i < t.items.length; i++) {
            var r = t.items[i];
            e.push(new _t(r, this.options));
          }
        else
          e.push(new _t(t, this.options));
      return e;
    }, n.prototype.getMotivation = function() {
      var e = this.getProperty("motivation");
      return e || null;
    }, n.prototype.getOn = function() {
      return this.getProperty("on");
    }, n.prototype.getTarget = function() {
      return this.getProperty("target");
    }, n.prototype.getResource = function() {
      return new oi(this.getProperty("resource"), this.options);
    }, n;
  }(Ge)
), Tn = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), _t = (
  /** @class */
  function(d) {
    Tn(n, d);
    function n(e, t) {
      return d.call(this, e, t) || this;
    }
    return n.prototype.getFormat = function() {
      var e = this.getProperty("format");
      return e ? W.getMediaType(e) : null;
    }, n.prototype.getType = function() {
      var e = this.getProperty("type");
      return e ? W.normaliseType(this.getProperty("type")) : null;
    }, n.prototype.getWidth = function() {
      return this.getProperty("width");
    }, n.prototype.getHeight = function() {
      return this.getProperty("height");
    }, n;
  }(Ge)
), wn = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), _n = (
  /** @class */
  function(d) {
    wn(n, d);
    function n(e, t, i) {
      var r = d.call(this, t) || this;
      return r.label = e, r.options = i, r;
    }
    return n.prototype.getIIIFResourceType = function() {
      return W.normaliseType(this.getProperty("type"));
    }, n.prototype.getLabel = function() {
      return this.label;
    }, n.prototype.getResources = function() {
      var e = this, t = this.getProperty("resources");
      return t.map(function(i) {
        return new gt(i, e.options);
      });
    }, n.prototype.load = function() {
      var e = this;
      return new Promise(function(t, i) {
        if (e.isLoaded)
          t(e);
        else {
          var r = e.__jsonld.id;
          r || (r = e.__jsonld["@id"]), W.loadManifest(r).then(function(l) {
            e.__jsonld = l, e.context = e.getProperty("context"), e.id = e.getProperty("id"), e.isLoaded = !0, t(e);
          }).catch(i);
        }
      });
    }, n;
  }(Bi)
), En = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), ki = (
  /** @class */
  function(d) {
    En(n, d);
    function n(e, t) {
      return d.call(this, e, t) || this;
    }
    return n.prototype.getItems = function() {
      return this.getProperty("items");
    }, n;
  }(Ge)
);
function Sn(d, n) {
  for (var e = -1, t = n.length, i = d.length; ++e < t; )
    d[i + e] = n[e];
  return d;
}
var xn = Sn, Pn = typeof ft == "object" && ft && ft.Object === Object && ft, Rn = Pn, Cn = Rn, bn = typeof self == "object" && self && self.Object === Object && self, In = Cn || bn || Function("return this")(), An = In, On = An, Ln = On.Symbol, ai = Ln, yi = ai, Ui = Object.prototype, Dn = Ui.hasOwnProperty, Mn = Ui.toString, ht = yi ? yi.toStringTag : void 0;
function Nn(d) {
  var n = Dn.call(d, ht), e = d[ht];
  try {
    d[ht] = void 0;
    var t = !0;
  } catch {
  }
  var i = Mn.call(d);
  return t && (n ? d[ht] = e : delete d[ht]), i;
}
var Hn = Nn, Fn = Object.prototype, Bn = Fn.toString;
function zn(d) {
  return Bn.call(d);
}
var kn = zn, Ti = ai, Un = Hn, Gn = kn, Vn = "[object Null]", jn = "[object Undefined]", wi = Ti ? Ti.toStringTag : void 0;
function Wn(d) {
  return d == null ? d === void 0 ? jn : Vn : wi && wi in Object(d) ? Un(d) : Gn(d);
}
var qn = Wn;
function Zn(d) {
  return d != null && typeof d == "object";
}
var Gi = Zn, Xn = qn, Yn = Gi, Kn = "[object Arguments]";
function Qn(d) {
  return Yn(d) && Xn(d) == Kn;
}
var Jn = Qn, _i = Jn, $n = Gi, Vi = Object.prototype, er = Vi.hasOwnProperty, tr = Vi.propertyIsEnumerable, ir = _i(function() {
  return arguments;
}()) ? _i : function(d) {
  return $n(d) && er.call(d, "callee") && !tr.call(d, "callee");
}, nr = ir, rr = Array.isArray, sr = rr, Ei = ai, or = nr, ar = sr, Si = Ei ? Ei.isConcatSpreadable : void 0;
function lr(d) {
  return ar(d) || or(d) || !!(Si && d && d[Si]);
}
var hr = lr, ur = xn, cr = hr;
function ji(d, n, e, t, i) {
  var r = -1, l = d.length;
  for (e || (e = cr), i || (i = []); ++r < l; ) {
    var s = d[r];
    n > 0 && e(s) ? n > 1 ? ji(s, n - 1, e, t, i) : ur(i, s) : t || (i[i.length] = s);
  }
  return i;
}
var Wi = ji, dr = Wi;
function fr(d) {
  var n = d == null ? 0 : d.length;
  return n ? dr(d, 1) : [];
}
var pr = fr;
const jt = /* @__PURE__ */ si(pr);
var gr = Wi, mr = 1 / 0;
function vr(d) {
  var n = d == null ? 0 : d.length;
  return n ? gr(d, mr) : [];
}
var yr = vr;
const xi = /* @__PURE__ */ si(yr);
var Tr = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), Rt = (
  /** @class */
  function(d) {
    Tr(n, d);
    function n(e, t) {
      return d.call(this, e, t) || this;
    }
    return n.prototype.getCanonicalImageUri = function(e) {
      var t = null, i = "full", r = 0, l = "default", s = e, o;
      if (this.externalResource && this.externalResource.data && this.externalResource.data["@id"])
        t = this.externalResource.data["@id"], s || (s = this.externalResource.data.width), this.externalResource.data["@context"] && (this.externalResource.data["@context"].indexOf("/1.0/context.json") > -1 || this.externalResource.data["@context"].indexOf("/1.1/context.json") > -1 || this.externalResource.data["@context"].indexOf("/1/context.json") > -1) && (l = "native");
      else {
        var a = void 0;
        if (a = this.getImages(), a && a.length) {
          var h = a[0], c = h.getResource(), p = c.getServices();
          s || (s = c.getWidth());
          var v = p ? p.find(function(C) {
            return W.isImageProfile(C.getProfile()) || W.isImageServiceType(C.getIIIFResourceType());
          }) : null;
          if (v)
            t = v.id, l = W.getImageQuality(v.getProfile());
          else if (s === c.getWidth())
            return c.id;
        }
        if (a = this.getContent(), a && a.length) {
          var h = a[0], w = h.getBody(), E = w[0], p = E.getServices();
          s || (s = E.getWidth());
          var v = p ? p.find(function(Z) {
            return W.isImageServiceType(Z.getIIIFResourceType());
          }) : null;
          if (v)
            t = v.id, l = W.getImageQuality(v.getProfile());
          else if (s === E.getWidth())
            return E.id;
        }
        if (!t) {
          var _ = this.getProperty("thumbnail");
          if (_) {
            if (typeof _ == "string")
              return _;
            if (_["@id"])
              return _["@id"];
            if (_.length)
              return _[0].id;
          }
        }
      }
      o = s + ",", t && t.endsWith("/") && (t = t.substr(0, t.length - 1));
      var S = [t, i, o, r, l + ".jpg"].join("/");
      return S;
    }, n.prototype.getMaxDimensions = function() {
      var e = null, t;
      return this.externalResource && this.externalResource.data && this.externalResource.data.profile && (t = this.externalResource.data.profile, Array.isArray(t) && (t = t.filter(function(i) {
        return i.maxWidth;
      })[0], t && (e = new Nr(t.maxWidth, t.maxHeight ? t.maxHeight : t.maxWidth)))), e;
    }, n.prototype.getContent = function() {
      var e = [], t = this.__jsonld.items || this.__jsonld.content;
      if (!t)
        return e;
      var i = null;
      if (t.length && (i = new ki(t[0], this.options)), !i)
        return e;
      for (var r = i.getItems(), l = 0; l < r.length; l++) {
        var s = r[l], o = new gt(s, this.options);
        e.push(o);
      }
      return e;
    }, n.prototype.getDuration = function() {
      return this.getProperty("duration");
    }, n.prototype.getImages = function() {
      var e = [];
      if (!this.__jsonld.images)
        return e;
      for (var t = 0; t < this.__jsonld.images.length; t++) {
        var i = this.__jsonld.images[t], r = new gt(i, this.options);
        e.push(r);
      }
      return e;
    }, n.prototype.getIndex = function() {
      return this.getProperty("index");
    }, n.prototype.getOtherContent = function() {
      var e = this, t = Array.isArray(this.getProperty("otherContent")) ? this.getProperty("otherContent") : [this.getProperty("otherContent")], i = function(l, s) {
        return typeof l != "string" || typeof s != "string" ? !1 : l.toLowerCase() === l.toLowerCase();
      }, r = t.filter(function(l) {
        return l && i(l["@type"], "sc:AnnotationList");
      }).map(function(l, s) {
        return new _n(l.label || "Annotation list " + s, l, e.options);
      }).map(function(l) {
        return l.load();
      });
      return Promise.all(r);
    }, n.prototype.getWidth = function() {
      return this.getProperty("width");
    }, n.prototype.getHeight = function() {
      return this.getProperty("height");
    }, n.prototype.getViewingHint = function() {
      return this.getProperty("viewingHint");
    }, Object.defineProperty(n.prototype, "imageResources", {
      get: function() {
        var e = this, t = xi([
          this.getImages().map(function(i) {
            return i.getResource();
          }),
          this.getContent().map(function(i) {
            return i.getBody();
          })
        ]);
        return jt(t.map(function(i) {
          switch (i.getProperty("type").toLowerCase()) {
            case D.ExternalResourceType.CHOICE:
            case D.ExternalResourceType.OA_CHOICE:
              return new n({
                images: jt([
                  i.getProperty("default"),
                  i.getProperty("item")
                ]).map(function(r) {
                  return { resource: r };
                })
              }, e.options).getImages().map(function(r) {
                return r.getResource();
              });
            default:
              return i;
          }
        }));
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "resourceAnnotations", {
      get: function() {
        return xi([this.getImages(), this.getContent()]);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.resourceAnnotation = function(e) {
      return this.resourceAnnotations.find(function(t) {
        return t.getResource().id === e || jt(new Array(t.getBody())).some(function(i) {
          return i.id === e;
        });
      });
    }, n.prototype.onFragment = function(e) {
      var t = this.resourceAnnotation(e);
      if (t) {
        var i = t.getProperty("on"), r = t.getProperty("target");
        if (!(!i || !r)) {
          var l = (i || r).match(/xywh=(.*)$/);
          if (l)
            return l[1].split(",").map(function(s) {
              return parseInt(s, 10);
            });
        }
      }
    }, Object.defineProperty(n.prototype, "iiifImageResources", {
      get: function() {
        return this.imageResources.filter(function(e) {
          return e && e.getServices()[0] && e.getServices()[0].id;
        });
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "imageServiceIds", {
      get: function() {
        return this.iiifImageResources.map(function(e) {
          return e.getServices()[0].id;
        });
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "aspectRatio", {
      get: function() {
        return this.getWidth() / this.getHeight();
      },
      enumerable: !0,
      configurable: !0
    }), n;
  }(oi)
), wr = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), _r = (
  /** @class */
  function(d) {
    wr(n, d);
    function n(e, t) {
      var i = d.call(this, e, t) || this;
      return i.items = [], i._collections = null, i._manifests = null, e.__collection = i, i;
    }
    return n.prototype.getCollections = function() {
      return this._collections ? this._collections : this._collections = this.items.filter(function(e) {
        return e.isCollection();
      });
    }, n.prototype.getManifests = function() {
      return this._manifests ? this._manifests : this._manifests = this.items.filter(function(e) {
        return e.isManifest();
      });
    }, n.prototype.getCollectionByIndex = function(e) {
      for (var t = this.getCollections(), i, r = 0; r < t.length; r++) {
        var l = t[r];
        l.index === e && (i = l);
      }
      if (i)
        return i.options.index = e, i.load();
      throw new Error("Collection index not found");
    }, n.prototype.getManifestByIndex = function(e) {
      for (var t = this.getManifests(), i, r = 0; r < t.length; r++) {
        var l = t[r];
        l.index === e && (i = l);
      }
      if (i)
        return i.options.index = e, i.load();
      throw new Error("Manifest index not found");
    }, n.prototype.getTotalCollections = function() {
      return this.getCollections().length;
    }, n.prototype.getTotalManifests = function() {
      return this.getManifests().length;
    }, n.prototype.getTotalItems = function() {
      return this.items.length;
    }, n.prototype.getViewingDirection = function() {
      return this.getProperty("viewingDirection") ? this.getProperty("viewingDirection") : D.ViewingDirection.LEFT_TO_RIGHT;
    }, n.prototype.getBehavior = function() {
      var e = this.getProperty("behavior");
      return Array.isArray(e) && (e = e[0]), e || null;
    }, n.prototype.getViewingHint = function() {
      return this.getProperty("viewingHint");
    }, n.prototype.getDefaultTree = function() {
      return d.prototype.getDefaultTree.call(this), this.defaultTree.data.type = W.normaliseType(ke.COLLECTION), this._parseManifests(this), this._parseCollections(this), W.generateTreeNodeIds(this.defaultTree), this.defaultTree;
    }, n.prototype._parseManifests = function(e) {
      if (e.getManifests() && e.getManifests().length)
        for (var t = 0; t < e.getManifests().length; t++) {
          var i = e.getManifests()[t], r = i.getDefaultTree();
          r.label = i.parentLabel || i.getLabel().getValue(this.options.locale) || "manifest " + (t + 1), r.navDate = i.getNavDate(), r.data.id = i.id, r.data.type = W.normaliseType(ke.MANIFEST), e.defaultTree.addNode(r);
        }
    }, n.prototype._parseCollections = function(e) {
      if (e.getCollections() && e.getCollections().length)
        for (var t = 0; t < e.getCollections().length; t++) {
          var i = e.getCollections()[t], r = i.getDefaultTree();
          r.label = i.parentLabel || i.getLabel().getValue(this.options.locale) || "collection " + (t + 1), r.navDate = i.getNavDate(), r.data.id = i.id, r.data.type = W.normaliseType(ke.COLLECTION), e.defaultTree.addNode(r);
        }
    }, n;
  }(zi)
), Wt = (
  /** @class */
  function() {
    function d(n, e) {
      this.start = n, this.end = e;
    }
    return d.prototype.getLength = function() {
      return this.end - this.start;
    }, d;
  }()
), Ct = (
  /** @class */
  function() {
    function d(n) {
      this.defaultLocale = n;
    }
    return d.prototype.parse = function(n) {
      this.resource = n, this.label = ze.parse(this.resource.label, this.defaultLocale), this.value = ze.parse(this.resource.value, this.defaultLocale);
    }, d.prototype.getLabel = function(n) {
      return this.label === null ? null : (Array.isArray(n) && !n.length && (n = void 0), this.label.getValue(n || this.defaultLocale));
    }, d.prototype.setLabel = function(n) {
      this.label === null && (this.label = new ze([])), this.label.setValue(n, this.defaultLocale);
    }, d.prototype.getValue = function(n, e) {
      return e === void 0 && (e = "<br/>"), this.value === null ? null : (Array.isArray(n) && !n.length && (n = void 0), this.value.getValue(n || this.defaultLocale, e));
    }, d.prototype.getValues = function(n) {
      return this.value === null ? [] : (Array.isArray(n) && !n.length && (n = void 0), this.value.getValues(n || this.defaultLocale));
    }, d.prototype.setValue = function(n) {
      this.value === null && (this.value = new ze([])), this.value.setValue(n, this.defaultLocale);
    }, d;
  }()
), Er = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}();
(function(d) {
  Er(n, d);
  function n() {
    return d !== null && d.apply(this, arguments) || this;
  }
  return n.getValue = function(e, t) {
    return e.getValue(t, "<br/>");
  }, n.getValues = function(e, t) {
    return e.getValues(t);
  }, n;
})(Array);
var B = {};
Object.defineProperty(B, "__esModule", { value: !0 });
B.CONTINUE = 100;
B.SWITCHING_PROTOCOLS = 101;
B.PROCESSING = 102;
var nt = B.OK = 200;
B.CREATED = 201;
B.ACCEPTED = 202;
B.NON_AUTHORITATIVE_INFORMATION = 203;
B.NO_CONTENT = 204;
B.RESET_CONTENT = 205;
B.PARTIAL_CONTENT = 206;
B.MULTI_STATUS = 207;
B.MULTIPLE_CHOICES = 300;
B.MOVED_PERMANENTLY = 301;
var ut = B.MOVED_TEMPORARILY = 302;
B.SEE_OTHER = 303;
B.NOT_MODIFIED = 304;
B.USE_PROXY = 305;
B.TEMPORARY_REDIRECT = 307;
B.BAD_REQUEST = 400;
var Sr = B.UNAUTHORIZED = 401;
B.PAYMENT_REQUIRED = 402;
B.FORBIDDEN = 403;
B.NOT_FOUND = 404;
B.METHOD_NOT_ALLOWED = 405;
B.NOT_ACCEPTABLE = 406;
B.PROXY_AUTHENTICATION_REQUIRED = 407;
B.REQUEST_TIME_OUT = 408;
B.CONFLICT = 409;
B.GONE = 410;
B.LENGTH_REQUIRED = 411;
B.PRECONDITION_FAILED = 412;
B.REQUEST_ENTITY_TOO_LARGE = 413;
B.REQUEST_URI_TOO_LARGE = 414;
B.UNSUPPORTED_MEDIA_TYPE = 415;
B.REQUESTED_RANGE_NOT_SATISFIABLE = 416;
B.EXPECTATION_FAILED = 417;
B.IM_A_TEAPOT = 418;
B.UNPROCESSABLE_ENTITY = 422;
B.LOCKED = 423;
B.FAILED_DEPENDENCY = 424;
B.UNORDERED_COLLECTION = 425;
B.UPGRADE_REQUIRED = 426;
B.PRECONDITION_REQUIRED = 428;
B.TOO_MANY_REQUESTS = 429;
B.REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
B.INTERNAL_SERVER_ERROR = 500;
B.NOT_IMPLEMENTED = 501;
B.BAD_GATEWAY = 502;
B.SERVICE_UNAVAILABLE = 503;
B.GATEWAY_TIME_OUT = 504;
B.HTTP_VERSION_NOT_SUPPORTED = 505;
B.VARIANT_ALSO_NEGOTIATES = 506;
B.INSUFFICIENT_STORAGE = 507;
B.BANDWIDTH_LIMIT_EXCEEDED = 509;
B.NOT_EXTENDED = 510;
B.NETWORK_AUTHENTICATION_REQUIRED = 511;
function xr(d, n) {
  return n = n || {}, new Promise(function(e, t) {
    var i = new XMLHttpRequest(), r = [], l = [], s = {}, o = function() {
      return { ok: (i.status / 100 | 0) == 2, statusText: i.statusText, status: i.status, url: i.responseURL, text: function() {
        return Promise.resolve(i.responseText);
      }, json: function() {
        return Promise.resolve(i.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([i.response]));
      }, clone: o, headers: { keys: function() {
        return r;
      }, entries: function() {
        return l;
      }, get: function(h) {
        return s[h.toLowerCase()];
      }, has: function(h) {
        return h.toLowerCase() in s;
      } } };
    };
    for (var a in i.open(n.method || "get", d, !0), i.onload = function() {
      i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(h, c, p) {
        r.push(c = c.toLowerCase()), l.push([c, p]), s[c] = s[c] ? s[c] + "," + p : p;
      }), e(o());
    }, i.onerror = t, i.withCredentials = n.credentials == "include", n.headers)
      i.setRequestHeader(a, n.headers[a]);
    i.send(n.body || null);
  });
}
const Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xr
}, Symbol.toStringTag, { value: "Module" })), Pi = /* @__PURE__ */ pn(Pr);
self.fetch || (self.fetch = Pi.default || Pi);
var qt = globalThis && globalThis.__awaiter || function(d, n, e, t) {
  function i(r) {
    return r instanceof e ? r : new e(function(l) {
      l(r);
    });
  }
  return new (e || (e = Promise))(function(r, l) {
    function s(h) {
      try {
        a(t.next(h));
      } catch (c) {
        l(c);
      }
    }
    function o(h) {
      try {
        a(t.throw(h));
      } catch (c) {
        l(c);
      }
    }
    function a(h) {
      h.done ? r(h.value) : i(h.value).then(s, o);
    }
    a((t = t.apply(d, n || [])).next());
  });
}, Zt = globalThis && globalThis.__generator || function(d, n) {
  var e = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, t, i, r, l;
  return l = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function s(a) {
    return function(h) {
      return o([a, h]);
    };
  }
  function o(a) {
    if (t)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (t = 1, i && (r = a[0] & 2 ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, a[1])).done)
          return r;
        switch (i = 0, r && (a = [a[0] & 2, r.value]), a[0]) {
          case 0:
          case 1:
            r = a;
            break;
          case 4:
            return e.label++, { value: a[1], done: !1 };
          case 5:
            e.label++, i = a[1], a = [0];
            continue;
          case 7:
            a = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (r = e.trys, !(r = r.length > 0 && r[r.length - 1]) && (a[0] === 6 || a[0] === 2)) {
              e = 0;
              continue;
            }
            if (a[0] === 3 && (!r || a[1] > r[0] && a[1] < r[3])) {
              e.label = a[1];
              break;
            }
            if (a[0] === 6 && e.label < r[1]) {
              e.label = r[1], r = a;
              break;
            }
            if (r && e.label < r[2]) {
              e.label = r[2], e.ops.push(a);
              break;
            }
            r[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        a = n.call(d, e);
      } catch (h) {
        a = [6, h], i = 0;
      } finally {
        t = r = 0;
      }
    if (a[0] & 5)
      throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
  }
}, W = (
  /** @class */
  function() {
    function d() {
    }
    return d.getMediaType = function(n) {
      return n = n.toLowerCase(), n = n.split(";")[0], n.trim();
    }, d.getImageQuality = function(n) {
      return n === D.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_1 || n === D.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_2 || n === D.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_1 || n === D.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_2 || n === D.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_1 || n === D.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_2 || n === D.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_1 || n === D.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_2 || n === D.ServiceProfile.IMAGE_1_LEVEL_1 || n === D.ServiceProfile.IMAGE_1_PROFILE_LEVEL_1 || n === D.ServiceProfile.IMAGE_1_LEVEL_2 || n === D.ServiceProfile.IMAGE_1_PROFILE_LEVEL_2 ? "native" : "default";
    }, d.getInexactLocale = function(n) {
      return n.indexOf("-") !== -1 ? n.substr(0, n.indexOf("-")) : n;
    }, d.getLocalisedValue = function(n, e) {
      if (!Array.isArray(n))
        return n;
      for (var t = 0; t < n.length; t++) {
        var i = n[t], r = i["@language"];
        if (e === r)
          return i["@value"];
      }
      for (var l = e.substr(0, e.indexOf("-")), t = 0; t < n.length; t++) {
        var s = n[t], o = s["@language"];
        if (o === l)
          return s["@value"];
      }
      return null;
    }, d.generateTreeNodeIds = function(n, e) {
      e === void 0 && (e = 0);
      var t;
      n.parentNode ? t = n.parentNode.id + "-" + e : t = "0", n.id = t;
      for (var i = 0; i < n.nodes.length; i++) {
        var r = n.nodes[i];
        d.generateTreeNodeIds(r, i);
      }
    }, d.normaliseType = function(n) {
      if (n = (n || "").toLowerCase(), n.indexOf(":") !== -1) {
        var e = n.split(":");
        return e[1];
      }
      return n;
    }, d.normaliseUrl = function(n) {
      return n = n.substr(n.indexOf("://")), n.indexOf("#") !== -1 && (n = n.split("#")[0]), n;
    }, d.normalisedUrlsMatch = function(n, e) {
      return d.normaliseUrl(n) === d.normaliseUrl(e);
    }, d.isImageProfile = function(n) {
      return !!(d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_0) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_1) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_2) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_0) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_2) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_0) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_1) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_2) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_1) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_2) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_LEVEL_0) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_PROFILE_LEVEL_0) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_LEVEL_1) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_PROFILE_LEVEL_1) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_LEVEL_2) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_PROFILE_LEVEL_2) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_2_LEVEL_0) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_2_PROFILE_LEVEL_0) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_2_LEVEL_1) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_2_PROFILE_LEVEL_1) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_2_LEVEL_2) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_2_PROFILE_LEVEL_2));
    }, d.isImageServiceType = function(n) {
      return n !== null && n.toLowerCase() === D.ServiceType.IMAGE_SERVICE_2.toLowerCase() || n === D.ServiceType.IMAGE_SERVICE_3.toLowerCase();
    }, d.isLevel0ImageProfile = function(n) {
      return !!(d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_0) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_0) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_0) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_0) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_LEVEL_0) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_PROFILE_LEVEL_0) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_2_LEVEL_0) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_2_PROFILE_LEVEL_0));
    }, d.isLevel1ImageProfile = function(n) {
      return !!(d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_1) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_1) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_1) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_1) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_LEVEL_1) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_PROFILE_LEVEL_1) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_2_LEVEL_1) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_2_PROFILE_LEVEL_1));
    }, d.isLevel2ImageProfile = function(n) {
      return !!(d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_2) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_2) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_2) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_2) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_LEVEL_2) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_1_PROFILE_LEVEL_2) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_2_LEVEL_2) || d.normalisedUrlsMatch(n, D.ServiceProfile.IMAGE_2_PROFILE_LEVEL_2));
    }, d.parseManifest = function(n, e) {
      return Zi.parse(n, e);
    }, d.checkStatus = function(n) {
      if (n.ok)
        return n;
      var e = new Error(n.statusText);
      return e.response = n, Promise.reject(e);
    }, d.loadManifest = function(n) {
      return new Promise(function(e, t) {
        fetch(n).then(d.checkStatus).then(function(i) {
          return i.json();
        }).then(function(i) {
          e(i);
        }).catch(function(i) {
          t();
        });
      });
    }, d.loadExternalResourcesAuth1 = function(n, e, t, i, r, l, s, o) {
      return new Promise(function(a, h) {
        var c = n.map(function(p) {
          return d.loadExternalResourceAuth1(p, e, t, i, r, l, s, o);
        });
        Promise.all(c).then(function() {
          a(n);
        }).catch(function(p) {
          h(p);
        });
      });
    }, d.loadExternalResourceAuth1 = function(n, e, t, i, r, l, s, o) {
      return qt(this, void 0, void 0, function() {
        var a;
        return Zt(this, function(h) {
          switch (h.label) {
            case 0:
              return [4, i(n)];
            case 1:
              return a = h.sent(), a ? [4, n.getData(a)] : [3, 6];
            case 2:
              return h.sent(), n.status !== nt ? [3, 3] : [2, n];
            case 3:
              return [4, d.doAuthChain(n, e, t, r, l, s, o)];
            case 4:
              h.sent(), h.label = 5;
            case 5:
              if (n.status === nt || n.status === ut)
                return [2, n];
              throw d.createAuthorizationFailedError();
            case 6:
              return [4, n.getData()];
            case 7:
              return h.sent(), n.status === ut || n.status === Sr ? [4, d.doAuthChain(n, e, t, r, l, s, o)] : [3, 9];
            case 8:
              h.sent(), h.label = 9;
            case 9:
              if (n.status === nt || n.status === ut)
                return [2, n];
              throw d.createAuthorizationFailedError();
          }
        });
      });
    }, d.doAuthChain = function(n, e, t, i, r, l, s) {
      return qt(this, void 0, void 0, function() {
        var o, a, h, c, p, v, w, E, E;
        return Zt(this, function(_) {
          switch (_.label) {
            case 0:
              return n.isAccessControlled() ? (o = n.externalService, o && (o.options = n.options), a = n.kioskService, a && (a.options = n.options), h = n.clickThroughService, h && (h.options = n.options), c = n.loginService, c && (c.options = n.options), !n.isResponseHandled && n.status === ut ? [4, l(n)] : [3, 2]) : [2, n];
            case 1:
              return _.sent(), [2, n];
            case 2:
              return p = null, v = null, p = o, p ? (v = p, [4, d.attemptResourceWithToken(n, t, p)]) : [3, 4];
            case 3:
              return _.sent(), [2, n];
            case 4:
              return p = a, p ? (v = p, w = e(p), w ? [4, i(w)] : [3, 7]) : [3, 7];
            case 5:
              return _.sent(), [4, d.attemptResourceWithToken(n, t, p)];
            case 6:
              return _.sent(), [2, n];
            case 7:
              return p = h, p ? (v = p, [4, r(n, p)]) : [3, 11];
            case 8:
              return E = _.sent(), E ? [4, i(E)] : [3, 11];
            case 9:
              return _.sent(), [4, d.attemptResourceWithToken(n, t, p)];
            case 10:
              return _.sent(), [2, n];
            case 11:
              return p = c, p ? (v = p, [4, r(n, p)]) : [3, 15];
            case 12:
              return E = _.sent(), E ? [4, i(E)] : [3, 15];
            case 13:
              return _.sent(), [4, d.attemptResourceWithToken(n, t, p)];
            case 14:
              return _.sent(), [2, n];
            case 15:
              return v && s(n, v), [
                2
                /*return*/
              ];
          }
        });
      });
    }, d.attemptResourceWithToken = function(n, e, t) {
      return qt(this, void 0, void 0, function() {
        var i, r;
        return Zt(this, function(l) {
          switch (l.label) {
            case 0:
              return i = t.getService(D.ServiceProfile.AUTH_1_TOKEN), i ? [4, e(n, i)] : [3, 3];
            case 1:
              return r = l.sent(), r && r.accessToken ? [4, n.getData(r)] : [3, 3];
            case 2:
              return l.sent(), [2, n];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, d.loadExternalResourcesAuth09 = function(n, e, t, i, r, l, s, o, a, h) {
      return new Promise(function(c, p) {
        var v = n.map(function(w) {
          return d.loadExternalResourceAuth09(w, e, t, i, r, l, s, o, a, h);
        });
        Promise.all(v).then(function() {
          c(n);
        }).catch(function(w) {
          p(w);
        });
      });
    }, d.loadExternalResourceAuth09 = function(n, e, t, i, r, l, s, o, a, h) {
      return new Promise(function(c, p) {
        h && h.pessimisticAccessControl ? n.getData().then(function() {
          n.isAccessControlled() ? n.clickThroughService ? (c(t(n)), c(i(n))) : r(n).then(function() {
            l(n, !0).then(function(v) {
              n.getData(v).then(function() {
                c(a(n));
              }).catch(function(w) {
                p(d.createInternalServerError(w));
              });
            }).catch(function(v) {
              p(d.createInternalServerError(v));
            });
          }).catch(function(v) {
            p(d.createInternalServerError(v));
          }) : c(n);
        }).catch(function(v) {
          p(d.createInternalServerError(v));
        }) : o(n, e).then(function(v) {
          v ? n.getData(v).then(function() {
            n.status === nt ? c(a(n)) : d.authorize(n, e, t, i, r, l, s, o).then(function() {
              c(a(n));
            }).catch(function(w) {
              p(d.createAuthorizationFailedError());
            });
          }).catch(function(w) {
            p(d.createAuthorizationFailedError());
          }) : d.authorize(n, e, t, i, r, l, s, o).then(function() {
            c(a(n));
          }).catch(function(w) {
            p(d.createAuthorizationFailedError());
          });
        }).catch(function(v) {
          p(d.createAuthorizationFailedError());
        });
      });
    }, d.createError = function(n, e) {
      var t = new Error();
      return t.message = e, t.name = String(n), t;
    }, d.createAuthorizationFailedError = function() {
      return d.createError(pt.AUTHORIZATION_FAILED, "Authorization failed");
    }, d.createRestrictedError = function() {
      return d.createError(pt.RESTRICTED, "Restricted");
    }, d.createInternalServerError = function(n) {
      return d.createError(pt.INTERNAL_SERVER_ERROR, n);
    }, d.authorize = function(n, e, t, i, r, l, s, o) {
      return new Promise(function(a, h) {
        n.getData().then(function() {
          n.isAccessControlled() ? o(n, e).then(function(c) {
            c ? n.getData(c).then(function() {
              n.status === nt ? a(n) : d.showAuthInteraction(n, e, t, i, r, l, s, a, h);
            }).catch(function(p) {
              h(d.createInternalServerError(p));
            }) : l(n, !1).then(function(p) {
              p ? s(n, p, e).then(function() {
                n.getData(p).then(function() {
                  n.status === nt ? a(n) : d.showAuthInteraction(n, e, t, i, r, l, s, a, h);
                }).catch(function(v) {
                  h(d.createInternalServerError(v));
                });
              }).catch(function(v) {
                h(d.createInternalServerError(v));
              }) : d.showAuthInteraction(n, e, t, i, r, l, s, a, h);
            });
          }).catch(function(c) {
            h(d.createInternalServerError(c));
          }) : a(n);
        });
      });
    }, d.showAuthInteraction = function(n, e, t, i, r, l, s, o, a) {
      n.status === ut && !n.isResponseHandled ? o(n) : n.clickThroughService && !n.isResponseHandled ? t(n).then(function() {
        l(n, !0).then(function(h) {
          s(n, h, e).then(function() {
            n.getData(h).then(function() {
              o(n);
            }).catch(function(c) {
              a(d.createInternalServerError(c));
            });
          }).catch(function(c) {
            a(d.createInternalServerError(c));
          });
        }).catch(function(h) {
          a(d.createInternalServerError(h));
        });
      }) : r(n).then(function() {
        l(n, !0).then(function(h) {
          s(n, h, e).then(function() {
            n.getData(h).then(function() {
              o(n);
            }).catch(function(c) {
              a(d.createInternalServerError(c));
            });
          }).catch(function(c) {
            a(d.createInternalServerError(c));
          });
        }).catch(function(h) {
          a(d.createInternalServerError(h));
        });
      });
    }, d.getService = function(n, e) {
      for (var t = this.getServices(n), i = 0; i < t.length; i++) {
        var r = t[i];
        if (r.getProfile() === e)
          return r;
      }
      return null;
    }, d.getResourceById = function(n, e) {
      return d.traverseAndFind(n.__jsonld, "@id", e);
    }, d.traverseAndFind = function(n, e, t) {
      if (n.hasOwnProperty(e) && n[e] === t)
        return n;
      for (var i = 0; i < Object.keys(n).length; i++)
        if (typeof n[Object.keys(n)[i]] == "object") {
          var r = d.traverseAndFind(n[Object.keys(n)[i]], e, t);
          if (r != null)
            return r;
        }
    }, d.getServices = function(n, e) {
      var t = e === void 0 ? {} : e, i = t.onlyService, r = i === void 0 ? !1 : i, l = t.onlyServices, s = l === void 0 ? !1 : l, o = t.skipParentResources, a = o === void 0 ? !1 : o, h = [];
      !a && n && n.options && n.options.resource && n.options.resource !== n && h.push.apply(h, d.getServices(n.options.resource, { onlyServices: !0 }));
      var c = s ? [] : (n.__jsonld || n).service || [];
      if (Array.isArray(c) || (c = [c]), r || c.push.apply(c, (n.__jsonld || n).services || []), c.length === 0)
        return h;
      for (var p = 0; p < c.length; p++) {
        var v = c[p];
        if (typeof v == "string") {
          var w = this.getResourceById(n.options.resource, v);
          w && h.push(new Ci(w.__jsonld || w, n.options));
        } else
          h.push(new Ci(v, n.options));
      }
      return h;
    }, d.getTemporalComponent = function(n) {
      var e = /t=([^&]+)/g.exec(n), t = null;
      return e && e[1] && (t = e[1].split(",")), t;
    }, d;
  }()
), Rr = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), Cr = globalThis && globalThis.__spreadArrays || function() {
  for (var d = 0, n = 0, e = arguments.length; n < e; n++)
    d += arguments[n].length;
  for (var t = Array(d), i = 0, n = 0; n < e; n++)
    for (var r = arguments[n], l = 0, s = r.length; l < s; l++, i++)
      t[i] = r[l];
  return t;
}, rt = (
  /** @class */
  function() {
    function d(n, e, t) {
      t === void 0 && (t = "none"), Array.isArray(n) && n.length === 1 ? this._value = n[0] : this._value = n, (e === "none" || e === "@none") && (e = void 0), this._locale = e, this._defaultLocale = t;
    }
    return d.parseV2Value = function(n, e) {
      return typeof n == "string" ? new d(n, void 0, e) : n["@value"] ? new d(n["@value"], n["@language"], e) : null;
    }, Object.defineProperty(d.prototype, "value", {
      /*** @deprecated Use PropertyValue#getValue instead */
      get: function() {
        return Array.isArray(this._value) ? this._value.join("<br/>") : this._value;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(d.prototype, "locale", {
      /*** @deprecated Don't use, only used for backwards compatibility reasons */
      get: function() {
        return this._locale === void 0 ? this._defaultLocale : this._locale;
      },
      enumerable: !0,
      configurable: !0
    }), d.prototype.addValue = function(n) {
      Array.isArray(this._value) || (this._value = [this._value]), Array.isArray(n) ? this._value = this._value.concat(n) : this._value.push(n);
    }, d;
  }()
), ze = (
  /** @class */
  function(d) {
    Rr(n, d);
    function n(e, t) {
      e === void 0 && (e = []);
      var i = d.apply(this, e) || this;
      return i.__proto__ = n.prototype, i._defaultLocale = t, i;
    }
    return n.parse = function(e, t) {
      if (!e)
        return new n([], t);
      if (Array.isArray(e)) {
        var i = e.map(function(l) {
          return rt.parseV2Value(l, t);
        }).filter(function(l) {
          return l !== null;
        }), r = i.reduce(function(l, s) {
          var o = s._locale;
          return o || (o = "none"), l[o] ? l[o].addValue(s._value) : l[o] = s, l;
        }, {});
        return new n(Object.values(r), t);
      } else {
        if (typeof e == "string")
          return new n([new rt(e, void 0, t)], t);
        if (e["@language"]) {
          var i = rt.parseV2Value(e);
          return new n(i !== null ? [i] : [], t);
        } else if (e["@value"]) {
          var i = rt.parseV2Value(e);
          return new n(i !== null ? [i] : [], t);
        } else
          return new n(Object.keys(e).map(function(l) {
            var s = e[l];
            if (!Array.isArray(s))
              throw new Error("A IIIF v3 localized property value must have an array as the value for a given language.");
            return new rt(s, l, t);
          }), t);
      }
    }, n.prototype.getSuitableLocale = function(e) {
      for (var t = Cr(this).map(function(v) {
        return v._locale;
      }).filter(function(v) {
        return v !== void 0;
      }), i = function(v) {
        var w = t.find(function(E) {
          return E === v;
        });
        if (w)
          return { value: w };
      }, r = 0, l = e; r < l.length; r++) {
        var s = l[r], o = i(s);
        if (typeof o == "object")
          return o.value;
      }
      for (var a = function(v) {
        var w = t.find(function(E) {
          return W.getInexactLocale(E) === W.getInexactLocale(v);
        });
        if (w)
          return { value: w };
      }, h = 0, c = e; h < c.length; h++) {
        var s = c[h], p = a(s);
        if (typeof p == "object")
          return p.value;
      }
    }, n.prototype.setValue = function(e, t) {
      var i = void 0;
      if (!t)
        i = this.find(function(l) {
          return l._locale === void 0;
        });
      else {
        var r = this.getSuitableLocale([t]);
        r && (i = this.find(function(l) {
          return l._locale === r;
        }));
      }
      i ? i._value = e : this.push(new rt(e, t, this._defaultLocale));
    }, n.prototype.getValue = function(e, t) {
      var i = this.getValues(e);
      return i.length === 0 ? null : t ? i.join(t) : i[0];
    }, n.prototype.getValues = function(e) {
      if (!this.length)
        return [];
      var t;
      if (e ? Array.isArray(e) ? t = e : t = [e] : t = [], this.length === 1 && this[0]._locale === void 0) {
        var i = this[0]._value;
        return Array.isArray(i) ? i : [i];
      }
      var r = this.getSuitableLocale(t);
      if (r) {
        var i = this.find(function(a) {
          return a._locale === r;
        })._value;
        return Array.isArray(i) ? i : [i];
      }
      var l = !this.find(function(o) {
        return o._locale === void 0;
      });
      if (l) {
        var i = this[0]._value;
        return Array.isArray(i) ? i : [i];
      }
      var s = this.find(function(o) {
        return o._locale === void 0;
      });
      return s ? Array.isArray(s._value) ? s._value : [s._value] : [];
    }, n;
  }(Array)
), br = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), qi = (
  /** @class */
  function(d) {
    br(n, d);
    function n(e, t) {
      var i = d.call(this, e, t) || this;
      if (i.index = 0, i._allRanges = null, i.items = [], i._topRanges = [], i.__jsonld.structures && i.__jsonld.structures.length)
        for (var r = i._getTopRanges(), l = 0; l < r.length; l++) {
          var s = r[l];
          i._parseRanges(s, String(l));
        }
      return i;
    }
    return n.prototype.getPosterCanvas = function() {
      var e = this.getProperty("posterCanvas");
      return e && (e = new Rt(e, this.options)), e;
    }, n.prototype.getAccompanyingCanvas = function() {
      var e = this.getProperty("accompanyingCanvas");
      return e && (e = new Rt(e, this.options)), e;
    }, n.prototype.getBehavior = function() {
      var e = this.getProperty("behavior");
      return Array.isArray(e) && (e = e[0]), e || null;
    }, n.prototype.getDefaultTree = function() {
      if (d.prototype.getDefaultTree.call(this), this.defaultTree.data.type = W.normaliseType(ke.MANIFEST), !this.isLoaded)
        return this.defaultTree;
      var e = this.getTopRanges();
      return e.length && e[0].getTree(this.defaultTree), W.generateTreeNodeIds(this.defaultTree), this.defaultTree;
    }, n.prototype._getTopRanges = function() {
      var e = [];
      if (this.__jsonld.structures && this.__jsonld.structures.length) {
        for (var t = 0; t < this.__jsonld.structures.length; t++) {
          var i = this.__jsonld.structures[t];
          i.viewingHint === D.ViewingHint.TOP && e.push(i);
        }
        if (!e.length) {
          var r = {};
          r.ranges = this.__jsonld.structures, e.push(r);
        }
      }
      return e;
    }, n.prototype.getTopRanges = function() {
      return this._topRanges;
    }, n.prototype._getRangeById = function(e) {
      if (this.__jsonld.structures && this.__jsonld.structures.length)
        for (var t = 0; t < this.__jsonld.structures.length; t++) {
          var i = this.__jsonld.structures[t];
          if (i["@id"] === e || i.id === e)
            return i;
        }
      return null;
    }, n.prototype._parseRanges = function(e, t, i) {
      var r, l = null;
      if (typeof e == "string" && (l = e, e = this._getRangeById(l)), !e) {
        console.warn("Range:", l, "does not exist");
        return;
      }
      r = new Ar(e, this.options), r.parentRange = i, r.path = t, i ? i.items.push(r) : this._topRanges.push(r);
      var s = e.items || e.members;
      if (s)
        for (var o = 0; o < s.length; o++) {
          var a = s[o];
          if (a["@type"] && a["@type"].toLowerCase() === "sc:range" || a.type && a.type.toLowerCase() === "range")
            this._parseRanges(a, t + "/" + o, r);
          else if (a["@type"] && a["@type"].toLowerCase() === "sc:canvas" || a.type && a.type.toLowerCase() === "canvas") {
            r.canvases || (r.canvases = []);
            var h = a.id || a["@id"];
            r.canvases.push(h);
          }
        }
      else if (e.ranges)
        for (var o = 0; o < e.ranges.length; o++)
          this._parseRanges(e.ranges[o], t + "/" + o, r);
    }, n.prototype.getAllRanges = function() {
      if (this._allRanges != null)
        return this._allRanges;
      this._allRanges = [];
      for (var e = this.getTopRanges(), t = function(l) {
        var s = e[l];
        s.id && i._allRanges.push(s);
        var o = function(h, c) {
          h.add(c);
          var p = c.getRanges();
          return p.length ? p.reduce(o, h) : h;
        }, a = Array.from(s.getRanges().reduce(o, /* @__PURE__ */ new Set()));
        i._allRanges = i._allRanges.concat(a);
      }, i = this, r = 0; r < e.length; r++)
        t(r);
      return this._allRanges;
    }, n.prototype.getRangeById = function(e) {
      for (var t = this.getAllRanges(), i = 0; i < t.length; i++) {
        var r = t[i];
        if (r.id === e)
          return r;
      }
      return null;
    }, n.prototype.getRangeByPath = function(e) {
      for (var t = this.getAllRanges(), i = 0; i < t.length; i++) {
        var r = t[i];
        if (r.path === e)
          return r;
      }
      return null;
    }, n.prototype.getSequences = function() {
      if (this.items.length)
        return this.items;
      var e = this.__jsonld.mediaSequences || this.__jsonld.sequences;
      if (e)
        for (var t = 0; t < e.length; t++) {
          var i = e[t], r = new Ri(i, this.options);
          this.items.push(r);
        }
      else if (this.__jsonld.items) {
        var r = new Ri(this.__jsonld.items, this.options);
        this.items.push(r);
      }
      return this.items;
    }, n.prototype.getSequenceByIndex = function(e) {
      return this.getSequences()[e];
    }, n.prototype.getTotalSequences = function() {
      return this.getSequences().length;
    }, n.prototype.getManifestType = function() {
      var e = this.getService(D.ServiceProfile.UI_EXTENSIONS);
      return e ? e.getProperty("manifestType") : ei.EMPTY;
    }, n.prototype.isMultiSequence = function() {
      return this.getTotalSequences() > 1;
    }, n.prototype.isPagingEnabled = function() {
      var e = this.getViewingHint();
      if (e)
        return e === D.ViewingHint.PAGED;
      var t = this.getBehavior();
      return t ? t === D.Behavior.PAGED : !1;
    }, n.prototype.getViewingDirection = function() {
      return this.getProperty("viewingDirection");
    }, n.prototype.getViewingHint = function() {
      return this.getProperty("viewingHint");
    }, n;
  }(zi)
), ei;
(function(d) {
  d.EMPTY = "", d.MANUSCRIPT = "manuscript", d.MONOGRAPH = "monograph";
})(ei || (ei = {}));
var Ir = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), Ar = (
  /** @class */
  function(d) {
    Ir(n, d);
    function n(e, t) {
      var i = d.call(this, e, t) || this;
      return i._ranges = null, i.canvases = null, i.items = [], i;
    }
    return n.prototype.getCanvasIds = function() {
      return this.__jsonld.canvases ? this.__jsonld.canvases : this.canvases ? this.canvases : [];
    }, n.prototype.getDuration = function() {
      if (this.canvases && this.canvases.length) {
        for (var e = [], t = [], i = 0, r = this.canvases; i < r.length; i++) {
          var l = r[i];
          if (l) {
            var s = l.match(/(.*)#t=([0-9.]+),?([0-9.]+)?/) || [void 0, l], o = s[1], a = s[2], h = s[3];
            o && (e.push(parseFloat(a)), t.push(parseFloat(h)));
          }
        }
        if (e.length && t.length)
          return new Wt(Math.min.apply(Math, e), Math.max.apply(Math, t));
      } else {
        for (var c = this.getRanges(), e = [], t = [], p = 0, v = c; p < v.length; p++) {
          var w = v[p], E = w.getDuration();
          E && (e.push(E.start), t.push(E.end));
        }
        if (e.length && t.length)
          return new Wt(Math.min.apply(Math, e), Math.max.apply(Math, t));
      }
      var _, S;
      if (this.canvases && this.canvases.length)
        for (var C = 0; C < this.canvases.length; C++) {
          var l = this.canvases[C], b = W.getTemporalComponent(l);
          b && b.length > 1 && (C === 0 && (_ = Number(b[0])), C === this.canvases.length - 1 && (S = Number(b[1])));
        }
      else
        for (var c = this.getRanges(), C = 0; C < c.length; C++) {
          var w = c[C], E = w.getDuration();
          E && (C === 0 && (_ = E.start), C === c.length - 1 && (S = E.end));
        }
      if (_ !== void 0 && S !== void 0)
        return new Wt(_, S);
    }, n.prototype.getRanges = function() {
      return this._ranges ? this._ranges : this._ranges = this.items.filter(function(e) {
        return e.isRange();
      });
    }, n.prototype.getBehavior = function() {
      var e = this.getProperty("behavior");
      return Array.isArray(e) && (e = e[0]), e || null;
    }, n.prototype.getViewingDirection = function() {
      return this.getProperty("viewingDirection");
    }, n.prototype.getViewingHint = function() {
      return this.getProperty("viewingHint");
    }, n.prototype.getTree = function(e) {
      e.data = this, this.treeNode = e;
      var t = this.getRanges();
      if (t && t.length)
        for (var i = 0; i < t.length; i++) {
          var r = t[i], l = new ti();
          e.addNode(l), this._parseTreeNode(l, r);
        }
      return W.generateTreeNodeIds(e), e;
    }, n.prototype.spansTime = function(e) {
      var t = this.getDuration();
      return !!(t && e >= t.start && e <= t.end);
    }, n.prototype._parseTreeNode = function(e, t) {
      e.label = t.getLabel().getValue(this.options.locale), e.data = t, e.data.type = W.normaliseType(ke.RANGE), t.treeNode = e;
      var i = t.getRanges();
      if (i && i.length)
        for (var r = 0; r < i.length; r++) {
          var l = i[r], s = l.getBehavior();
          if (s !== D.Behavior.NO_NAV) {
            var o = new ti();
            e.addNode(o), this._parseTreeNode(o, l);
          }
        }
    }, n;
  }(Ge)
), Or = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), Lr = (
  /** @class */
  function(d) {
    Or(n, d);
    function n(e, t) {
      return d.call(this, e, t) || this;
    }
    return n.prototype.getFormat = function() {
      return this.getProperty("format");
    }, n;
  }(Ge)
), Dr = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), Ri = (
  /** @class */
  function(d) {
    Dr(n, d);
    function n(e, t) {
      var i = d.call(this, e, t) || this;
      return i.items = [], i._thumbnails = null, i;
    }
    return n.prototype.getCanvases = function() {
      if (this.items.length)
        return this.items;
      var e = this.__jsonld.canvases || this.__jsonld.elements;
      if (e)
        for (var t = 0; t < e.length; t++) {
          var i = e[t], r = new Rt(i, this.options);
          r.index = t, this.items.push(r);
        }
      else if (this.__jsonld)
        for (var t = 0; t < this.__jsonld.length; t++) {
          var i = this.__jsonld[t], r = new Rt(i, this.options);
          r.index = t, this.items.push(r);
        }
      return this.items;
    }, n.prototype.getCanvasById = function(e) {
      for (var t = 0; t < this.getTotalCanvases(); t++) {
        var i = this.getCanvasByIndex(t), r = W.normaliseUrl(i.id);
        if (W.normaliseUrl(e) === r)
          return i;
      }
      return null;
    }, n.prototype.getCanvasByIndex = function(e) {
      return this.getCanvases()[e];
    }, n.prototype.getCanvasIndexById = function(e) {
      for (var t = 0; t < this.getTotalCanvases(); t++) {
        var i = this.getCanvasByIndex(t);
        if (i.id === e)
          return t;
      }
      return null;
    }, n.prototype.getCanvasIndexByLabel = function(e, t) {
      e = e.trim(), isNaN(e) || (e = parseInt(e, 10).toString(), t && (e += "r"));
      for (var i = /(\d*)\D+(\d*)/, r, l, s, o, a, h = 0; h < this.getTotalCanvases(); h++) {
        var c = this.getCanvasByIndex(h);
        if (c.getLabel().getValue(this.options.locale) === e)
          return h;
        if (r = i.exec(e), !!r && (o = r[1], a = r[2], !!a && (s = "^" + o + "\\D+" + a + "$", l = new RegExp(s), l.test(c.getLabel().toString()))))
          return h;
      }
      return -1;
    }, n.prototype.getLastCanvasLabel = function(e) {
      for (var t = this.getTotalCanvases() - 1; t >= 0; t--) {
        var i = this.getCanvasByIndex(t), r = i.getLabel().getValue(this.options.locale);
        if (e) {
          var l = /^[a-zA-Z0-9]*$/;
          if (l.test(r))
            return r;
        } else if (r)
          return r;
      }
      return this.options.defaultLabel;
    }, n.prototype.getLastPageIndex = function() {
      return this.getTotalCanvases() - 1;
    }, n.prototype.getNextPageIndex = function(e, t) {
      var i;
      if (t) {
        var r = this.getPagedIndices(e), l = this.getViewingDirection();
        l && l === D.ViewingDirection.RIGHT_TO_LEFT ? i = r[0] + 1 : i = r[r.length - 1] + 1;
      } else
        i = e + 1;
      return i > this.getLastPageIndex() ? -1 : i;
    }, n.prototype.getPagedIndices = function(e, t) {
      var i = [];
      if (!t)
        i.push(e);
      else {
        this.isFirstCanvas(e) || this.isLastCanvas(e) ? i = [e] : e % 2 ? i = [e, e + 1] : i = [e - 1, e];
        var r = this.getViewingDirection();
        r && r === D.ViewingDirection.RIGHT_TO_LEFT && (i = i.reverse());
      }
      return i;
    }, n.prototype.getPrevPageIndex = function(e, t) {
      var i;
      if (t) {
        var r = this.getPagedIndices(e), l = this.getViewingDirection();
        l && l === D.ViewingDirection.RIGHT_TO_LEFT ? i = r[r.length - 1] - 1 : i = r[0] - 1;
      } else
        i = e - 1;
      return i;
    }, n.prototype.getStartCanvasIndex = function() {
      var e = this.getStartCanvas();
      if (e)
        for (var t = 0; t < this.getTotalCanvases(); t++) {
          var i = this.getCanvasByIndex(t);
          if (i.id === e)
            return t;
        }
      return 0;
    }, n.prototype.getThumbs = function(e, t) {
      for (var i = [], r = this.getTotalCanvases(), l = 0; l < r; l++) {
        var s = this.getCanvasByIndex(l), o = new Hr(e, s);
        i.push(o);
      }
      return i;
    }, n.prototype.getThumbnails = function() {
      if (this._thumbnails != null)
        return this._thumbnails;
      this._thumbnails = [];
      for (var e = this.getCanvases(), t = 0; t < e.length; t++) {
        var i = e[t].getThumbnail();
        i && this._thumbnails.push(i);
      }
      return this._thumbnails;
    }, n.prototype.getStartCanvas = function() {
      return this.getProperty("startCanvas");
    }, n.prototype.getTotalCanvases = function() {
      return this.getCanvases().length;
    }, n.prototype.getViewingDirection = function() {
      return this.getProperty("viewingDirection") ? this.getProperty("viewingDirection") : this.options.resource.getViewingDirection ? this.options.resource.getViewingDirection() : null;
    }, n.prototype.getViewingHint = function() {
      return this.getProperty("viewingHint");
    }, n.prototype.isCanvasIndexOutOfRange = function(e) {
      return e > this.getTotalCanvases() - 1;
    }, n.prototype.isFirstCanvas = function(e) {
      return e === 0;
    }, n.prototype.isLastCanvas = function(e) {
      return e === this.getTotalCanvases() - 1;
    }, n.prototype.isMultiCanvas = function() {
      return this.getTotalCanvases() > 1;
    }, n.prototype.isPagingEnabled = function() {
      var e = this.getViewingHint();
      return e ? e === D.ViewingHint.PAGED : !1;
    }, n.prototype.isTotalCanvasesEven = function() {
      return this.getTotalCanvases() % 2 === 0;
    }, n;
  }(Ge)
), Zi = (
  /** @class */
  function() {
    function d() {
    }
    return d.parse = function(n, e) {
      return typeof n == "string" && (n = JSON.parse(n)), this.parseJson(n, e);
    }, d.parseJson = function(n, e) {
      var t;
      if (e && e.navDate && !isNaN(e.navDate.getTime()) && (n.navDate = e.navDate.toString()), n["@type"])
        switch (n["@type"]) {
          case "sc:Collection":
            t = this.parseCollection(n, e);
            break;
          case "sc:Manifest":
            t = this.parseManifest(n, e);
            break;
          default:
            return null;
        }
      else
        switch (n.type) {
          case "Collection":
            t = this.parseCollection(n, e);
            break;
          case "Manifest":
            t = this.parseManifest(n, e);
            break;
          default:
            return null;
        }
      return t.isLoaded = !0, t;
    }, d.parseCollection = function(n, e) {
      var t = new _r(n, e);
      return e ? (t.index = e.index || 0, e.resource && (t.parentCollection = e.resource.parentCollection)) : t.index = 0, this.parseCollections(t, e), this.parseManifests(t, e), this.parseItems(t, e), t;
    }, d.parseCollections = function(n, e) {
      var t;
      if (n.__jsonld.collections ? t = n.__jsonld.collections : n.__jsonld.items && (t = n.__jsonld.items.filter(function(l) {
        return l.type.toLowerCase() === "collection";
      })), t)
        for (var i = 0; i < t.length; i++) {
          e && (e.index = i);
          var r = this.parseCollection(t[i], e);
          r.index = i, r.parentCollection = n, n.items.push(r);
        }
    }, d.parseManifest = function(n, e) {
      var t = new qi(n, e);
      return t;
    }, d.parseManifests = function(n, e) {
      var t;
      if (n.__jsonld.manifests ? t = n.__jsonld.manifests : n.__jsonld.items && (t = n.__jsonld.items.filter(function(l) {
        return l.type.toLowerCase() === "manifest";
      })), t)
        for (var i = 0; i < t.length; i++) {
          var r = this.parseManifest(t[i], e);
          r.index = i, r.parentCollection = n, n.items.push(r);
        }
    }, d.parseItem = function(n, e) {
      if (n["@type"]) {
        if (n["@type"].toLowerCase() === "sc:manifest")
          return this.parseManifest(n, e);
        if (n["@type"].toLowerCase() === "sc:collection")
          return this.parseCollection(n, e);
      } else if (n.type) {
        if (n.type.toLowerCase() === "manifest")
          return this.parseManifest(n, e);
        if (n.type.toLowerCase() === "collection")
          return this.parseCollection(n, e);
      }
      return null;
    }, d.parseItems = function(n, e) {
      var t = n.__jsonld.members || n.__jsonld.items;
      if (t)
        for (var i = function(o) {
          e && (e.index = o);
          var a = r.parseItem(t[o], e);
          if (!a)
            return { value: void 0 };
          if (n.items.filter(function(h) {
            return h.id === a.id;
          })[0])
            return "continue";
          a.index = o, a.parentCollection = n, n.items.push(a);
        }, r = this, l = 0; l < t.length; l++) {
          var s = i(l);
          if (typeof s == "object")
            return s.value;
        }
    }, d;
  }()
), Mr = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), Ci = (
  /** @class */
  function(d) {
    Mr(n, d);
    function n(e, t) {
      return d.call(this, e, t) || this;
    }
    return n.prototype.getProfile = function() {
      var e = this.getProperty("profile");
      return e || (e = this.getProperty("dcterms:conformsTo")), Array.isArray(e) ? e[0] : e;
    }, n.prototype.getConfirmLabel = function() {
      return W.getLocalisedValue(this.getProperty("confirmLabel"), this.options.locale);
    }, n.prototype.getDescription = function() {
      return W.getLocalisedValue(this.getProperty("description"), this.options.locale);
    }, n.prototype.getFailureDescription = function() {
      return W.getLocalisedValue(this.getProperty("failureDescription"), this.options.locale);
    }, n.prototype.getFailureHeader = function() {
      return W.getLocalisedValue(this.getProperty("failureHeader"), this.options.locale);
    }, n.prototype.getHeader = function() {
      return W.getLocalisedValue(this.getProperty("header"), this.options.locale);
    }, n.prototype.getServiceLabel = function() {
      return W.getLocalisedValue(this.getProperty("label"), this.options.locale);
    }, n.prototype.getInfoUri = function() {
      var e = this.id;
      return e.endsWith("/") || (e += "/"), e += "info.json", e;
    }, n;
  }(Ge)
), Nr = (
  /** @class */
  function() {
    function d(n, e) {
      this.width = n, this.height = e;
    }
    return d;
  }()
), pt;
(function(d) {
  d[d.AUTHORIZATION_FAILED = 1] = "AUTHORIZATION_FAILED", d[d.FORBIDDEN = 2] = "FORBIDDEN", d[d.INTERNAL_SERVER_ERROR = 3] = "INTERNAL_SERVER_ERROR", d[d.RESTRICTED = 4] = "RESTRICTED";
})(pt || (pt = {}));
var Hr = (
  /** @class */
  function() {
    function d(n, e) {
      this.data = e, this.index = e.index, this.width = n;
      var t = e.getHeight() / e.getWidth();
      t ? this.height = Math.floor(this.width * t) : this.height = n, this.uri = e.getCanonicalImageUri(n), this.label = e.getLabel().getValue(), this.viewingHint = e.getViewingHint();
    }
    return d;
  }()
), Fr = globalThis && globalThis.__extends || function() {
  var d = function(n, e) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var r in i)
        i.hasOwnProperty(r) && (t[r] = i[r]);
    }, d(n, e);
  };
  return function(n, e) {
    d(n, e);
    function t() {
      this.constructor = n;
    }
    n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), Br = (
  /** @class */
  function(d) {
    Fr(n, d);
    function n(e, t) {
      return d.call(this, e, t) || this;
    }
    return n;
  }(oi)
), ti = (
  /** @class */
  function() {
    function d(n, e) {
      this.label = n, this.data = e || {}, this.nodes = [];
    }
    return d.prototype.addNode = function(n) {
      this.nodes.push(n), n.parentNode = this;
    }, d.prototype.isCollection = function() {
      return this.data.type === W.normaliseType(ke.COLLECTION);
    }, d.prototype.isManifest = function() {
      return this.data.type === W.normaliseType(ke.MANIFEST);
    }, d.prototype.isRange = function() {
      return this.data.type === W.normaliseType(ke.RANGE);
    }, d;
  }()
), ke;
(function(d) {
  d.COLLECTION = "collection", d.MANIFEST = "manifest", d.RANGE = "range";
})(ke || (ke = {}));
var zr = function(d) {
  return W.loadManifest(d);
}, Xi = { exports: {} };
(function(d) {
  //! openseadragon 4.1.0
  //! Built on 2023-05-25
  //! Git commit: v4.1.0-0-8849681
  //! http://openseadragon.github.io
  //! License: http://openseadragon.github.io/license/
  function n(e) {
    return new n.Viewer(e);
  }
  (function(e) {
    e.version = {
      versionStr: "4.1.0",
      major: parseInt("4", 10),
      minor: parseInt("1", 10),
      revision: parseInt("0", 10)
    };
    var t = {
      "[object Boolean]": "boolean",
      "[object Number]": "number",
      "[object String]": "string",
      "[object Function]": "function",
      "[object AsyncFunction]": "function",
      "[object Promise]": "promise",
      "[object Array]": "array",
      "[object Date]": "date",
      "[object RegExp]": "regexp",
      "[object Object]": "object"
    }, i = Object.prototype.toString, r = Object.prototype.hasOwnProperty;
    e.isFunction = function(l) {
      return e.type(l) === "function";
    }, e.isArray = Array.isArray || function(l) {
      return e.type(l) === "array";
    }, e.isWindow = function(l) {
      return l && typeof l == "object" && "setInterval" in l;
    }, e.type = function(l) {
      return l == null ? String(l) : t[i.call(l)] || "object";
    }, e.isPlainObject = function(l) {
      if (!l || n.type(l) !== "object" || l.nodeType || e.isWindow(l) || l.constructor && !r.call(l, "constructor") && !r.call(l.constructor.prototype, "isPrototypeOf"))
        return !1;
      var s;
      for (var o in l)
        s = o;
      return s === void 0 || r.call(l, s);
    }, e.isEmptyObject = function(l) {
      for (var s in l)
        return !1;
      return !0;
    }, e.freezeObject = function(l) {
      return Object.freeze ? e.freezeObject = Object.freeze : e.freezeObject = function(s) {
        return s;
      }, e.freezeObject(l);
    }, e.supportsCanvas = function() {
      var l = document.createElement("canvas");
      return !!(e.isFunction(l.getContext) && l.getContext("2d"));
    }(), e.isCanvasTainted = function(l) {
      var s = !1;
      try {
        l.getContext("2d").getImageData(0, 0, 1, 1);
      } catch {
        s = !0;
      }
      return s;
    }, e.supportsAddEventListener = function() {
      return !!(document.documentElement.addEventListener && document.addEventListener);
    }(), e.supportsRemoveEventListener = function() {
      return !!(document.documentElement.removeEventListener && document.removeEventListener);
    }(), e.supportsEventListenerOptions = function() {
      var l = 0;
      if (e.supportsAddEventListener)
        try {
          var s = {
            get capture() {
              return l++, !1;
            },
            get once() {
              return l++, !1;
            },
            get passive() {
              return l++, !1;
            }
          };
          window.addEventListener("test", null, s), window.removeEventListener("test", null, s);
        } catch {
          l = 0;
        }
      return l >= 3;
    }(), e.getCurrentPixelDensityRatio = function() {
      if (e.supportsCanvas) {
        var l = document.createElement("canvas").getContext("2d"), s = window.devicePixelRatio || 1, o = l.webkitBackingStorePixelRatio || l.mozBackingStorePixelRatio || l.msBackingStorePixelRatio || l.oBackingStorePixelRatio || l.backingStorePixelRatio || 1;
        return Math.max(s, 1) / o;
      } else
        return 1;
    }, e.pixelDensityRatio = e.getCurrentPixelDensityRatio();
  })(n), function(e) {
    e.extend = function() {
      var o, a, h, c, p, v, w = arguments[0] || {}, E = arguments.length, _ = !1, S = 1;
      for (typeof w == "boolean" && (_ = w, w = arguments[1] || {}, S = 2), typeof w != "object" && !n.isFunction(w) && (w = {}), E === S && (w = this, --S); S < E; S++)
        if (o = arguments[S], o !== null || o !== void 0)
          for (a in o) {
            var C = Object.getOwnPropertyDescriptor(o, a);
            if (C !== void 0) {
              if (C.get || C.set) {
                Object.defineProperty(w, a, C);
                continue;
              }
              c = C.value;
            } else {
              e.console.warn('Could not copy inherited property "' + a + '".');
              continue;
            }
            w !== c && (_ && c && (n.isPlainObject(c) || (p = n.isArray(c))) ? (h = w[a], p ? (p = !1, v = h && n.isArray(h) ? h : []) : v = h && n.isPlainObject(h) ? h : {}, w[a] = n.extend(_, v, c)) : c !== void 0 && (w[a] = c));
          }
      return w;
    };
    var t = function() {
      if (typeof navigator != "object")
        return !1;
      var o = navigator.userAgent;
      return typeof o != "string" ? !1 : o.indexOf("iPhone") !== -1 || o.indexOf("iPad") !== -1 || o.indexOf("iPod") !== -1;
    };
    e.extend(
      e,
      /** @lends OpenSeadragon */
      {
        /**
         * The default values for the optional settings documented at {@link OpenSeadragon.Options}.
         * @static
         * @type {Object}
         */
        DEFAULT_SETTINGS: {
          //DATA SOURCE DETAILS
          xmlPath: null,
          tileSources: null,
          tileHost: null,
          initialPage: 0,
          crossOriginPolicy: !1,
          ajaxWithCredentials: !1,
          loadTilesWithAjax: !1,
          ajaxHeaders: {},
          splitHashDataForPost: !1,
          //PAN AND ZOOM SETTINGS AND CONSTRAINTS
          panHorizontal: !0,
          panVertical: !0,
          constrainDuringPan: !1,
          wrapHorizontal: !1,
          wrapVertical: !1,
          visibilityRatio: 0.5,
          //-> how much of the viewer can be negative space
          minPixelRatio: 0.5,
          //->closer to 0 draws tiles meant for a higher zoom at this zoom
          defaultZoomLevel: 0,
          minZoomLevel: null,
          maxZoomLevel: null,
          homeFillsViewer: !1,
          //UI RESPONSIVENESS AND FEEL
          clickTimeThreshold: 300,
          clickDistThreshold: 5,
          dblClickTimeThreshold: 300,
          dblClickDistThreshold: 20,
          springStiffness: 6.5,
          animationTime: 1.2,
          gestureSettingsMouse: {
            dragToPan: !0,
            scrollToZoom: !0,
            clickToZoom: !0,
            dblClickToZoom: !1,
            dblClickDragToZoom: !1,
            pinchToZoom: !1,
            zoomToRefPoint: !0,
            flickEnabled: !1,
            flickMinSpeed: 120,
            flickMomentum: 0.25,
            pinchRotate: !1
          },
          gestureSettingsTouch: {
            dragToPan: !0,
            scrollToZoom: !1,
            clickToZoom: !1,
            dblClickToZoom: !0,
            dblClickDragToZoom: !0,
            pinchToZoom: !0,
            zoomToRefPoint: !0,
            flickEnabled: !0,
            flickMinSpeed: 120,
            flickMomentum: 0.25,
            pinchRotate: !1
          },
          gestureSettingsPen: {
            dragToPan: !0,
            scrollToZoom: !1,
            clickToZoom: !0,
            dblClickToZoom: !1,
            dblClickDragToZoom: !1,
            pinchToZoom: !1,
            zoomToRefPoint: !0,
            flickEnabled: !1,
            flickMinSpeed: 120,
            flickMomentum: 0.25,
            pinchRotate: !1
          },
          gestureSettingsUnknown: {
            dragToPan: !0,
            scrollToZoom: !1,
            clickToZoom: !1,
            dblClickToZoom: !0,
            dblClickDragToZoom: !1,
            pinchToZoom: !0,
            zoomToRefPoint: !0,
            flickEnabled: !0,
            flickMinSpeed: 120,
            flickMomentum: 0.25,
            pinchRotate: !1
          },
          zoomPerClick: 2,
          zoomPerScroll: 1.2,
          zoomPerDblClickDrag: 1.2,
          zoomPerSecond: 1,
          blendTime: 0,
          alwaysBlend: !1,
          autoHideControls: !0,
          immediateRender: !1,
          minZoomImageRatio: 0.9,
          //-> closer to 0 allows zoom out to infinity
          maxZoomPixelRatio: 1.1,
          //-> higher allows 'over zoom' into pixels
          smoothTileEdgesMinZoom: 1.1,
          //-> higher than maxZoomPixelRatio disables it
          iOSDevice: t(),
          pixelsPerWheelLine: 40,
          pixelsPerArrowPress: 40,
          autoResize: !0,
          preserveImageSizeOnResize: !1,
          // requires autoResize=true
          minScrollDeltaTime: 50,
          rotationIncrement: 90,
          //DEFAULT CONTROL SETTINGS
          showSequenceControl: !0,
          //SEQUENCE
          sequenceControlAnchor: null,
          //SEQUENCE
          preserveViewport: !1,
          //SEQUENCE
          preserveOverlays: !1,
          //SEQUENCE
          navPrevNextWrap: !1,
          //SEQUENCE
          showNavigationControl: !0,
          //ZOOM/HOME/FULL/ROTATION
          navigationControlAnchor: null,
          //ZOOM/HOME/FULL/ROTATION
          showZoomControl: !0,
          //ZOOM
          showHomeControl: !0,
          //HOME
          showFullPageControl: !0,
          //FULL
          showRotationControl: !1,
          //ROTATION
          showFlipControl: !1,
          //FLIP
          controlsFadeDelay: 2e3,
          //ZOOM/HOME/FULL/SEQUENCE
          controlsFadeLength: 1500,
          //ZOOM/HOME/FULL/SEQUENCE
          mouseNavEnabled: !0,
          //GENERAL MOUSE INTERACTIVITY
          //VIEWPORT NAVIGATOR SETTINGS
          showNavigator: !1,
          navigatorElement: null,
          navigatorId: null,
          navigatorPosition: null,
          navigatorSizeRatio: 0.2,
          navigatorMaintainSizeRatio: !1,
          navigatorTop: null,
          navigatorLeft: null,
          navigatorHeight: null,
          navigatorWidth: null,
          navigatorAutoResize: !0,
          navigatorAutoFade: !0,
          navigatorRotate: !0,
          navigatorBackground: "#000",
          navigatorOpacity: 0.8,
          navigatorBorderColor: "#555",
          navigatorDisplayRegionColor: "#900",
          // INITIAL ROTATION
          degrees: 0,
          // INITIAL FLIP STATE
          flipped: !1,
          // APPEARANCE
          opacity: 1,
          preload: !1,
          compositeOperation: null,
          imageSmoothingEnabled: !0,
          placeholderFillStyle: null,
          subPixelRoundingForTransparency: null,
          //REFERENCE STRIP SETTINGS
          showReferenceStrip: !1,
          referenceStripScroll: "horizontal",
          referenceStripElement: null,
          referenceStripHeight: null,
          referenceStripWidth: null,
          referenceStripPosition: "BOTTOM_LEFT",
          referenceStripSizeRatio: 0.2,
          //COLLECTION VISUALIZATION SETTINGS
          collectionRows: 3,
          //or columns depending on layout
          collectionColumns: 0,
          //columns in horizontal layout, rows in vertical layout
          collectionLayout: "horizontal",
          //vertical
          collectionMode: !1,
          collectionTileSize: 800,
          collectionTileMargin: 80,
          //PERFORMANCE SETTINGS
          imageLoaderLimit: 0,
          maxImageCacheCount: 200,
          timeout: 3e4,
          useCanvas: !0,
          // Use canvas element for drawing if available
          tileRetryMax: 0,
          tileRetryDelay: 2500,
          //INTERFACE RESOURCE SETTINGS
          prefixUrl: "/images/",
          navImages: {
            zoomIn: {
              REST: "zoomin_rest.png",
              GROUP: "zoomin_grouphover.png",
              HOVER: "zoomin_hover.png",
              DOWN: "zoomin_pressed.png"
            },
            zoomOut: {
              REST: "zoomout_rest.png",
              GROUP: "zoomout_grouphover.png",
              HOVER: "zoomout_hover.png",
              DOWN: "zoomout_pressed.png"
            },
            home: {
              REST: "home_rest.png",
              GROUP: "home_grouphover.png",
              HOVER: "home_hover.png",
              DOWN: "home_pressed.png"
            },
            fullpage: {
              REST: "fullpage_rest.png",
              GROUP: "fullpage_grouphover.png",
              HOVER: "fullpage_hover.png",
              DOWN: "fullpage_pressed.png"
            },
            rotateleft: {
              REST: "rotateleft_rest.png",
              GROUP: "rotateleft_grouphover.png",
              HOVER: "rotateleft_hover.png",
              DOWN: "rotateleft_pressed.png"
            },
            rotateright: {
              REST: "rotateright_rest.png",
              GROUP: "rotateright_grouphover.png",
              HOVER: "rotateright_hover.png",
              DOWN: "rotateright_pressed.png"
            },
            flip: {
              // Flip icon designed by Yaroslav Samoylov from the Noun Project and modified by Nelson Campos ncampos@criteriamarathon.com, https://thenounproject.com/term/flip/136289/
              REST: "flip_rest.png",
              GROUP: "flip_grouphover.png",
              HOVER: "flip_hover.png",
              DOWN: "flip_pressed.png"
            },
            previous: {
              REST: "previous_rest.png",
              GROUP: "previous_grouphover.png",
              HOVER: "previous_hover.png",
              DOWN: "previous_pressed.png"
            },
            next: {
              REST: "next_rest.png",
              GROUP: "next_grouphover.png",
              HOVER: "next_hover.png",
              DOWN: "next_pressed.png"
            }
          },
          //DEVELOPER SETTINGS
          debugMode: !1,
          debugGridColor: ["#437AB2", "#1B9E77", "#D95F02", "#7570B3", "#E7298A", "#66A61E", "#E6AB02", "#A6761D", "#666666"],
          silenceMultiImageWarnings: !1
        },
        /**
         * TODO: get rid of this.  I can't see how it's required at all.  Looks
         *       like an early legacy code artifact.
         * @static
         * @ignore
         */
        SIGNAL: "----seadragon----",
        /**
         * Returns a function which invokes the method as if it were a method belonging to the object.
         * @function
         * @param {Object} object
         * @param {Function} method
         * @returns {Function}
         */
        delegate: function(o, a) {
          return function() {
            var h = arguments;
            return h === void 0 && (h = []), a.apply(o, h);
          };
        },
        /**
         * An enumeration of Browser vendors.
         * @static
         * @type {Object}
         * @property {Number} UNKNOWN
         * @property {Number} IE
         * @property {Number} FIREFOX
         * @property {Number} SAFARI
         * @property {Number} CHROME
         * @property {Number} OPERA
         * @property {Number} EDGE
         * @property {Number} CHROMEEDGE
         */
        BROWSERS: {
          UNKNOWN: 0,
          IE: 1,
          FIREFOX: 2,
          SAFARI: 3,
          CHROME: 4,
          OPERA: 5,
          EDGE: 6,
          CHROMEEDGE: 7
        },
        /**
         * An enumeration of when subpixel rounding should occur.
         * @static
         * @type {Object}
         * @property {Number} NEVER Never apply subpixel rounding for transparency.
         * @property {Number} ONLY_AT_REST Do not apply subpixel rounding for transparency during animation (panning, zoom, rotation) and apply it once animation is over.
         * @property {Number} ALWAYS Apply subpixel rounding for transparency during animation and when animation is over.
         */
        SUBPIXEL_ROUNDING_OCCURRENCES: {
          NEVER: 0,
          ONLY_AT_REST: 1,
          ALWAYS: 2
        },
        /**
         * Keep track of which {@link Viewer}s have been created.
         * - Key: {@link Element} to which a Viewer is attached.
         * - Value: {@link Viewer} of the element defined by the key.
         * @private
         * @static
         * @type {Object}
         */
        _viewers: /* @__PURE__ */ new Map(),
        /**
          * Returns the {@link Viewer} attached to a given DOM element. If there is
          * no viewer attached to the provided element, undefined is returned.
          * @function
          * @param {String|Element} element Accepts an id or element.
          * @returns {Viewer} The viewer attached to the given element, or undefined.
          */
        getViewer: function(o) {
          return e._viewers.get(this.getElement(o));
        },
        /**
         * Returns a DOM Element for the given id or element.
         * @function
         * @param {String|Element} element Accepts an id or element.
         * @returns {Element} The element with the given id, null, or the element itself.
         */
        getElement: function(o) {
          return typeof o == "string" && (o = document.getElementById(o)), o;
        },
        /**
         * Determines the position of the upper-left corner of the element.
         * @function
         * @param {Element|String} element - the element we want the position for.
         * @returns {OpenSeadragon.Point} - the position of the upper left corner of the element.
         */
        getElementPosition: function(o) {
          var a = new e.Point(), h, c;
          for (o = e.getElement(o), h = e.getElementStyle(o).position === "fixed", c = s(o, h); c; )
            a.x += o.offsetLeft, a.y += o.offsetTop, h && (a = a.plus(e.getPageScroll())), o = c, h = e.getElementStyle(o).position === "fixed", c = s(o, h);
          return a;
        },
        /**
         * Determines the position of the upper-left corner of the element adjusted for current page and/or element scroll.
         * @function
         * @param {Element|String} element - the element we want the position for.
         * @returns {OpenSeadragon.Point} - the position of the upper left corner of the element adjusted for current page and/or element scroll.
         */
        getElementOffset: function(o) {
          o = e.getElement(o);
          var a = o && o.ownerDocument, h, c, p = { top: 0, left: 0 };
          return a ? (h = a.documentElement, typeof o.getBoundingClientRect < "u" && (p = o.getBoundingClientRect()), c = a === a.window ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1, new e.Point(
            p.left + (c.pageXOffset || h.scrollLeft) - (h.clientLeft || 0),
            p.top + (c.pageYOffset || h.scrollTop) - (h.clientTop || 0)
          )) : new e.Point();
        },
        /**
         * Determines the height and width of the given element.
         * @function
         * @param {Element|String} element
         * @returns {OpenSeadragon.Point}
         */
        getElementSize: function(o) {
          return o = e.getElement(o), new e.Point(
            o.clientWidth,
            o.clientHeight
          );
        },
        /**
         * Returns the CSSStyle object for the given element.
         * @function
         * @param {Element|String} element
         * @returns {CSSStyle}
         */
        getElementStyle: document.documentElement.currentStyle ? function(o) {
          return o = e.getElement(o), o.currentStyle;
        } : function(o) {
          return o = e.getElement(o), window.getComputedStyle(o, "");
        },
        /**
         * Returns the property with the correct vendor prefix appended.
         * @param {String} property the property name
         * @returns {String} the property with the correct prefix or null if not
         * supported.
         */
        getCssPropertyWithVendorPrefix: function(o) {
          var a = {};
          return e.getCssPropertyWithVendorPrefix = function(h) {
            if (a[h] !== void 0)
              return a[h];
            var c = document.createElement("div").style, p = null;
            if (c[h] !== void 0)
              p = h;
            else
              for (var v = [
                "Webkit",
                "Moz",
                "MS",
                "O",
                "webkit",
                "moz",
                "ms",
                "o"
              ], w = e.capitalizeFirstLetter(h), E = 0; E < v.length; E++) {
                var _ = v[E] + w;
                if (c[_] !== void 0) {
                  p = _;
                  break;
                }
              }
            return a[h] = p, p;
          }, e.getCssPropertyWithVendorPrefix(o);
        },
        /**
         * Capitalizes the first letter of a string
         * @param {String} string
         * @returns {String} The string with the first letter capitalized
         */
        capitalizeFirstLetter: function(o) {
          return o.charAt(0).toUpperCase() + o.slice(1);
        },
        /**
         * Compute the modulo of a number but makes sure to always return
         * a positive value (also known as Euclidean modulo).
         * @param {Number} number the number to compute the modulo of
         * @param {Number} modulo the modulo
         * @returns {Number} the result of the modulo of number
         */
        positiveModulo: function(o, a) {
          var h = o % a;
          return h < 0 && (h += a), h;
        },
        /**
         * Determines if a point is within the bounding rectangle of the given element (hit-test).
         * @function
         * @param {Element|String} element
         * @param {OpenSeadragon.Point} point
         * @returns {Boolean}
         */
        pointInElement: function(o, a) {
          o = e.getElement(o);
          var h = e.getElementOffset(o), c = e.getElementSize(o);
          return a.x >= h.x && a.x < h.x + c.x && a.y < h.y + c.y && a.y >= h.y;
        },
        /**
         * Gets the position of the mouse on the screen for a given event.
         * @function
         * @param {Event} [event]
         * @returns {OpenSeadragon.Point}
         */
        getMousePosition: function(o) {
          if (typeof o.pageX == "number")
            e.getMousePosition = function(a) {
              var h = new e.Point();
              return h.x = a.pageX, h.y = a.pageY, h;
            };
          else if (typeof o.clientX == "number")
            e.getMousePosition = function(a) {
              var h = new e.Point();
              return h.x = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, h.y = a.clientY + document.body.scrollTop + document.documentElement.scrollTop, h;
            };
          else
            throw new Error(
              "Unknown event mouse position, no known technique."
            );
          return e.getMousePosition(o);
        },
        /**
         * Determines the page's current scroll position.
         * @function
         * @returns {OpenSeadragon.Point}
         */
        getPageScroll: function() {
          var o = document.documentElement || {}, a = document.body || {};
          if (typeof window.pageXOffset == "number")
            e.getPageScroll = function() {
              return new e.Point(
                window.pageXOffset,
                window.pageYOffset
              );
            };
          else if (a.scrollLeft || a.scrollTop)
            e.getPageScroll = function() {
              return new e.Point(
                document.body.scrollLeft,
                document.body.scrollTop
              );
            };
          else if (o.scrollLeft || o.scrollTop)
            e.getPageScroll = function() {
              return new e.Point(
                document.documentElement.scrollLeft,
                document.documentElement.scrollTop
              );
            };
          else
            return new e.Point(0, 0);
          return e.getPageScroll();
        },
        /**
         * Set the page scroll position.
         * @function
         * @returns {OpenSeadragon.Point}
         */
        setPageScroll: function(o) {
          if (typeof window.scrollTo < "u")
            e.setPageScroll = function(c) {
              window.scrollTo(c.x, c.y);
            };
          else {
            var a = e.getPageScroll();
            if (a.x === o.x && a.y === o.y)
              return;
            document.body.scrollLeft = o.x, document.body.scrollTop = o.y;
            var h = e.getPageScroll();
            if (h.x !== a.x && h.y !== a.y) {
              e.setPageScroll = function(c) {
                document.body.scrollLeft = c.x, document.body.scrollTop = c.y;
              };
              return;
            }
            if (document.documentElement.scrollLeft = o.x, document.documentElement.scrollTop = o.y, h = e.getPageScroll(), h.x !== a.x && h.y !== a.y) {
              e.setPageScroll = function(c) {
                document.documentElement.scrollLeft = c.x, document.documentElement.scrollTop = c.y;
              };
              return;
            }
            e.setPageScroll = function(c) {
            };
          }
          e.setPageScroll(o);
        },
        /**
         * Determines the size of the browsers window.
         * @function
         * @returns {OpenSeadragon.Point}
         */
        getWindowSize: function() {
          var o = document.documentElement || {}, a = document.body || {};
          if (typeof window.innerWidth == "number")
            e.getWindowSize = function() {
              return new e.Point(
                window.innerWidth,
                window.innerHeight
              );
            };
          else if (o.clientWidth || o.clientHeight)
            e.getWindowSize = function() {
              return new e.Point(
                document.documentElement.clientWidth,
                document.documentElement.clientHeight
              );
            };
          else if (a.clientWidth || a.clientHeight)
            e.getWindowSize = function() {
              return new e.Point(
                document.body.clientWidth,
                document.body.clientHeight
              );
            };
          else
            throw new Error("Unknown window size, no known technique.");
          return e.getWindowSize();
        },
        /**
         * Wraps the given element in a nest of divs so that the element can
         * be easily centered using CSS tables
         * @function
         * @param {Element|String} element
         * @returns {Element} outermost wrapper element
         */
        makeCenteredNode: function(o) {
          o = e.getElement(o);
          var a = [
            e.makeNeutralElement("div"),
            e.makeNeutralElement("div"),
            e.makeNeutralElement("div")
          ];
          return e.extend(a[0].style, {
            display: "table",
            height: "100%",
            width: "100%"
          }), e.extend(a[1].style, {
            display: "table-row"
          }), e.extend(a[2].style, {
            display: "table-cell",
            verticalAlign: "middle",
            textAlign: "center"
          }), a[0].appendChild(a[1]), a[1].appendChild(a[2]), a[2].appendChild(o), a[0];
        },
        /**
         * Creates an easily positionable element of the given type that therefor
         * serves as an excellent container element.
         * @function
         * @param {String} tagName
         * @returns {Element}
         */
        makeNeutralElement: function(o) {
          var a = document.createElement(o), h = a.style;
          return h.background = "transparent none", h.border = "none", h.margin = "0px", h.padding = "0px", h.position = "static", a;
        },
        /**
         * Returns the current milliseconds, using Date.now() if available
         * @function
         */
        now: function() {
          return Date.now ? e.now = Date.now : e.now = function() {
            return (/* @__PURE__ */ new Date()).getTime();
          }, e.now();
        },
        /**
         * Ensures an image is loaded correctly to support alpha transparency.
         * @function
         * @param {String} src
         * @returns {Element}
         */
        makeTransparentImage: function(o) {
          var a = e.makeNeutralElement("img");
          return a.src = o, a;
        },
        /**
         * Sets the opacity of the specified element.
         * @function
         * @param {Element|String} element
         * @param {Number} opacity
         * @param {Boolean} [usesAlpha]
         */
        setElementOpacity: function(o, a, h) {
          var c, p;
          o = e.getElement(o), h && !e.Browser.alpha && (a = Math.round(a)), e.Browser.opacity ? o.style.opacity = a < 1 ? a : "" : a < 1 ? (c = Math.round(100 * a), p = "alpha(opacity=" + c + ")", o.style.filter = p) : o.style.filter = "";
        },
        /**
         * Sets the specified element's touch-action style attribute to 'none'.
         * @function
         * @param {Element|String} element
         */
        setElementTouchActionNone: function(o) {
          o = e.getElement(o), typeof o.style.touchAction < "u" ? o.style.touchAction = "none" : typeof o.style.msTouchAction < "u" && (o.style.msTouchAction = "none");
        },
        /**
         * Sets the specified element's pointer-events style attribute to the passed value.
         * @function
         * @param {Element|String} element
         * @param {String} value
         */
        setElementPointerEvents: function(o, a) {
          o = e.getElement(o), typeof o.style < "u" && typeof o.style.pointerEvents < "u" && (o.style.pointerEvents = a);
        },
        /**
         * Sets the specified element's pointer-events style attribute to 'none'.
         * @function
         * @param {Element|String} element
         */
        setElementPointerEventsNone: function(o) {
          e.setElementPointerEvents(o, "none");
        },
        /**
         * Add the specified CSS class to the element if not present.
         * @function
         * @param {Element|String} element
         * @param {String} className
         */
        addClass: function(o, a) {
          o = e.getElement(o), o.className ? (" " + o.className + " ").indexOf(" " + a + " ") === -1 && (o.className += " " + a) : o.className = a;
        },
        /**
         * Find the first index at which an element is found in an array or -1
         * if not present.
         *
         * Code taken and adapted from
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Compatibility
         *
         * @function
         * @param {Array} array The array from which to find the element
         * @param {Object} searchElement The element to find
         * @param {Number} [fromIndex=0] Index to start research.
         * @returns {Number} The index of the element in the array.
         */
        indexOf: function(o, a, h) {
          return Array.prototype.indexOf ? this.indexOf = function(c, p, v) {
            return c.indexOf(p, v);
          } : this.indexOf = function(c, p, v) {
            var w, E = v || 0, _;
            if (!c)
              throw new TypeError();
            if (_ = c.length, _ === 0 || E >= _)
              return -1;
            for (E < 0 && (E = _ - Math.abs(E)), w = E; w < _; w++)
              if (c[w] === p)
                return w;
            return -1;
          }, this.indexOf(o, a, h);
        },
        /**
         * Remove the specified CSS class from the element.
         * @function
         * @param {Element|String} element
         * @param {String} className
         */
        removeClass: function(o, a) {
          var h, c = [], p;
          for (o = e.getElement(o), h = o.className.split(/\s+/), p = 0; p < h.length; p++)
            h[p] && h[p] !== a && c.push(h[p]);
          o.className = c.join(" ");
        },
        /**
         * Convert passed addEventListener() options to boolean or options object,
         * depending on browser support.
         * @function
         * @param {Boolean|Object} [options] Boolean useCapture, or if [supportsEventListenerOptions]{@link OpenSeadragon.supportsEventListenerOptions}, can be an object
         * @param {Boolean} [options.capture]
         * @param {Boolean} [options.passive]
         * @param {Boolean} [options.once]
         * @returns {String} The protocol (http:, https:, file:, ftp: ...)
         */
        normalizeEventListenerOptions: function(o) {
          var a;
          return typeof o < "u" ? typeof o == "boolean" ? a = e.supportsEventListenerOptions ? { capture: o } : o : a = e.supportsEventListenerOptions ? o : typeof o.capture < "u" ? o.capture : !1 : a = e.supportsEventListenerOptions ? { capture: !1 } : !1, a;
        },
        /**
         * Adds an event listener for the given element, eventName and handler.
         * @function
         * @param {Element|String} element
         * @param {String} eventName
         * @param {Function} handler
         * @param {Boolean|Object} [options] Boolean useCapture, or if [supportsEventListenerOptions]{@link OpenSeadragon.supportsEventListenerOptions}, can be an object
         * @param {Boolean} [options.capture]
         * @param {Boolean} [options.passive]
         * @param {Boolean} [options.once]
         */
        addEvent: function() {
          if (e.supportsAddEventListener)
            return function(o, a, h, c) {
              c = e.normalizeEventListenerOptions(c), o = e.getElement(o), o.addEventListener(a, h, c);
            };
          if (document.documentElement.attachEvent && document.attachEvent)
            return function(o, a, h) {
              o = e.getElement(o), o.attachEvent("on" + a, h);
            };
          throw new Error("No known event model.");
        }(),
        /**
         * Remove a given event listener for the given element, event type and
         * handler.
         * @function
         * @param {Element|String} element
         * @param {String} eventName
         * @param {Function} handler
         * @param {Boolean|Object} [options] Boolean useCapture, or if [supportsEventListenerOptions]{@link OpenSeadragon.supportsEventListenerOptions}, can be an object
         * @param {Boolean} [options.capture]
         */
        removeEvent: function() {
          if (e.supportsRemoveEventListener)
            return function(o, a, h, c) {
              c = e.normalizeEventListenerOptions(c), o = e.getElement(o), o.removeEventListener(a, h, c);
            };
          if (document.documentElement.detachEvent && document.detachEvent)
            return function(o, a, h) {
              o = e.getElement(o), o.detachEvent("on" + a, h);
            };
          throw new Error("No known event model.");
        }(),
        /**
         * Cancels the default browser behavior had the event propagated all
         * the way up the DOM to the window object.
         * @function
         * @param {Event} [event]
         */
        cancelEvent: function(o) {
          o.preventDefault();
        },
        /**
         * Returns true if {@link OpenSeadragon.cancelEvent|cancelEvent} has been called on
         * the event, otherwise returns false.
         * @function
         * @param {Event} [event]
         */
        eventIsCanceled: function(o) {
          return o.defaultPrevented;
        },
        /**
         * Stops the propagation of the event through the DOM in the capturing and bubbling phases.
         * @function
         * @param {Event} [event]
         */
        stopEvent: function(o) {
          o.stopPropagation();
        },
        /**
         * Similar to OpenSeadragon.delegate, but it does not immediately call
         * the method on the object, returning a function which can be called
         * repeatedly to delegate the method. It also allows additional arguments
         * to be passed during construction which will be added during each
         * invocation, and each invocation can add additional arguments as well.
         *
         * @function
         * @param {Object} object
         * @param {Function} method
         * @param [args] any additional arguments are passed as arguments to the
         *  created callback
         * @returns {Function}
         */
        createCallback: function(o, a) {
          var h = [], c;
          for (c = 2; c < arguments.length; c++)
            h.push(arguments[c]);
          return function() {
            var p = h.concat([]), v;
            for (v = 0; v < arguments.length; v++)
              p.push(arguments[v]);
            return a.apply(o, p);
          };
        },
        /**
         * Retrieves the value of a url parameter from the window.location string.
         * @function
         * @param {String} key
         * @returns {String} The value of the url parameter or null if no param matches.
         */
        getUrlParameter: function(o) {
          var a = l[o];
          return a || null;
        },
        /**
         * Retrieves the protocol used by the url. The url can either be absolute
         * or relative.
         * @function
         * @private
         * @param {String} url The url to retrieve the protocol from.
         * @returns {String} The protocol (http:, https:, file:, ftp: ...)
         */
        getUrlProtocol: function(o) {
          var a = o.match(/^([a-z]+:)\/\//i);
          return a === null ? window.location.protocol : a[1].toLowerCase();
        },
        /**
         * Create an XHR object
         * @private
         * @param {type} [local] If set to true, the XHR will be file: protocol
         * compatible if possible (but may raise a warning in the browser).
         * @returns {XMLHttpRequest}
         */
        createAjaxRequest: function(o) {
          var a;
          try {
            a = !!new ActiveXObject("Microsoft.XMLHTTP");
          } catch {
            a = !1;
          }
          if (a)
            window.XMLHttpRequest ? e.createAjaxRequest = function(h) {
              return h ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
            } : e.createAjaxRequest = function() {
              return new ActiveXObject("Microsoft.XMLHTTP");
            };
          else if (window.XMLHttpRequest)
            e.createAjaxRequest = function() {
              return new XMLHttpRequest();
            };
          else
            throw new Error("Browser doesn't support XMLHttpRequest.");
          return e.createAjaxRequest(o);
        },
        /**
         * Makes an AJAX request.
         * @param {Object} options
         * @param {String} options.url - the url to request
         * @param {Function} options.success - a function to call on a successful response
         * @param {Function} options.error - a function to call on when an error occurs
         * @param {Object} options.headers - headers to add to the AJAX request
         * @param {String} options.responseType - the response type of the AJAX request
         * @param {String} options.postData - HTTP POST data (usually but not necessarily in k=v&k2=v2... form,
         *      see TileSource::getPostData), GET method used if null
         * @param {Boolean} [options.withCredentials=false] - whether to set the XHR's withCredentials
         * @throws {Error}
         * @returns {XMLHttpRequest}
         */
        makeAjaxRequest: function(o, a, h) {
          var c, p, v, w;
          e.isPlainObject(o) && (a = o.success, h = o.error, c = o.withCredentials, p = o.headers, v = o.responseType || null, w = o.postData || null, o = o.url);
          var E = e.getUrlProtocol(o), _ = e.createAjaxRequest(E === "file:");
          if (!e.isFunction(a))
            throw new Error("makeAjaxRequest requires a success callback");
          _.onreadystatechange = function() {
            _.readyState === 4 && (_.onreadystatechange = function() {
            }, _.status >= 200 && _.status < 300 || _.status === 0 && E !== "http:" && E !== "https:" ? a(_) : e.isFunction(h) ? h(_) : e.console.error("AJAX request returned %d: %s", _.status, o));
          };
          var S = w ? "POST" : "GET";
          try {
            if (_.open(S, o, !0), v && (_.responseType = v), p)
              for (var C in p)
                Object.prototype.hasOwnProperty.call(p, C) && p[C] && _.setRequestHeader(C, p[C]);
            c && (_.withCredentials = !0), _.send(w);
          } catch (b) {
            e.console.error("%s while making AJAX request: %s", b.name, b.message), _.onreadystatechange = function() {
            }, e.isFunction(h) && h(_, b);
          }
          return _;
        },
        /**
         * Taken from jQuery 1.6.1
         * @function
         * @param {Object} options
         * @param {String} options.url
         * @param {Function} options.callback
         * @param {String} [options.param='callback'] The name of the url parameter
         *      to request the jsonp provider with.
         * @param {String} [options.callbackName=] The name of the callback to
         *      request the jsonp provider with.
         */
        jsonp: function(o) {
          var a, h = o.url, c = document.head || document.getElementsByTagName("head")[0] || document.documentElement, p = o.callbackName || "openseadragon" + e.now(), v = window[p], w = "$1" + p + "$2", E = o.param || "callback", _ = o.callback;
          h = h.replace(/(=)\?(&|$)|\?\?/i, w), h += (/\?/.test(h) ? "&" : "?") + E + "=" + p, window[p] = function(S) {
            if (v)
              window[p] = v;
            else
              try {
                delete window[p];
              } catch {
              }
            _ && e.isFunction(_) && _(S);
          }, a = document.createElement("script"), (o.async !== void 0 || o.async !== !1) && (a.async = "async"), o.scriptCharset && (a.charset = o.scriptCharset), a.src = h, a.onload = a.onreadystatechange = function(S, C) {
            (C || !a.readyState || /loaded|complete/.test(a.readyState)) && (a.onload = a.onreadystatechange = null, c && a.parentNode && c.removeChild(a), a = void 0);
          }, c.insertBefore(a, c.firstChild);
        },
        /**
         * Fully deprecated. Will throw an error.
         * @function
         * @deprecated use {@link OpenSeadragon.Viewer#open}
         */
        createFromDZI: function() {
          throw "OpenSeadragon.createFromDZI is deprecated, use Viewer.open.";
        },
        /**
         * Parses an XML string into a DOM Document.
         * @function
         * @param {String} string
         * @returns {Document}
         */
        parseXml: function(o) {
          if (window.DOMParser)
            e.parseXml = function(a) {
              var h = null, c;
              return c = new DOMParser(), h = c.parseFromString(a, "text/xml"), h;
            };
          else if (window.ActiveXObject)
            e.parseXml = function(a) {
              var h = null;
              return h = new ActiveXObject("Microsoft.XMLDOM"), h.async = !1, h.loadXML(a), h;
            };
          else
            throw new Error("Browser doesn't support XML DOM.");
          return e.parseXml(o);
        },
        /**
         * Parses a JSON string into a Javascript object.
         * @function
         * @param {String} string
         * @returns {Object}
         */
        parseJSON: function(o) {
          return e.parseJSON = window.JSON.parse, e.parseJSON(o);
        },
        /**
         * Reports whether the image format is supported for tiling in this
         * version.
         * @function
         * @param {String} [extension]
         * @returns {Boolean}
         */
        imageFormatSupported: function(o) {
          return o = o || "", !!r[o.toLowerCase()];
        },
        /**
         * Updates supported image formats with user-specified values.
         * Preexisting formats that are not being updated are left unchanged.
         * By default, the defined formats are
         * <pre><code>{
         *      bmp:  false,
         *      jpeg: true,
         *      jpg:  true,
         *      png:  true,
         *      tif:  false,
         *      wdp:  false
         * }
         * </code></pre>
         * @function
         * @example
         * // sets webp as supported and png as unsupported
         * setImageFormatsSupported({webp: true, png: false});
         * @param {Object} formats An object containing format extensions as
         * keys and booleans as values.
         */
        setImageFormatsSupported: function(o) {
          e.extend(r, o);
        }
      }
    );
    var i = function(o) {
    };
    e.console = window.console || {
      log: i,
      debug: i,
      info: i,
      warn: i,
      error: i,
      assert: i
    }, e.Browser = {
      vendor: e.BROWSERS.UNKNOWN,
      version: 0,
      alpha: !0
    };
    var r = {
      bmp: !1,
      jpeg: !0,
      jpg: !0,
      png: !0,
      tif: !1,
      wdp: !1
    }, l = {};
    (function() {
      var o = navigator.appVersion, a = navigator.userAgent, h;
      switch (navigator.appName) {
        case "Microsoft Internet Explorer":
          window.attachEvent && window.ActiveXObject && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(
            a.substring(
              a.indexOf("MSIE") + 5,
              a.indexOf(";", a.indexOf("MSIE"))
            )
          ));
          break;
        case "Netscape":
          window.addEventListener && (a.indexOf("Edge") >= 0 ? (e.Browser.vendor = e.BROWSERS.EDGE, e.Browser.version = parseFloat(
            a.substring(a.indexOf("Edge") + 5)
          )) : a.indexOf("Edg") >= 0 ? (e.Browser.vendor = e.BROWSERS.CHROMEEDGE, e.Browser.version = parseFloat(
            a.substring(a.indexOf("Edg") + 4)
          )) : a.indexOf("Firefox") >= 0 ? (e.Browser.vendor = e.BROWSERS.FIREFOX, e.Browser.version = parseFloat(
            a.substring(a.indexOf("Firefox") + 8)
          )) : a.indexOf("Safari") >= 0 ? (e.Browser.vendor = a.indexOf("Chrome") >= 0 ? e.BROWSERS.CHROME : e.BROWSERS.SAFARI, e.Browser.version = parseFloat(
            a.substring(
              a.substring(0, a.indexOf("Safari")).lastIndexOf("/") + 1,
              a.indexOf("Safari")
            )
          )) : (h = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), h.exec(a) !== null && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(RegExp.$1))));
          break;
        case "Opera":
          e.Browser.vendor = e.BROWSERS.OPERA, e.Browser.version = parseFloat(o);
          break;
      }
      var c = window.location.search.substring(1), p = c.split("&"), v, w, E;
      for (E = 0; E < p.length; E++)
        if (v = p[E], w = v.indexOf("="), w > 0) {
          var _ = v.substring(0, w), S = v.substring(w + 1);
          try {
            l[_] = decodeURIComponent(S);
          } catch {
            e.console.error("Ignoring malformed URL parameter: %s=%s", _, S);
          }
        }
      e.Browser.alpha = !(e.Browser.vendor === e.BROWSERS.CHROME && e.Browser.version < 2), e.Browser.opacity = !0, e.Browser.vendor === e.BROWSERS.IE && e.Browser.version < 11 && e.console.error("Internet Explorer versions < 11 are not supported by OpenSeadragon");
    })(), function(o) {
      var a = o.requestAnimationFrame || o.mozRequestAnimationFrame || o.webkitRequestAnimationFrame || o.msRequestAnimationFrame, h = o.cancelAnimationFrame || o.mozCancelAnimationFrame || o.webkitCancelAnimationFrame || o.msCancelAnimationFrame;
      if (a && h)
        e.requestAnimationFrame = function() {
          return a.apply(o, arguments);
        }, e.cancelAnimationFrame = function() {
          return h.apply(o, arguments);
        };
      else {
        var c = [], p = [], v = 0, w;
        e.requestAnimationFrame = function(E) {
          return c.push([++v, E]), w || (w = setInterval(function() {
            if (c.length) {
              var _ = e.now(), S = p;
              for (p = c, c = S; p.length; )
                p.shift()[1](_);
            } else
              clearInterval(w), w = void 0;
          }, 1e3 / 50)), v;
        }, e.cancelAnimationFrame = function(E) {
          var _, S;
          for (_ = 0, S = c.length; _ < S; _ += 1)
            if (c[_][0] === E) {
              c.splice(_, 1);
              return;
            }
          for (_ = 0, S = p.length; _ < S; _ += 1)
            if (p[_][0] === E) {
              p.splice(_, 1);
              return;
            }
        };
      }
    }(window);
    function s(o, a) {
      return a && o !== document.body ? document.body : o.offsetParent;
    }
  }(n), function(e, t) {
    d.exports ? d.exports = t() : e.OpenSeadragon = t();
  }(ft, function() {
    return n;
  }), function(e) {
    var t = {
      supportsFullScreen: !1,
      isFullScreen: function() {
        return !1;
      },
      getFullScreenElement: function() {
        return null;
      },
      requestFullScreen: function() {
      },
      exitFullScreen: function() {
      },
      cancelFullScreen: function() {
      },
      fullScreenEventName: "",
      fullScreenErrorEventName: ""
    };
    document.exitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
      return document.fullscreenElement;
    }, t.requestFullScreen = function(i) {
      return i.requestFullscreen();
    }, t.exitFullScreen = function() {
      document.exitFullscreen();
    }, t.fullScreenEventName = "fullscreenchange", t.fullScreenErrorEventName = "fullscreenerror") : document.msExitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
      return document.msFullscreenElement;
    }, t.requestFullScreen = function(i) {
      return i.msRequestFullscreen();
    }, t.exitFullScreen = function() {
      document.msExitFullscreen();
    }, t.fullScreenEventName = "MSFullscreenChange", t.fullScreenErrorEventName = "MSFullscreenError") : document.webkitExitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
      return document.webkitFullscreenElement;
    }, t.requestFullScreen = function(i) {
      return i.webkitRequestFullscreen();
    }, t.exitFullScreen = function() {
      document.webkitExitFullscreen();
    }, t.fullScreenEventName = "webkitfullscreenchange", t.fullScreenErrorEventName = "webkitfullscreenerror") : document.webkitCancelFullScreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
      return document.webkitCurrentFullScreenElement;
    }, t.requestFullScreen = function(i) {
      return i.webkitRequestFullScreen();
    }, t.exitFullScreen = function() {
      document.webkitCancelFullScreen();
    }, t.fullScreenEventName = "webkitfullscreenchange", t.fullScreenErrorEventName = "webkitfullscreenerror") : document.mozCancelFullScreen && (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
      return document.mozFullScreenElement;
    }, t.requestFullScreen = function(i) {
      return i.mozRequestFullScreen();
    }, t.exitFullScreen = function() {
      document.mozCancelFullScreen();
    }, t.fullScreenEventName = "mozfullscreenchange", t.fullScreenErrorEventName = "mozfullscreenerror"), t.isFullScreen = function() {
      return t.getFullScreenElement() !== null;
    }, t.cancelFullScreen = function() {
      e.console.error("cancelFullScreen is deprecated. Use exitFullScreen instead."), t.exitFullScreen();
    }, e.extend(e, t);
  }(n), function(e) {
    e.EventSource = function() {
      this.events = {};
    }, e.EventSource.prototype = {
      /**
       * Add an event handler to be triggered only once (or a given number of times)
       * for a given event. It is not removable with removeHandler().
       * @function
       * @param {String} eventName - Name of event to register.
       * @param {OpenSeadragon.EventHandler} handler - Function to call when event
       * is triggered.
       * @param {Object} [userData=null] - Arbitrary object to be passed unchanged
       * to the handler.
       * @param {Number} [times=1] - The number of times to handle the event
       * before removing it.
       * @param {Number} [priority=0] - Handler priority. By default, all priorities are 0. Higher number = priority.
       */
      addOnceHandler: function(t, i, r, l, s) {
        var o = this;
        l = l || 1;
        var a = 0, h = function(c) {
          return a++, a === l && o.removeHandler(t, h), i(c);
        };
        this.addHandler(t, h, r, s);
      },
      /**
       * Add an event handler for a given event.
       * @function
       * @param {String} eventName - Name of event to register.
       * @param {OpenSeadragon.EventHandler} handler - Function to call when event is triggered.
       * @param {Object} [userData=null] - Arbitrary object to be passed unchanged to the handler.
       * @param {Number} [priority=0] - Handler priority. By default, all priorities are 0. Higher number = priority.
       */
      addHandler: function(t, i, r, l) {
        var s = this.events[t];
        if (s || (this.events[t] = s = []), i && e.isFunction(i)) {
          var o = s.length, a = { handler: i, userData: r || null, priority: l || 0 };
          for (s[o] = a; o > 0 && s[o - 1].priority < s[o].priority; )
            s[o] = s[o - 1], s[o - 1] = a, o--;
        }
      },
      /**
       * Remove a specific event handler for a given event.
       * @function
       * @param {String} eventName - Name of event for which the handler is to be removed.
       * @param {OpenSeadragon.EventHandler} handler - Function to be removed.
       */
      removeHandler: function(t, i) {
        var r = this.events[t], l = [], s;
        if (r && e.isArray(r)) {
          for (s = 0; s < r.length; s++)
            r[s].handler !== i && l.push(r[s]);
          this.events[t] = l;
        }
      },
      /**
       * Get the amount of handlers registered for a given event.
       * @param {String} eventName - Name of event to inspect.
       * @returns {number} amount of events
       */
      numberOfHandlers: function(t) {
        var i = this.events[t];
        return i ? i.length : 0;
      },
      /**
       * Remove all event handlers for a given event type. If no type is given all
       * event handlers for every event type are removed.
       * @function
       * @param {String} eventName - Name of event for which all handlers are to be removed.
       */
      removeAllHandlers: function(t) {
        if (t)
          this.events[t] = [];
        else
          for (var i in this.events)
            this.events[i] = [];
      },
      /**
       * Get a function which iterates the list of all handlers registered for a given event, calling the handler for each.
       * @function
       * @param {String} eventName - Name of event to get handlers for.
       */
      getHandler: function(t) {
        var i = this.events[t];
        return !i || !i.length ? null : (i = i.length === 1 ? [i[0]] : Array.apply(null, i), function(r, l) {
          var s, o = i.length;
          for (s = 0; s < o; s++)
            i[s] && (l.eventSource = r, l.userData = i[s].userData, i[s].handler(l));
        });
      },
      /**
       * Trigger an event, optionally passing additional information.
       * @function
       * @param {String} eventName - Name of event to register.
       * @param {Object} eventArgs - Event-specific data.
       */
      raiseEvent: function(t, i) {
        var r = this.getHandler(t);
        if (r)
          return r(this, i || {});
      }
    };
  }(n), function(e) {
    var t = {};
    e.MouseTracker = function(g) {
      var f = arguments;
      e.isPlainObject(g) || (g = {
        element: f[0],
        clickTimeThreshold: f[1],
        clickDistThreshold: f[2]
      }), this.hash = Math.random(), this.element = e.getElement(g.element), this.clickTimeThreshold = g.clickTimeThreshold || e.DEFAULT_SETTINGS.clickTimeThreshold, this.clickDistThreshold = g.clickDistThreshold || e.DEFAULT_SETTINGS.clickDistThreshold, this.dblClickTimeThreshold = g.dblClickTimeThreshold || e.DEFAULT_SETTINGS.dblClickTimeThreshold, this.dblClickDistThreshold = g.dblClickDistThreshold || e.DEFAULT_SETTINGS.dblClickDistThreshold, this.userData = g.userData || null, this.stopDelay = g.stopDelay || 50, this.preProcessEventHandler = g.preProcessEventHandler || null, this.contextMenuHandler = g.contextMenuHandler || null, this.enterHandler = g.enterHandler || null, this.leaveHandler = g.leaveHandler || null, this.exitHandler = g.exitHandler || null, this.overHandler = g.overHandler || null, this.outHandler = g.outHandler || null, this.pressHandler = g.pressHandler || null, this.nonPrimaryPressHandler = g.nonPrimaryPressHandler || null, this.releaseHandler = g.releaseHandler || null, this.nonPrimaryReleaseHandler = g.nonPrimaryReleaseHandler || null, this.moveHandler = g.moveHandler || null, this.scrollHandler = g.scrollHandler || null, this.clickHandler = g.clickHandler || null, this.dblClickHandler = g.dblClickHandler || null, this.dragHandler = g.dragHandler || null, this.dragEndHandler = g.dragEndHandler || null, this.pinchHandler = g.pinchHandler || null, this.stopHandler = g.stopHandler || null, this.keyDownHandler = g.keyDownHandler || null, this.keyUpHandler = g.keyUpHandler || null, this.keyHandler = g.keyHandler || null, this.focusHandler = g.focusHandler || null, this.blurHandler = g.blurHandler || null;
      var m = this;
      t[this.hash] = {
        click: function(T) {
          b(m, T);
        },
        dblclick: function(T) {
          V(m, T);
        },
        keydown: function(T) {
          Z(m, T);
        },
        keyup: function(T) {
          K(m, T);
        },
        keypress: function(T) {
          Q(m, T);
        },
        focus: function(T) {
          q(m, T);
        },
        blur: function(T) {
          $(m, T);
        },
        contextmenu: function(T) {
          ne(m, T);
        },
        wheel: function(T) {
          oe(m, T);
        },
        mousewheel: function(T) {
          le(m, T);
        },
        DOMMouseScroll: function(T) {
          le(m, T);
        },
        MozMousePixelScroll: function(T) {
          le(m, T);
        },
        losecapture: function(T) {
          Pe(m, T);
        },
        mouseenter: function(T) {
          H(m, T);
        },
        mouseleave: function(T) {
          Le(m, T);
        },
        mouseover: function(T) {
          Ve(m, T);
        },
        mouseout: function(T) {
          Xe(m, T);
        },
        mousedown: function(T) {
          De(m, T);
        },
        mouseup: function(T) {
          Ye(m, T);
        },
        mousemove: function(T) {
          Ee(m, T);
        },
        touchstart: function(T) {
          Ze(m, T);
        },
        touchend: function(T) {
          we(m, T);
        },
        touchmove: function(T) {
          _e(m, T);
        },
        touchcancel: function(T) {
          Re(m, T);
        },
        gesturestart: function(T) {
          re(m, T);
        },
        // Safari/Safari iOS
        gesturechange: function(T) {
          Ce(m, T);
        },
        // Safari/Safari iOS
        gotpointercapture: function(T) {
          he(m, T);
        },
        lostpointercapture: function(T) {
          et(m, T);
        },
        pointerenter: function(T) {
          H(m, T);
        },
        pointerleave: function(T) {
          Le(m, T);
        },
        pointerover: function(T) {
          Ve(m, T);
        },
        pointerout: function(T) {
          Xe(m, T);
        },
        pointerdown: function(T) {
          De(m, T);
        },
        pointerup: function(T) {
          Ye(m, T);
        },
        pointermove: function(T) {
          Ee(m, T);
        },
        pointercancel: function(T) {
          Me(m, T);
        },
        pointerupcaptured: function(T) {
          tt(m, T);
        },
        pointermovecaptured: function(T) {
          Ke(m, T);
        },
        tracking: !1,
        // Active pointers lists. Array of GesturePointList objects, one for each pointer device type.
        // GesturePointList objects are added each time a pointer is tracked by a new pointer device type (see getActivePointersListByType()).
        // Active pointers are any pointer being tracked for this element which are in the hit-test area
        //     of the element (for hover-capable devices) and/or have contact or a button press initiated in the element.
        activePointersLists: [],
        // Tracking for double-click gesture
        lastClickPos: null,
        dblClickTimeOut: null,
        // Tracking for pinch gesture
        pinchGPoints: [],
        lastPinchDist: 0,
        currentPinchDist: 0,
        lastPinchCenter: null,
        currentPinchCenter: null,
        // Tracking for drag
        sentDragEvent: !1
      }, this.hasGestureHandlers = !!(this.pressHandler || this.nonPrimaryPressHandler || this.releaseHandler || this.nonPrimaryReleaseHandler || this.clickHandler || this.dblClickHandler || this.dragHandler || this.dragEndHandler || this.pinchHandler), this.hasScrollHandler = !!this.scrollHandler, e.MouseTracker.havePointerEvents && e.setElementPointerEvents(this.element, "auto"), this.exitHandler && e.console.error("MouseTracker.exitHandler is deprecated. Use MouseTracker.leaveHandler instead."), g.startDisabled || this.setTracking(!0);
    }, e.MouseTracker.prototype = {
      /**
       * Clean up any events or objects created by the tracker.
       * @function
       */
      destroy: function() {
        o(this), this.element = null, t[this.hash] = null, delete t[this.hash];
      },
      /**
       * Are we currently tracking events on this element.
       * @deprecated Just use this.tracking
       * @function
       * @returns {Boolean} Are we currently tracking events on this element.
       */
      isTracking: function() {
        return t[this.hash].tracking;
      },
      /**
       * Enable or disable whether or not we are tracking events on this element.
       * @function
       * @param {Boolean} track True to start tracking, false to stop tracking.
       * @returns {OpenSeadragon.MouseTracker} Chainable.
       */
      setTracking: function(g) {
        return g ? s(this) : o(this), this;
      },
      /**
       * Returns the {@link OpenSeadragon.MouseTracker.GesturePointList|GesturePointList} for the given pointer device type,
       * creating and caching a new {@link OpenSeadragon.MouseTracker.GesturePointList|GesturePointList} if one doesn't already exist for the type.
       * @function
       * @param {String} type - The pointer device type: "mouse", "touch", "pen", etc.
       * @returns {OpenSeadragon.MouseTracker.GesturePointList}
       */
      getActivePointersListByType: function(g) {
        var f = t[this.hash], m, T = f.activePointersLists.length, R;
        for (m = 0; m < T; m++)
          if (f.activePointersLists[m].type === g)
            return f.activePointersLists[m];
        return R = new e.MouseTracker.GesturePointList(g), f.activePointersLists.push(R), R;
      },
      /**
       * Returns the total number of pointers currently active on the tracked element.
       * @function
       * @returns {Number}
       */
      getActivePointerCount: function() {
        var g = t[this.hash], f, m = g.activePointersLists.length, T = 0;
        for (f = 0; f < m; f++)
          T += g.activePointersLists[f].getLength();
        return T;
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {OpenSeadragon.MouseTracker.EventProcessInfo} eventInfo
       */
      preProcessEventHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Boolean} event.preventDefault
       *      Set to true to prevent the default user-agent's handling of the contextmenu event.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      contextMenuHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Number} event.pointers
       *      Number of pointers (all types) active in the tracked element.
       * @param {Boolean} event.insideElementPressed
       *      True if the left mouse button is currently being pressed and was
       *      initiated inside the tracked element, otherwise false.
       * @param {Boolean} event.buttonDownAny
       *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      enterHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @since v2.5.0
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Number} event.pointers
       *      Number of pointers (all types) active in the tracked element.
       * @param {Boolean} event.insideElementPressed
       *      True if the left mouse button is currently being pressed and was
       *      initiated inside the tracked element, otherwise false.
       * @param {Boolean} event.buttonDownAny
       *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      leaveHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @deprecated v2.5.0 Use leaveHandler instead
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Number} event.pointers
       *      Number of pointers (all types) active in the tracked element.
       * @param {Boolean} event.insideElementPressed
       *      True if the left mouse button is currently being pressed and was
       *      initiated inside the tracked element, otherwise false.
       * @param {Boolean} event.buttonDownAny
       *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      exitHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @since v2.5.0
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Number} event.pointers
       *      Number of pointers (all types) active in the tracked element.
       * @param {Boolean} event.insideElementPressed
       *      True if the left mouse button is currently being pressed and was
       *      initiated inside the tracked element, otherwise false.
       * @param {Boolean} event.buttonDownAny
       *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      overHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @since v2.5.0
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Number} event.pointers
       *      Number of pointers (all types) active in the tracked element.
       * @param {Boolean} event.insideElementPressed
       *      True if the left mouse button is currently being pressed and was
       *      initiated inside the tracked element, otherwise false.
       * @param {Boolean} event.buttonDownAny
       *      Was the button down anywhere in the screen during the event. <span style="color:red;">Deprecated. Use buttons instead.</span>
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      outHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      pressHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.button
       *      Button which caused the event.
       *      -1: none, 0: primary/left, 1: aux/middle, 2: secondary/right, 3: X1/back, 4: X2/forward, 5: pen eraser.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      nonPrimaryPressHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Boolean} event.insideElementPressed
       *      True if the left mouse button is currently being pressed and was
       *      initiated inside the tracked element, otherwise false.
       * @param {Boolean} event.insideElementReleased
       *      True if the cursor inside the tracked element when the button was released.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      releaseHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.button
       *      Button which caused the event.
       *      -1: none, 0: primary/left, 1: aux/middle, 2: secondary/right, 3: X1/back, 4: X2/forward, 5: pen eraser.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      nonPrimaryReleaseHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      moveHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.scroll
       *      The scroll delta for the event.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead. Touch devices no longer generate scroll event.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Boolean} event.preventDefault
       *      Set to true to prevent the default user-agent's handling of the wheel event.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      scrollHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Boolean} event.quick
       *      True only if the clickDistThreshold and clickTimeThreshold are both passed. Useful for ignoring drag events.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Element} event.originalTarget
       *      The DOM element clicked on.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      clickHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      dblClickHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {OpenSeadragon.Point} event.delta
       *      The x,y components of the difference between the current position and the last drag event position.  Useful for ignoring or weighting the events.
       * @param {Number} event.speed
       *     Current computed speed, in pixels per second.
       * @param {Number} event.direction
       *     Current computed direction, expressed as an angle counterclockwise relative to the positive X axis (-pi to pi, in radians). Only valid if speed > 0.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      dragHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.speed
       *     Speed at the end of a drag gesture, in pixels per second.
       * @param {Number} event.direction
       *     Direction at the end of a drag gesture, expressed as an angle counterclockwise relative to the positive X axis (-pi to pi, in radians). Only valid if speed > 0.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      dragEndHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {Array.<OpenSeadragon.MouseTracker.GesturePoint>} event.gesturePoints
       *      Gesture points associated with the gesture. Velocity data can be found here.
       * @param {OpenSeadragon.Point} event.lastCenter
       *      The previous center point of the two pinch contact points relative to the tracked element.
       * @param {OpenSeadragon.Point} event.center
       *      The center point of the two pinch contact points relative to the tracked element.
       * @param {Number} event.lastDistance
       *      The previous distance between the two pinch contact points in CSS pixels.
       * @param {Number} event.distance
       *      The distance between the two pinch contact points in CSS pixels.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      pinchHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {String} event.pointerType
       *     "mouse", "touch", "pen", etc.
       * @param {OpenSeadragon.Point} event.position
       *      The position of the event relative to the tracked element.
       * @param {Number} event.buttons
       *      Current buttons pressed.
       *      Combination of bit flags 0: none, 1: primary (or touch contact), 2: secondary, 4: aux (often middle), 8: X1 (often back), 16: X2 (often forward), 32: pen eraser.
       * @param {Boolean} event.isTouchEvent
       *      True if the original event is a touch event, otherwise false. <span style="color:red;">Deprecated. Use pointerType and/or originalEvent instead.</span>
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      stopHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {Number} event.keyCode
       *      The key code that was pressed.
       * @param {Boolean} event.ctrl
       *      True if the ctrl key was pressed during this event.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.alt
       *      True if the alt key was pressed during this event.
       * @param {Boolean} event.meta
       *      True if the meta key was pressed during this event.
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Boolean} event.preventDefault
       *      Set to true to prevent the default user-agent's handling of the keydown event.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      keyDownHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {Number} event.keyCode
       *      The key code that was pressed.
       * @param {Boolean} event.ctrl
       *      True if the ctrl key was pressed during this event.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.alt
       *      True if the alt key was pressed during this event.
       * @param {Boolean} event.meta
       *      True if the meta key was pressed during this event.
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Boolean} event.preventDefault
       *      Set to true to prevent the default user-agent's handling of the keyup event.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      keyUpHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {Number} event.keyCode
       *      The key code that was pressed.
       * @param {Boolean} event.ctrl
       *      True if the ctrl key was pressed during this event.
       * @param {Boolean} event.shift
       *      True if the shift key was pressed during this event.
       * @param {Boolean} event.alt
       *      True if the alt key was pressed during this event.
       * @param {Boolean} event.meta
       *      True if the meta key was pressed during this event.
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Boolean} event.preventDefault
       *      Set to true to prevent the default user-agent's handling of the keypress event.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      keyHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      focusHandler: function() {
      },
      /**
       * Implement or assign implementation to these handlers during or after
       * calling the constructor.
       * @function
       * @param {Object} event
       * @param {OpenSeadragon.MouseTracker} event.eventSource
       *      A reference to the tracker instance.
       * @param {Object} event.originalEvent
       *      The original event object.
       * @param {Object} event.userData
       *      Arbitrary user-defined object.
       */
      blurHandler: function() {
      }
    };
    var i = function() {
      try {
        return window.self !== window.top;
      } catch {
        return !0;
      }
    }();
    function r(g) {
      try {
        return g.addEventListener && g.removeEventListener;
      } catch {
        return !1;
      }
    }
    e.MouseTracker.gesturePointVelocityTracker = function() {
      var g = [], f = 0, m = 0, T = function(X, U) {
        return X.hash.toString() + U.type + U.id.toString();
      }, R = function() {
        var X, U = g.length, ge, Y, ve = e.now(), yt, lt, it;
        for (yt = ve - m, m = ve, X = 0; X < U; X++)
          ge = g[X], Y = ge.gPoint, Y.direction = Math.atan2(Y.currentPos.y - ge.lastPos.y, Y.currentPos.x - ge.lastPos.x), lt = ge.lastPos.distanceTo(Y.currentPos), ge.lastPos = Y.currentPos, it = 1e3 * lt / (yt + 1), Y.speed = 0.75 * it + 0.25 * Y.speed;
      }, A = function(X, U) {
        var ge = T(X, U);
        g.push(
          {
            guid: ge,
            gPoint: U,
            lastPos: U.currentPos
          }
        ), g.length === 1 && (m = e.now(), f = window.setInterval(R, 50));
      }, k = function(X, U) {
        var ge = T(X, U), Y, ve = g.length;
        for (Y = 0; Y < ve; Y++)
          if (g[Y].guid === ge) {
            g.splice(Y, 1), ve--, ve === 0 && window.clearInterval(f);
            break;
          }
      };
      return {
        addPoint: A,
        removePoint: k
      };
    }(), e.MouseTracker.captureElement = document, e.MouseTracker.wheelEventName = e.Browser.vendor === e.BROWSERS.IE && e.Browser.version > 8 || "onwheel" in document.createElement("div") ? "wheel" : (
      // Modern browsers support 'wheel'
      document.onmousewheel !== void 0 ? "mousewheel" : (
        // Webkit and IE support at least 'mousewheel'
        "DOMMouseScroll"
      )
    ), e.MouseTracker.subscribeEvents = ["click", "dblclick", "keydown", "keyup", "keypress", "focus", "blur", "contextmenu", e.MouseTracker.wheelEventName], e.MouseTracker.wheelEventName === "DOMMouseScroll" && e.MouseTracker.subscribeEvents.push("MozMousePixelScroll"), window.PointerEvent ? (e.MouseTracker.havePointerEvents = !0, e.MouseTracker.subscribeEvents.push("pointerenter", "pointerleave", "pointerover", "pointerout", "pointerdown", "pointerup", "pointermove", "pointercancel"), e.MouseTracker.havePointerCapture = function() {
      var g = document.createElement("div");
      return e.isFunction(g.setPointerCapture) && e.isFunction(g.releasePointerCapture);
    }(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("gotpointercapture", "lostpointercapture")) : (e.MouseTracker.havePointerEvents = !1, e.MouseTracker.subscribeEvents.push("mouseenter", "mouseleave", "mouseover", "mouseout", "mousedown", "mouseup", "mousemove"), e.MouseTracker.mousePointerId = "legacy-mouse", e.MouseTracker.havePointerCapture = function() {
      var g = document.createElement("div");
      return e.isFunction(g.setCapture) && e.isFunction(g.releaseCapture);
    }(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("losecapture"), "ontouchstart" in window && e.MouseTracker.subscribeEvents.push("touchstart", "touchend", "touchmove", "touchcancel"), "ongesturestart" in window && e.MouseTracker.subscribeEvents.push("gesturestart", "gesturechange")), e.MouseTracker.GesturePointList = function(g) {
      this._gPoints = [], this.type = g, this.buttons = 0, this.contacts = 0, this.clicks = 0, this.captureCount = 0;
    }, e.MouseTracker.GesturePointList.prototype = {
      /**
       * @function
       * @returns {Number} Number of gesture points in the list.
       */
      getLength: function() {
        return this._gPoints.length;
      },
      /**
       * @function
       * @returns {Array.<OpenSeadragon.MouseTracker.GesturePoint>} The list of gesture points in the list as an array (read-only).
       */
      asArray: function() {
        return this._gPoints;
      },
      /**
       * @function
       * @param {OpenSeadragon.MouseTracker.GesturePoint} gesturePoint - A gesture point to add to the list.
       * @returns {Number} Number of gesture points in the list.
       */
      add: function(g) {
        return this._gPoints.push(g);
      },
      /**
       * @function
       * @param {Number} id - The id of the gesture point to remove from the list.
       * @returns {Number} Number of gesture points in the list.
       */
      removeById: function(g) {
        var f, m = this._gPoints.length;
        for (f = 0; f < m; f++)
          if (this._gPoints[f].id === g) {
            this._gPoints.splice(f, 1);
            break;
          }
        return this._gPoints.length;
      },
      /**
       * @function
       * @param {Number} index - The index of the gesture point to retrieve from the list.
       * @returns {OpenSeadragon.MouseTracker.GesturePoint|null} The gesture point at the given index, or null if not found.
       */
      getByIndex: function(g) {
        return g < this._gPoints.length ? this._gPoints[g] : null;
      },
      /**
       * @function
       * @param {Number} id - The id of the gesture point to retrieve from the list.
       * @returns {OpenSeadragon.MouseTracker.GesturePoint|null} The gesture point with the given id, or null if not found.
       */
      getById: function(g) {
        var f, m = this._gPoints.length;
        for (f = 0; f < m; f++)
          if (this._gPoints[f].id === g)
            return this._gPoints[f];
        return null;
      },
      /**
       * @function
       * @returns {OpenSeadragon.MouseTracker.GesturePoint|null} The primary gesture point in the list, or null if not found.
       */
      getPrimary: function(g) {
        var f, m = this._gPoints.length;
        for (f = 0; f < m; f++)
          if (this._gPoints[f].isPrimary)
            return this._gPoints[f];
        return null;
      },
      /**
       * Increment this pointer list's contact count.
       * It will evaluate whether this pointer type is allowed to have multiple contacts.
       * @function
       */
      addContact: function() {
        ++this.contacts, this.contacts > 1 && (this.type === "mouse" || this.type === "pen") && (e.console.warn("GesturePointList.addContact() Implausible contacts value"), this.contacts = 1);
      },
      /**
       * Decrement this pointer list's contact count.
       * It will make sure the count does not go below 0.
       * @function
       */
      removeContact: function() {
        --this.contacts, this.contacts < 0 && (this.contacts = 0);
      }
    };
    function l(g) {
      var f = t[g.hash], m, T, R, A, k, X = f.activePointersLists.length;
      for (m = 0; m < X; m++)
        if (R = f.activePointersLists[m], R.getLength() > 0) {
          for (k = [], A = R.asArray(), T = 0; T < A.length; T++)
            k.push(A[T]);
          for (T = 0; T < k.length; T++)
            Ie(g, R, k[T]);
        }
      for (m = 0; m < X; m++)
        f.activePointersLists.pop();
      f.sentDragEvent = !1;
    }
    function s(g) {
      var f = t[g.hash], m, T;
      if (!f.tracking) {
        for (T = 0; T < e.MouseTracker.subscribeEvents.length; T++)
          m = e.MouseTracker.subscribeEvents[T], e.addEvent(
            g.element,
            m,
            f[m],
            m === e.MouseTracker.wheelEventName ? { passive: !1, capture: !1 } : !1
          );
        l(g), f.tracking = !0;
      }
    }
    function o(g) {
      var f = t[g.hash], m, T;
      if (f.tracking) {
        for (T = 0; T < e.MouseTracker.subscribeEvents.length; T++)
          m = e.MouseTracker.subscribeEvents[T], e.removeEvent(
            g.element,
            m,
            f[m],
            !1
          );
        l(g), f.tracking = !1;
      }
    }
    function a(g, f) {
      var m = t[g.hash];
      if (f === "pointerevent")
        return {
          upName: "pointerup",
          upHandler: m.pointerupcaptured,
          moveName: "pointermove",
          moveHandler: m.pointermovecaptured
        };
      if (f === "mouse")
        return {
          upName: "pointerup",
          upHandler: m.pointerupcaptured,
          moveName: "pointermove",
          moveHandler: m.pointermovecaptured
        };
      if (f === "touch")
        return {
          upName: "touchend",
          upHandler: m.touchendcaptured,
          moveName: "touchmove",
          moveHandler: m.touchmovecaptured
        };
      throw new Error("MouseTracker.getCaptureEventParams: Unknown pointer type.");
    }
    function h(g, f) {
      var m;
      if (e.MouseTracker.havePointerCapture)
        if (e.MouseTracker.havePointerEvents)
          try {
            g.element.setPointerCapture(f.id);
          } catch {
            e.console.warn("setPointerCapture() called on invalid pointer ID");
            return;
          }
        else
          g.element.setCapture(!0);
      else
        m = a(g, e.MouseTracker.havePointerEvents ? "pointerevent" : f.type), i && r(window.top) && e.addEvent(
          window.top,
          m.upName,
          m.upHandler,
          !0
        ), e.addEvent(
          e.MouseTracker.captureElement,
          m.upName,
          m.upHandler,
          !0
        ), e.addEvent(
          e.MouseTracker.captureElement,
          m.moveName,
          m.moveHandler,
          !0
        );
      P(g, f, !0);
    }
    function c(g, f) {
      var m, T, R;
      if (e.MouseTracker.havePointerCapture)
        if (e.MouseTracker.havePointerEvents) {
          if (T = g.getActivePointersListByType(f.type), R = T.getById(f.id), !R || !R.captured)
            return;
          try {
            g.element.releasePointerCapture(f.id);
          } catch {
          }
        } else
          g.element.releaseCapture();
      else
        m = a(g, e.MouseTracker.havePointerEvents ? "pointerevent" : f.type), i && r(window.top) && e.removeEvent(
          window.top,
          m.upName,
          m.upHandler,
          !0
        ), e.removeEvent(
          e.MouseTracker.captureElement,
          m.moveName,
          m.moveHandler,
          !0
        ), e.removeEvent(
          e.MouseTracker.captureElement,
          m.upName,
          m.upHandler,
          !0
        );
      P(g, f, !1);
    }
    function p(g) {
      return e.MouseTracker.havePointerEvents ? g.pointerId : e.MouseTracker.mousePointerId;
    }
    function v(g) {
      return e.MouseTracker.havePointerEvents ? g.pointerType || (e.Browser.vendor === e.BROWSERS.IE ? "mouse" : "") : "mouse";
    }
    function w(g) {
      return e.MouseTracker.havePointerEvents ? g.isPrimary : !0;
    }
    function E(g) {
      return e.getMousePosition(g);
    }
    function _(g, f) {
      return S(E(g), f);
    }
    function S(g, f) {
      var m = e.getElementOffset(f);
      return g.minus(m);
    }
    function C(g, f) {
      return new e.Point((g.x + f.x) / 2, (g.y + f.y) / 2);
    }
    function b(g, f) {
      var m = {
        originalEvent: f,
        eventType: "click",
        pointerType: "mouse",
        isEmulated: !1
      };
      y(g, m), m.preventDefault && !m.defaultPrevented && e.cancelEvent(f), m.stopPropagation && e.stopEvent(f);
    }
    function V(g, f) {
      var m = {
        originalEvent: f,
        eventType: "dblclick",
        pointerType: "mouse",
        isEmulated: !1
      };
      y(g, m), m.preventDefault && !m.defaultPrevented && e.cancelEvent(f), m.stopPropagation && e.stopEvent(f);
    }
    function Z(g, f) {
      var m = null, T = {
        originalEvent: f,
        eventType: "keydown",
        pointerType: "",
        isEmulated: !1
      };
      y(g, T), g.keyDownHandler && !T.preventGesture && !T.defaultPrevented && (m = {
        eventSource: g,
        keyCode: f.keyCode ? f.keyCode : f.charCode,
        ctrl: f.ctrlKey,
        shift: f.shiftKey,
        alt: f.altKey,
        meta: f.metaKey,
        originalEvent: f,
        preventDefault: T.preventDefault || T.defaultPrevented,
        userData: g.userData
      }, g.keyDownHandler(m)), (m && m.preventDefault || T.preventDefault && !T.defaultPrevented) && e.cancelEvent(f), T.stopPropagation && e.stopEvent(f);
    }
    function K(g, f) {
      var m = null, T = {
        originalEvent: f,
        eventType: "keyup",
        pointerType: "",
        isEmulated: !1
      };
      y(g, T), g.keyUpHandler && !T.preventGesture && !T.defaultPrevented && (m = {
        eventSource: g,
        keyCode: f.keyCode ? f.keyCode : f.charCode,
        ctrl: f.ctrlKey,
        shift: f.shiftKey,
        alt: f.altKey,
        meta: f.metaKey,
        originalEvent: f,
        preventDefault: T.preventDefault || T.defaultPrevented,
        userData: g.userData
      }, g.keyUpHandler(m)), (m && m.preventDefault || T.preventDefault && !T.defaultPrevented) && e.cancelEvent(f), T.stopPropagation && e.stopEvent(f);
    }
    function Q(g, f) {
      var m = null, T = {
        originalEvent: f,
        eventType: "keypress",
        pointerType: "",
        isEmulated: !1
      };
      y(g, T), g.keyHandler && !T.preventGesture && !T.defaultPrevented && (m = {
        eventSource: g,
        keyCode: f.keyCode ? f.keyCode : f.charCode,
        ctrl: f.ctrlKey,
        shift: f.shiftKey,
        alt: f.altKey,
        meta: f.metaKey,
        originalEvent: f,
        preventDefault: T.preventDefault || T.defaultPrevented,
        userData: g.userData
      }, g.keyHandler(m)), (m && m.preventDefault || T.preventDefault && !T.defaultPrevented) && e.cancelEvent(f), T.stopPropagation && e.stopEvent(f);
    }
    function q(g, f) {
      var m = {
        originalEvent: f,
        eventType: "focus",
        pointerType: "",
        isEmulated: !1
      };
      y(g, m), g.focusHandler && !m.preventGesture && g.focusHandler(
        {
          eventSource: g,
          originalEvent: f,
          userData: g.userData
        }
      );
    }
    function $(g, f) {
      var m = {
        originalEvent: f,
        eventType: "blur",
        pointerType: "",
        isEmulated: !1
      };
      y(g, m), g.blurHandler && !m.preventGesture && g.blurHandler(
        {
          eventSource: g,
          originalEvent: f,
          userData: g.userData
        }
      );
    }
    function ne(g, f) {
      var m = null, T = {
        originalEvent: f,
        eventType: "contextmenu",
        pointerType: "mouse",
        isEmulated: !1
      };
      y(g, T), g.contextMenuHandler && !T.preventGesture && !T.defaultPrevented && (m = {
        eventSource: g,
        position: S(E(f), g.element),
        originalEvent: T.originalEvent,
        preventDefault: T.preventDefault || T.defaultPrevented,
        userData: g.userData
      }, g.contextMenuHandler(m)), (m && m.preventDefault || T.preventDefault && !T.defaultPrevented) && e.cancelEvent(f), T.stopPropagation && e.stopEvent(f);
    }
    function oe(g, f) {
      pe(g, f, f);
    }
    function le(g, f) {
      var m = {
        target: f.target || f.srcElement,
        type: "wheel",
        shiftKey: f.shiftKey || !1,
        clientX: f.clientX,
        clientY: f.clientY,
        pageX: f.pageX ? f.pageX : f.clientX,
        pageY: f.pageY ? f.pageY : f.clientY,
        deltaMode: f.type === "MozMousePixelScroll" ? 0 : 1,
        // 0=pixel, 1=line, 2=page
        deltaX: 0,
        deltaZ: 0
      };
      e.MouseTracker.wheelEventName === "mousewheel" ? m.deltaY = -f.wheelDelta / e.DEFAULT_SETTINGS.pixelsPerWheelLine : m.deltaY = f.detail, pe(g, m, f);
    }
    function pe(g, f, m) {
      var T = 0, R, A = null;
      T = f.deltaY < 0 ? 1 : -1, R = {
        originalEvent: f,
        eventType: "wheel",
        pointerType: "mouse",
        isEmulated: f !== m
      }, y(g, R), g.scrollHandler && !R.preventGesture && !R.defaultPrevented && (A = {
        eventSource: g,
        pointerType: "mouse",
        position: _(f, g.element),
        scroll: T,
        shift: f.shiftKey,
        isTouchEvent: !1,
        originalEvent: m,
        preventDefault: R.preventDefault || R.defaultPrevented,
        userData: g.userData
      }, g.scrollHandler(A)), R.stopPropagation && e.stopEvent(m), (A && A.preventDefault || R.preventDefault && !R.defaultPrevented) && e.cancelEvent(m);
    }
    function Pe(g, f) {
      var m = {
        id: e.MouseTracker.mousePointerId,
        type: "mouse"
      }, T = {
        originalEvent: f,
        eventType: "lostpointercapture",
        pointerType: "mouse",
        isEmulated: !1
      };
      y(g, T), f.target === g.element && P(g, m, !1), T.stopPropagation && e.stopEvent(f);
    }
    function Ze(g, f) {
      var m, T, R = f.changedTouches.length, A, k = g.getActivePointersListByType("touch");
      m = e.now(), k.getLength() > f.touches.length - R && e.console.warn("Tracked touch contact count doesn't match event.touches.length");
      var X = {
        originalEvent: f,
        eventType: "pointerdown",
        pointerType: "touch",
        isEmulated: !1
      };
      for (y(g, X), T = 0; T < R; T++)
        A = {
          id: f.changedTouches[T].identifier,
          type: "touch",
          // Simulate isPrimary
          isPrimary: k.getLength() === 0,
          currentPos: E(f.changedTouches[T]),
          currentTime: m
        }, O(g, X, A), J(g, X, A, 0), P(g, A, !0);
      X.preventDefault && !X.defaultPrevented && e.cancelEvent(f), X.stopPropagation && e.stopEvent(f);
    }
    function we(g, f) {
      var m, T, R = f.changedTouches.length, A;
      m = e.now();
      var k = {
        originalEvent: f,
        eventType: "pointerup",
        pointerType: "touch",
        isEmulated: !1
      };
      for (y(g, k), T = 0; T < R; T++)
        A = {
          id: f.changedTouches[T].identifier,
          type: "touch",
          currentPos: E(f.changedTouches[T]),
          currentTime: m
        }, ee(g, k, A, 0), P(g, A, !1), I(g, k, A);
      k.preventDefault && !k.defaultPrevented && e.cancelEvent(f), k.stopPropagation && e.stopEvent(f);
    }
    function _e(g, f) {
      var m, T, R = f.changedTouches.length, A;
      m = e.now();
      var k = {
        originalEvent: f,
        eventType: "pointermove",
        pointerType: "touch",
        isEmulated: !1
      };
      for (y(g, k), T = 0; T < R; T++)
        A = {
          id: f.changedTouches[T].identifier,
          type: "touch",
          currentPos: E(f.changedTouches[T]),
          currentTime: m
        }, te(g, k, A);
      k.preventDefault && !k.defaultPrevented && e.cancelEvent(f), k.stopPropagation && e.stopEvent(f);
    }
    function Re(g, f) {
      var m = f.changedTouches.length, T, R, A = {
        originalEvent: f,
        eventType: "pointercancel",
        pointerType: "touch",
        isEmulated: !1
      };
      for (y(g, A), T = 0; T < m; T++)
        R = {
          id: f.changedTouches[T].identifier,
          type: "touch"
        }, G(g, A, R);
      A.stopPropagation && e.stopEvent(f);
    }
    function re(g, f) {
      return e.eventIsCanceled(f) || f.preventDefault(), !1;
    }
    function Ce(g, f) {
      return e.eventIsCanceled(f) || f.preventDefault(), !1;
    }
    function he(g, f) {
      var m = {
        originalEvent: f,
        eventType: "gotpointercapture",
        pointerType: v(f),
        isEmulated: !1
      };
      y(g, m), f.target === g.element && P(g, {
        id: f.pointerId,
        type: v(f)
      }, !0), m.stopPropagation && e.stopEvent(f);
    }
    function et(g, f) {
      var m = {
        originalEvent: f,
        eventType: "lostpointercapture",
        pointerType: v(f),
        isEmulated: !1
      };
      y(g, m), f.target === g.element && P(g, {
        id: f.pointerId,
        type: v(f)
      }, !1), m.stopPropagation && e.stopEvent(f);
    }
    function H(g, f) {
      var m = {
        id: p(f),
        type: v(f),
        isPrimary: w(f),
        currentPos: E(f),
        currentTime: e.now()
      }, T = {
        originalEvent: f,
        eventType: "pointerenter",
        pointerType: m.type,
        isEmulated: !1
      };
      y(g, T), O(g, T, m);
    }
    function Le(g, f) {
      var m = {
        id: p(f),
        type: v(f),
        isPrimary: w(f),
        currentPos: E(f),
        currentTime: e.now()
      }, T = {
        originalEvent: f,
        eventType: "pointerleave",
        pointerType: m.type,
        isEmulated: !1
      };
      y(g, T), I(g, T, m);
    }
    function Ve(g, f) {
      var m = {
        id: p(f),
        type: v(f),
        isPrimary: w(f),
        currentPos: E(f),
        currentTime: e.now()
      }, T = {
        originalEvent: f,
        eventType: "pointerover",
        pointerType: m.type,
        isEmulated: !1
      };
      y(g, T), F(g, T, m), T.preventDefault && !T.defaultPrevented && e.cancelEvent(f), T.stopPropagation && e.stopEvent(f);
    }
    function Xe(g, f) {
      var m = {
        id: p(f),
        type: v(f),
        isPrimary: w(f),
        currentPos: E(f),
        currentTime: e.now()
      }, T = {
        originalEvent: f,
        eventType: "pointerout",
        pointerType: m.type,
        isEmulated: !1
      };
      y(g, T), M(g, T, m), T.preventDefault && !T.defaultPrevented && e.cancelEvent(f), T.stopPropagation && e.stopEvent(f);
    }
    function De(g, f) {
      var m = {
        id: p(f),
        type: v(f),
        isPrimary: w(f),
        currentPos: E(f),
        currentTime: e.now()
      }, T = e.MouseTracker.havePointerEvents && m.type === "touch" && e.Browser.vendor !== e.BROWSERS.IE, R = {
        originalEvent: f,
        eventType: "pointerdown",
        pointerType: m.type,
        isEmulated: !1
      };
      y(g, R), J(g, R, m, f.button), R.preventDefault && !R.defaultPrevented && e.cancelEvent(f), R.stopPropagation && e.stopEvent(f), R.shouldCapture && (T ? P(g, m, !0) : h(g, m));
    }
    function Ye(g, f) {
      be(g, f);
    }
    function tt(g, f) {
      var m = g.getActivePointersListByType(v(f));
      m.getById(f.pointerId) && be(g, f), e.stopEvent(f);
    }
    function be(g, f) {
      var m;
      m = {
        id: p(f),
        type: v(f),
        isPrimary: w(f),
        currentPos: E(f),
        currentTime: e.now()
      };
      var T = {
        originalEvent: f,
        eventType: "pointerup",
        pointerType: m.type,
        isEmulated: !1
      };
      y(g, T), ee(g, T, m, f.button), T.preventDefault && !T.defaultPrevented && e.cancelEvent(f), T.stopPropagation && e.stopEvent(f), T.shouldReleaseCapture && (f.target === g.element ? c(g, m) : P(g, m, !1));
    }
    function Ee(g, f) {
      je(g, f);
    }
    function Ke(g, f) {
      var m = g.getActivePointersListByType(v(f));
      m.getById(f.pointerId) && je(g, f), e.stopEvent(f);
    }
    function je(g, f) {
      var m = {
        id: p(f),
        type: v(f),
        isPrimary: w(f),
        currentPos: E(f),
        currentTime: e.now()
      }, T = {
        originalEvent: f,
        eventType: "pointermove",
        pointerType: m.type,
        isEmulated: !1
      };
      y(g, T), te(g, T, m), T.preventDefault && !T.defaultPrevented && e.cancelEvent(f), T.stopPropagation && e.stopEvent(f);
    }
    function Me(g, f) {
      var m = {
        id: f.pointerId,
        type: v(f)
      }, T = {
        originalEvent: f,
        eventType: "pointercancel",
        pointerType: m.type,
        isEmulated: !1
      };
      y(g, T), G(g, T, m), T.stopPropagation && e.stopEvent(f);
    }
    function Ne(g, f) {
      return f.speed = 0, f.direction = 0, f.contactPos = f.currentPos, f.contactTime = f.currentTime, f.lastPos = f.currentPos, f.lastTime = f.currentTime, g.add(f);
    }
    function Ie(g, f, m) {
      var T, R = f.getById(m.id);
      return R ? (R.captured && (e.console.warn("stopTrackingPointer() called on captured pointer"), c(g, R)), f.removeContact(), T = f.removeById(m.id)) : T = f.getLength(), T;
    }
    function u(g, f) {
      switch (f.eventType) {
        case "pointermove":
          f.isStoppable = !0, f.isCancelable = !0, f.preventDefault = !1, f.preventGesture = !g.hasGestureHandlers, f.stopPropagation = !1;
          break;
        case "pointerover":
        case "pointerout":
        case "contextmenu":
        case "keydown":
        case "keyup":
        case "keypress":
          f.isStoppable = !0, f.isCancelable = !0, f.preventDefault = !1, f.preventGesture = !1, f.stopPropagation = !1;
          break;
        case "pointerdown":
          f.isStoppable = !0, f.isCancelable = !0, f.preventDefault = !1, f.preventGesture = !g.hasGestureHandlers, f.stopPropagation = !1;
          break;
        case "pointerup":
          f.isStoppable = !0, f.isCancelable = !0, f.preventDefault = !1, f.preventGesture = !g.hasGestureHandlers, f.stopPropagation = !1;
          break;
        case "wheel":
          f.isStoppable = !0, f.isCancelable = !0, f.preventDefault = !1, f.preventGesture = !g.hasScrollHandler, f.stopPropagation = !1;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
          f.isStoppable = !0, f.isCancelable = !1, f.preventDefault = !1, f.preventGesture = !1, f.stopPropagation = !1;
          break;
        case "click":
          f.isStoppable = !0, f.isCancelable = !0, f.preventDefault = !!g.clickHandler, f.preventGesture = !1, f.stopPropagation = !1;
          break;
        case "dblclick":
          f.isStoppable = !0, f.isCancelable = !0, f.preventDefault = !!g.dblClickHandler, f.preventGesture = !1, f.stopPropagation = !1;
          break;
        case "focus":
        case "blur":
        case "pointerenter":
        case "pointerleave":
        default:
          f.isStoppable = !1, f.isCancelable = !1, f.preventDefault = !1, f.preventGesture = !1, f.stopPropagation = !1;
          break;
      }
    }
    function y(g, f) {
      f.eventSource = g, f.eventPhase = f.originalEvent && typeof f.originalEvent.eventPhase < "u" ? f.originalEvent.eventPhase : 0, f.defaultPrevented = e.eventIsCanceled(f.originalEvent), f.shouldCapture = !1, f.shouldReleaseCapture = !1, f.userData = g.userData, u(g, f), g.preProcessEventHandler && g.preProcessEventHandler(f);
    }
    function P(g, f, m) {
      var T = g.getActivePointersListByType(f.type), R = T.getById(f.id);
      R ? m && !R.captured ? (R.captured = !0, T.captureCount++) : !m && R.captured && (R.captured = !1, T.captureCount--, T.captureCount < 0 && (T.captureCount = 0, e.console.warn("updatePointerCaptured() - pointsList.captureCount went negative"))) : e.console.warn("updatePointerCaptured() called on untracked pointer");
    }
    function O(g, f, m) {
      var T = g.getActivePointersListByType(m.type), R;
      R = T.getById(m.id), R ? (R.insideElement = !0, R.lastPos = R.currentPos, R.lastTime = R.currentTime, R.currentPos = m.currentPos, R.currentTime = m.currentTime, m = R) : (m.captured = !1, m.insideElementPressed = !1, m.insideElement = !0, Ne(T, m)), g.enterHandler && g.enterHandler(
        {
          eventSource: g,
          pointerType: m.type,
          position: S(m.currentPos, g.element),
          buttons: T.buttons,
          pointers: g.getActivePointerCount(),
          insideElementPressed: m.insideElementPressed,
          buttonDownAny: T.buttons !== 0,
          isTouchEvent: m.type === "touch",
          originalEvent: f.originalEvent,
          userData: g.userData
        }
      );
    }
    function I(g, f, m) {
      var T = g.getActivePointersListByType(m.type), R, A;
      R = T.getById(m.id), R ? (R.captured ? (R.insideElement = !1, R.lastPos = R.currentPos, R.lastTime = R.currentTime, R.currentPos = m.currentPos, R.currentTime = m.currentTime) : Ie(g, T, R), m = R) : (m.captured = !1, m.insideElementPressed = !1), (g.leaveHandler || g.exitHandler) && (A = {
        eventSource: g,
        pointerType: m.type,
        // GitHub PR: https://github.com/openseadragon/openseadragon/pull/1754 (gPoint.currentPos && )
        position: m.currentPos && S(m.currentPos, g.element),
        buttons: T.buttons,
        pointers: g.getActivePointerCount(),
        insideElementPressed: m.insideElementPressed,
        buttonDownAny: T.buttons !== 0,
        isTouchEvent: m.type === "touch",
        originalEvent: f.originalEvent,
        userData: g.userData
      }, g.leaveHandler && g.leaveHandler(A), g.exitHandler && g.exitHandler(A));
    }
    function F(g, f, m) {
      var T, R;
      T = g.getActivePointersListByType(m.type), R = T.getById(m.id), R ? m = R : (m.captured = !1, m.insideElementPressed = !1), g.overHandler && g.overHandler(
        {
          eventSource: g,
          pointerType: m.type,
          position: S(m.currentPos, g.element),
          buttons: T.buttons,
          pointers: g.getActivePointerCount(),
          insideElementPressed: m.insideElementPressed,
          buttonDownAny: T.buttons !== 0,
          isTouchEvent: m.type === "touch",
          originalEvent: f.originalEvent,
          userData: g.userData
        }
      );
    }
    function M(g, f, m) {
      var T, R;
      T = g.getActivePointersListByType(m.type), R = T.getById(m.id), R ? m = R : (m.captured = !1, m.insideElementPressed = !1), g.outHandler && g.outHandler({
        eventSource: g,
        pointerType: m.type,
        position: m.currentPos && S(m.currentPos, g.element),
        buttons: T.buttons,
        pointers: g.getActivePointerCount(),
        insideElementPressed: m.insideElementPressed,
        buttonDownAny: T.buttons !== 0,
        isTouchEvent: m.type === "touch",
        originalEvent: f.originalEvent,
        userData: g.userData
      });
    }
    function J(g, f, m, T) {
      var R = t[g.hash], A = g.getActivePointersListByType(m.type), k;
      if (typeof f.originalEvent.buttons < "u" ? A.buttons = f.originalEvent.buttons : T === 0 ? A.buttons |= 1 : T === 1 ? A.buttons |= 4 : T === 2 ? A.buttons |= 2 : T === 3 ? A.buttons |= 8 : T === 4 ? A.buttons |= 16 : T === 5 && (A.buttons |= 32), T !== 0) {
        f.shouldCapture = !1, f.shouldReleaseCapture = !1, g.nonPrimaryPressHandler && !f.preventGesture && !f.defaultPrevented && (f.preventDefault = !0, g.nonPrimaryPressHandler(
          {
            eventSource: g,
            pointerType: m.type,
            position: S(m.currentPos, g.element),
            button: T,
            buttons: A.buttons,
            isTouchEvent: m.type === "touch",
            originalEvent: f.originalEvent,
            userData: g.userData
          }
        ));
        return;
      }
      k = A.getById(m.id), k ? (k.insideElementPressed = !0, k.insideElement = !0, k.originalTarget = f.originalEvent.target, k.contactPos = m.currentPos, k.contactTime = m.currentTime, k.lastPos = k.currentPos, k.lastTime = k.currentTime, k.currentPos = m.currentPos, k.currentTime = m.currentTime, m = k) : (m.captured = !1, m.insideElementPressed = !0, m.insideElement = !0, m.originalTarget = f.originalEvent.target, Ne(A, m)), A.addContact(), !f.preventGesture && !f.defaultPrevented ? (f.shouldCapture = !0, f.shouldReleaseCapture = !1, f.preventDefault = !0, (g.dragHandler || g.dragEndHandler || g.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.addPoint(g, m), A.contacts === 1 ? g.pressHandler && !f.preventGesture && g.pressHandler(
        {
          eventSource: g,
          pointerType: m.type,
          position: S(m.contactPos, g.element),
          buttons: A.buttons,
          isTouchEvent: m.type === "touch",
          originalEvent: f.originalEvent,
          userData: g.userData
        }
      ) : A.contacts === 2 && g.pinchHandler && m.type === "touch" && (R.pinchGPoints = A.asArray(), R.lastPinchDist = R.currentPinchDist = R.pinchGPoints[0].currentPos.distanceTo(R.pinchGPoints[1].currentPos), R.lastPinchCenter = R.currentPinchCenter = C(R.pinchGPoints[0].currentPos, R.pinchGPoints[1].currentPos))) : (f.shouldCapture = !1, f.shouldReleaseCapture = !1);
    }
    function ee(g, f, m, T) {
      var R = t[g.hash], A = g.getActivePointersListByType(m.type), k, X, U, ge = !1, Y;
      if (typeof f.originalEvent.buttons < "u" ? A.buttons = f.originalEvent.buttons : T === 0 ? A.buttons ^= -2 : T === 1 ? A.buttons ^= -5 : T === 2 ? A.buttons ^= -3 : T === 3 ? A.buttons ^= -9 : T === 4 ? A.buttons ^= -17 : T === 5 && (A.buttons ^= -33), f.shouldCapture = !1, T !== 0) {
        f.shouldReleaseCapture = !1, g.nonPrimaryReleaseHandler && !f.preventGesture && !f.defaultPrevented && (f.preventDefault = !0, g.nonPrimaryReleaseHandler(
          {
            eventSource: g,
            pointerType: m.type,
            position: S(m.currentPos, g.element),
            button: T,
            buttons: A.buttons,
            isTouchEvent: m.type === "touch",
            originalEvent: f.originalEvent,
            userData: g.userData
          }
        ));
        return;
      }
      U = A.getById(m.id), U ? (A.removeContact(), U.captured && (ge = !0), U.lastPos = U.currentPos, U.lastTime = U.currentTime, U.currentPos = m.currentPos, U.currentTime = m.currentTime, U.insideElement || Ie(g, A, U), k = U.currentPos, X = U.currentTime) : (m.captured = !1, m.insideElementPressed = !1, m.insideElement = !0, Ne(A, m), U = m), !f.preventGesture && !f.defaultPrevented && (ge ? (f.shouldReleaseCapture = !0, f.preventDefault = !0, (g.dragHandler || g.dragEndHandler || g.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.removePoint(g, U), A.contacts === 0 ? (g.releaseHandler && k && g.releaseHandler(
        {
          eventSource: g,
          pointerType: U.type,
          position: S(k, g.element),
          buttons: A.buttons,
          insideElementPressed: U.insideElementPressed,
          insideElementReleased: U.insideElement,
          isTouchEvent: U.type === "touch",
          originalEvent: f.originalEvent,
          userData: g.userData
        }
      ), g.dragEndHandler && R.sentDragEvent && g.dragEndHandler(
        {
          eventSource: g,
          pointerType: U.type,
          position: S(U.currentPos, g.element),
          speed: U.speed,
          direction: U.direction,
          shift: f.originalEvent.shiftKey,
          isTouchEvent: U.type === "touch",
          originalEvent: f.originalEvent,
          userData: g.userData
        }
      ), R.sentDragEvent = !1, (g.clickHandler || g.dblClickHandler) && U.insideElement && (Y = X - U.contactTime <= g.clickTimeThreshold && U.contactPos.distanceTo(k) <= g.clickDistThreshold, g.clickHandler && g.clickHandler(
        {
          eventSource: g,
          pointerType: U.type,
          position: S(U.currentPos, g.element),
          quick: Y,
          shift: f.originalEvent.shiftKey,
          isTouchEvent: U.type === "touch",
          originalEvent: f.originalEvent,
          originalTarget: U.originalTarget,
          userData: g.userData
        }
      ), g.dblClickHandler && Y && (A.clicks++, A.clicks === 1 ? (R.lastClickPos = k, R.dblClickTimeOut = setTimeout(function() {
        A.clicks = 0;
      }, g.dblClickTimeThreshold)) : A.clicks === 2 && (clearTimeout(R.dblClickTimeOut), A.clicks = 0, R.lastClickPos.distanceTo(k) <= g.dblClickDistThreshold && g.dblClickHandler(
        {
          eventSource: g,
          pointerType: U.type,
          position: S(U.currentPos, g.element),
          shift: f.originalEvent.shiftKey,
          isTouchEvent: U.type === "touch",
          originalEvent: f.originalEvent,
          userData: g.userData
        }
      ), R.lastClickPos = null)))) : A.contacts === 2 && g.pinchHandler && U.type === "touch" && (R.pinchGPoints = A.asArray(), R.lastPinchDist = R.currentPinchDist = R.pinchGPoints[0].currentPos.distanceTo(R.pinchGPoints[1].currentPos), R.lastPinchCenter = R.currentPinchCenter = C(R.pinchGPoints[0].currentPos, R.pinchGPoints[1].currentPos))) : (f.shouldReleaseCapture = !1, g.releaseHandler && k && (g.releaseHandler(
        {
          eventSource: g,
          pointerType: U.type,
          position: S(k, g.element),
          buttons: A.buttons,
          insideElementPressed: U.insideElementPressed,
          insideElementReleased: U.insideElement,
          isTouchEvent: U.type === "touch",
          originalEvent: f.originalEvent,
          userData: g.userData
        }
      ), f.preventDefault = !0)));
    }
    function te(g, f, m) {
      var T = t[g.hash], R = g.getActivePointersListByType(m.type), A, k, X;
      if (typeof f.originalEvent.buttons < "u" && (R.buttons = f.originalEvent.buttons), A = R.getById(m.id), A)
        A.lastPos = A.currentPos, A.lastTime = A.currentTime, A.currentPos = m.currentPos, A.currentTime = m.currentTime;
      else
        return;
      f.shouldCapture = !1, f.shouldReleaseCapture = !1, g.stopHandler && m.type === "mouse" && (clearTimeout(g.stopTimeOut), g.stopTimeOut = setTimeout(function() {
        se(g, f.originalEvent, m.type);
      }, g.stopDelay)), R.contacts === 0 ? g.moveHandler && g.moveHandler(
        {
          eventSource: g,
          pointerType: m.type,
          position: S(m.currentPos, g.element),
          buttons: R.buttons,
          isTouchEvent: m.type === "touch",
          originalEvent: f.originalEvent,
          userData: g.userData
        }
      ) : R.contacts === 1 ? (g.moveHandler && (A = R.asArray()[0], g.moveHandler(
        {
          eventSource: g,
          pointerType: A.type,
          position: S(A.currentPos, g.element),
          buttons: R.buttons,
          isTouchEvent: A.type === "touch",
          originalEvent: f.originalEvent,
          userData: g.userData
        }
      )), g.dragHandler && !f.preventGesture && !f.defaultPrevented && (A = R.asArray()[0], X = A.currentPos.minus(A.lastPos), g.dragHandler(
        {
          eventSource: g,
          pointerType: A.type,
          position: S(A.currentPos, g.element),
          buttons: R.buttons,
          delta: X,
          speed: A.speed,
          direction: A.direction,
          shift: f.originalEvent.shiftKey,
          isTouchEvent: A.type === "touch",
          originalEvent: f.originalEvent,
          userData: g.userData
        }
      ), f.preventDefault = !0, T.sentDragEvent = !0)) : R.contacts === 2 && (g.moveHandler && (k = R.asArray(), g.moveHandler(
        {
          eventSource: g,
          pointerType: k[0].type,
          position: S(C(k[0].currentPos, k[1].currentPos), g.element),
          buttons: R.buttons,
          isTouchEvent: k[0].type === "touch",
          originalEvent: f.originalEvent,
          userData: g.userData
        }
      )), g.pinchHandler && m.type === "touch" && !f.preventGesture && !f.defaultPrevented && (X = T.pinchGPoints[0].currentPos.distanceTo(T.pinchGPoints[1].currentPos), X !== T.currentPinchDist && (T.lastPinchDist = T.currentPinchDist, T.currentPinchDist = X, T.lastPinchCenter = T.currentPinchCenter, T.currentPinchCenter = C(T.pinchGPoints[0].currentPos, T.pinchGPoints[1].currentPos), g.pinchHandler(
        {
          eventSource: g,
          pointerType: "touch",
          gesturePoints: T.pinchGPoints,
          lastCenter: S(T.lastPinchCenter, g.element),
          center: S(T.currentPinchCenter, g.element),
          lastDistance: T.lastPinchDist,
          distance: T.currentPinchDist,
          shift: f.originalEvent.shiftKey,
          originalEvent: f.originalEvent,
          userData: g.userData
        }
      ), f.preventDefault = !0)));
    }
    function G(g, f, m) {
      var T = g.getActivePointersListByType(m.type), R;
      R = T.getById(m.id), R && Ie(g, T, R);
    }
    function se(g, f, m) {
      g.stopHandler && g.stopHandler({
        eventSource: g,
        pointerType: m,
        position: _(f, g.element),
        buttons: g.getActivePointersListByType(m).buttons,
        isTouchEvent: m === "touch",
        originalEvent: f,
        userData: g.userData
      });
    }
  }(n), function(e) {
    e.ControlAnchor = {
      NONE: 0,
      TOP_LEFT: 1,
      TOP_RIGHT: 2,
      BOTTOM_RIGHT: 3,
      BOTTOM_LEFT: 4,
      ABSOLUTE: 5
    }, e.Control = function(t, i, r) {
      var l = t.parentNode;
      typeof i == "number" && (e.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"), i = { anchor: i }), i.attachToViewer = typeof i.attachToViewer > "u" ? !0 : i.attachToViewer, this.autoFade = typeof i.autoFade > "u" ? !0 : i.autoFade, this.element = t, this.anchor = i.anchor, this.container = r, this.anchor === e.ControlAnchor.ABSOLUTE ? (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.position = "absolute", this.wrapper.style.top = typeof i.top == "number" ? i.top + "px" : i.top, this.wrapper.style.left = typeof i.left == "number" ? i.left + "px" : i.left, this.wrapper.style.height = typeof i.height == "number" ? i.height + "px" : i.height, this.wrapper.style.width = typeof i.width == "number" ? i.width + "px" : i.width, this.wrapper.style.margin = "0px", this.wrapper.style.padding = "0px", this.element.style.position = "relative", this.element.style.top = "0px", this.element.style.left = "0px", this.element.style.height = "100%", this.element.style.width = "100%") : (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.display = "inline-block", this.anchor === e.ControlAnchor.NONE && (this.wrapper.style.width = this.wrapper.style.height = "100%")), this.wrapper.appendChild(this.element), i.attachToViewer ? this.anchor === e.ControlAnchor.TOP_RIGHT || this.anchor === e.ControlAnchor.BOTTOM_RIGHT ? this.container.insertBefore(
        this.wrapper,
        this.container.firstChild
      ) : this.container.appendChild(this.wrapper) : l.appendChild(this.wrapper);
    }, e.Control.prototype = {
      /**
       * Removes the control from the container.
       * @function
       */
      destroy: function() {
        this.wrapper.removeChild(this.element), this.anchor !== e.ControlAnchor.NONE && this.container.removeChild(this.wrapper);
      },
      /**
       * Determines if the control is currently visible.
       * @function
       * @returns {Boolean} true if currently visible, false otherwise.
       */
      isVisible: function() {
        return this.wrapper.style.display !== "none";
      },
      /**
       * Toggles the visibility of the control.
       * @function
       * @param {Boolean} visible - true to make visible, false to hide.
       */
      setVisible: function(t) {
        this.wrapper.style.display = t ? this.anchor === e.ControlAnchor.ABSOLUTE ? "block" : "inline-block" : "none";
      },
      /**
       * Sets the opacity level for the control.
       * @function
       * @param {Number} opactiy - a value between 1 and 0 inclusively.
       */
      setOpacity: function(t) {
        this.element[e.SIGNAL] && e.Browser.vendor === e.BROWSERS.IE ? e.setElementOpacity(this.element, t, !0) : e.setElementOpacity(this.wrapper, t, !0);
      }
    };
  }(n), function(e) {
    e.ControlDock = function(i) {
      var r = ["topleft", "topright", "bottomright", "bottomleft"], l, s;
      for (e.extend(!0, this, {
        id: "controldock-" + e.now() + "-" + Math.floor(Math.random() * 1e6),
        container: e.makeNeutralElement("div"),
        controls: []
      }, i), this.container.onsubmit = function() {
        return !1;
      }, this.element && (this.element = e.getElement(this.element), this.element.appendChild(this.container), this.element.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%"), s = 0; s < r.length; s++)
        l = r[s], this.controls[l] = e.makeNeutralElement("div"), this.controls[l].style.position = "absolute", l.match("left") && (this.controls[l].style.left = "0px"), l.match("right") && (this.controls[l].style.right = "0px"), l.match("top") && (this.controls[l].style.top = "0px"), l.match("bottom") && (this.controls[l].style.bottom = "0px");
      this.container.appendChild(this.controls.topleft), this.container.appendChild(this.controls.topright), this.container.appendChild(this.controls.bottomright), this.container.appendChild(this.controls.bottomleft);
    }, e.ControlDock.prototype = {
      /**
       * @function
       */
      addControl: function(i, r) {
        i = e.getElement(i);
        var l = null;
        if (!(t(this, i) >= 0)) {
          switch (r.anchor) {
            case e.ControlAnchor.TOP_RIGHT:
              l = this.controls.topright, i.style.position = "relative", i.style.paddingRight = "0px", i.style.paddingTop = "0px";
              break;
            case e.ControlAnchor.BOTTOM_RIGHT:
              l = this.controls.bottomright, i.style.position = "relative", i.style.paddingRight = "0px", i.style.paddingBottom = "0px";
              break;
            case e.ControlAnchor.BOTTOM_LEFT:
              l = this.controls.bottomleft, i.style.position = "relative", i.style.paddingLeft = "0px", i.style.paddingBottom = "0px";
              break;
            case e.ControlAnchor.TOP_LEFT:
              l = this.controls.topleft, i.style.position = "relative", i.style.paddingLeft = "0px", i.style.paddingTop = "0px";
              break;
            case e.ControlAnchor.ABSOLUTE:
              l = this.container, i.style.margin = "0px", i.style.padding = "0px";
              break;
            default:
            case e.ControlAnchor.NONE:
              l = this.container, i.style.margin = "0px", i.style.padding = "0px";
              break;
          }
          this.controls.push(
            new e.Control(i, r, l)
          ), i.style.display = "inline-block";
        }
      },
      /**
       * @function
       * @returns {OpenSeadragon.ControlDock} Chainable.
       */
      removeControl: function(i) {
        i = e.getElement(i);
        var r = t(this, i);
        return r >= 0 && (this.controls[r].destroy(), this.controls.splice(r, 1)), this;
      },
      /**
       * @function
       * @returns {OpenSeadragon.ControlDock} Chainable.
       */
      clearControls: function() {
        for (; this.controls.length > 0; )
          this.controls.pop().destroy();
        return this;
      },
      /**
       * @function
       * @returns {Boolean}
       */
      areControlsEnabled: function() {
        var i;
        for (i = this.controls.length - 1; i >= 0; i--)
          if (this.controls[i].isVisible())
            return !0;
        return !1;
      },
      /**
       * @function
       * @returns {OpenSeadragon.ControlDock} Chainable.
       */
      setControlsEnabled: function(i) {
        var r;
        for (r = this.controls.length - 1; r >= 0; r--)
          this.controls[r].setVisible(i);
        return this;
      }
    };
    function t(i, r) {
      var l = i.controls, s;
      for (s = l.length - 1; s >= 0; s--)
        if (l[s].element === r)
          return s;
      return -1;
    }
  }(n), function(e) {
    e.Placement = e.freezeObject({
      CENTER: 0,
      TOP_LEFT: 1,
      TOP: 2,
      TOP_RIGHT: 3,
      RIGHT: 4,
      BOTTOM_RIGHT: 5,
      BOTTOM: 6,
      BOTTOM_LEFT: 7,
      LEFT: 8,
      properties: {
        0: {
          isLeft: !1,
          isHorizontallyCentered: !0,
          isRight: !1,
          isTop: !1,
          isVerticallyCentered: !0,
          isBottom: !1
        },
        1: {
          isLeft: !0,
          isHorizontallyCentered: !1,
          isRight: !1,
          isTop: !0,
          isVerticallyCentered: !1,
          isBottom: !1
        },
        2: {
          isLeft: !1,
          isHorizontallyCentered: !0,
          isRight: !1,
          isTop: !0,
          isVerticallyCentered: !1,
          isBottom: !1
        },
        3: {
          isLeft: !1,
          isHorizontallyCentered: !1,
          isRight: !0,
          isTop: !0,
          isVerticallyCentered: !1,
          isBottom: !1
        },
        4: {
          isLeft: !1,
          isHorizontallyCentered: !1,
          isRight: !0,
          isTop: !1,
          isVerticallyCentered: !0,
          isBottom: !1
        },
        5: {
          isLeft: !1,
          isHorizontallyCentered: !1,
          isRight: !0,
          isTop: !1,
          isVerticallyCentered: !1,
          isBottom: !0
        },
        6: {
          isLeft: !1,
          isHorizontallyCentered: !0,
          isRight: !1,
          isTop: !1,
          isVerticallyCentered: !1,
          isBottom: !0
        },
        7: {
          isLeft: !0,
          isHorizontallyCentered: !1,
          isRight: !1,
          isTop: !1,
          isVerticallyCentered: !1,
          isBottom: !0
        },
        8: {
          isLeft: !0,
          isHorizontallyCentered: !1,
          isRight: !1,
          isTop: !1,
          isVerticallyCentered: !0,
          isBottom: !1
        }
      }
    });
  }(n), function(e) {
    var t = {}, i = 1;
    e.Viewer = function(u) {
      var y = arguments, P = this, O;
      if (e.isPlainObject(u) || (u = {
        id: y[0],
        xmlPath: y.length > 1 ? y[1] : void 0,
        prefixUrl: y.length > 2 ? y[2] : void 0,
        controls: y.length > 3 ? y[3] : void 0,
        overlays: y.length > 4 ? y[4] : void 0
      }), u.config && (e.extend(!0, u, u.config), delete u.config), e.extend(!0, this, {
        //internal state and dom identifiers
        id: u.id,
        hash: u.hash || i++,
        /**
         * Index for page to be shown first next time open() is called (only used in sequenceMode).
         * @member {Number} initialPage
         * @memberof OpenSeadragon.Viewer#
         */
        initialPage: 0,
        //dom nodes
        /**
         * The parent element of this Viewer instance, passed in when the Viewer was created.
         * @member {Element} element
         * @memberof OpenSeadragon.Viewer#
         */
        element: null,
        /**
         * A &lt;div&gt; element (provided by {@link OpenSeadragon.ControlDock}), the base element of this Viewer instance.<br><br>
         * Child element of {@link OpenSeadragon.Viewer#element}.
         * @member {Element} container
         * @memberof OpenSeadragon.Viewer#
         */
        container: null,
        /**
         * A &lt;div&gt; element, the element where user-input events are handled for panning and zooming.<br><br>
         * Child element of {@link OpenSeadragon.Viewer#container},
         * positioned on top of {@link OpenSeadragon.Viewer#keyboardCommandArea}.<br><br>
         * The parent of {@link OpenSeadragon.Drawer#canvas} instances.
         * @member {Element} canvas
         * @memberof OpenSeadragon.Viewer#
         */
        canvas: null,
        // Overlays list. An overlay allows to add html on top of the viewer.
        overlays: [],
        // Container inside the canvas where overlays are drawn.
        overlaysContainer: null,
        //private state properties
        previousBody: [],
        //This was originally initialized in the constructor and so could never
        //have anything in it.  now it can because we allow it to be specified
        //in the options and is only empty by default if not specified. Also
        //this array was returned from get_controls which I find confusing
        //since this object has a controls property which is treated in other
        //functions like clearControls.  I'm removing the accessors.
        customControls: [],
        //These are originally not part options but declared as members
        //in initialize.  It's still considered idiomatic to put them here
        //source is here for backwards compatibility. It is not an official
        //part of the API and should not be relied upon.
        source: null,
        /**
         * Handles rendering of tiles in the viewer. Created for each TileSource opened.
         * @member {OpenSeadragon.Drawer} drawer
         * @memberof OpenSeadragon.Viewer#
         */
        drawer: null,
        /**
         * Keeps track of all of the tiled images in the scene.
         * @member {OpenSeadragon.World} world
         * @memberof OpenSeadragon.Viewer#
         */
        world: null,
        /**
         * Handles coordinate-related functionality - zoom, pan, rotation, etc. Created for each TileSource opened.
         * @member {OpenSeadragon.Viewport} viewport
         * @memberof OpenSeadragon.Viewer#
         */
        viewport: null,
        /**
         * @member {OpenSeadragon.Navigator} navigator
         * @memberof OpenSeadragon.Viewer#
         */
        navigator: null,
        //A collection viewport is a separate viewport used to provide
        //simultaneous rendering of sets of tiles
        collectionViewport: null,
        collectionDrawer: null,
        //UI image resources
        //TODO: rename navImages to uiImages
        navImages: null,
        //interface button controls
        buttonGroup: null,
        //TODO: this is defunct so safely remove it
        profiler: null
      }, e.DEFAULT_SETTINGS, u), typeof this.hash > "u")
        throw new Error("A hash must be defined, either by specifying options.id or options.hash.");
      for (typeof t[this.hash] < "u" && e.console.warn("Hash " + this.hash + " has already been used."), t[this.hash] = {
        fsBoundsDelta: new e.Point(1, 1),
        prevContainerSize: null,
        animating: !1,
        forceRedraw: !1,
        needsResize: !1,
        forceResize: !1,
        mouseInside: !1,
        group: null,
        // whether we should be continuously zooming
        zooming: !1,
        // how much we should be continuously zooming by
        zoomFactor: null,
        lastZoomTime: null,
        fullPage: !1,
        onfullscreenchange: null,
        lastClickTime: null,
        draggingToZoom: !1
      }, this._sequenceIndex = 0, this._firstOpen = !0, this._updateRequestId = null, this._loadQueue = [], this.currentOverlays = [], this._updatePixelDensityRatioBind = null, this._lastScrollTime = e.now(), e.EventSource.call(this), this.addHandler("open-failed", function(I) {
        var F = e.getString("Errors.OpenFailed", I.eventSource, I.message);
        P._showMessage(F);
      }), e.ControlDock.call(this, u), this.xmlPath && (this.tileSources = [this.xmlPath]), this.element = this.element || document.getElementById(this.id), this.canvas = e.makeNeutralElement("div"), this.canvas.className = "openseadragon-canvas", function(I) {
        I.width = "100%", I.height = "100%", I.overflow = "hidden", I.position = "absolute", I.top = "0px", I.left = "0px";
      }(this.canvas.style), e.setElementTouchActionNone(this.canvas), u.tabIndex !== "" && (this.canvas.tabIndex = u.tabIndex === void 0 ? 0 : u.tabIndex), this.container.className = "openseadragon-container", function(I) {
        I.width = "100%", I.height = "100%", I.position = "relative", I.overflow = "hidden", I.left = "0px", I.top = "0px", I.textAlign = "left";
      }(this.container.style), e.setElementTouchActionNone(this.container), this.container.insertBefore(this.canvas, this.container.firstChild), this.element.appendChild(this.container), this.bodyWidth = document.body.style.width, this.bodyHeight = document.body.style.height, this.bodyOverflow = document.body.style.overflow, this.docOverflow = document.documentElement.style.overflow, this.innerTracker = new e.MouseTracker({
        userData: "Viewer.innerTracker",
        element: this.canvas,
        startDisabled: !this.mouseNavEnabled,
        clickTimeThreshold: this.clickTimeThreshold,
        clickDistThreshold: this.clickDistThreshold,
        dblClickTimeThreshold: this.dblClickTimeThreshold,
        dblClickDistThreshold: this.dblClickDistThreshold,
        contextMenuHandler: e.delegate(this, _),
        keyDownHandler: e.delegate(this, S),
        keyHandler: e.delegate(this, C),
        clickHandler: e.delegate(this, b),
        dblClickHandler: e.delegate(this, V),
        dragHandler: e.delegate(this, Z),
        dragEndHandler: e.delegate(this, K),
        enterHandler: e.delegate(this, Q),
        leaveHandler: e.delegate(this, q),
        pressHandler: e.delegate(this, $),
        releaseHandler: e.delegate(this, ne),
        nonPrimaryPressHandler: e.delegate(this, oe),
        nonPrimaryReleaseHandler: e.delegate(this, le),
        scrollHandler: e.delegate(this, we),
        pinchHandler: e.delegate(this, pe),
        focusHandler: e.delegate(this, Pe),
        blurHandler: e.delegate(this, Ze)
      }), this.outerTracker = new e.MouseTracker({
        userData: "Viewer.outerTracker",
        element: this.container,
        startDisabled: !this.mouseNavEnabled,
        clickTimeThreshold: this.clickTimeThreshold,
        clickDistThreshold: this.clickDistThreshold,
        dblClickTimeThreshold: this.dblClickTimeThreshold,
        dblClickDistThreshold: this.dblClickDistThreshold,
        enterHandler: e.delegate(this, _e),
        leaveHandler: e.delegate(this, Re)
      }), this.toolbar && (this.toolbar = new e.ControlDock({ element: this.toolbar })), this.bindStandardControls(), t[this.hash].prevContainerSize = r(this.container), window.ResizeObserver ? (this._autoResizePolling = !1, this._resizeObserver = new ResizeObserver(function() {
        t[P.hash].needsResize = !0;
      }), this._resizeObserver.observe(this.container, {})) : this._autoResizePolling = !0, this.world = new e.World({
        viewer: this
      }), this.world.addHandler("add-item", function(I) {
        P.source = P.world.getItemAt(0).source, t[P.hash].forceRedraw = !0, P._updateRequestId || (P._updateRequestId = a(P, re));
      }), this.world.addHandler("remove-item", function(I) {
        P.world.getItemCount() ? P.source = P.world.getItemAt(0).source : P.source = null, t[P.hash].forceRedraw = !0;
      }), this.world.addHandler("metrics-change", function(I) {
        P.viewport && P.viewport._setContentBounds(P.world.getHomeBounds(), P.world.getContentFactor());
      }), this.world.addHandler("item-index-change", function(I) {
        P.source = P.world.getItemAt(0).source;
      }), this.viewport = new e.Viewport({
        containerSize: t[this.hash].prevContainerSize,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime,
        minZoomImageRatio: this.minZoomImageRatio,
        maxZoomPixelRatio: this.maxZoomPixelRatio,
        visibilityRatio: this.visibilityRatio,
        wrapHorizontal: this.wrapHorizontal,
        wrapVertical: this.wrapVertical,
        defaultZoomLevel: this.defaultZoomLevel,
        minZoomLevel: this.minZoomLevel,
        maxZoomLevel: this.maxZoomLevel,
        viewer: this,
        degrees: this.degrees,
        flipped: this.flipped,
        navigatorRotate: this.navigatorRotate,
        homeFillsViewer: this.homeFillsViewer,
        margins: this.viewportMargins,
        silenceMultiImageWarnings: this.silenceMultiImageWarnings
      }), this.viewport._setContentBounds(this.world.getHomeBounds(), this.world.getContentFactor()), this.imageLoader = new e.ImageLoader({
        jobLimit: this.imageLoaderLimit,
        timeout: u.timeout,
        tileRetryMax: this.tileRetryMax,
        tileRetryDelay: this.tileRetryDelay
      }), this.tileCache = new e.TileCache({
        maxImageCacheCount: this.maxImageCacheCount
      }), this.drawer = new e.Drawer({
        viewer: this,
        viewport: this.viewport,
        element: this.canvas,
        debugGridColor: this.debugGridColor
      }), this.overlaysContainer = e.makeNeutralElement("div"), this.canvas.appendChild(this.overlaysContainer), this.drawer.canRotate() || (this.rotateLeft && (O = this.buttonGroup.buttons.indexOf(this.rotateLeft), this.buttonGroup.buttons.splice(O, 1), this.buttonGroup.element.removeChild(this.rotateLeft.element)), this.rotateRight && (O = this.buttonGroup.buttons.indexOf(this.rotateRight), this.buttonGroup.buttons.splice(O, 1), this.buttonGroup.element.removeChild(this.rotateRight.element))), this._addUpdatePixelDensityRatioEvent(), this.showNavigator && (this.navigator = new e.Navigator({
        element: this.navigatorElement,
        id: this.navigatorId,
        position: this.navigatorPosition,
        sizeRatio: this.navigatorSizeRatio,
        maintainSizeRatio: this.navigatorMaintainSizeRatio,
        top: this.navigatorTop,
        left: this.navigatorLeft,
        width: this.navigatorWidth,
        height: this.navigatorHeight,
        autoResize: this.navigatorAutoResize,
        autoFade: this.navigatorAutoFade,
        prefixUrl: this.prefixUrl,
        viewer: this,
        navigatorRotate: this.navigatorRotate,
        background: this.navigatorBackground,
        opacity: this.navigatorOpacity,
        borderColor: this.navigatorBorderColor,
        displayRegionColor: this.navigatorDisplayRegionColor,
        crossOriginPolicy: this.crossOriginPolicy,
        animationTime: this.animationTime
      })), this.sequenceMode && this.bindSequenceControls(), this.tileSources && this.open(this.tileSources), O = 0; O < this.customControls.length; O++)
        this.addControl(
          this.customControls[O].id,
          { anchor: this.customControls[O].anchor }
        );
      e.requestAnimationFrame(function() {
        c(P);
      }), this.imageSmoothingEnabled !== void 0 && !this.imageSmoothingEnabled && this.drawer.setImageSmoothingEnabled(this.imageSmoothingEnabled), e._viewers.set(this.element, this);
    }, e.extend(
      e.Viewer.prototype,
      e.EventSource.prototype,
      e.ControlDock.prototype,
      /** @lends OpenSeadragon.Viewer.prototype */
      {
        /**
         * @function
         * @returns {Boolean}
         */
        isOpen: function() {
          return !!this.world.getItemCount();
        },
        // deprecated
        openDzi: function(u) {
          return e.console.error("[Viewer.openDzi] this function is deprecated; use Viewer.open() instead."), this.open(u);
        },
        // deprecated
        openTileSource: function(u) {
          return e.console.error("[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead."), this.open(u);
        },
        //deprecated
        get buttons() {
          return e.console.warn("Viewer.buttons is deprecated; Please use Viewer.buttonGroup"), this.buttonGroup;
        },
        /**
         * Open tiled images into the viewer, closing any others.
         * To get the TiledImage instance created by open, add an event listener for
         * {@link OpenSeadragon.Viewer.html#.event:open}, which when fired can be used to get access
         * to the instance, i.e., viewer.world.getItemAt(0).
         * @function
         * @param {Array|String|Object|Function} tileSources - This can be a TiledImage
         * specifier, a TileSource specifier, or an array of either. A TiledImage specifier
         * is the same as the options parameter for {@link OpenSeadragon.Viewer#addTiledImage},
         * except for the index property; images are added in sequence.
         * A TileSource specifier is anything you could pass as the tileSource property
         * of the options parameter for {@link OpenSeadragon.Viewer#addTiledImage}.
         * @param {Number} initialPage - If sequenceMode is true, display this page initially
         * for the given tileSources. If specified, will overwrite the Viewer's existing initialPage property.
         * @returns {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:open
         * @fires OpenSeadragon.Viewer.event:open-failed
         */
        open: function(u, y) {
          var P = this;
          if (this.close(), !u)
            return this;
          if (this.sequenceMode && e.isArray(u))
            return this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), typeof y < "u" && !isNaN(y) && (this.initialPage = y), this.tileSources = u, this._sequenceIndex = Math.max(0, Math.min(this.tileSources.length - 1, this.initialPage)), this.tileSources.length && (this.open(this.tileSources[this._sequenceIndex]), this.showReferenceStrip && this.addReferenceStrip()), this._updateSequenceButtons(this._sequenceIndex), this;
          if (e.isArray(u) || (u = [u]), !u.length)
            return this;
          this._opening = !0;
          for (var O = u.length, I = 0, F = 0, M, J = function() {
            if (I + F === O)
              if (I) {
                (P._firstOpen || !P.preserveViewport) && (P.viewport.goHome(!0), P.viewport.update()), P._firstOpen = !1;
                var G = u[0];
                if (G.tileSource && (G = G.tileSource), P.overlays && !P.preserveOverlays)
                  for (var se = 0; se < P.overlays.length; se++)
                    P.currentOverlays[se] = s(P, P.overlays[se]);
                P._drawOverlays(), P._opening = !1, P.raiseEvent("open", { source: G });
              } else
                P._opening = !1, P.raiseEvent("open-failed", M);
          }, ee = function(G) {
            (!e.isPlainObject(G) || !G.tileSource) && (G = {
              tileSource: G
            }), G.index !== void 0 && (e.console.error("[Viewer.open] setting indexes here is not supported; use addTiledImage instead"), delete G.index), G.collectionImmediately === void 0 && (G.collectionImmediately = !0);
            var se = G.success;
            G.success = function(f) {
              if (I++, G.tileSource.overlays)
                for (var m = 0; m < G.tileSource.overlays.length; m++)
                  P.addOverlay(G.tileSource.overlays[m]);
              se && se(f), J();
            };
            var g = G.error;
            G.error = function(f) {
              F++, M || (M = f), g && g(f), J();
            }, P.addTiledImage(G);
          }, te = 0; te < u.length; te++)
            ee(u[te]);
          return this;
        },
        /**
         * @function
         * @returns {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:close
         */
        close: function() {
          return t[this.hash] ? (this._opening = !1, this.navigator && this.navigator.close(), this.preserveOverlays || (this.clearOverlays(), this.overlaysContainer.innerHTML = ""), t[this.hash].animating = !1, this.world.removeAll(), this.imageLoader.clear(), this.raiseEvent("close"), this) : this;
        },
        /**
         * Function to destroy the viewer and clean up everything created by OpenSeadragon.
         *
         * Example:
         * var viewer = OpenSeadragon({
         *   [...]
         * });
         *
         * //when you are done with the viewer:
         * viewer.destroy();
         * viewer = null; //important
         *
         * @function
         * @fires OpenSeadragon.Viewer.event:before-destroy
         * @fires OpenSeadragon.Viewer.event:destroy
         */
        destroy: function() {
          if (t[this.hash]) {
            if (this.raiseEvent("before-destroy"), this._removeUpdatePixelDensityRatioEvent(), this.close(), this.clearOverlays(), this.overlaysContainer.innerHTML = "", this._resizeObserver && this._resizeObserver.disconnect(), this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), this._updateRequestId !== null && (e.cancelAnimationFrame(this._updateRequestId), this._updateRequestId = null), this.drawer && this.drawer.destroy(), this.navigator && (this.navigator.destroy(), t[this.navigator.hash] = null, delete t[this.navigator.hash], this.navigator = null), this.buttonGroup)
              this.buttonGroup.destroy();
            else if (this.customButtons)
              for (; this.customButtons.length; )
                this.customButtons.pop().destroy();
            if (this.paging && this.paging.destroy(), this.element)
              for (; this.element.firstChild; )
                this.element.removeChild(this.element.firstChild);
            this.container.onsubmit = null, this.clearControls(), this.innerTracker && this.innerTracker.destroy(), this.outerTracker && this.outerTracker.destroy(), t[this.hash] = null, delete t[this.hash], this.canvas = null, this.container = null, e._viewers.delete(this.element), this.element = null, this.raiseEvent("destroy"), this.removeAllHandlers();
          }
        },
        /**
         * @function
         * @returns {Boolean}
         */
        isMouseNavEnabled: function() {
          return this.innerTracker.isTracking();
        },
        /**
         * @function
         * @param {Boolean} enabled - true to enable, false to disable
         * @returns {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:mouse-enabled
         */
        setMouseNavEnabled: function(u) {
          return this.innerTracker.setTracking(u), this.outerTracker.setTracking(u), this.raiseEvent("mouse-enabled", { enabled: u }), this;
        },
        /**
         * @function
         * @returns {Boolean}
         */
        areControlsEnabled: function() {
          var u = this.controls.length, y;
          for (y = 0; y < this.controls.length; y++)
            u = u && this.controls[y].isVisible();
          return u;
        },
        /**
         * Shows or hides the controls (e.g. the default navigation buttons).
         *
         * @function
         * @param {Boolean} true to show, false to hide.
         * @returns {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:controls-enabled
         */
        setControlsEnabled: function(u) {
          return u ? v(this) : c(this), this.raiseEvent("controls-enabled", { enabled: u }), this;
        },
        /**
         * Turns debugging mode on or off for this viewer.
         *
         * @function
         * @param {Boolean} debugMode true to turn debug on, false to turn debug off.
         */
        setDebugMode: function(u) {
          for (var y = 0; y < this.world.getItemCount(); y++)
            this.world.getItemAt(y).debugMode = u;
          this.debugMode = u, this.forceRedraw();
        },
        /**
         * Update headers to include when making AJAX requests.
         *
         * Unless `propagate` is set to false (which is likely only useful in rare circumstances),
         * the updated headers are propagated to all tiled images, each of which will subsequently
         * propagate the changed headers to all their tiles.
         * If applicable, the headers of the viewer's navigator and reference strip will also be updated.
         *
         * Note that the rules for merging headers still apply, i.e. headers returned by
         * {@link OpenSeadragon.TileSource#getTileAjaxHeaders} take precedence over
         * `TiledImage.ajaxHeaders`, which take precedence over the headers here in the viewer.
         *
         * @function
         * @param {Object} ajaxHeaders Updated AJAX headers.
         * @param {Boolean} [propagate=true] Whether to propagate updated headers to tiled images, etc.
         */
        setAjaxHeaders: function(u, y) {
          if (u === null && (u = {}), !e.isPlainObject(u)) {
            console.error("[Viewer.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
            return;
          }
          if (y === void 0 && (y = !0), this.ajaxHeaders = u, y) {
            for (var P = 0; P < this.world.getItemCount(); P++)
              this.world.getItemAt(P)._updateAjaxHeaders(!0);
            if (this.navigator && this.navigator.setAjaxHeaders(this.ajaxHeaders, !0), this.referenceStrip && this.referenceStrip.miniViewers)
              for (var O in this.referenceStrip.miniViewers)
                this.referenceStrip.miniViewers[O].setAjaxHeaders(this.ajaxHeaders, !0);
          }
        },
        /**
         * Adds the given button to this viewer.
         *
         * @function
         * @param {OpenSeadragon.Button} button
         */
        addButton: function(u) {
          this.buttonGroup.addButton(u);
        },
        /**
         * @function
         * @returns {Boolean}
         */
        isFullPage: function() {
          return t[this.hash].fullPage;
        },
        /**
         * Toggle full page mode.
         * @function
         * @param {Boolean} fullPage
         *      If true, enter full page mode.  If false, exit full page mode.
         * @returns {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:pre-full-page
         * @fires OpenSeadragon.Viewer.event:full-page
         */
        setFullPage: function(u) {
          var y = document.body, P = y.style, O = document.documentElement.style, I = this, F, M;
          if (u === this.isFullPage())
            return this;
          var J = {
            fullPage: u,
            preventDefaultAction: !1
          };
          if (this.raiseEvent("pre-full-page", J), J.preventDefaultAction)
            return this;
          if (u) {
            for (this.elementSize = e.getElementSize(this.element), this.pageScroll = e.getPageScroll(), this.elementMargin = this.element.style.margin, this.element.style.margin = "0", this.elementPadding = this.element.style.padding, this.element.style.padding = "0", this.bodyMargin = P.margin, this.docMargin = O.margin, P.margin = "0", O.margin = "0", this.bodyPadding = P.padding, this.docPadding = O.padding, P.padding = "0", O.padding = "0", this.bodyWidth = P.width, this.docWidth = O.width, P.width = "100%", O.width = "100%", this.bodyHeight = P.height, this.docHeight = O.height, P.height = "100%", O.height = "100%", this.bodyDisplay = P.display, P.display = "block", this.previousBody = [], t[this.hash].prevElementParent = this.element.parentNode, t[this.hash].prevNextSibling = this.element.nextSibling, t[this.hash].prevElementWidth = this.element.style.width, t[this.hash].prevElementHeight = this.element.style.height, F = y.childNodes.length, M = 0; M < F; M++)
              this.previousBody.push(y.childNodes[0]), y.removeChild(y.childNodes[0]);
            this.toolbar && this.toolbar.element && (this.toolbar.parentNode = this.toolbar.element.parentNode, this.toolbar.nextSibling = this.toolbar.element.nextSibling, y.appendChild(this.toolbar.element), e.addClass(this.toolbar.element, "fullpage")), e.addClass(this.element, "fullpage"), y.appendChild(this.element), this.element.style.height = "100vh", this.element.style.width = "100vw", this.toolbar && this.toolbar.element && (this.element.style.height = e.getElementSize(this.element).y - e.getElementSize(this.toolbar.element).y + "px"), t[this.hash].fullPage = !0, e.delegate(this, _e)({});
          } else {
            for (this.element.style.margin = this.elementMargin, this.element.style.padding = this.elementPadding, P.margin = this.bodyMargin, O.margin = this.docMargin, P.padding = this.bodyPadding, O.padding = this.docPadding, P.width = this.bodyWidth, O.width = this.docWidth, P.height = this.bodyHeight, O.height = this.docHeight, P.display = this.bodyDisplay, y.removeChild(this.element), F = this.previousBody.length, M = 0; M < F; M++)
              y.appendChild(this.previousBody.shift());
            e.removeClass(this.element, "fullpage"), t[this.hash].prevElementParent.insertBefore(
              this.element,
              t[this.hash].prevNextSibling
            ), this.toolbar && this.toolbar.element && (y.removeChild(this.toolbar.element), e.removeClass(this.toolbar.element, "fullpage"), this.toolbar.parentNode.insertBefore(
              this.toolbar.element,
              this.toolbar.nextSibling
            ), delete this.toolbar.parentNode, delete this.toolbar.nextSibling), this.element.style.width = t[this.hash].prevElementWidth, this.element.style.height = t[this.hash].prevElementHeight;
            var ee = 0, te = function() {
              e.setPageScroll(I.pageScroll);
              var G = e.getPageScroll();
              ee++, ee < 10 && (G.x !== I.pageScroll.x || G.y !== I.pageScroll.y) && e.requestAnimationFrame(te);
            };
            e.requestAnimationFrame(te), t[this.hash].fullPage = !1, e.delegate(this, Re)({});
          }
          return this.navigator && this.viewport && this.navigator.update(this.viewport), this.raiseEvent("full-page", { fullPage: u }), this;
        },
        /**
         * Toggle full screen mode if supported. Toggle full page mode otherwise.
         * @function
         * @param {Boolean} fullScreen
         *      If true, enter full screen mode.  If false, exit full screen mode.
         * @returns {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:pre-full-screen
         * @fires OpenSeadragon.Viewer.event:full-screen
         */
        setFullScreen: function(u) {
          var y = this;
          if (!e.supportsFullScreen)
            return this.setFullPage(u);
          if (e.isFullScreen() === u)
            return this;
          var P = {
            fullScreen: u,
            preventDefaultAction: !1
          };
          if (this.raiseEvent("pre-full-screen", P), P.preventDefaultAction)
            return this;
          if (u) {
            if (this.setFullPage(!0), !this.isFullPage())
              return this;
            this.fullPageStyleWidth = this.element.style.width, this.fullPageStyleHeight = this.element.style.height, this.element.style.width = "100%", this.element.style.height = "100%";
            var O = function() {
              var I = e.isFullScreen();
              I || (e.removeEvent(document, e.fullScreenEventName, O), e.removeEvent(document, e.fullScreenErrorEventName, O), y.setFullPage(!1), y.isFullPage() && (y.element.style.width = y.fullPageStyleWidth, y.element.style.height = y.fullPageStyleHeight)), y.navigator && y.viewport && setTimeout(function() {
                y.navigator.update(y.viewport);
              }), y.raiseEvent("full-screen", { fullScreen: I });
            };
            e.addEvent(document, e.fullScreenEventName, O), e.addEvent(document, e.fullScreenErrorEventName, O), e.requestFullScreen(document.body);
          } else
            e.exitFullScreen();
          return this;
        },
        /**
         * @function
         * @returns {Boolean}
         */
        isVisible: function() {
          return this.container.style.visibility !== "hidden";
        },
        //
        /**
         * @function
         * @returns {Boolean} returns true if the viewer is in fullscreen
         */
        isFullScreen: function() {
          return e.isFullScreen() && this.isFullPage();
        },
        /**
         * @function
         * @param {Boolean} visible
         * @returns {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:visible
         */
        setVisible: function(u) {
          return this.container.style.visibility = u ? "" : "hidden", this.raiseEvent("visible", { visible: u }), this;
        },
        /**
         * Add a tiled image to the viewer.
         * options.tileSource can be anything that {@link OpenSeadragon.Viewer#open}
         *  supports except arrays of images.
         * Note that you can specify options.width or options.height, but not both.
         * The other dimension will be calculated according to the item's aspect ratio.
         * If collectionMode is on (see {@link OpenSeadragon.Options}), the new image is
         * automatically arranged with the others.
         * @function
         * @param {Object} options
         * @param {String|Object|Function} options.tileSource - The TileSource specifier.
         * A String implies a url used to determine the tileSource implementation
         *      based on the file extension of url. JSONP is implied by *.js,
         *      otherwise the url is retrieved as text and the resulting text is
         *      introspected to determine if its json, xml, or text and parsed.
         * An Object implies an inline configuration which has a single
         *      property sufficient for being able to determine tileSource
         *      implementation. If the object has a property which is a function
         *      named 'getTileUrl', it is treated as a custom TileSource.
         * @param {Number} [options.index] The index of the item. Added on top of
         * all other items if not specified.
         * @param {Boolean} [options.replace=false] If true, the item at options.index will be
         * removed and the new item is added in its place. options.tileSource will be
         * interpreted and fetched if necessary before the old item is removed to avoid leaving
         * a gap in the world.
         * @param {Number} [options.x=0] The X position for the image in viewport coordinates.
         * @param {Number} [options.y=0] The Y position for the image in viewport coordinates.
         * @param {Number} [options.width=1] The width for the image in viewport coordinates.
         * @param {Number} [options.height] The height for the image in viewport coordinates.
         * @param {OpenSeadragon.Rect} [options.fitBounds] The bounds in viewport coordinates
         * to fit the image into. If specified, x, y, width and height get ignored.
         * @param {OpenSeadragon.Placement} [options.fitBoundsPlacement=OpenSeadragon.Placement.CENTER]
         * How to anchor the image in the bounds if options.fitBounds is set.
         * @param {OpenSeadragon.Rect} [options.clip] - An area, in image pixels, to clip to
         * (portions of the image outside of this area will not be visible). Only works on
         * browsers that support the HTML5 canvas.
         * @param {Number} [options.opacity=1] Proportional opacity of the tiled images (1=opaque, 0=hidden)
         * @param {Boolean} [options.preload=false]  Default switch for loading hidden images (true loads, false blocks)
         * @param {Number} [options.degrees=0] Initial rotation of the tiled image around
         * its top left corner in degrees.
         * @param {Boolean} [options.flipped=false] Whether to horizontally flip the image.
         * @param {String} [options.compositeOperation] How the image is composited onto other images.
         * @param {String} [options.crossOriginPolicy] The crossOriginPolicy for this specific image,
         * overriding viewer.crossOriginPolicy.
         * @param {Boolean} [options.ajaxWithCredentials] Whether to set withCredentials on tile AJAX
         * @param {Boolean} [options.loadTilesWithAjax]
         *      Whether to load tile data using AJAX requests.
         *      Defaults to the setting in {@link OpenSeadragon.Options}.
         * @param {Object} [options.ajaxHeaders]
         *      A set of headers to include when making tile AJAX requests.
         *      Note that these headers will be merged over any headers specified in {@link OpenSeadragon.Options}.
         *      Specifying a falsy value for a header will clear its existing value set at the Viewer level (if any).
         * @param {Function} [options.success] A function that gets called when the image is
         * successfully added. It's passed the event object which contains a single property:
         * "item", which is the resulting instance of TiledImage.
         * @param {Function} [options.error] A function that gets called if the image is
         * unable to be added. It's passed the error event object, which contains "message"
         * and "source" properties.
         * @param {Boolean} [options.collectionImmediately=false] If collectionMode is on,
         * specifies whether to snap to the new arrangement immediately or to animate to it.
         * @param {String|CanvasGradient|CanvasPattern|Function} [options.placeholderFillStyle] - See {@link OpenSeadragon.Options}.
         * @fires OpenSeadragon.World.event:add-item
         * @fires OpenSeadragon.Viewer.event:add-item-failed
         */
        addTiledImage: function(u) {
          e.console.assert(u, "[Viewer.addTiledImage] options is required"), e.console.assert(u.tileSource, "[Viewer.addTiledImage] options.tileSource is required"), e.console.assert(
            !u.replace || u.index > -1 && u.index < this.world.getItemCount(),
            "[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world"
          );
          var y = this;
          u.replace && (u.replaceItem = y.world.getItemAt(u.index)), this._hideMessage(), u.placeholderFillStyle === void 0 && (u.placeholderFillStyle = this.placeholderFillStyle), u.opacity === void 0 && (u.opacity = this.opacity), u.preload === void 0 && (u.preload = this.preload), u.compositeOperation === void 0 && (u.compositeOperation = this.compositeOperation), u.crossOriginPolicy === void 0 && (u.crossOriginPolicy = u.tileSource.crossOriginPolicy !== void 0 ? u.tileSource.crossOriginPolicy : this.crossOriginPolicy), u.ajaxWithCredentials === void 0 && (u.ajaxWithCredentials = this.ajaxWithCredentials), u.loadTilesWithAjax === void 0 && (u.loadTilesWithAjax = this.loadTilesWithAjax), e.isPlainObject(u.ajaxHeaders) || (u.ajaxHeaders = {});
          var P = {
            options: u
          };
          function O(M) {
            for (var J = 0; J < y._loadQueue.length; J++)
              if (y._loadQueue[J] === P) {
                y._loadQueue.splice(J, 1);
                break;
              }
            y._loadQueue.length === 0 && I(P), y.raiseEvent("add-item-failed", M), u.error && u.error(M);
          }
          function I(M) {
            y.collectionMode && (y.world.arrange({
              immediately: M.options.collectionImmediately,
              rows: y.collectionRows,
              columns: y.collectionColumns,
              layout: y.collectionLayout,
              tileSize: y.collectionTileSize,
              tileMargin: y.collectionTileMargin
            }), y.world.setAutoRefigureSizes(!0));
          }
          if (e.isArray(u.tileSource)) {
            setTimeout(function() {
              O({
                message: "[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.",
                source: u.tileSource,
                options: u
              });
            });
            return;
          }
          this._loadQueue.push(P);
          function F() {
            for (var M, J, ee; y._loadQueue.length && (M = y._loadQueue[0], !!M.tileSource); ) {
              if (y._loadQueue.splice(0, 1), M.options.replace) {
                var te = y.world.getIndexOfItem(M.options.replaceItem);
                te !== -1 && (M.options.index = te), y.world.removeItem(M.options.replaceItem);
              }
              J = new e.TiledImage({
                viewer: y,
                source: M.tileSource,
                viewport: y.viewport,
                drawer: y.drawer,
                tileCache: y.tileCache,
                imageLoader: y.imageLoader,
                x: M.options.x,
                y: M.options.y,
                width: M.options.width,
                height: M.options.height,
                fitBounds: M.options.fitBounds,
                fitBoundsPlacement: M.options.fitBoundsPlacement,
                clip: M.options.clip,
                placeholderFillStyle: M.options.placeholderFillStyle,
                opacity: M.options.opacity,
                preload: M.options.preload,
                degrees: M.options.degrees,
                flipped: M.options.flipped,
                compositeOperation: M.options.compositeOperation,
                springStiffness: y.springStiffness,
                animationTime: y.animationTime,
                minZoomImageRatio: y.minZoomImageRatio,
                wrapHorizontal: y.wrapHorizontal,
                wrapVertical: y.wrapVertical,
                immediateRender: y.immediateRender,
                blendTime: y.blendTime,
                alwaysBlend: y.alwaysBlend,
                minPixelRatio: y.minPixelRatio,
                smoothTileEdgesMinZoom: y.smoothTileEdgesMinZoom,
                iOSDevice: y.iOSDevice,
                crossOriginPolicy: M.options.crossOriginPolicy,
                ajaxWithCredentials: M.options.ajaxWithCredentials,
                loadTilesWithAjax: M.options.loadTilesWithAjax,
                ajaxHeaders: M.options.ajaxHeaders,
                debugMode: y.debugMode,
                subPixelRoundingForTransparency: y.subPixelRoundingForTransparency
              }), y.collectionMode && y.world.setAutoRefigureSizes(!1), y.navigator && (ee = e.extend({}, M.options, {
                replace: !1,
                // navigator already removed the layer, nothing to replace
                originalTiledImage: J,
                tileSource: M.tileSource
              }), y.navigator.addTiledImage(ee)), y.world.addItem(J, {
                index: M.options.index
              }), y._loadQueue.length === 0 && I(M), y.world.getItemCount() === 1 && !y.preserveViewport && y.viewport.goHome(!0), M.options.success && M.options.success({
                item: J
              });
            }
          }
          l(this, u.tileSource, u, function(M) {
            P.tileSource = M, F();
          }, function(M) {
            M.options = u, O(M), F();
          });
        },
        /**
         * Add a simple image to the viewer.
         * The options are the same as the ones in {@link OpenSeadragon.Viewer#addTiledImage}
         * except for options.tileSource which is replaced by options.url.
         * @function
         * @param {Object} options - See {@link OpenSeadragon.Viewer#addTiledImage}
         * for all the options
         * @param {String} options.url - The URL of the image to add.
         * @fires OpenSeadragon.World.event:add-item
         * @fires OpenSeadragon.Viewer.event:add-item-failed
         */
        addSimpleImage: function(u) {
          e.console.assert(u, "[Viewer.addSimpleImage] options is required"), e.console.assert(u.url, "[Viewer.addSimpleImage] options.url is required");
          var y = e.extend({}, u, {
            tileSource: {
              type: "image",
              url: u.url
            }
          });
          delete y.url, this.addTiledImage(y);
        },
        // deprecated
        addLayer: function(u) {
          var y = this;
          e.console.error("[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.");
          var P = e.extend({}, u, {
            success: function(O) {
              y.raiseEvent("add-layer", {
                options: u,
                drawer: O.item
              });
            },
            error: function(O) {
              y.raiseEvent("add-layer-failed", O);
            }
          });
          return this.addTiledImage(P), this;
        },
        // deprecated
        getLayerAtLevel: function(u) {
          return e.console.error("[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead."), this.world.getItemAt(u);
        },
        // deprecated
        getLevelOfLayer: function(u) {
          return e.console.error("[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead."), this.world.getIndexOfItem(u);
        },
        // deprecated
        getLayersCount: function() {
          return e.console.error("[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead."), this.world.getItemCount();
        },
        // deprecated
        setLayerLevel: function(u, y) {
          return e.console.error("[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead."), this.world.setItemIndex(u, y);
        },
        // deprecated
        removeLayer: function(u) {
          return e.console.error("[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead."), this.world.removeItem(u);
        },
        /**
         * Force the viewer to redraw its contents.
         * @returns {OpenSeadragon.Viewer} Chainable.
         */
        forceRedraw: function() {
          return t[this.hash].forceRedraw = !0, this;
        },
        /**
         * Force the viewer to reset its size to match its container.
         */
        forceResize: function() {
          t[this.hash].needsResize = !0, t[this.hash].forceResize = !0;
        },
        /**
         * @function
         * @returns {OpenSeadragon.Viewer} Chainable.
         */
        bindSequenceControls: function() {
          var u = e.delegate(this, w), y = e.delegate(this, E), P = e.delegate(this, this.goToNextPage), O = e.delegate(this, this.goToPreviousPage), I = this.navImages, F = !0;
          return this.showSequenceControl && ((this.previousButton || this.nextButton) && (F = !1), this.previousButton = new e.Button({
            element: this.previousButton ? e.getElement(this.previousButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.PreviousPage"),
            srcRest: H(this.prefixUrl, I.previous.REST),
            srcGroup: H(this.prefixUrl, I.previous.GROUP),
            srcHover: H(this.prefixUrl, I.previous.HOVER),
            srcDown: H(this.prefixUrl, I.previous.DOWN),
            onRelease: O,
            onFocus: u,
            onBlur: y
          }), this.nextButton = new e.Button({
            element: this.nextButton ? e.getElement(this.nextButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.NextPage"),
            srcRest: H(this.prefixUrl, I.next.REST),
            srcGroup: H(this.prefixUrl, I.next.GROUP),
            srcHover: H(this.prefixUrl, I.next.HOVER),
            srcDown: H(this.prefixUrl, I.next.DOWN),
            onRelease: P,
            onFocus: u,
            onBlur: y
          }), this.navPrevNextWrap || this.previousButton.disable(), (!this.tileSources || !this.tileSources.length) && this.nextButton.disable(), F && (this.paging = new e.ButtonGroup({
            buttons: [
              this.previousButton,
              this.nextButton
            ],
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold
          }), this.pagingControl = this.paging.element, this.toolbar ? this.toolbar.addControl(
            this.pagingControl,
            { anchor: e.ControlAnchor.BOTTOM_RIGHT }
          ) : this.addControl(
            this.pagingControl,
            { anchor: this.sequenceControlAnchor || e.ControlAnchor.TOP_LEFT }
          ))), this;
        },
        /**
         * @function
         * @returns {OpenSeadragon.Viewer} Chainable.
         */
        bindStandardControls: function() {
          var u = e.delegate(this, Le), y = e.delegate(this, Xe), P = e.delegate(this, tt), O = e.delegate(this, Ve), I = e.delegate(this, be), F = e.delegate(this, Ke), M = e.delegate(this, je), J = e.delegate(this, Me), ee = e.delegate(this, Ne), te = e.delegate(this, Ie), G = e.delegate(this, w), se = e.delegate(this, E), g = this.navImages, f = [], m = !0;
          return this.showNavigationControl && ((this.zoomInButton || this.zoomOutButton || this.homeButton || this.fullPageButton || this.rotateLeftButton || this.rotateRightButton || this.flipButton) && (m = !1), this.showZoomControl && (f.push(this.zoomInButton = new e.Button({
            element: this.zoomInButton ? e.getElement(this.zoomInButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.ZoomIn"),
            srcRest: H(this.prefixUrl, g.zoomIn.REST),
            srcGroup: H(this.prefixUrl, g.zoomIn.GROUP),
            srcHover: H(this.prefixUrl, g.zoomIn.HOVER),
            srcDown: H(this.prefixUrl, g.zoomIn.DOWN),
            onPress: u,
            onRelease: y,
            onClick: P,
            onEnter: u,
            onExit: y,
            onFocus: G,
            onBlur: se
          })), f.push(this.zoomOutButton = new e.Button({
            element: this.zoomOutButton ? e.getElement(this.zoomOutButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.ZoomOut"),
            srcRest: H(this.prefixUrl, g.zoomOut.REST),
            srcGroup: H(this.prefixUrl, g.zoomOut.GROUP),
            srcHover: H(this.prefixUrl, g.zoomOut.HOVER),
            srcDown: H(this.prefixUrl, g.zoomOut.DOWN),
            onPress: O,
            onRelease: y,
            onClick: I,
            onEnter: O,
            onExit: y,
            onFocus: G,
            onBlur: se
          }))), this.showHomeControl && f.push(this.homeButton = new e.Button({
            element: this.homeButton ? e.getElement(this.homeButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.Home"),
            srcRest: H(this.prefixUrl, g.home.REST),
            srcGroup: H(this.prefixUrl, g.home.GROUP),
            srcHover: H(this.prefixUrl, g.home.HOVER),
            srcDown: H(this.prefixUrl, g.home.DOWN),
            onRelease: F,
            onFocus: G,
            onBlur: se
          })), this.showFullPageControl && f.push(this.fullPageButton = new e.Button({
            element: this.fullPageButton ? e.getElement(this.fullPageButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.FullPage"),
            srcRest: H(this.prefixUrl, g.fullpage.REST),
            srcGroup: H(this.prefixUrl, g.fullpage.GROUP),
            srcHover: H(this.prefixUrl, g.fullpage.HOVER),
            srcDown: H(this.prefixUrl, g.fullpage.DOWN),
            onRelease: M,
            onFocus: G,
            onBlur: se
          })), this.showRotationControl && (f.push(this.rotateLeftButton = new e.Button({
            element: this.rotateLeftButton ? e.getElement(this.rotateLeftButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.RotateLeft"),
            srcRest: H(this.prefixUrl, g.rotateleft.REST),
            srcGroup: H(this.prefixUrl, g.rotateleft.GROUP),
            srcHover: H(this.prefixUrl, g.rotateleft.HOVER),
            srcDown: H(this.prefixUrl, g.rotateleft.DOWN),
            onRelease: J,
            onFocus: G,
            onBlur: se
          })), f.push(this.rotateRightButton = new e.Button({
            element: this.rotateRightButton ? e.getElement(this.rotateRightButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.RotateRight"),
            srcRest: H(this.prefixUrl, g.rotateright.REST),
            srcGroup: H(this.prefixUrl, g.rotateright.GROUP),
            srcHover: H(this.prefixUrl, g.rotateright.HOVER),
            srcDown: H(this.prefixUrl, g.rotateright.DOWN),
            onRelease: ee,
            onFocus: G,
            onBlur: se
          }))), this.showFlipControl && f.push(this.flipButton = new e.Button({
            element: this.flipButton ? e.getElement(this.flipButton) : null,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            tooltip: e.getString("Tooltips.Flip"),
            srcRest: H(this.prefixUrl, g.flip.REST),
            srcGroup: H(this.prefixUrl, g.flip.GROUP),
            srcHover: H(this.prefixUrl, g.flip.HOVER),
            srcDown: H(this.prefixUrl, g.flip.DOWN),
            onRelease: te,
            onFocus: G,
            onBlur: se
          })), m ? (this.buttonGroup = new e.ButtonGroup({
            buttons: f,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold
          }), this.navControl = this.buttonGroup.element, this.addHandler("open", e.delegate(this, Ee)), this.toolbar ? this.toolbar.addControl(
            this.navControl,
            { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT }
          ) : this.addControl(
            this.navControl,
            { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT }
          )) : this.customButtons = f), this;
        },
        /**
         * Gets the active page of a sequence
         * @function
         * @returns {Number}
         */
        currentPage: function() {
          return this._sequenceIndex;
        },
        /**
         * @function
         * @returns {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:page
         */
        goToPage: function(u) {
          return this.tileSources && u >= 0 && u < this.tileSources.length && (this._sequenceIndex = u, this._updateSequenceButtons(u), this.open(this.tileSources[u]), this.referenceStrip && this.referenceStrip.setFocus(u), this.raiseEvent("page", { page: u })), this;
        },
        /**
          * Adds an html element as an overlay to the current viewport.  Useful for
          * highlighting words or areas of interest on an image or other zoomable
          * interface. The overlays added via this method are removed when the viewport
          * is closed which include when changing page.
          * @method
          * @param {Element|String|Object} element - A reference to an element or an id for
          *      the element which will be overlaid. Or an Object specifying the configuration for the overlay.
          *      If using an object, see {@link OpenSeadragon.Overlay} for a list of
          *      all available options.
          * @param {OpenSeadragon.Point|OpenSeadragon.Rect} location - The point or
          *      rectangle which will be overlaid. This is a viewport relative location.
          * @param {OpenSeadragon.Placement} [placement=OpenSeadragon.Placement.TOP_LEFT] - The position of the
          *      viewport which the location coordinates will be treated as relative
          *      to.
          * @param {function} [onDraw] - If supplied the callback is called when the overlay
          *      needs to be drawn. It it the responsibility of the callback to do any drawing/positioning.
          *      It is passed position, size and element.
          * @returns {OpenSeadragon.Viewer} Chainable.
          * @fires OpenSeadragon.Viewer.event:add-overlay
          */
        addOverlay: function(u, y, P, O) {
          var I;
          if (e.isPlainObject(u) ? I = u : I = {
            element: u,
            location: y,
            placement: P,
            onDraw: O
          }, u = e.getElement(I.element), o(this.currentOverlays, u) >= 0)
            return this;
          var F = s(this, I);
          return this.currentOverlays.push(F), F.drawHTML(this.overlaysContainer, this.viewport), this.raiseEvent("add-overlay", {
            element: u,
            location: I.location,
            placement: I.placement
          }), this;
        },
        /**
         * Updates the overlay represented by the reference to the element or
         * element id moving it to the new location, relative to the new placement.
         * @method
         * @param {Element|String} element - A reference to an element or an id for
         *      the element which is overlaid.
         * @param {OpenSeadragon.Point|OpenSeadragon.Rect} location - The point or
         *      rectangle which will be overlaid. This is a viewport relative location.
         * @param {OpenSeadragon.Placement} [placement=OpenSeadragon.Placement.TOP_LEFT] - The position of the
         *      viewport which the location coordinates will be treated as relative
         *      to.
         * @returns {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:update-overlay
         */
        updateOverlay: function(u, y, P) {
          var O;
          return u = e.getElement(u), O = o(this.currentOverlays, u), O >= 0 && (this.currentOverlays[O].update(y, P), t[this.hash].forceRedraw = !0, this.raiseEvent("update-overlay", {
            element: u,
            location: y,
            placement: P
          })), this;
        },
        /**
         * Removes an overlay identified by the reference element or element id
         * and schedules an update.
         * @method
         * @param {Element|String} element - A reference to the element or an
         *      element id which represent the ovelay content to be removed.
         * @returns {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:remove-overlay
         */
        removeOverlay: function(u) {
          var y;
          return u = e.getElement(u), y = o(this.currentOverlays, u), y >= 0 && (this.currentOverlays[y].destroy(), this.currentOverlays.splice(y, 1), t[this.hash].forceRedraw = !0, this.raiseEvent("remove-overlay", {
            element: u
          })), this;
        },
        /**
         * Removes all currently configured Overlays from this Viewer and schedules
         * an update.
         * @method
         * @returns {OpenSeadragon.Viewer} Chainable.
         * @fires OpenSeadragon.Viewer.event:clear-overlay
         */
        clearOverlays: function() {
          for (; this.currentOverlays.length > 0; )
            this.currentOverlays.pop().destroy();
          return t[this.hash].forceRedraw = !0, this.raiseEvent("clear-overlay", {}), this;
        },
        /**
        * Finds an overlay identified by the reference element or element id
        * and returns it as an object, return null if not found.
        * @method
        * @param {Element|String} element - A reference to the element or an
        *      element id which represents the overlay content.
        * @returns {OpenSeadragon.Overlay} the matching overlay or null if none found.
        */
        getOverlayById: function(u) {
          var y;
          return u = e.getElement(u), y = o(this.currentOverlays, u), y >= 0 ? this.currentOverlays[y] : null;
        },
        /**
         * Updates the sequence buttons.
         * @function OpenSeadragon.Viewer.prototype._updateSequenceButtons
         * @private
         * @param {Number} Sequence Value
         */
        _updateSequenceButtons: function(u) {
          this.nextButton && (!this.tileSources || this.tileSources.length - 1 === u ? this.navPrevNextWrap || this.nextButton.disable() : this.nextButton.enable()), this.previousButton && (u > 0 ? this.previousButton.enable() : this.navPrevNextWrap || this.previousButton.disable());
        },
        /**
         * Display a message in the viewport
         * @function OpenSeadragon.Viewer.prototype._showMessage
         * @private
         * @param {String} text message
         */
        _showMessage: function(u) {
          this._hideMessage();
          var y = e.makeNeutralElement("div");
          y.appendChild(document.createTextNode(u)), this.messageDiv = e.makeCenteredNode(y), e.addClass(this.messageDiv, "openseadragon-message"), this.container.appendChild(this.messageDiv);
        },
        /**
         * Hide any currently displayed viewport message
         * @function OpenSeadragon.Viewer.prototype._hideMessage
         * @private
         */
        _hideMessage: function() {
          var u = this.messageDiv;
          u && (u.parentNode.removeChild(u), delete this.messageDiv);
        },
        /**
         * Gets this viewer's gesture settings for the given pointer device type.
         * @method
         * @param {String} type - The pointer device type to get the gesture settings for ("mouse", "touch", "pen", etc.).
         * @returns {OpenSeadragon.GestureSettings}
         */
        gestureSettingsByDeviceType: function(u) {
          switch (u) {
            case "mouse":
              return this.gestureSettingsMouse;
            case "touch":
              return this.gestureSettingsTouch;
            case "pen":
              return this.gestureSettingsPen;
            default:
              return this.gestureSettingsUnknown;
          }
        },
        // private
        _drawOverlays: function() {
          var u, y = this.currentOverlays.length;
          for (u = 0; u < y; u++)
            this.currentOverlays[u].drawHTML(this.overlaysContainer, this.viewport);
        },
        /**
         * Cancel the "in flight" images.
         */
        _cancelPendingImages: function() {
          this._loadQueue = [];
        },
        /**
         * Removes the reference strip and disables displaying it.
         * @function
         */
        removeReferenceStrip: function() {
          this.showReferenceStrip = !1, this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null);
        },
        /**
         * Enables and displays the reference strip based on the currently set tileSources.
         * Works only when the Viewer has sequenceMode set to true.
         * @function
         */
        addReferenceStrip: function() {
          if (this.showReferenceStrip = !0, this.sequenceMode) {
            if (this.referenceStrip)
              return;
            this.tileSources.length && this.tileSources.length > 1 && (this.referenceStrip = new e.ReferenceStrip({
              id: this.referenceStripElement,
              position: this.referenceStripPosition,
              sizeRatio: this.referenceStripSizeRatio,
              scroll: this.referenceStripScroll,
              height: this.referenceStripHeight,
              width: this.referenceStripWidth,
              tileSources: this.tileSources,
              prefixUrl: this.prefixUrl,
              useCanvas: this.useCanvas,
              viewer: this
            }), this.referenceStrip.setFocus(this._sequenceIndex));
          } else
            e.console.warn('Attempting to display a reference strip while "sequenceMode" is off.');
        },
        /**
         * Adds _updatePixelDensityRatio to the window resize event.
         * @private
         */
        _addUpdatePixelDensityRatioEvent: function() {
          this._updatePixelDensityRatioBind = this._updatePixelDensityRatio.bind(this), e.addEvent(window, "resize", this._updatePixelDensityRatioBind);
        },
        /**
         * Removes _updatePixelDensityRatio from the window resize event.
         * @private
         */
        _removeUpdatePixelDensityRatioEvent: function() {
          e.removeEvent(window, "resize", this._updatePixelDensityRatioBind);
        },
        /**
         * Update pixel density ratio, clears all tiles and triggers updates for
         * all items if the ratio has changed.
         * @private
         */
        _updatePixelDensityRatio: function() {
          var u = e.pixelDensityRatio, y = e.getCurrentPixelDensityRatio();
          u !== y && (e.pixelDensityRatio = y, this.world.resetItems(), this.forceRedraw());
        },
        /**
         * Sets the image source to the source with index equal to
         * currentIndex - 1. Changes current image in sequence mode.
         * If specified, wraps around (see navPrevNextWrap in
         * {@link OpenSeadragon.Options})
         *
         * @method
         */
        goToPreviousPage: function() {
          var u = this._sequenceIndex - 1;
          this.navPrevNextWrap && u < 0 && (u += this.tileSources.length), this.goToPage(u);
        },
        /**
         * Sets the image source to the source with index equal to
         * currentIndex + 1. Changes current image in sequence mode.
         * If specified, wraps around (see navPrevNextWrap in
         * {@link OpenSeadragon.Options})
         *
         * @method
         */
        goToNextPage: function() {
          var u = this._sequenceIndex + 1;
          this.navPrevNextWrap && u >= this.tileSources.length && (u = 0), this.goToPage(u);
        },
        isAnimating: function() {
          return t[this.hash].animating;
        }
      }
    );
    function r(u) {
      return u = e.getElement(u), new e.Point(
        u.clientWidth === 0 ? 1 : u.clientWidth,
        u.clientHeight === 0 ? 1 : u.clientHeight
      );
    }
    function l(u, y, P, O, I) {
      var F = u;
      if (e.type(y) === "string") {
        if (y.match(/^\s*<.*>\s*$/))
          y = e.parseXml(y);
        else if (y.match(/^\s*[{[].*[}\]]\s*$/))
          try {
            var M = e.parseJSON(y);
            y = M;
          } catch {
          }
      }
      function J(ee, te) {
        ee.ready ? O(ee) : (ee.addHandler("ready", function() {
          O(ee);
        }), ee.addHandler("open-failed", function(G) {
          I({
            message: G.message,
            source: te
          });
        }));
      }
      setTimeout(function() {
        if (e.type(y) === "string")
          y = new e.TileSource({
            url: y,
            crossOriginPolicy: P.crossOriginPolicy !== void 0 ? P.crossOriginPolicy : u.crossOriginPolicy,
            ajaxWithCredentials: u.ajaxWithCredentials,
            ajaxHeaders: P.ajaxHeaders ? P.ajaxHeaders : u.ajaxHeaders,
            splitHashDataForPost: u.splitHashDataForPost,
            useCanvas: u.useCanvas,
            success: function(se) {
              O(se.tileSource);
            }
          }), y.addHandler("open-failed", function(se) {
            I(se);
          });
        else if (e.isPlainObject(y) || y.nodeType)
          if (y.crossOriginPolicy === void 0 && (P.crossOriginPolicy !== void 0 || u.crossOriginPolicy !== void 0) && (y.crossOriginPolicy = P.crossOriginPolicy !== void 0 ? P.crossOriginPolicy : u.crossOriginPolicy), y.ajaxWithCredentials === void 0 && (y.ajaxWithCredentials = u.ajaxWithCredentials), y.useCanvas === void 0 && (y.useCanvas = u.useCanvas), e.isFunction(y.getTileUrl)) {
            var ee = new e.TileSource(y);
            ee.getTileUrl = y.getTileUrl, O(ee);
          } else {
            var te = e.TileSource.determineType(F, y);
            if (!te) {
              I({
                message: "Unable to load TileSource",
                source: y
              });
              return;
            }
            var G = te.prototype.configure.apply(F, [y]);
            J(new te(G), y);
          }
        else
          J(y, y);
      });
    }
    function s(u, y) {
      if (y instanceof e.Overlay)
        return y;
      var P = null;
      if (y.element)
        P = e.getElement(y.element);
      else {
        var O = y.id ? y.id : "openseadragon-overlay-" + Math.floor(Math.random() * 1e7);
        P = e.getElement(y.id), P || (P = document.createElement("a"), P.href = "#/overlay/" + O), P.id = O, e.addClass(
          P,
          y.className ? y.className : "openseadragon-overlay"
        );
      }
      var I = y.location, F = y.width, M = y.height;
      if (!I) {
        var J = y.x, ee = y.y;
        if (y.px !== void 0) {
          var te = u.viewport.imageToViewportRectangle(new e.Rect(
            y.px,
            y.py,
            F || 0,
            M || 0
          ));
          J = te.x, ee = te.y, F = F !== void 0 ? te.width : void 0, M = M !== void 0 ? te.height : void 0;
        }
        I = new e.Point(J, ee);
      }
      var G = y.placement;
      return G && e.type(G) === "string" && (G = e.Placement[y.placement.toUpperCase()]), new e.Overlay({
        element: P,
        location: I,
        placement: G,
        onDraw: y.onDraw,
        checkResize: y.checkResize,
        width: F,
        height: M,
        rotationMode: y.rotationMode
      });
    }
    function o(u, y) {
      var P;
      for (P = u.length - 1; P >= 0; P--)
        if (u[P].element === y)
          return P;
      return -1;
    }
    function a(u, y) {
      return e.requestAnimationFrame(function() {
        y(u);
      });
    }
    function h(u) {
      e.requestAnimationFrame(function() {
        p(u);
      });
    }
    function c(u) {
      u.autoHideControls && (u.controlsShouldFade = !0, u.controlsFadeBeginTime = e.now() + u.controlsFadeDelay, window.setTimeout(function() {
        h(u);
      }, u.controlsFadeDelay));
    }
    function p(u) {
      var y, P, O, I;
      if (u.controlsShouldFade) {
        for (y = e.now(), P = y - u.controlsFadeBeginTime, O = 1 - P / u.controlsFadeLength, O = Math.min(1, O), O = Math.max(0, O), I = u.controls.length - 1; I >= 0; I--)
          u.controls[I].autoFade && u.controls[I].setOpacity(O);
        O > 0 && h(u);
      }
    }
    function v(u) {
      var y;
      for (u.controlsShouldFade = !1, y = u.controls.length - 1; y >= 0; y--)
        u.controls[y].setOpacity(1);
    }
    function w() {
      v(this);
    }
    function E() {
      c(this);
    }
    function _(u) {
      var y = {
        tracker: u.eventSource,
        position: u.position,
        originalEvent: u.originalEvent,
        preventDefault: u.preventDefault
      };
      this.raiseEvent("canvas-contextmenu", y), u.preventDefault = y.preventDefault;
    }
    function S(u) {
      var y = {
        originalEvent: u.originalEvent,
        preventDefaultAction: !1,
        preventVerticalPan: u.preventVerticalPan || !this.panVertical,
        preventHorizontalPan: u.preventHorizontalPan || !this.panHorizontal
      };
      if (this.raiseEvent("canvas-key", y), !y.preventDefaultAction && !u.ctrl && !u.alt && !u.meta)
        switch (u.keyCode) {
          case 38:
            y.preventVerticalPan || (u.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -this.pixelsPerArrowPress))), this.viewport.applyConstraints()), u.preventDefault = !0;
            break;
          case 40:
            y.preventVerticalPan || (u.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, this.pixelsPerArrowPress))), this.viewport.applyConstraints()), u.preventDefault = !0;
            break;
          case 37:
            y.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), u.preventDefault = !0;
            break;
          case 39:
            y.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), u.preventDefault = !0;
            break;
          case 187:
            this.viewport.zoomBy(1.1), this.viewport.applyConstraints(), u.preventDefault = !0;
            break;
          case 189:
            this.viewport.zoomBy(0.9), this.viewport.applyConstraints(), u.preventDefault = !0;
            break;
          case 48:
            this.viewport.goHome(), this.viewport.applyConstraints(), u.preventDefault = !0;
            break;
          case 87:
            y.preventVerticalPan || (u.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -40))), this.viewport.applyConstraints()), u.preventDefault = !0;
            break;
          case 83:
            y.preventVerticalPan || (u.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, 40))), this.viewport.applyConstraints()), u.preventDefault = !0;
            break;
          case 65:
            y.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-40, 0))), this.viewport.applyConstraints()), u.preventDefault = !0;
            break;
          case 68:
            y.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(40, 0))), this.viewport.applyConstraints()), u.preventDefault = !0;
            break;
          case 82:
            u.shift ? this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement), this.viewport.applyConstraints(), u.preventDefault = !0;
            break;
          case 70:
            this.viewport.toggleFlip(), u.preventDefault = !0;
            break;
          case 74:
            this.goToPreviousPage();
            break;
          case 75:
            this.goToNextPage();
            break;
          default:
            u.preventDefault = !1;
            break;
        }
      else
        u.preventDefault = !1;
    }
    function C(u) {
      var y = {
        originalEvent: u.originalEvent
      };
      this.raiseEvent("canvas-key-press", y);
    }
    function b(u) {
      var y, P = document.activeElement === this.canvas;
      P || this.canvas.focus(), this.viewport.flipped && (u.position.x = this.viewport.getContainerSize().x - u.position.x);
      var O = {
        tracker: u.eventSource,
        position: u.position,
        quick: u.quick,
        shift: u.shift,
        originalEvent: u.originalEvent,
        originalTarget: u.originalTarget,
        preventDefaultAction: !1
      };
      this.raiseEvent("canvas-click", O), !O.preventDefaultAction && this.viewport && u.quick && (y = this.gestureSettingsByDeviceType(u.pointerType), y.clickToZoom === !0 && (this.viewport.zoomBy(
        u.shift ? 1 / this.zoomPerClick : this.zoomPerClick,
        y.zoomToRefPoint ? this.viewport.pointFromPixel(u.position, !0) : null
      ), this.viewport.applyConstraints()), y.dblClickDragToZoom && (t[this.hash].draggingToZoom === !0 ? (t[this.hash].lastClickTime = null, t[this.hash].draggingToZoom = !1) : t[this.hash].lastClickTime = e.now()));
    }
    function V(u) {
      var y, P = {
        tracker: u.eventSource,
        position: u.position,
        shift: u.shift,
        originalEvent: u.originalEvent,
        preventDefaultAction: !1
      };
      this.raiseEvent("canvas-double-click", P), !P.preventDefaultAction && this.viewport && (y = this.gestureSettingsByDeviceType(u.pointerType), y.dblClickToZoom && (this.viewport.zoomBy(
        u.shift ? 1 / this.zoomPerClick : this.zoomPerClick,
        y.zoomToRefPoint ? this.viewport.pointFromPixel(u.position, !0) : null
      ), this.viewport.applyConstraints()));
    }
    function Z(u) {
      var y, P = {
        tracker: u.eventSource,
        pointerType: u.pointerType,
        position: u.position,
        delta: u.delta,
        speed: u.speed,
        direction: u.direction,
        shift: u.shift,
        originalEvent: u.originalEvent,
        preventDefaultAction: !1
      };
      if (this.raiseEvent("canvas-drag", P), y = this.gestureSettingsByDeviceType(u.pointerType), !P.preventDefaultAction && this.viewport) {
        if (y.dblClickDragToZoom && t[this.hash].draggingToZoom) {
          var O = Math.pow(this.zoomPerDblClickDrag, u.delta.y / 50);
          this.viewport.zoomBy(O);
        } else if (y.dragToPan && !t[this.hash].draggingToZoom) {
          if (this.panHorizontal || (u.delta.x = 0), this.panVertical || (u.delta.y = 0), this.viewport.flipped && (u.delta.x = -u.delta.x), this.constrainDuringPan) {
            var I = this.viewport.deltaPointsFromPixels(u.delta.negate());
            this.viewport.centerSpringX.target.value += I.x, this.viewport.centerSpringY.target.value += I.y;
            var F = this.viewport.getConstrainedBounds();
            this.viewport.centerSpringX.target.value -= I.x, this.viewport.centerSpringY.target.value -= I.y, F.xConstrained && (u.delta.x = 0), F.yConstrained && (u.delta.y = 0);
          }
          this.viewport.panBy(this.viewport.deltaPointsFromPixels(u.delta.negate()), y.flickEnabled && !this.constrainDuringPan);
        }
      }
    }
    function K(u) {
      var y, P = {
        tracker: u.eventSource,
        pointerType: u.pointerType,
        position: u.position,
        speed: u.speed,
        direction: u.direction,
        shift: u.shift,
        originalEvent: u.originalEvent,
        preventDefaultAction: !1
      };
      if (this.raiseEvent("canvas-drag-end", P), y = this.gestureSettingsByDeviceType(u.pointerType), !P.preventDefaultAction && this.viewport) {
        if (!t[this.hash].draggingToZoom && y.flickEnabled && u.speed >= y.flickMinSpeed) {
          var O = 0;
          this.panHorizontal && (O = y.flickMomentum * u.speed * Math.cos(u.direction));
          var I = 0;
          this.panVertical && (I = y.flickMomentum * u.speed * Math.sin(u.direction));
          var F = this.viewport.pixelFromPoint(
            this.viewport.getCenter(!0)
          ), M = this.viewport.pointFromPixel(
            new e.Point(F.x - O, F.y - I)
          );
          this.viewport.panTo(M, !1);
        }
        this.viewport.applyConstraints();
      }
      y.dblClickDragToZoom && t[this.hash].draggingToZoom === !0 && (t[this.hash].draggingToZoom = !1);
    }
    function Q(u) {
      this.raiseEvent("canvas-enter", {
        tracker: u.eventSource,
        pointerType: u.pointerType,
        position: u.position,
        buttons: u.buttons,
        pointers: u.pointers,
        insideElementPressed: u.insideElementPressed,
        buttonDownAny: u.buttonDownAny,
        originalEvent: u.originalEvent
      });
    }
    function q(u) {
      this.raiseEvent("canvas-exit", {
        tracker: u.eventSource,
        pointerType: u.pointerType,
        position: u.position,
        buttons: u.buttons,
        pointers: u.pointers,
        insideElementPressed: u.insideElementPressed,
        buttonDownAny: u.buttonDownAny,
        originalEvent: u.originalEvent
      });
    }
    function $(u) {
      var y;
      if (this.raiseEvent("canvas-press", {
        tracker: u.eventSource,
        pointerType: u.pointerType,
        position: u.position,
        insideElementPressed: u.insideElementPressed,
        insideElementReleased: u.insideElementReleased,
        originalEvent: u.originalEvent
      }), y = this.gestureSettingsByDeviceType(u.pointerType), y.dblClickDragToZoom) {
        var P = t[this.hash].lastClickTime, O = e.now();
        if (P === null)
          return;
        O - P < this.dblClickTimeThreshold && (t[this.hash].draggingToZoom = !0), t[this.hash].lastClickTime = null;
      }
    }
    function ne(u) {
      this.raiseEvent("canvas-release", {
        tracker: u.eventSource,
        pointerType: u.pointerType,
        position: u.position,
        insideElementPressed: u.insideElementPressed,
        insideElementReleased: u.insideElementReleased,
        originalEvent: u.originalEvent
      });
    }
    function oe(u) {
      this.raiseEvent("canvas-nonprimary-press", {
        tracker: u.eventSource,
        position: u.position,
        pointerType: u.pointerType,
        button: u.button,
        buttons: u.buttons,
        originalEvent: u.originalEvent
      });
    }
    function le(u) {
      this.raiseEvent("canvas-nonprimary-release", {
        tracker: u.eventSource,
        position: u.position,
        pointerType: u.pointerType,
        button: u.button,
        buttons: u.buttons,
        originalEvent: u.originalEvent
      });
    }
    function pe(u) {
      var y, P, O, I, F = {
        tracker: u.eventSource,
        pointerType: u.pointerType,
        gesturePoints: u.gesturePoints,
        lastCenter: u.lastCenter,
        center: u.center,
        lastDistance: u.lastDistance,
        distance: u.distance,
        shift: u.shift,
        originalEvent: u.originalEvent,
        preventDefaultPanAction: !1,
        preventDefaultZoomAction: !1,
        preventDefaultRotateAction: !1
      };
      if (this.raiseEvent("canvas-pinch", F), this.viewport && (y = this.gestureSettingsByDeviceType(u.pointerType), y.pinchToZoom && (!F.preventDefaultPanAction || !F.preventDefaultZoomAction) && (P = this.viewport.pointFromPixel(u.center, !0), y.zoomToRefPoint && !F.preventDefaultPanAction && (O = this.viewport.pointFromPixel(u.lastCenter, !0), I = O.minus(P), this.panHorizontal || (I.x = 0), this.panVertical || (I.y = 0), this.viewport.panBy(I, !0)), F.preventDefaultZoomAction || this.viewport.zoomBy(u.distance / u.lastDistance, P, !0), this.viewport.applyConstraints()), y.pinchRotate && !F.preventDefaultRotateAction)) {
        var M = Math.atan2(
          u.gesturePoints[0].currentPos.y - u.gesturePoints[1].currentPos.y,
          u.gesturePoints[0].currentPos.x - u.gesturePoints[1].currentPos.x
        ), J = Math.atan2(
          u.gesturePoints[0].lastPos.y - u.gesturePoints[1].lastPos.y,
          u.gesturePoints[0].lastPos.x - u.gesturePoints[1].lastPos.x
        );
        P = this.viewport.pointFromPixel(u.center, !0), this.viewport.rotateTo(this.viewport.getRotation(!0) + (M - J) * (180 / Math.PI), P, !0);
      }
    }
    function Pe(u) {
      this.raiseEvent("canvas-focus", {
        tracker: u.eventSource,
        originalEvent: u.originalEvent
      });
    }
    function Ze(u) {
      this.raiseEvent("canvas-blur", {
        tracker: u.eventSource,
        originalEvent: u.originalEvent
      });
    }
    function we(u) {
      var y, P, O, I, F;
      I = e.now(), F = I - this._lastScrollTime, F > this.minScrollDeltaTime ? (this._lastScrollTime = I, y = {
        tracker: u.eventSource,
        position: u.position,
        scroll: u.scroll,
        shift: u.shift,
        originalEvent: u.originalEvent,
        preventDefaultAction: !1,
        preventDefault: !0
      }, this.raiseEvent("canvas-scroll", y), !y.preventDefaultAction && this.viewport && (this.viewport.flipped && (u.position.x = this.viewport.getContainerSize().x - u.position.x), P = this.gestureSettingsByDeviceType(u.pointerType), P.scrollToZoom && (O = Math.pow(this.zoomPerScroll, u.scroll), this.viewport.zoomBy(
        O,
        P.zoomToRefPoint ? this.viewport.pointFromPixel(u.position, !0) : null
      ), this.viewport.applyConstraints())), u.preventDefault = y.preventDefault) : u.preventDefault = !0;
    }
    function _e(u) {
      t[this.hash].mouseInside = !0, v(this), this.raiseEvent("container-enter", {
        tracker: u.eventSource,
        pointerType: u.pointerType,
        position: u.position,
        buttons: u.buttons,
        pointers: u.pointers,
        insideElementPressed: u.insideElementPressed,
        buttonDownAny: u.buttonDownAny,
        originalEvent: u.originalEvent
      });
    }
    function Re(u) {
      u.pointers < 1 && (t[this.hash].mouseInside = !1, t[this.hash].animating || c(this)), this.raiseEvent("container-exit", {
        tracker: u.eventSource,
        pointerType: u.pointerType,
        position: u.position,
        buttons: u.buttons,
        pointers: u.pointers,
        insideElementPressed: u.insideElementPressed,
        buttonDownAny: u.buttonDownAny,
        originalEvent: u.originalEvent
      });
    }
    function re(u) {
      he(u), u.isOpen() ? u._updateRequestId = a(u, re) : u._updateRequestId = !1;
    }
    function Ce(u, y) {
      var P = u.viewport, O = P.getZoom(), I = P.getCenter();
      P.resize(y, u.preserveImageSizeOnResize), P.panTo(I, !0);
      var F;
      if (u.preserveImageSizeOnResize)
        F = t[u.hash].prevContainerSize.x / y.x;
      else {
        var M = new e.Point(0, 0), J = new e.Point(t[u.hash].prevContainerSize.x, t[u.hash].prevContainerSize.y).distanceTo(M), ee = new e.Point(y.x, y.y).distanceTo(M);
        F = ee / J * t[u.hash].prevContainerSize.x / y.x;
      }
      P.zoomTo(O * F, null, !0), t[u.hash].prevContainerSize = y, t[u.hash].forceRedraw = !0, t[u.hash].needsResize = !1, t[u.hash].forceResize = !1;
    }
    function he(u) {
      if (!(u._opening || !t[u.hash])) {
        if (u.autoResize || t[u.hash].forceResize) {
          var y;
          if (u._autoResizePolling) {
            y = r(u.container);
            var P = t[u.hash].prevContainerSize;
            y.equals(P) || (t[u.hash].needsResize = !0);
          }
          t[u.hash].needsResize && Ce(u, y || r(u.container));
        }
        var O = u.viewport.update(), I = u.world.update() || O;
        O && u.raiseEvent("viewport-change"), u.referenceStrip && (I = u.referenceStrip.update(u.viewport) || I);
        var F = t[u.hash].animating;
        !F && I && (u.raiseEvent("animation-start"), v(u));
        var M = F && !I;
        M && (t[u.hash].animating = !1), (I || M || t[u.hash].forceRedraw || u.world.needsDraw()) && (et(u), u._drawOverlays(), u.navigator && u.navigator.update(u.viewport), t[u.hash].forceRedraw = !1, I && u.raiseEvent("animation")), M && (u.raiseEvent("animation-finish"), t[u.hash].mouseInside || c(u)), t[u.hash].animating = I;
      }
    }
    function et(u) {
      u.imageLoader.clear(), u.drawer.clear(), u.world.draw(), u.raiseEvent("update-viewport", {});
    }
    function H(u, y) {
      return u ? u + y : y;
    }
    function Le() {
      t[this.hash].lastZoomTime = e.now(), t[this.hash].zoomFactor = this.zoomPerSecond, t[this.hash].zooming = !0, De(this);
    }
    function Ve() {
      t[this.hash].lastZoomTime = e.now(), t[this.hash].zoomFactor = 1 / this.zoomPerSecond, t[this.hash].zooming = !0, De(this);
    }
    function Xe() {
      t[this.hash].zooming = !1;
    }
    function De(u) {
      e.requestAnimationFrame(e.delegate(u, Ye));
    }
    function Ye() {
      var u, y, P;
      t[this.hash].zooming && this.viewport && (u = e.now(), y = u - t[this.hash].lastZoomTime, P = Math.pow(t[this.hash].zoomFactor, y / 1e3), this.viewport.zoomBy(P), this.viewport.applyConstraints(), t[this.hash].lastZoomTime = u, De(this));
    }
    function tt() {
      this.viewport && (t[this.hash].zooming = !1, this.viewport.zoomBy(
        this.zoomPerClick / 1
      ), this.viewport.applyConstraints());
    }
    function be() {
      this.viewport && (t[this.hash].zooming = !1, this.viewport.zoomBy(
        1 / this.zoomPerClick
      ), this.viewport.applyConstraints());
    }
    function Ee() {
      this.buttonGroup && (this.buttonGroup.emulateEnter(), this.buttonGroup.emulateLeave());
    }
    function Ke() {
      this.viewport && this.viewport.goHome();
    }
    function je() {
      this.isFullPage() && !e.isFullScreen() ? this.setFullPage(!1) : this.setFullScreen(!this.isFullPage()), this.buttonGroup && this.buttonGroup.emulateLeave(), this.fullPageButton.element.focus(), this.viewport && this.viewport.applyConstraints();
    }
    function Me() {
      if (this.viewport) {
        var u = this.viewport.getRotation();
        this.viewport.flipped ? u += this.rotationIncrement : u -= this.rotationIncrement, this.viewport.setRotation(u);
      }
    }
    function Ne() {
      if (this.viewport) {
        var u = this.viewport.getRotation();
        this.viewport.flipped ? u -= this.rotationIncrement : u += this.rotationIncrement, this.viewport.setRotation(u);
      }
    }
    function Ie() {
      this.viewport.toggleFlip();
    }
  }(n), function(e) {
    e.Navigator = function(a) {
      var h = a.viewer, c = this, p, v;
      a.element || a.id ? (a.element ? (a.id && e.console.warn("Given option.id for Navigator was ignored since option.element was provided and is being used instead."), a.element.id ? a.id = a.element.id : a.id = "navigator-" + e.now(), this.element = a.element) : this.element = document.getElementById(a.id), a.controlOptions = {
        anchor: e.ControlAnchor.NONE,
        attachToViewer: !1,
        autoFade: !1
      }) : (a.id = "navigator-" + e.now(), this.element = e.makeNeutralElement("div"), a.controlOptions = {
        anchor: e.ControlAnchor.TOP_RIGHT,
        attachToViewer: !0,
        autoFade: a.autoFade
      }, a.position && (a.position === "BOTTOM_RIGHT" ? a.controlOptions.anchor = e.ControlAnchor.BOTTOM_RIGHT : a.position === "BOTTOM_LEFT" ? a.controlOptions.anchor = e.ControlAnchor.BOTTOM_LEFT : a.position === "TOP_RIGHT" ? a.controlOptions.anchor = e.ControlAnchor.TOP_RIGHT : a.position === "TOP_LEFT" ? a.controlOptions.anchor = e.ControlAnchor.TOP_LEFT : a.position === "ABSOLUTE" && (a.controlOptions.anchor = e.ControlAnchor.ABSOLUTE, a.controlOptions.top = a.top, a.controlOptions.left = a.left, a.controlOptions.height = a.height, a.controlOptions.width = a.width))), this.element.id = a.id, this.element.className += " navigator", a = e.extend(!0, {
        sizeRatio: e.DEFAULT_SETTINGS.navigatorSizeRatio
      }, a, {
        element: this.element,
        tabIndex: -1,
        // No keyboard navigation, omit from tab order
        //These need to be overridden to prevent recursion since
        //the navigator is a viewer and a viewer has a navigator
        showNavigator: !1,
        mouseNavEnabled: !1,
        showNavigationControl: !1,
        showSequenceControl: !1,
        immediateRender: !0,
        blendTime: 0,
        animationTime: a.animationTime,
        // disable autoResize since resize behavior is implemented differently by the navigator
        autoResize: !1,
        // prevent resizing the navigator from adding unwanted space around the image
        minZoomImageRatio: 1,
        background: a.background,
        opacity: a.opacity,
        borderColor: a.borderColor,
        displayRegionColor: a.displayRegionColor
      }), a.minPixelRatio = this.minPixelRatio = h.minPixelRatio, e.setElementTouchActionNone(this.element), this.borderWidth = 2, this.fudge = new e.Point(1, 1), this.totalBorderWidths = new e.Point(this.borderWidth * 2, this.borderWidth * 2).minus(this.fudge), a.controlOptions.anchor !== e.ControlAnchor.NONE && function(_, S) {
        _.margin = "0px", _.border = S + "px solid " + a.borderColor, _.padding = "0px", _.background = a.background, _.opacity = a.opacity, _.overflow = "hidden";
      }(this.element.style, this.borderWidth), this.displayRegion = e.makeNeutralElement("div"), this.displayRegion.id = this.element.id + "-displayregion", this.displayRegion.className = "displayregion", function(_, S) {
        _.position = "relative", _.top = "0px", _.left = "0px", _.fontSize = "0px", _.overflow = "hidden", _.border = S + "px solid " + a.displayRegionColor, _.margin = "0px", _.padding = "0px", _.background = "transparent", _.float = "left", _.cssFloat = "left", _.styleFloat = "left", _.zIndex = 999999999, _.cursor = "default", _.boxSizing = "content-box";
      }(this.displayRegion.style, this.borderWidth), e.setElementPointerEventsNone(this.displayRegion), e.setElementTouchActionNone(this.displayRegion), this.displayRegionContainer = e.makeNeutralElement("div"), this.displayRegionContainer.id = this.element.id + "-displayregioncontainer", this.displayRegionContainer.className = "displayregioncontainer", this.displayRegionContainer.style.width = "100%", this.displayRegionContainer.style.height = "100%", e.setElementPointerEventsNone(this.displayRegionContainer), e.setElementTouchActionNone(this.displayRegionContainer), h.addControl(
        this.element,
        a.controlOptions
      ), this._resizeWithViewer = a.controlOptions.anchor !== e.ControlAnchor.ABSOLUTE && a.controlOptions.anchor !== e.ControlAnchor.NONE, a.width && a.height ? (this.setWidth(a.width), this.setHeight(a.height)) : this._resizeWithViewer && (p = e.getElementSize(h.element), this.element.style.height = Math.round(p.y * a.sizeRatio) + "px", this.element.style.width = Math.round(p.x * a.sizeRatio) + "px", this.oldViewerSize = p, v = e.getElementSize(this.element), this.elementArea = v.x * v.y), this.oldContainerSize = new e.Point(0, 0), e.Viewer.apply(this, [a]), this.displayRegionContainer.appendChild(this.displayRegion), this.element.getElementsByTagName("div")[0].appendChild(this.displayRegionContainer);
      function w(_, S) {
        s(c.displayRegionContainer, _), s(c.displayRegion, -_), c.viewport.setRotation(_, S);
      }
      if (a.navigatorRotate) {
        var E = a.viewer.viewport ? a.viewer.viewport.getRotation() : a.viewer.degrees || 0;
        w(E, !0), a.viewer.addHandler("rotate", function(_) {
          w(_.degrees, _.immediately);
        });
      }
      this.innerTracker.destroy(), this.innerTracker = new e.MouseTracker({
        userData: "Navigator.innerTracker",
        element: this.element,
        //this.canvas,
        dragHandler: e.delegate(this, i),
        clickHandler: e.delegate(this, t),
        releaseHandler: e.delegate(this, r),
        scrollHandler: e.delegate(this, l),
        preProcessEventHandler: function(_) {
          _.eventType === "wheel" && (_.preventDefault = !0);
        }
      }), this.outerTracker.userData = "Navigator.outerTracker", e.setElementPointerEventsNone(this.canvas), e.setElementPointerEventsNone(this.container), this.addHandler("reset-size", function() {
        c.viewport && c.viewport.goHome(!0);
      }), h.world.addHandler("item-index-change", function(_) {
        window.setTimeout(function() {
          var S = c.world.getItemAt(_.previousIndex);
          c.world.setItemIndex(S, _.newIndex);
        }, 1);
      }), h.world.addHandler("remove-item", function(_) {
        var S = _.item, C = c._getMatchingItem(S);
        C && c.world.removeItem(C);
      }), this.update(h.viewport);
    }, e.extend(
      e.Navigator.prototype,
      e.EventSource.prototype,
      e.Viewer.prototype,
      /** @lends OpenSeadragon.Navigator.prototype */
      {
        /**
         * Used to notify the navigator when its size has changed.
         * Especially useful when {@link OpenSeadragon.Options}.navigatorAutoResize is set to false and the navigator is resizable.
         * @function
         */
        updateSize: function() {
          if (this.viewport) {
            var a = new e.Point(
              this.container.clientWidth === 0 ? 1 : this.container.clientWidth,
              this.container.clientHeight === 0 ? 1 : this.container.clientHeight
            );
            a.equals(this.oldContainerSize) || (this.viewport.resize(a, !0), this.viewport.goHome(!0), this.oldContainerSize = a, this.drawer.clear(), this.world.draw());
          }
        },
        /**
         * Explicitly sets the width of the navigator, in web coordinates. Disables automatic resizing.
         * @param {Number|String} width - the new width, either a number of pixels or a CSS string, such as "100%"
         */
        setWidth: function(a) {
          this.width = a, this.element.style.width = typeof a == "number" ? a + "px" : a, this._resizeWithViewer = !1, this.updateSize();
        },
        /**
         * Explicitly sets the height of the navigator, in web coordinates. Disables automatic resizing.
         * @param {Number|String} height - the new height, either a number of pixels or a CSS string, such as "100%"
         */
        setHeight: function(a) {
          this.height = a, this.element.style.height = typeof a == "number" ? a + "px" : a, this._resizeWithViewer = !1, this.updateSize();
        },
        /**
          * Flip navigator element
          * @param {Boolean} state - Flip state to set.
          */
        setFlip: function(a) {
          return this.viewport.setFlip(a), this.setDisplayTransform(this.viewer.viewport.getFlip() ? "scale(-1,1)" : "scale(1,1)"), this;
        },
        setDisplayTransform: function(a) {
          o(this.displayRegion, a), o(this.canvas, a), o(this.element, a);
        },
        /**
         * Used to update the navigator minimap's viewport rectangle when a change in the viewer's viewport occurs.
         * @function
         * @param {OpenSeadragon.Viewport} The viewport this navigator is tracking.
         */
        update: function(a) {
          var h, c, p, v, w, E;
          if (h = e.getElementSize(this.viewer.element), this._resizeWithViewer && h.x && h.y && !h.equals(this.oldViewerSize) && (this.oldViewerSize = h, this.maintainSizeRatio || !this.elementArea ? (c = h.x * this.sizeRatio, p = h.y * this.sizeRatio) : (c = Math.sqrt(this.elementArea * (h.x / h.y)), p = this.elementArea / c), this.element.style.width = Math.round(c) + "px", this.element.style.height = Math.round(p) + "px", this.elementArea || (this.elementArea = c * p), this.updateSize()), a && this.viewport) {
            if (v = a.getBoundsNoRotate(!0), w = this.viewport.pixelFromPointNoRotate(v.getTopLeft(), !1), E = this.viewport.pixelFromPointNoRotate(v.getBottomRight(), !1).minus(this.totalBorderWidths), !this.navigatorRotate) {
              var _ = a.getRotation(!0);
              s(this.displayRegion, -_);
            }
            var S = this.displayRegion.style;
            S.display = this.world.getItemCount() ? "block" : "none", S.top = w.y.toFixed(2) + "px", S.left = w.x.toFixed(2) + "px";
            var C = E.x - w.x, b = E.y - w.y;
            S.width = Math.round(Math.max(C, 0)) + "px", S.height = Math.round(Math.max(b, 0)) + "px";
          }
        },
        // overrides Viewer.addTiledImage
        addTiledImage: function(a) {
          var h = this, c = a.originalTiledImage;
          delete a.original;
          var p = e.extend({}, a, {
            success: function(v) {
              var w = v.item;
              w._originalForNavigator = c, h._matchBounds(w, c, !0), h._matchOpacity(w, c), h._matchCompositeOperation(w, c);
              function E() {
                h._matchBounds(w, c);
              }
              function _() {
                h._matchOpacity(w, c);
              }
              function S() {
                h._matchCompositeOperation(w, c);
              }
              c.addHandler("bounds-change", E), c.addHandler("clip-change", E), c.addHandler("opacity-change", _), c.addHandler("composite-operation-change", S);
            }
          });
          return e.Viewer.prototype.addTiledImage.apply(this, [p]);
        },
        destroy: function() {
          return e.Viewer.prototype.destroy.apply(this);
        },
        // private
        _getMatchingItem: function(a) {
          for (var h = this.world.getItemCount(), c, p = 0; p < h; p++)
            if (c = this.world.getItemAt(p), c._originalForNavigator === a)
              return c;
          return null;
        },
        // private
        _matchBounds: function(a, h, c) {
          var p = h.getBoundsNoRotate();
          a.setPosition(p.getTopLeft(), c), a.setWidth(p.width, c), a.setRotation(h.getRotation(), c), a.setClip(h.getClip()), a.setFlip(h.getFlip());
        },
        // private
        _matchOpacity: function(a, h) {
          a.setOpacity(h.opacity);
        },
        // private
        _matchCompositeOperation: function(a, h) {
          a.setCompositeOperation(h.compositeOperation);
        }
      }
    );
    function t(a) {
      var h = {
        tracker: a.eventSource,
        position: a.position,
        quick: a.quick,
        shift: a.shift,
        originalEvent: a.originalEvent,
        preventDefaultAction: !1
      };
      if (this.viewer.raiseEvent("navigator-click", h), !h.preventDefaultAction && a.quick && this.viewer.viewport && (this.panVertical || this.panHorizontal)) {
        this.viewer.viewport.flipped && (a.position.x = this.viewport.getContainerSize().x - a.position.x);
        var c = this.viewport.pointFromPixel(a.position);
        this.panVertical ? this.panHorizontal || (c.x = this.viewer.viewport.getCenter(!0).x) : c.y = this.viewer.viewport.getCenter(!0).y, this.viewer.viewport.panTo(c), this.viewer.viewport.applyConstraints();
      }
    }
    function i(a) {
      var h = {
        tracker: a.eventSource,
        position: a.position,
        delta: a.delta,
        speed: a.speed,
        direction: a.direction,
        shift: a.shift,
        originalEvent: a.originalEvent,
        preventDefaultAction: !1
      };
      this.viewer.raiseEvent("navigator-drag", h), !h.preventDefaultAction && this.viewer.viewport && (this.panHorizontal || (a.delta.x = 0), this.panVertical || (a.delta.y = 0), this.viewer.viewport.flipped && (a.delta.x = -a.delta.x), this.viewer.viewport.panBy(
        this.viewport.deltaPointsFromPixels(
          a.delta
        )
      ), this.viewer.constrainDuringPan && this.viewer.viewport.applyConstraints());
    }
    function r(a) {
      a.insideElementPressed && this.viewer.viewport && this.viewer.viewport.applyConstraints();
    }
    function l(a) {
      var h = {
        tracker: a.eventSource,
        position: a.position,
        scroll: a.scroll,
        shift: a.shift,
        originalEvent: a.originalEvent,
        preventDefault: a.preventDefault
      };
      this.viewer.raiseEvent("navigator-scroll", h), a.preventDefault = h.preventDefault;
    }
    function s(a, h) {
      o(a, "rotate(" + h + "deg)");
    }
    function o(a, h) {
      a.style.webkitTransform = h, a.style.mozTransform = h, a.style.msTransform = h, a.style.oTransform = h, a.style.transform = h;
    }
  }(n), function(e) {
    var t = {
      Errors: {
        Dzc: "Sorry, we don't support Deep Zoom Collections!",
        Dzi: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
        Xml: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
        ImageFormat: "Sorry, we don't support {0}-based Deep Zoom Images.",
        Security: "It looks like a security restriction stopped us from loading this Deep Zoom Image.",
        Status: "This space unintentionally left blank ({0} {1}).",
        OpenFailed: "Unable to open {0}: {1}"
      },
      Tooltips: {
        FullPage: "Toggle full page",
        Home: "Go home",
        ZoomIn: "Zoom in",
        ZoomOut: "Zoom out",
        NextPage: "Next page",
        PreviousPage: "Previous page",
        RotateLeft: "Rotate left",
        RotateRight: "Rotate right",
        Flip: "Flip Horizontally"
      }
    };
    e.extend(
      e,
      /** @lends OpenSeadragon */
      {
        /**
         * @function
         * @param {String} property
         */
        getString: function(i) {
          var r = i.split("."), l = null, s = arguments, o = t, a;
          for (a = 0; a < r.length - 1; a++)
            o = o[r[a]] || {};
          return l = o[r[a]], typeof l != "string" && (e.console.error("Untranslated source string:", i), l = ""), l.replace(/\{\d+\}/g, function(h) {
            var c = parseInt(h.match(/\d+/), 10) + 1;
            return c < s.length ? s[c] : "";
          });
        },
        /**
         * @function
         * @param {String} property
         * @param {*} value
         */
        setString: function(i, r) {
          var l = i.split("."), s = t, o;
          for (o = 0; o < l.length - 1; o++)
            s[l[o]] || (s[l[o]] = {}), s = s[l[o]];
          s[l[o]] = r;
        }
      }
    );
  }(n), function(e) {
    e.Point = function(t, i) {
      this.x = typeof t == "number" ? t : 0, this.y = typeof i == "number" ? i : 0;
    }, e.Point.prototype = {
      /**
       * @function
       * @returns {OpenSeadragon.Point} a duplicate of this Point
       */
      clone: function() {
        return new e.Point(this.x, this.y);
      },
      /**
       * Add another Point to this point and return a new Point.
       * @function
       * @param {OpenSeadragon.Point} point The point to add vector components.
       * @returns {OpenSeadragon.Point} A new point representing the sum of the
       *  vector components
       */
      plus: function(t) {
        return new e.Point(
          this.x + t.x,
          this.y + t.y
        );
      },
      /**
       * Subtract another Point to this point and return a new Point.
       * @function
       * @param {OpenSeadragon.Point} point The point to subtract vector components.
       * @returns {OpenSeadragon.Point} A new point representing the subtraction of the
       *  vector components
       */
      minus: function(t) {
        return new e.Point(
          this.x - t.x,
          this.y - t.y
        );
      },
      /**
       * Multiply this point by a factor and return a new Point.
       * @function
       * @param {Number} factor The factor to multiply vector components.
       * @returns {OpenSeadragon.Point} A new point representing the multiplication
       *  of the vector components by the factor
       */
      times: function(t) {
        return new e.Point(
          this.x * t,
          this.y * t
        );
      },
      /**
       * Divide this point by a factor and return a new Point.
       * @function
       * @param {Number} factor The factor to divide vector components.
       * @returns {OpenSeadragon.Point} A new point representing the division of the
       *  vector components by the factor
       */
      divide: function(t) {
        return new e.Point(
          this.x / t,
          this.y / t
        );
      },
      /**
       * Compute the opposite of this point and return a new Point.
       * @function
       * @returns {OpenSeadragon.Point} A new point representing the opposite of the
       *  vector components
       */
      negate: function() {
        return new e.Point(-this.x, -this.y);
      },
      /**
       * Compute the distance between this point and another point.
       * @function
       * @param {OpenSeadragon.Point} point The point to compute the distance with.
       * @returns {Number} The distance between the 2 points
       */
      distanceTo: function(t) {
        return Math.sqrt(
          Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2)
        );
      },
      /**
       * Compute the squared distance between this point and another point.
       * Useful for optimizing things like comparing distances.
       * @function
       * @param {OpenSeadragon.Point} point The point to compute the squared distance with.
       * @returns {Number} The squared distance between the 2 points
       */
      squaredDistanceTo: function(t) {
        return Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2);
      },
      /**
       * Apply a function to each coordinate of this point and return a new point.
       * @function
       * @param {function} func The function to apply to each coordinate.
       * @returns {OpenSeadragon.Point} A new point with the coordinates computed
       * by the specified function
       */
      apply: function(t) {
        return new e.Point(t(this.x), t(this.y));
      },
      /**
       * Check if this point is equal to another one.
       * @function
       * @param {OpenSeadragon.Point} point The point to compare this point with.
       * @returns {Boolean} true if they are equal, false otherwise.
       */
      equals: function(t) {
        return t instanceof e.Point && this.x === t.x && this.y === t.y;
      },
      /**
       * Rotates the point around the specified pivot
       * From http://stackoverflow.com/questions/4465931/rotate-rectangle-around-a-point
       * @function
       * @param {Number} degress to rotate around the pivot.
       * @param {OpenSeadragon.Point} [pivot=(0,0)] Point around which to rotate.
       * Defaults to the origin.
       * @returns {OpenSeadragon.Point}. A new point representing the point rotated around the specified pivot
       */
      rotate: function(t, i) {
        i = i || new e.Point(0, 0);
        var r, l;
        if (t % 90 === 0) {
          var s = e.positiveModulo(t, 360);
          switch (s) {
            case 0:
              r = 1, l = 0;
              break;
            case 90:
              r = 0, l = 1;
              break;
            case 180:
              r = -1, l = 0;
              break;
            case 270:
              r = 0, l = -1;
              break;
          }
        } else {
          var o = t * Math.PI / 180;
          r = Math.cos(o), l = Math.sin(o);
        }
        var a = r * (this.x - i.x) - l * (this.y - i.y) + i.x, h = l * (this.x - i.x) + r * (this.y - i.y) + i.y;
        return new e.Point(a, h);
      },
      /**
       * Convert this point to a string in the format (x,y) where x and y are
       * rounded to the nearest integer.
       * @function
       * @returns {String} A string representation of this point.
       */
      toString: function() {
        return "(" + Math.round(this.x * 100) / 100 + "," + Math.round(this.y * 100) / 100 + ")";
      }
    };
  }(n), function(e) {
    e.TileSource = function(i, r, l, s, o, a) {
      var h = this, c = arguments, p, v;
      if (e.isPlainObject(i) ? p = i : p = {
        width: c[0],
        height: c[1],
        tileSize: c[2],
        tileOverlap: c[3],
        minLevel: c[4],
        maxLevel: c[5]
      }, e.EventSource.call(this), e.extend(!0, this, p), !this.success) {
        for (v = 0; v < arguments.length; v++)
          if (e.isFunction(arguments[v])) {
            this.success = arguments[v];
            break;
          }
      }
      this.success && this.addHandler("ready", function(w) {
        h.success(w);
      }), e.type(arguments[0]) === "string" && (this.url = arguments[0]), this.url ? (this.aspectRatio = 1, this.dimensions = new e.Point(10, 10), this._tileWidth = 0, this._tileHeight = 0, this.tileOverlap = 0, this.minLevel = 0, this.maxLevel = 0, this.ready = !1, this.getImageInfo(this.url)) : (this.ready = !0, this.aspectRatio = p.width && p.height ? p.width / p.height : 1, this.dimensions = new e.Point(p.width, p.height), this.tileSize ? (this._tileWidth = this._tileHeight = this.tileSize, delete this.tileSize) : (this.tileWidth ? (this._tileWidth = this.tileWidth, delete this.tileWidth) : this._tileWidth = 0, this.tileHeight ? (this._tileHeight = this.tileHeight, delete this.tileHeight) : this._tileHeight = 0), this.tileOverlap = p.tileOverlap ? p.tileOverlap : 0, this.minLevel = p.minLevel ? p.minLevel : 0, this.maxLevel = p.maxLevel !== void 0 && p.maxLevel !== null ? p.maxLevel : p.width && p.height ? Math.ceil(
        Math.log(Math.max(p.width, p.height)) / Math.log(2)
      ) : 0, this.success && e.isFunction(this.success) && this.success(this));
    }, e.TileSource.prototype = {
      getTileSize: function(i) {
        return e.console.error(
          "[TileSource.getTileSize] is deprecated. Use TileSource.getTileWidth() and TileSource.getTileHeight() instead"
        ), this._tileWidth;
      },
      /**
       * Return the tileWidth for a given level.
       * Subclasses should override this if tileWidth can be different at different levels
       *   such as in IIIFTileSource.  Code should use this function rather than reading
       *   from ._tileWidth directly.
       * @function
       * @param {Number} level
       */
      getTileWidth: function(i) {
        return this._tileWidth ? this._tileWidth : this.getTileSize(i);
      },
      /**
       * Return the tileHeight for a given level.
       * Subclasses should override this if tileHeight can be different at different levels
       *   such as in IIIFTileSource.  Code should use this function rather than reading
       *   from ._tileHeight directly.
       * @function
       * @param {Number} level
       */
      getTileHeight: function(i) {
        return this._tileHeight ? this._tileHeight : this.getTileSize(i);
      },
      /**
       * Set the maxLevel to the given level, and perform the memoization of
       * getLevelScale with the new maxLevel. This function can be useful if the
       * memoization is required before the first call of getLevelScale, or both
       * memoized getLevelScale and maxLevel should be changed accordingly.
       * @function
       * @param {Number} level
       */
      setMaxLevel: function(i) {
        this.maxLevel = i, this._memoizeLevelScale();
      },
      /**
       * @function
       * @param {Number} level
       */
      getLevelScale: function(i) {
        return this._memoizeLevelScale(), this.getLevelScale(i);
      },
      // private
      _memoizeLevelScale: function() {
        var i = {}, r;
        for (r = 0; r <= this.maxLevel; r++)
          i[r] = 1 / Math.pow(2, this.maxLevel - r);
        this.getLevelScale = function(l) {
          return i[l];
        };
      },
      /**
       * @function
       * @param {Number} level
       */
      getNumTiles: function(i) {
        var r = this.getLevelScale(i), l = Math.ceil(r * this.dimensions.x / this.getTileWidth(i)), s = Math.ceil(r * this.dimensions.y / this.getTileHeight(i));
        return new e.Point(l, s);
      },
      /**
       * @function
       * @param {Number} level
       */
      getPixelRatio: function(i) {
        var r = this.dimensions.times(this.getLevelScale(i)), l = 1 / r.x * e.pixelDensityRatio, s = 1 / r.y * e.pixelDensityRatio;
        return new e.Point(l, s);
      },
      /**
       * @function
       * @returns {Number} The highest level in this tile source that can be contained in a single tile.
       */
      getClosestLevel: function() {
        var i, r;
        for (i = this.minLevel + 1; i <= this.maxLevel && (r = this.getNumTiles(i), !(r.x > 1 || r.y > 1)); i++)
          ;
        return i - 1;
      },
      /**
       * @function
       * @param {Number} level
       * @param {OpenSeadragon.Point} point
       */
      getTileAtPoint: function(i, r) {
        var l = r.x >= 0 && r.x <= 1 && r.y >= 0 && r.y <= 1 / this.aspectRatio;
        e.console.assert(l, "[TileSource.getTileAtPoint] must be called with a valid point.");
        var s = this.dimensions.x * this.getLevelScale(i), o = r.x * s, a = r.y * s, h = Math.floor(o / this.getTileWidth(i)), c = Math.floor(a / this.getTileHeight(i));
        r.x >= 1 && (h = this.getNumTiles(i).x - 1);
        var p = 1e-15;
        return r.y >= 1 / this.aspectRatio - p && (c = this.getNumTiles(i).y - 1), new e.Point(h, c);
      },
      /**
       * @function
       * @param {Number} level
       * @param {Number} x
       * @param {Number} y
       * @param {Boolean} [isSource=false] Whether to return the source bounds of the tile.
       * @returns {OpenSeadragon.Rect} Either where this tile fits (in normalized coordinates) or the
       * portion of the tile to use as the source of the drawing operation (in pixels), depending on
       * the isSource parameter.
       */
      getTileBounds: function(i, r, l, s) {
        var o = this.dimensions.times(this.getLevelScale(i)), a = this.getTileWidth(i), h = this.getTileHeight(i), c = r === 0 ? 0 : a * r - this.tileOverlap, p = l === 0 ? 0 : h * l - this.tileOverlap, v = a + (r === 0 ? 1 : 2) * this.tileOverlap, w = h + (l === 0 ? 1 : 2) * this.tileOverlap, E = 1 / o.x;
        return v = Math.min(v, o.x - c), w = Math.min(w, o.y - p), s ? new e.Rect(0, 0, v, w) : new e.Rect(c * E, p * E, v * E, w * E);
      },
      /**
       * Responsible for retrieving, and caching the
       * image metadata pertinent to this TileSources implementation.
       * @function
       * @param {String} url
       * @throws {Error}
       */
      getImageInfo: function(i) {
        var r = this, l, s, o, a, h, c, p;
        i && (h = i.split("/"), c = h[h.length - 1], p = c.lastIndexOf("."), p > -1 && (h[h.length - 1] = c.slice(0, p)));
        var v = null;
        if (this.splitHashDataForPost) {
          var w = i.indexOf("#");
          w !== -1 && (v = i.substring(w + 1), i = i.substr(0, w));
        }
        s = function(E) {
          typeof E == "string" && (E = e.parseXml(E));
          var _ = e.TileSource.determineType(r, E, i);
          if (!_) {
            r.raiseEvent("open-failed", { message: "Unable to load TileSource", source: i });
            return;
          }
          a = _.prototype.configure.apply(r, [E, i, v]), a.ajaxWithCredentials === void 0 && (a.ajaxWithCredentials = r.ajaxWithCredentials), o = new _(a), r.ready = !0, r.raiseEvent("ready", { tileSource: o });
        }, i.match(/\.js$/) ? (l = i.split("/").pop().replace(".js", ""), e.jsonp({
          url: i,
          async: !1,
          callbackName: l,
          callback: s
        })) : e.makeAjaxRequest({
          url: i,
          postData: v,
          withCredentials: this.ajaxWithCredentials,
          headers: this.ajaxHeaders,
          success: function(E) {
            var _ = t(E);
            s(_);
          },
          error: function(E, _) {
            var S;
            try {
              S = "HTTP " + E.status + " attempting to load TileSource: " + i;
            } catch {
              var C;
              typeof _ > "u" || !_.toString ? C = "Unknown error" : C = _.toString(), S = C + " attempting to load TileSource: " + i;
            }
            e.console.error(S), r.raiseEvent("open-failed", {
              message: S,
              source: i,
              postData: v
            });
          }
        });
      },
      /**
       * Responsible determining if a the particular TileSource supports the
       * data format ( and allowed to apply logic against the url the data was
       * loaded from, if any ). Overriding implementations are expected to do
       * something smart with data and / or url to determine support.  Also
       * understand that iteration order of TileSources is not guarunteed so
       * please make sure your data or url is expressive enough to ensure a simple
       * and sufficient mechanisim for clear determination.
       * @function
       * @param {String|Object|Array|Document} data
       * @param {String} url - the url the data was loaded
       *      from if any.
       * @returns {Boolean}
       */
      supports: function(i, r) {
        return !1;
      },
      /**
       * Responsible for parsing and configuring the
       * image metadata pertinent to this TileSources implementation.
       * This method is not implemented by this class other than to throw an Error
       * announcing you have to implement it.  Because of the variety of tile
       * server technologies, and various specifications for building image
       * pyramids, this method is here to allow easy integration.
       * @function
       * @param {String|Object|Array|Document} data
       * @param {String} url - the url the data was loaded
       *      from if any.
       * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null value obtained from
       *      the protocol URL after '#' sign if flag splitHashDataForPost set to 'true'
       * @returns {Object} options - A dictionary of keyword arguments sufficient
       *      to configure the tile source constructor (include all values you want to
       *      instantiate the TileSource subclass with - what _options_ object should contain).
       * @throws {Error}
       */
      configure: function(i, r, l) {
        throw new Error("Method not implemented.");
      },
      /**
       * Responsible for retrieving the url which will return an image for the
       * region specified by the given x, y, and level components.
       * This method is not implemented by this class other than to throw an Error
       * announcing you have to implement it.  Because of the variety of tile
       * server technologies, and various specifications for building image
       * pyramids, this method is here to allow easy integration.
       * @function
       * @param {Number} level
       * @param {Number} x
       * @param {Number} y
       * @returns {String|Function} url - A string for the url or a function that returns a url string.
       * @throws {Error}
       */
      getTileUrl: function(i, r, l) {
        throw new Error("Method not implemented.");
      },
      /**
       * Must use AJAX in order to work, i.e. loadTilesWithAjax = true is set.
       * If a value is returned, ajax issues POST request to the tile url.
       * If null is returned, ajax issues GET request.
       * The return value must comply to the header 'content type'.
       *
       * Examples (USED HEADER --> getTilePostData CODE):
       * 'Content-type': 'application/x-www-form-urlencoded' -->
       *   return "key1=value=1&key2=value2";
       *
       * 'Content-type': 'application/x-www-form-urlencoded' -->
       *   return JSON.stringify({key: "value", number: 5});
       *
       * 'Content-type': 'multipart/form-data' -->
       *   let result = new FormData();
       *   result.append("data", myData);
       *   return result;
       *
       * IMPORTANT: in case you move all the logic on image fetching
       * to post data, you must re-define 'getTileHashKey(...)' to
       * stay unique for different tile images.
       *
       * @param {Number} level
       * @param {Number} x
       * @param {Number} y
       * @returns {*|null} post data to send with tile configuration request
       */
      getTilePostData: function(i, r, l) {
        return null;
      },
      /**
       * Responsible for retrieving the headers which will be attached to the image request for the
       * region specified by the given x, y, and level components.
       * This option is only relevant if {@link OpenSeadragon.Options}.loadTilesWithAjax is set to true.
       * The headers returned here will override headers specified at the Viewer or TiledImage level.
       * Specifying a falsy value for a header will clear its existing value set at the Viewer or
       * TiledImage level (if any).
       *
       * Note that the headers of existing tiles don't automatically change when this function
       * returns updated headers. To do that, you need to call {@link OpenSeadragon.Viewer#setAjaxHeaders}
       * and propagate the changes.
       *
       * @function
       * @param {Number} level
       * @param {Number} x
       * @param {Number} y
       * @returns {Object}
       */
      getTileAjaxHeaders: function(i, r, l) {
        return {};
      },
      /**
       * The tile cache object is uniquely determined by this key and used to lookup
       * the image data in cache: keys should be different if images are different.
       *
       * In case a tile has context2D property defined (TileSource.prototype.getContext2D)
       * or its context2D is set manually; the cache is not used and this function
       * is irrelevant.
       * Note: default behaviour does not take into account post data.
       * @param {Number} level tile level it was fetched with
       * @param {Number} x x-coordinate in the pyramid level
       * @param {Number} y y-coordinate in the pyramid level
       * @param {String} url the tile was fetched with
       * @param {Object} ajaxHeaders the tile was fetched with
       * @param {*} postData data the tile was fetched with (type depends on getTilePostData(..) return type)
       */
      getTileHashKey: function(i, r, l, s, o, a) {
        function h(c) {
          return o ? c + "+" + JSON.stringify(o) : c;
        }
        return h(typeof s != "string" ? i + "/" + r + "_" + l : s);
      },
      /**
       * @function
       * @param {Number} level
       * @param {Number} x
       * @param {Number} y
       */
      tileExists: function(i, r, l) {
        var s = this.getNumTiles(i);
        return i >= this.minLevel && i <= this.maxLevel && r >= 0 && l >= 0 && r < s.x && l < s.y;
      },
      /**
       * Decide whether tiles have transparency: this is crucial for correct images blending.
       * @returns {boolean} true if the image has transparency
       */
      hasTransparency: function(i, r, l, s) {
        return !!i || r.match(".png");
      },
      /**
       * Download tile data.
       * Note that if you override this function, you should override also downloadTileAbort().
       * @param {ImageJob} context job context that you have to call finish(...) on.
       * @param {String} [context.src] - URL of image to download.
       * @param {String} [context.loadWithAjax] - Whether to load this image with AJAX.
       * @param {String} [context.ajaxHeaders] - Headers to add to the image request if using AJAX.
       * @param {Boolean} [context.ajaxWithCredentials] - Whether to set withCredentials on AJAX requests.
       * @param {String} [context.crossOriginPolicy] - CORS policy to use for downloads
       * @param {String} [context.postData] - HTTP POST data (usually but not necessarily in k=v&k2=v2... form,
       *   see TileSource::getPostData) or null
       * @param {*} [context.userData] - Empty object to attach your own data and helper variables to.
       * @param {Function} [context.finish] - Should be called unless abort() was executed, e.g. on all occasions,
       *   be it successful or unsuccessful request.
       *   Usage: context.finish(data, request, errMessage). Pass the downloaded data object or null upon failure.
       *   Add also reference to an ajax request if used. Provide error message in case of failure.
       * @param {Function} [context.abort] - Called automatically when the job times out.
       *   Usage: context.abort().
       * @param {Function} [context.callback] @private - Called automatically once image has been downloaded
       *   (triggered by finish).
       * @param {Number} [context.timeout] @private - The max number of milliseconds that
       *   this image job may take to complete.
       * @param {string} [context.errorMsg] @private - The final error message, default null (set by finish).
       */
      downloadTileStart: function(i) {
        var r = i.userData, l = new Image();
        r.image = l, r.request = null;
        var s = function(o) {
          if (!l) {
            i.finish(null, r.request, "Image load failed: undefined Image instance.");
            return;
          }
          l.onload = l.onerror = l.onabort = null, i.finish(o ? null : l, r.request, o);
        };
        l.onload = function() {
          s();
        }, l.onabort = l.onerror = function() {
          s("Image load aborted.");
        }, i.loadWithAjax ? r.request = e.makeAjaxRequest({
          url: i.src,
          withCredentials: i.ajaxWithCredentials,
          headers: i.ajaxHeaders,
          responseType: "arraybuffer",
          postData: i.postData,
          success: function(o) {
            var a;
            try {
              a = new window.Blob([o.response]);
            } catch (p) {
              var h = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
              if (p.name === "TypeError" && h) {
                var c = new h();
                c.append(o.response), a = c.getBlob();
              }
            }
            a.size === 0 ? s("Empty image response.") : l.src = (window.URL || window.webkitURL).createObjectURL(a);
          },
          error: function(o) {
            s("Image load aborted - XHR error");
          }
        }) : (i.crossOriginPolicy !== !1 && (l.crossOrigin = i.crossOriginPolicy), l.src = i.src);
      },
      /**
       * Provide means of aborting the execution.
       * Note that if you override this function, you should override also downloadTileStart().
       * @param {ImageJob} context job, the same object as with downloadTileStart(..)
       * @param {*} [context.userData] - Empty object to attach (and mainly read) your own data.
       */
      downloadTileAbort: function(i) {
        i.userData.request && i.userData.request.abort();
        var r = i.userData.image;
        i.userData.image && (r.onload = r.onerror = r.onabort = null);
      },
      /**
       * Create cache object from the result of the download process. The
       * cacheObject parameter should be used to attach the data to, there are no
       * conventions on how it should be stored - all the logic is implemented within *TileCache() functions.
       *
       * Note that if you override any of *TileCache() functions, you should override all of them.
       * @param {object} cacheObject context cache object
       * @param {*} data image data, the data sent to ImageJob.prototype.finish(), by default an Image object
       * @param {Tile} tile instance the cache was created with
       */
      createTileCache: function(i, r, l) {
        i._data = r;
      },
      /**
       * Cache object destructor, unset all properties you created to allow GC collection.
       * Note that if you override any of *TileCache() functions, you should override all of them.
       * @param {object} cacheObject context cache object
       */
      destroyTileCache: function(i) {
        i._data = null, i._renderedContext = null;
      },
      /**
       * Raw data getter
       * Note that if you override any of *TileCache() functions, you should override all of them.
       * @param {object} cacheObject context cache object
       * @returns {*} cache data
       */
      getTileCacheData: function(i) {
        return i._data;
      },
      /**
       * Compatibility image element getter
       *  - plugins might need image representation of the data
       *  - div HTML rendering relies on image element presence
       * Note that if you override any of *TileCache() functions, you should override all of them.
       *  @param {object} cacheObject context cache object
       *  @returns {Image} cache data as an Image
       */
      getTileCacheDataAsImage: function(i) {
        return i._data;
      },
      /**
       * Compatibility context 2D getter
       *  - most heavily used rendering method is a canvas-based approach,
       *    convert the data to a canvas and return it's 2D context
       * Note that if you override any of *TileCache() functions, you should override all of them.
       * @param {object} cacheObject context cache object
       * @returns {CanvasRenderingContext2D} context of the canvas representation of the cache data
       */
      getTileCacheDataAsContext2D: function(i) {
        if (!i._renderedContext) {
          var r = document.createElement("canvas");
          r.width = i._data.width, r.height = i._data.height, i._renderedContext = r.getContext("2d"), i._renderedContext.drawImage(i._data, 0, 0), i._data = null;
        }
        return i._renderedContext;
      }
    }, e.extend(!0, e.TileSource.prototype, e.EventSource.prototype);
    function t(i) {
      var r = i.responseText, l = i.status, s, o;
      if (i) {
        if (i.status !== 200 && i.status !== 0)
          throw l = i.status, s = l === 404 ? "Not Found" : i.statusText, new Error(e.getString("Errors.Status", l, s));
      } else
        throw new Error(e.getString("Errors.Security"));
      if (r.match(/^\s*<.*/))
        try {
          o = i.responseXML && i.responseXML.documentElement ? i.responseXML : e.parseXml(r);
        } catch {
          o = i.responseText;
        }
      else if (r.match(/\s*[{[].*/))
        try {
          o = e.parseJSON(r);
        } catch {
          o = r;
        }
      else
        o = r;
      return o;
    }
    e.TileSource.determineType = function(i, r, l) {
      var s;
      for (s in n)
        if (s.match(/.+TileSource$/) && e.isFunction(n[s]) && e.isFunction(n[s].prototype.supports) && n[s].prototype.supports.call(i, r, l))
          return n[s];
      return e.console.error("No TileSource was able to open %s %s", l, r), null;
    };
  }(n), function(e) {
    e.DziTileSource = function(r, l, s, o, a, h, c, p, v) {
      var w, E, _, S;
      if (e.isPlainObject(r) ? S = r : S = {
        width: arguments[0],
        height: arguments[1],
        tileSize: arguments[2],
        tileOverlap: arguments[3],
        tilesUrl: arguments[4],
        fileFormat: arguments[5],
        displayRects: arguments[6],
        minLevel: arguments[7],
        maxLevel: arguments[8]
      }, this._levelRects = {}, this.tilesUrl = S.tilesUrl, this.fileFormat = S.fileFormat, this.displayRects = S.displayRects, this.displayRects)
        for (w = this.displayRects.length - 1; w >= 0; w--)
          for (E = this.displayRects[w], _ = E.minLevel; _ <= E.maxLevel; _++)
            this._levelRects[_] || (this._levelRects[_] = []), this._levelRects[_].push(E);
      e.TileSource.apply(this, [S]);
    }, e.extend(
      e.DziTileSource.prototype,
      e.TileSource.prototype,
      /** @lends OpenSeadragon.DziTileSource.prototype */
      {
        /**
         * Determine if the data and/or url imply the image service is supported by
         * this tile source.
         * @function
         * @param {Object|Array} data
         * @param {String} optional - url
         */
        supports: function(r, l) {
          var s;
          return r.Image ? s = r.Image.xmlns : r.documentElement && (r.documentElement.localName === "Image" || r.documentElement.tagName === "Image") && (s = r.documentElement.namespaceURI), s = (s || "").toLowerCase(), s.indexOf("schemas.microsoft.com/deepzoom/2008") !== -1 || s.indexOf("schemas.microsoft.com/deepzoom/2009") !== -1;
        },
        /**
         *
         * @function
         * @param {Object|XMLDocument} data - the raw configuration
         * @param {String} url - the url the data was retrieved from if any.
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
         * @returns {Object} options - A dictionary of keyword arguments sufficient
         *      to configure this tile sources constructor.
         */
        configure: function(r, l, s) {
          var o;
          return e.isPlainObject(r) ? o = i(this, r) : o = t(this, r), l && !o.tilesUrl && (o.tilesUrl = l.replace(
            /([^/]+?)(\.(dzi|xml|js)?(\?[^/]*)?)?\/?$/,
            "$1_files/"
          ), l.search(/\.(dzi|xml|js)\?/) !== -1 ? o.queryParams = l.match(/\?.*/) : o.queryParams = ""), o;
        },
        /**
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         */
        getTileUrl: function(r, l, s) {
          return [this.tilesUrl, r, "/", l, "_", s, ".", this.fileFormat, this.queryParams].join("");
        },
        /**
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         */
        tileExists: function(r, l, s) {
          var o = this._levelRects[r], a, h, c, p, v, w, E;
          if (this.minLevel && r < this.minLevel || this.maxLevel && r > this.maxLevel)
            return !1;
          if (!o || !o.length)
            return !0;
          for (E = o.length - 1; E >= 0; E--)
            if (a = o[E], !(r < a.minLevel || r > a.maxLevel) && (h = this.getLevelScale(r), c = a.x * h, p = a.y * h, v = c + a.width * h, w = p + a.height * h, c = Math.floor(c / this._tileWidth), p = Math.floor(p / this._tileWidth), v = Math.ceil(v / this._tileWidth), w = Math.ceil(w / this._tileWidth), c <= l && l < v && p <= s && s < w))
              return !0;
          return !1;
        }
      }
    );
    function t(r, l) {
      if (!l || !l.documentElement)
        throw new Error(e.getString("Errors.Xml"));
      var s = l.documentElement, o = s.localName || s.tagName, a = l.documentElement.namespaceURI, h = null, c = [], p, v, w, E, _;
      if (o === "Image")
        try {
          if (E = s.getElementsByTagName("Size")[0], E === void 0 && (E = s.getElementsByTagNameNS(a, "Size")[0]), h = {
            Image: {
              xmlns: "http://schemas.microsoft.com/deepzoom/2008",
              Url: s.getAttribute("Url"),
              Format: s.getAttribute("Format"),
              DisplayRect: null,
              Overlap: parseInt(s.getAttribute("Overlap"), 10),
              TileSize: parseInt(s.getAttribute("TileSize"), 10),
              Size: {
                Height: parseInt(E.getAttribute("Height"), 10),
                Width: parseInt(E.getAttribute("Width"), 10)
              }
            }
          }, !e.imageFormatSupported(h.Image.Format))
            throw new Error(
              e.getString("Errors.ImageFormat", h.Image.Format.toUpperCase())
            );
          for (p = s.getElementsByTagName("DisplayRect"), p === void 0 && (p = s.getElementsByTagNameNS(a, "DisplayRect")[0]), _ = 0; _ < p.length; _++)
            v = p[_], w = v.getElementsByTagName("Rect")[0], w === void 0 && (w = v.getElementsByTagNameNS(a, "Rect")[0]), c.push({
              Rect: {
                X: parseInt(w.getAttribute("X"), 10),
                Y: parseInt(w.getAttribute("Y"), 10),
                Width: parseInt(w.getAttribute("Width"), 10),
                Height: parseInt(w.getAttribute("Height"), 10),
                MinLevel: parseInt(v.getAttribute("MinLevel"), 10),
                MaxLevel: parseInt(v.getAttribute("MaxLevel"), 10)
              }
            });
          return c.length && (h.Image.DisplayRect = c), i(r, h);
        } catch (b) {
          throw b instanceof Error ? b : new Error(e.getString("Errors.Dzi"));
        }
      else {
        if (o === "Collection")
          throw new Error(e.getString("Errors.Dzc"));
        if (o === "Error") {
          var S = s.getElementsByTagName("Message")[0], C = S.firstChild.nodeValue;
          throw new Error(C);
        }
      }
      throw new Error(e.getString("Errors.Dzi"));
    }
    function i(r, l) {
      var s = l.Image, o = s.Url, a = s.Format, h = s.Size, c = s.DisplayRect || [], p = parseInt(h.Width, 10), v = parseInt(h.Height, 10), w = parseInt(s.TileSize, 10), E = parseInt(s.Overlap, 10), _ = [], S, C;
      for (C = 0; C < c.length; C++)
        S = c[C].Rect, _.push(new e.DisplayRect(
          parseInt(S.X, 10),
          parseInt(S.Y, 10),
          parseInt(S.Width, 10),
          parseInt(S.Height, 10),
          parseInt(S.MinLevel, 10),
          parseInt(S.MaxLevel, 10)
        ));
      return e.extend(!0, {
        width: p,
        /* width *required */
        height: v,
        /* height *required */
        tileSize: w,
        /* tileSize *required */
        tileOverlap: E,
        /* tileOverlap *required */
        minLevel: null,
        /* minLevel */
        maxLevel: null,
        /* maxLevel */
        tilesUrl: o,
        /* tilesUrl */
        fileFormat: a,
        /* fileFormat */
        displayRects: _
        /* displayRects */
      }, l);
    }
  }(n), function(e) {
    e.IIIFTileSource = function(s) {
      if (e.extend(!0, this, s), this._id = this["@id"] || this.id || this.identifier || null, !(this.height && this.width && this._id))
        throw new Error("IIIF required parameters (width, height, or id) not provided.");
      if (s.tileSizePerScaleFactor = {}, this.tileFormat = this.tileFormat || "jpg", this.version = s.version, this.tile_width && this.tile_height)
        s.tileWidth = this.tile_width, s.tileHeight = this.tile_height;
      else if (this.tile_width)
        s.tileSize = this.tile_width;
      else if (this.tile_height)
        s.tileSize = this.tile_height;
      else if (this.tiles)
        if (this.tiles.length === 1)
          s.tileWidth = this.tiles[0].width, s.tileHeight = this.tiles[0].height || this.tiles[0].width, this.scale_factors = this.tiles[0].scaleFactors;
        else {
          this.scale_factors = [];
          for (var o = 0; o < this.tiles.length; o++)
            for (var a = 0; a < this.tiles[o].scaleFactors.length; a++) {
              var h = this.tiles[o].scaleFactors[a];
              this.scale_factors.push(h), s.tileSizePerScaleFactor[h] = {
                width: this.tiles[o].width,
                height: this.tiles[o].height || this.tiles[o].width
              };
            }
        }
      else if (t(s)) {
        for (var c = Math.min(this.height, this.width), p = [256, 512, 1024], v = [], w = 0; w < p.length; w++)
          p[w] <= c && v.push(p[w]);
        v.length > 0 ? s.tileSize = Math.max.apply(null, v) : s.tileSize = c;
      } else
        this.sizes && this.sizes.length > 0 ? (this.emulateLegacyImagePyramid = !0, s.levels = i(this), e.extend(!0, s, {
          width: s.levels[s.levels.length - 1].width,
          height: s.levels[s.levels.length - 1].height,
          tileSize: Math.max(s.height, s.width),
          tileOverlap: 0,
          minLevel: 0,
          maxLevel: s.levels.length - 1
        }), this.levels = s.levels) : e.console.error("Nothing in the info.json to construct image pyramids from");
      if (!s.maxLevel && !this.emulateLegacyImagePyramid)
        if (!this.scale_factors)
          s.maxLevel = Number(Math.round(Math.log(Math.max(this.width, this.height), 2)));
        else {
          var E = Math.max.apply(null, this.scale_factors);
          s.maxLevel = Math.round(Math.log(E) * Math.LOG2E);
        }
      if (this.sizes) {
        var _ = this.sizes.length;
        (_ === s.maxLevel || _ === s.maxLevel + 1) && (this.levelSizes = this.sizes, _ === s.maxLevel && this.levelSizes.push({ width: this.width, height: this.height }));
      }
      e.TileSource.apply(this, [s]);
    }, e.extend(
      e.IIIFTileSource.prototype,
      e.TileSource.prototype,
      /** @lends OpenSeadragon.IIIFTileSource.prototype */
      {
        /**
         * Determine if the data and/or url imply the image service is supported by
         * this tile source.
         * @function
         * @param {Object|Array} data
         * @param {String} [url] - url
         */
        supports: function(s, o) {
          return s.protocol && s.protocol === "http://iiif.io/api/image" || s["@context"] && (s["@context"] === "http://library.stanford.edu/iiif/image-api/1.1/context.json" || s["@context"] === "http://iiif.io/api/image/1/context.json") || s.profile && s.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html") === 0 || s.identifier && s.width && s.height ? !0 : !!(s.documentElement && s.documentElement.tagName === "info" && s.documentElement.namespaceURI === "http://library.stanford.edu/iiif/image-api/ns/");
        },
        /**
         * A static function used to prepare an incoming IIIF Image API info.json
         * response for processing by the tile handler. Normalizes data for all
         * versions of IIIF (1.0, 1.1, 2.x, 3.x) and returns a data object that
         * may be passed to the IIIFTileSource.
         *
         * @function
         * @static
         * @param {Object} data - the raw configuration
         * @param {String} url - the url configuration was retrieved from
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
         * @returns {Object} A normalized IIIF data object
         * @example <caption>IIIF 2.x Info Looks like this</caption>
         * {
         * "@context": "http://iiif.io/api/image/2/context.json",
         * "@id": "http://iiif.example.com/prefix/1E34750D-38DB-4825-A38A-B60A345E591C",
         * "protocol": "http://iiif.io/api/image",
         * "height": 1024,
         * "width": 775,
         * "tiles" : [{"width":256, "scaleFactors":[1,2,4,8]}],
         *  "profile": ["http://iiif.io/api/image/2/level1.json", {
         *    "qualities": [ "native", "bitonal", "grey", "color" ],
         *    "formats": [ "jpg", "png", "gif" ]
         *   }]
         * }
         */
        configure: function(s, o, a) {
          if (e.isPlainObject(s)) {
            if (!s["@context"])
              s["@context"] = "http://iiif.io/api/image/1.0/context.json", s["@id"] = o.replace("/info.json", ""), s.version = 1;
            else {
              var c = s["@context"];
              if (Array.isArray(c)) {
                for (var p = 0; p < c.length; p++)
                  if (typeof c[p] == "string" && (/^http:\/\/iiif\.io\/api\/image\/[1-3]\/context\.json$/.test(c[p]) || c[p] === "http://library.stanford.edu/iiif/image-api/1.1/context.json")) {
                    c = c[p];
                    break;
                  }
              }
              switch (c) {
                case "http://iiif.io/api/image/1/context.json":
                case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
                  s.version = 1;
                  break;
                case "http://iiif.io/api/image/2/context.json":
                  s.version = 2;
                  break;
                case "http://iiif.io/api/image/3/context.json":
                  s.version = 3;
                  break;
                default:
                  e.console.error("Data has a @context property which contains no known IIIF context URI.");
              }
            }
            if (s.preferredFormats) {
              for (var v = 0; v < s.preferredFormats.length; v++)
                if (n.imageFormatSupported(s.preferredFormats[v])) {
                  s.tileFormat = s.preferredFormats[v];
                  break;
                }
            }
            return s;
          } else {
            var h = r(s);
            return h["@context"] = "http://iiif.io/api/image/1.0/context.json", h["@id"] = o.replace("/info.xml", ""), h.version = 1, h;
          }
        },
        /**
         * Return the tileWidth for the given level.
         * @function
         * @param {Number} level
         */
        getTileWidth: function(s) {
          if (this.emulateLegacyImagePyramid)
            return e.TileSource.prototype.getTileWidth.call(this, s);
          var o = Math.pow(2, this.maxLevel - s);
          return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[o] ? this.tileSizePerScaleFactor[o].width : this._tileWidth;
        },
        /**
         * Return the tileHeight for the given level.
         * @function
         * @param {Number} level
         */
        getTileHeight: function(s) {
          if (this.emulateLegacyImagePyramid)
            return e.TileSource.prototype.getTileHeight.call(this, s);
          var o = Math.pow(2, this.maxLevel - s);
          return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[o] ? this.tileSizePerScaleFactor[o].height : this._tileHeight;
        },
        /**
         * @function
         * @param {Number} level
         */
        getLevelScale: function(s) {
          if (this.emulateLegacyImagePyramid) {
            var o = NaN;
            return this.levels.length > 0 && s >= this.minLevel && s <= this.maxLevel && (o = this.levels[s].width / this.levels[this.maxLevel].width), o;
          }
          return e.TileSource.prototype.getLevelScale.call(this, s);
        },
        /**
         * @function
         * @param {Number} level
         */
        getNumTiles: function(s) {
          if (this.emulateLegacyImagePyramid) {
            var o = this.getLevelScale(s);
            return o ? new e.Point(1, 1) : new e.Point(0, 0);
          }
          if (this.levelSizes) {
            var a = this.levelSizes[s], h = Math.ceil(a.width / this.getTileWidth(s)), c = Math.ceil(a.height / this.getTileHeight(s));
            return new e.Point(h, c);
          } else
            return e.TileSource.prototype.getNumTiles.call(this, s);
        },
        /**
         * @function
         * @param {Number} level
         * @param {OpenSeadragon.Point} point
         */
        getTileAtPoint: function(s, o) {
          if (this.emulateLegacyImagePyramid)
            return new e.Point(0, 0);
          if (this.levelSizes) {
            var a = o.x >= 0 && o.x <= 1 && o.y >= 0 && o.y <= 1 / this.aspectRatio;
            e.console.assert(a, "[TileSource.getTileAtPoint] must be called with a valid point.");
            var h = this.levelSizes[s].width, c = o.x * h, p = o.y * h, v = Math.floor(c / this.getTileWidth(s)), w = Math.floor(p / this.getTileHeight(s));
            o.x >= 1 && (v = this.getNumTiles(s).x - 1);
            var E = 1e-15;
            return o.y >= 1 / this.aspectRatio - E && (w = this.getNumTiles(s).y - 1), new e.Point(v, w);
          }
          return e.TileSource.prototype.getTileAtPoint.call(this, s, o);
        },
        /**
         * Responsible for retrieving the url which will return an image for the
         * region specified by the given x, y, and level components.
         * @function
         * @param {Number} level - z index
         * @param {Number} x
         * @param {Number} y
         * @throws {Error}
         */
        getTileUrl: function(s, o, a) {
          if (this.emulateLegacyImagePyramid) {
            var h = null;
            return this.levels.length > 0 && s >= this.minLevel && s <= this.maxLevel && (h = this.levels[s].url), h;
          }
          var c = "0", p = Math.pow(0.5, this.maxLevel - s), v, w, E, _, S, C, b, V, Z, K, Q, q, $, ne, oe, le;
          return this.levelSizes ? (v = this.levelSizes[s].width, w = this.levelSizes[s].height) : (v = Math.ceil(this.width * p), w = Math.ceil(this.height * p)), E = this.getTileWidth(s), _ = this.getTileHeight(s), S = Math.round(E / p), C = Math.round(_ / p), this.version === 1 ? oe = "native." + this.tileFormat : oe = "default." + this.tileFormat, v < E && w < _ ? (this.version === 2 && v === this.width ? q = "full" : this.version === 3 && v === this.width && w === this.height ? q = "max" : this.version === 3 ? q = v + "," + w : q = v + ",", b = "full") : (V = o * S, Z = a * C, K = Math.min(S, this.width - V), Q = Math.min(C, this.height - Z), o === 0 && a === 0 && K === this.width && Q === this.height ? b = "full" : b = [V, Z, K, Q].join(","), $ = Math.min(E, v - o * E), ne = Math.min(_, w - a * _), this.version === 2 && $ === this.width ? q = "full" : this.version === 3 && $ === this.width && ne === this.height ? q = "max" : this.version === 3 ? q = $ + "," + ne : q = $ + ","), le = [this._id, b, q, c, oe].join("/"), le;
        },
        __testonly__: {
          canBeTiled: t,
          constructLevels: i
        }
      }
    );
    function t(s) {
      var o = [
        "http://library.stanford.edu/iiif/image-api/compliance.html#level0",
        "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0",
        "http://iiif.io/api/image/2/level0.json",
        "level0",
        "https://iiif.io/api/image/3/level0.json"
      ], a = Array.isArray(s.profile) ? s.profile[0] : s.profile, h = o.indexOf(a) !== -1, c = !1;
      return s.version === 2 && s.profile.length > 1 && s.profile[1].supports && (c = s.profile[1].supports.indexOf("sizeByW") !== -1), s.version === 3 && s.extraFeatures && (c = s.extraFeatures.indexOf("sizeByWh") !== -1), !h || c;
    }
    function i(s) {
      for (var o = [], a = 0; a < s.sizes.length; a++)
        o.push({
          url: s._id + "/full/" + s.sizes[a].width + "," + (s.version === 3 ? s.sizes[a].height : "") + "/0/default." + s.tileFormat,
          width: s.sizes[a].width,
          height: s.sizes[a].height
        });
      return o.sort(function(h, c) {
        return h.width - c.width;
      });
    }
    function r(s) {
      if (!s || !s.documentElement)
        throw new Error(e.getString("Errors.Xml"));
      var o = s.documentElement, a = o.tagName, h = null;
      if (a === "info")
        try {
          return h = {}, l(o, h), h;
        } catch (c) {
          throw c instanceof Error ? c : new Error(e.getString("Errors.IIIF"));
        }
      throw new Error(e.getString("Errors.IIIF"));
    }
    function l(s, o, a) {
      var h, c;
      if (s.nodeType === 3 && a)
        c = s.nodeValue.trim(), c.match(/^\d*$/) && (c = Number(c)), o[a] ? (e.isArray(o[a]) || (o[a] = [o[a]]), o[a].push(c)) : o[a] = c;
      else if (s.nodeType === 1)
        for (h = 0; h < s.childNodes.length; h++)
          l(s.childNodes[h], o, s.nodeName);
    }
  }(n), function(e) {
    e.OsmTileSource = function(t, i, r, l, s) {
      var o;
      e.isPlainObject(t) ? o = t : o = {
        width: arguments[0],
        height: arguments[1],
        tileSize: arguments[2],
        tileOverlap: arguments[3],
        tilesUrl: arguments[4]
      }, (!o.width || !o.height) && (o.width = 65572864, o.height = 65572864), o.tileSize || (o.tileSize = 256, o.tileOverlap = 0), o.tilesUrl || (o.tilesUrl = "http://tile.openstreetmap.org/"), o.minLevel = 8, e.TileSource.apply(this, [o]);
    }, e.extend(
      e.OsmTileSource.prototype,
      e.TileSource.prototype,
      /** @lends OpenSeadragon.OsmTileSource.prototype */
      {
        /**
         * Determine if the data and/or url imply the image service is supported by
         * this tile source.
         * @function
         * @param {Object|Array} data
         * @param {String} optional - url
         */
        supports: function(t, i) {
          return t.type && t.type === "openstreetmaps";
        },
        /**
         *
         * @function
         * @param {Object} data - the raw configuration
         * @param {String} url - the url the data was retrieved from if any.
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
         * @returns {Object} options - A dictionary of keyword arguments sufficient
         *      to configure this tile sources constructor.
         */
        configure: function(t, i, r) {
          return t;
        },
        /**
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         */
        getTileUrl: function(t, i, r) {
          return this.tilesUrl + (t - 8) + "/" + i + "/" + r + ".png";
        }
      }
    );
  }(n), function(e) {
    e.TmsTileSource = function(t, i, r, l, s) {
      var o;
      e.isPlainObject(t) ? o = t : o = {
        width: arguments[0],
        height: arguments[1],
        tileSize: arguments[2],
        tileOverlap: arguments[3],
        tilesUrl: arguments[4]
      };
      var a = Math.ceil(o.width / 256) * 256, h = Math.ceil(o.height / 256) * 256, c;
      a > h ? c = a / 256 : c = h / 256, o.maxLevel = Math.ceil(Math.log(c) / Math.log(2)) - 1, o.tileSize = 256, o.width = a, o.height = h, e.TileSource.apply(this, [o]);
    }, e.extend(
      e.TmsTileSource.prototype,
      e.TileSource.prototype,
      /** @lends OpenSeadragon.TmsTileSource.prototype */
      {
        /**
         * Determine if the data and/or url imply the image service is supported by
         * this tile source.
         * @function
         * @param {Object|Array} data
         * @param {String} optional - url
         */
        supports: function(t, i) {
          return t.type && t.type === "tiledmapservice";
        },
        /**
         *
         * @function
         * @param {Object} data - the raw configuration
         * @param {String} url - the url the data was retrieved from if any.
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
         * @returns {Object} options - A dictionary of keyword arguments sufficient
         *      to configure this tile sources constructor.
         */
        configure: function(t, i, r) {
          return t;
        },
        /**
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         */
        getTileUrl: function(t, i, r) {
          var l = this.getNumTiles(t).y - 1;
          return this.tilesUrl + t + "/" + i + "/" + (l - r) + ".png";
        }
      }
    );
  }(n), function(e) {
    e.ZoomifyTileSource = function(t) {
      typeof t.tileSize > "u" && (t.tileSize = 256), typeof t.fileFormat > "u" && (t.fileFormat = "jpg", this.fileFormat = t.fileFormat);
      var i = {
        x: t.width,
        y: t.height
      };
      for (t.imageSizes = [{
        x: t.width,
        y: t.height
      }], t.gridSize = [this._getGridSize(t.width, t.height, t.tileSize)]; parseInt(i.x, 10) > t.tileSize || parseInt(i.y, 10) > t.tileSize; )
        i.x = Math.floor(i.x / 2), i.y = Math.floor(i.y / 2), t.imageSizes.push({
          x: i.x,
          y: i.y
        }), t.gridSize.push(this._getGridSize(i.x, i.y, t.tileSize));
      t.imageSizes.reverse(), t.gridSize.reverse(), t.minLevel = 0, t.maxLevel = t.gridSize.length - 1, n.TileSource.apply(this, [t]);
    }, e.extend(
      e.ZoomifyTileSource.prototype,
      e.TileSource.prototype,
      /** @lends OpenSeadragon.ZoomifyTileSource.prototype */
      {
        //private
        _getGridSize: function(t, i, r) {
          return {
            x: Math.ceil(t / r),
            y: Math.ceil(i / r)
          };
        },
        //private
        _calculateAbsoluteTileNumber: function(t, i, r) {
          for (var l = 0, s = {}, o = 0; o < t; o++)
            s = this.gridSize[o], l += s.x * s.y;
          return s = this.gridSize[t], l += s.x * r + i, l;
        },
        /**
         * Determine if the data and/or url imply the image service is supported by
         * this tile source.
         * @function
         * @param {Object|Array} data
         * @param {String} optional - url
         */
        supports: function(t, i) {
          return t.type && t.type === "zoomifytileservice";
        },
        /**
         *
         * @function
         * @param {Object} data - the raw configuration
         * @param {String} url - the url the data was retrieved from if any.
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
         * @returns {Object} options - A dictionary of keyword arguments sufficient
         *      to configure this tile sources constructor.
         */
        configure: function(t, i, r) {
          return t;
        },
        /**
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         */
        getTileUrl: function(t, i, r) {
          var l = 0, s = this._calculateAbsoluteTileNumber(t, i, r);
          return l = Math.floor(s / 256), this.tilesUrl + "TileGroup" + l + "/" + t + "-" + i + "-" + r + "." + this.fileFormat;
        }
      }
    );
  }(n), function(e) {
    e.LegacyTileSource = function(l) {
      var s, o, a;
      e.isArray(l) && (s = {
        type: "legacy-image-pyramid",
        levels: l
      }), s.levels = t(s.levels), s.levels.length > 0 ? (o = s.levels[s.levels.length - 1].width, a = s.levels[s.levels.length - 1].height) : (o = 0, a = 0, e.console.error("No supported image formats found")), e.extend(!0, s, {
        width: o,
        height: a,
        tileSize: Math.max(a, o),
        tileOverlap: 0,
        minLevel: 0,
        maxLevel: s.levels.length > 0 ? s.levels.length - 1 : 0
      }), e.TileSource.apply(this, [s]), this.levels = s.levels;
    }, e.extend(
      e.LegacyTileSource.prototype,
      e.TileSource.prototype,
      /** @lends OpenSeadragon.LegacyTileSource.prototype */
      {
        /**
         * Determine if the data and/or url imply the image service is supported by
         * this tile source.
         * @function
         * @param {Object|Array} data
         * @param {String} optional - url
         */
        supports: function(l, s) {
          return l.type && l.type === "legacy-image-pyramid" || l.documentElement && l.documentElement.getAttribute("type") === "legacy-image-pyramid";
        },
        /**
         *
         * @function
         * @param {Object|XMLDocument} configuration - the raw configuration
         * @param {String} dataUrl - the url the data was retrieved from if any.
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
         * @returns {Object} options - A dictionary of keyword arguments sufficient
         *      to configure this tile sources constructor.
         */
        configure: function(l, s, o) {
          var a;
          return e.isPlainObject(l) ? a = r(this, l) : a = i(this, l), a;
        },
        /**
         * @function
         * @param {Number} level
         */
        getLevelScale: function(l) {
          var s = NaN;
          return this.levels.length > 0 && l >= this.minLevel && l <= this.maxLevel && (s = this.levels[l].width / this.levels[this.maxLevel].width), s;
        },
        /**
         * @function
         * @param {Number} level
         */
        getNumTiles: function(l) {
          var s = this.getLevelScale(l);
          return s ? new e.Point(1, 1) : new e.Point(0, 0);
        },
        /**
         * This method is not implemented by this class other than to throw an Error
         * announcing you have to implement it.  Because of the variety of tile
         * server technologies, and various specifications for building image
         * pyramids, this method is here to allow easy integration.
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         * @throws {Error}
         */
        getTileUrl: function(l, s, o) {
          var a = null;
          return this.levels.length > 0 && l >= this.minLevel && l <= this.maxLevel && (a = this.levels[l].url), a;
        }
      }
    );
    function t(l) {
      var s = [], o, a;
      for (a = 0; a < l.length; a++)
        o = l[a], o.height && o.width && o.url ? s.push({
          url: o.url,
          width: Number(o.width),
          height: Number(o.height)
        }) : e.console.error("Unsupported image format: %s", o.url ? o.url : "<no URL>");
      return s.sort(function(h, c) {
        return h.height - c.height;
      });
    }
    function i(l, s) {
      if (!s || !s.documentElement)
        throw new Error(e.getString("Errors.Xml"));
      var o = s.documentElement, a = o.tagName, h = null, c = [], p, v;
      if (a === "image")
        try {
          for (h = {
            type: o.getAttribute("type"),
            levels: []
          }, c = o.getElementsByTagName("level"), v = 0; v < c.length; v++)
            p = c[v], h.levels.push({
              url: p.getAttribute("url"),
              width: parseInt(p.getAttribute("width"), 10),
              height: parseInt(p.getAttribute("height"), 10)
            });
          return r(l, h);
        } catch (w) {
          throw w instanceof Error ? w : new Error("Unknown error parsing Legacy Image Pyramid XML.");
        }
      else {
        if (a === "collection")
          throw new Error("Legacy Image Pyramid Collections not yet supported.");
        if (a === "error")
          throw new Error("Error: " + s);
      }
      throw new Error("Unknown element " + a);
    }
    function r(l, s) {
      return s.levels;
    }
  }(n), function(e) {
    e.ImageTileSource = function(t) {
      t = e.extend({
        buildPyramid: !0,
        crossOriginPolicy: !1,
        ajaxWithCredentials: !1,
        useCanvas: !0
      }, t), e.TileSource.apply(this, [t]);
    }, e.extend(
      e.ImageTileSource.prototype,
      e.TileSource.prototype,
      /** @lends OpenSeadragon.ImageTileSource.prototype */
      {
        /**
         * Determine if the data and/or url imply the image service is supported by
         * this tile source.
         * @function
         * @param {Object|Array} data
         * @param {String} optional - url
         */
        supports: function(t, i) {
          return t.type && t.type === "image";
        },
        /**
         *
         * @function
         * @param {Object} options - the options
         * @param {String} dataUrl - the url the image was retrieved from, if any.
         * @param {String} postData - HTTP POST data in k=v&k2=v2... form or null
         * @returns {Object} options - A dictionary of keyword arguments sufficient
         *      to configure this tile sources constructor.
         */
        configure: function(t, i, r) {
          return t;
        },
        /**
         * Responsible for retrieving, and caching the
         * image metadata pertinent to this TileSources implementation.
         * @function
         * @param {String} url
         * @throws {Error}
         */
        getImageInfo: function(t) {
          var i = this._image = new Image(), r = this;
          this.crossOriginPolicy && (i.crossOrigin = this.crossOriginPolicy), this.ajaxWithCredentials && (i.useCredentials = this.ajaxWithCredentials), e.addEvent(i, "load", function() {
            r.width = i.naturalWidth, r.height = i.naturalHeight, r.aspectRatio = r.width / r.height, r.dimensions = new e.Point(r.width, r.height), r._tileWidth = r.width, r._tileHeight = r.height, r.tileOverlap = 0, r.minLevel = 0, r.levels = r._buildLevels(), r.maxLevel = r.levels.length - 1, r.ready = !0, r.raiseEvent("ready", { tileSource: r });
          }), e.addEvent(i, "error", function() {
            r.raiseEvent("open-failed", {
              message: "Error loading image at " + t,
              source: t
            });
          }), i.src = t;
        },
        /**
         * @function
         * @param {Number} level
         */
        getLevelScale: function(t) {
          var i = NaN;
          return t >= this.minLevel && t <= this.maxLevel && (i = this.levels[t].width / this.levels[this.maxLevel].width), i;
        },
        /**
         * @function
         * @param {Number} level
         */
        getNumTiles: function(t) {
          var i = this.getLevelScale(t);
          return i ? new e.Point(1, 1) : new e.Point(0, 0);
        },
        /**
         * Retrieves a tile url
         * @function
         * @param {Number} level Level of the tile
         * @param {Number} x x coordinate of the tile
         * @param {Number} y y coordinate of the tile
         */
        getTileUrl: function(t, i, r) {
          var l = null;
          return t >= this.minLevel && t <= this.maxLevel && (l = this.levels[t].url), l;
        },
        /**
         * Retrieves a tile context 2D
         * @function
         * @param {Number} level Level of the tile
         * @param {Number} x x coordinate of the tile
         * @param {Number} y y coordinate of the tile
         */
        getContext2D: function(t, i, r) {
          var l = null;
          return t >= this.minLevel && t <= this.maxLevel && (l = this.levels[t].context2D), l;
        },
        /**
         * Destroys ImageTileSource
         * @function
         */
        destroy: function() {
          this._freeupCanvasMemory();
        },
        // private
        //
        // Builds the different levels of the pyramid if possible
        // (i.e. if canvas API enabled and no canvas tainting issue).
        _buildLevels: function() {
          var t = [{
            url: this._image.src,
            width: this._image.naturalWidth,
            height: this._image.naturalHeight
          }];
          if (!this.buildPyramid || !e.supportsCanvas || !this.useCanvas)
            return delete this._image, t;
          var i = this._image.naturalWidth, r = this._image.naturalHeight, l = document.createElement("canvas"), s = l.getContext("2d");
          if (l.width = i, l.height = r, s.drawImage(this._image, 0, 0, i, r), t[0].context2D = s, delete this._image, e.isCanvasTainted(l))
            return t;
          for (; i >= 2 && r >= 2; ) {
            i = Math.floor(i / 2), r = Math.floor(r / 2);
            var o = document.createElement("canvas"), a = o.getContext("2d");
            o.width = i, o.height = r, a.drawImage(l, 0, 0, i, r), t.splice(0, 0, {
              context2D: a,
              width: i,
              height: r
            }), l = o, s = a;
          }
          return t;
        },
        /**
         * Free up canvas memory
         * (iOS 12 or higher on 2GB RAM device has only 224MB canvas memory,
         * and Safari keeps canvas until its height and width will be set to 0).
         * @function
         */
        _freeupCanvasMemory: function() {
          for (var t = 0; t < this.levels.length; t++)
            this.levels[t].context2D && (this.levels[t].context2D.canvas.height = 0, this.levels[t].context2D.canvas.width = 0);
        }
      }
    );
  }(n), function(e) {
    e.TileSourceCollection = function(t, i, r, l) {
      e.console.error("TileSourceCollection is deprecated; use World instead");
    };
  }(n), function(e) {
    e.ButtonState = {
      REST: 0,
      GROUP: 1,
      HOVER: 2,
      DOWN: 3
    }, e.Button = function(a) {
      var h = this;
      e.EventSource.call(this), e.extend(!0, this, {
        tooltip: null,
        srcRest: null,
        srcGroup: null,
        srcHover: null,
        srcDown: null,
        clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold,
        clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold,
        /**
         * How long to wait before fading.
         * @member {Number} fadeDelay
         * @memberof OpenSeadragon.Button#
         */
        fadeDelay: 0,
        /**
         * How long should it take to fade the button.
         * @member {Number} fadeLength
         * @memberof OpenSeadragon.Button#
         */
        fadeLength: 2e3,
        onPress: null,
        onRelease: null,
        onClick: null,
        onEnter: null,
        onExit: null,
        onFocus: null,
        onBlur: null,
        userData: null
      }, a), this.element = a.element || e.makeNeutralElement("div"), a.element || (this.imgRest = e.makeTransparentImage(this.srcRest), this.imgGroup = e.makeTransparentImage(this.srcGroup), this.imgHover = e.makeTransparentImage(this.srcHover), this.imgDown = e.makeTransparentImage(this.srcDown), this.imgRest.alt = this.imgGroup.alt = this.imgHover.alt = this.imgDown.alt = this.tooltip, e.setElementPointerEventsNone(this.imgRest), e.setElementPointerEventsNone(this.imgGroup), e.setElementPointerEventsNone(this.imgHover), e.setElementPointerEventsNone(this.imgDown), this.element.style.position = "relative", e.setElementTouchActionNone(this.element), this.imgGroup.style.position = this.imgHover.style.position = this.imgDown.style.position = "absolute", this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = "0px", this.imgGroup.style.left = this.imgHover.style.left = this.imgDown.style.left = "0px", this.imgHover.style.visibility = this.imgDown.style.visibility = "hidden", e.Browser.vendor === e.BROWSERS.FIREFOX && e.Browser.version < 3 && (this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = ""), this.element.appendChild(this.imgRest), this.element.appendChild(this.imgGroup), this.element.appendChild(this.imgHover), this.element.appendChild(this.imgDown)), this.addHandler("press", this.onPress), this.addHandler("release", this.onRelease), this.addHandler("click", this.onClick), this.addHandler("enter", this.onEnter), this.addHandler("exit", this.onExit), this.addHandler("focus", this.onFocus), this.addHandler("blur", this.onBlur), this.currentState = e.ButtonState.GROUP, this.fadeBeginTime = null, this.shouldFade = !1, this.element.style.display = "inline-block", this.element.style.position = "relative", this.element.title = this.tooltip, this.tracker = new e.MouseTracker({
        userData: "Button.tracker",
        element: this.element,
        clickTimeThreshold: this.clickTimeThreshold,
        clickDistThreshold: this.clickDistThreshold,
        enterHandler: function(c) {
          c.insideElementPressed ? (s(h, e.ButtonState.DOWN), h.raiseEvent("enter", { originalEvent: c.originalEvent })) : c.buttonDownAny || s(h, e.ButtonState.HOVER);
        },
        focusHandler: function(c) {
          h.tracker.enterHandler(c), h.raiseEvent("focus", { originalEvent: c.originalEvent });
        },
        leaveHandler: function(c) {
          o(h, e.ButtonState.GROUP), c.insideElementPressed && h.raiseEvent("exit", { originalEvent: c.originalEvent });
        },
        blurHandler: function(c) {
          h.tracker.leaveHandler(c), h.raiseEvent("blur", { originalEvent: c.originalEvent });
        },
        pressHandler: function(c) {
          s(h, e.ButtonState.DOWN), h.raiseEvent("press", { originalEvent: c.originalEvent });
        },
        releaseHandler: function(c) {
          c.insideElementPressed && c.insideElementReleased ? (o(h, e.ButtonState.HOVER), h.raiseEvent("release", { originalEvent: c.originalEvent })) : c.insideElementPressed ? o(h, e.ButtonState.GROUP) : s(h, e.ButtonState.HOVER);
        },
        clickHandler: function(c) {
          c.quick && h.raiseEvent("click", { originalEvent: c.originalEvent });
        },
        keyHandler: function(c) {
          c.keyCode === 13 ? (h.raiseEvent("click", { originalEvent: c.originalEvent }), h.raiseEvent("release", { originalEvent: c.originalEvent }), c.preventDefault = !0) : c.preventDefault = !1;
        }
      }), o(this, e.ButtonState.REST);
    }, e.extend(
      e.Button.prototype,
      e.EventSource.prototype,
      /** @lends OpenSeadragon.Button.prototype */
      {
        /**
         * Used by a button container element (e.g. a ButtonGroup) to transition the button state
         * to ButtonState.GROUP.
         * @function
         */
        notifyGroupEnter: function() {
          s(this, e.ButtonState.GROUP);
        },
        /**
         * Used by a button container element (e.g. a ButtonGroup) to transition the button state
         * to ButtonState.REST.
         * @function
         */
        notifyGroupExit: function() {
          o(this, e.ButtonState.REST);
        },
        /**
         * @function
         */
        disable: function() {
          this.notifyGroupExit(), this.element.disabled = !0, this.tracker.setTracking(!1), e.setElementOpacity(this.element, 0.2, !0);
        },
        /**
         * @function
         */
        enable: function() {
          this.element.disabled = !1, this.tracker.setTracking(!0), e.setElementOpacity(this.element, 1, !0), this.notifyGroupEnter();
        },
        destroy: function() {
          this.imgRest && (this.element.removeChild(this.imgRest), this.imgRest = null), this.imgGroup && (this.element.removeChild(this.imgGroup), this.imgGroup = null), this.imgHover && (this.element.removeChild(this.imgHover), this.imgHover = null), this.imgDown && (this.element.removeChild(this.imgDown), this.imgDown = null), this.removeAllHandlers(), this.tracker.destroy(), this.element = null;
        }
      }
    );
    function t(a) {
      e.requestAnimationFrame(function() {
        i(a);
      });
    }
    function i(a) {
      var h, c, p;
      a.shouldFade && (h = e.now(), c = h - a.fadeBeginTime, p = 1 - c / a.fadeLength, p = Math.min(1, p), p = Math.max(0, p), a.imgGroup && e.setElementOpacity(a.imgGroup, p, !0), p > 0 && t(a));
    }
    function r(a) {
      a.shouldFade = !0, a.fadeBeginTime = e.now() + a.fadeDelay, window.setTimeout(function() {
        t(a);
      }, a.fadeDelay);
    }
    function l(a) {
      a.shouldFade = !1, a.imgGroup && e.setElementOpacity(a.imgGroup, 1, !0);
    }
    function s(a, h) {
      a.element.disabled || (h >= e.ButtonState.GROUP && a.currentState === e.ButtonState.REST && (l(a), a.currentState = e.ButtonState.GROUP), h >= e.ButtonState.HOVER && a.currentState === e.ButtonState.GROUP && (a.imgHover && (a.imgHover.style.visibility = ""), a.currentState = e.ButtonState.HOVER), h >= e.ButtonState.DOWN && a.currentState === e.ButtonState.HOVER && (a.imgDown && (a.imgDown.style.visibility = ""), a.currentState = e.ButtonState.DOWN));
    }
    function o(a, h) {
      a.element.disabled || (h <= e.ButtonState.HOVER && a.currentState === e.ButtonState.DOWN && (a.imgDown && (a.imgDown.style.visibility = "hidden"), a.currentState = e.ButtonState.HOVER), h <= e.ButtonState.GROUP && a.currentState === e.ButtonState.HOVER && (a.imgHover && (a.imgHover.style.visibility = "hidden"), a.currentState = e.ButtonState.GROUP), h <= e.ButtonState.REST && a.currentState === e.ButtonState.GROUP && (r(a), a.currentState = e.ButtonState.REST));
    }
  }(n), function(e) {
    e.ButtonGroup = function(t) {
      e.extend(!0, this, {
        /**
         * An array containing the buttons themselves.
         * @member {Array} buttons
         * @memberof OpenSeadragon.ButtonGroup#
         */
        buttons: [],
        clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold,
        clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold,
        labelText: ""
      }, t);
      var i = this.buttons.concat([]), r = this, l;
      if (this.element = t.element || e.makeNeutralElement("div"), !t.group)
        for (this.element.style.display = "inline-block", l = 0; l < i.length; l++)
          this.element.appendChild(i[l].element);
      e.setElementTouchActionNone(this.element), this.tracker = new e.MouseTracker({
        userData: "ButtonGroup.tracker",
        element: this.element,
        clickTimeThreshold: this.clickTimeThreshold,
        clickDistThreshold: this.clickDistThreshold,
        enterHandler: function(s) {
          var o;
          for (o = 0; o < r.buttons.length; o++)
            r.buttons[o].notifyGroupEnter();
        },
        leaveHandler: function(s) {
          var o;
          if (!s.insideElementPressed)
            for (o = 0; o < r.buttons.length; o++)
              r.buttons[o].notifyGroupExit();
        }
      });
    }, e.ButtonGroup.prototype = {
      /**
       * Adds the given button to this button group.
       *
       * @function
       * @param {OpenSeadragon.Button} button
       */
      addButton: function(t) {
        this.buttons.push(t), this.element.appendChild(t.element);
      },
      /**
       * TODO: Figure out why this is used on the public API and if a more useful
       * api can be created.
       * @function
       * @private
       */
      emulateEnter: function() {
        this.tracker.enterHandler({ eventSource: this.tracker });
      },
      /**
       * TODO: Figure out why this is used on the public API and if a more useful
       * api can be created.
       * @function
       * @private
       */
      emulateLeave: function() {
        this.tracker.leaveHandler({ eventSource: this.tracker });
      },
      destroy: function() {
        for (; this.buttons.length; ) {
          var t = this.buttons.pop();
          this.element.removeChild(t.element), t.destroy();
        }
        this.tracker.destroy(), this.element = null;
      }
    };
  }(n), function(e) {
    e.Rect = function(t, i, r, l, s) {
      this.x = typeof t == "number" ? t : 0, this.y = typeof i == "number" ? i : 0, this.width = typeof r == "number" ? r : 0, this.height = typeof l == "number" ? l : 0, this.degrees = typeof s == "number" ? s : 0, this.degrees = e.positiveModulo(this.degrees, 360);
      var o, a;
      this.degrees >= 270 ? (o = this.getTopRight(), this.x = o.x, this.y = o.y, a = this.height, this.height = this.width, this.width = a, this.degrees -= 270) : this.degrees >= 180 ? (o = this.getBottomRight(), this.x = o.x, this.y = o.y, this.degrees -= 180) : this.degrees >= 90 && (o = this.getBottomLeft(), this.x = o.x, this.y = o.y, a = this.height, this.height = this.width, this.width = a, this.degrees -= 90);
    }, e.Rect.fromSummits = function(t, i, r) {
      var l = t.distanceTo(i), s = t.distanceTo(r), o = i.minus(t), a = Math.atan(o.y / o.x);
      return o.x < 0 ? a += Math.PI : o.y < 0 && (a += 2 * Math.PI), new e.Rect(
        t.x,
        t.y,
        l,
        s,
        a / Math.PI * 180
      );
    }, e.Rect.prototype = {
      /**
       * @function
       * @returns {OpenSeadragon.Rect} a duplicate of this Rect
       */
      clone: function() {
        return new e.Rect(
          this.x,
          this.y,
          this.width,
          this.height,
          this.degrees
        );
      },
      /**
       * The aspect ratio is simply the ratio of width to height.
       * @function
       * @returns {Number} The ratio of width to height.
       */
      getAspectRatio: function() {
        return this.width / this.height;
      },
      /**
       * Provides the coordinates of the upper-left corner of the rectangle as a
       * point.
       * @function
       * @returns {OpenSeadragon.Point} The coordinate of the upper-left corner of
       *  the rectangle.
       */
      getTopLeft: function() {
        return new e.Point(
          this.x,
          this.y
        );
      },
      /**
       * Provides the coordinates of the bottom-right corner of the rectangle as a
       * point.
       * @function
       * @returns {OpenSeadragon.Point} The coordinate of the bottom-right corner of
       *  the rectangle.
       */
      getBottomRight: function() {
        return new e.Point(this.x + this.width, this.y + this.height).rotate(this.degrees, this.getTopLeft());
      },
      /**
       * Provides the coordinates of the top-right corner of the rectangle as a
       * point.
       * @function
       * @returns {OpenSeadragon.Point} The coordinate of the top-right corner of
       *  the rectangle.
       */
      getTopRight: function() {
        return new e.Point(this.x + this.width, this.y).rotate(this.degrees, this.getTopLeft());
      },
      /**
       * Provides the coordinates of the bottom-left corner of the rectangle as a
       * point.
       * @function
       * @returns {OpenSeadragon.Point} The coordinate of the bottom-left corner of
       *  the rectangle.
       */
      getBottomLeft: function() {
        return new e.Point(this.x, this.y + this.height).rotate(this.degrees, this.getTopLeft());
      },
      /**
       * Computes the center of the rectangle.
       * @function
       * @returns {OpenSeadragon.Point} The center of the rectangle as represented
       *  as represented by a 2-dimensional vector (x,y)
       */
      getCenter: function() {
        return new e.Point(
          this.x + this.width / 2,
          this.y + this.height / 2
        ).rotate(this.degrees, this.getTopLeft());
      },
      /**
       * Returns the width and height component as a vector OpenSeadragon.Point
       * @function
       * @returns {OpenSeadragon.Point} The 2 dimensional vector representing the
       *  width and height of the rectangle.
       */
      getSize: function() {
        return new e.Point(this.width, this.height);
      },
      /**
       * Determines if two Rectangles have equivalent components.
       * @function
       * @param {OpenSeadragon.Rect} rectangle The Rectangle to compare to.
       * @returns {Boolean} 'true' if all components are equal, otherwise 'false'.
       */
      equals: function(t) {
        return t instanceof e.Rect && this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height && this.degrees === t.degrees;
      },
      /**
      * Multiply all dimensions (except degrees) in this Rect by a factor and
      * return a new Rect.
      * @function
      * @param {Number} factor The factor to multiply vector components.
      * @returns {OpenSeadragon.Rect} A new rect representing the multiplication
      *  of the vector components by the factor
      */
      times: function(t) {
        return new e.Rect(
          this.x * t,
          this.y * t,
          this.width * t,
          this.height * t,
          this.degrees
        );
      },
      /**
      * Translate/move this Rect by a vector and return new Rect.
      * @function
      * @param {OpenSeadragon.Point} delta The translation vector.
      * @returns {OpenSeadragon.Rect} A new rect with altered position
      */
      translate: function(t) {
        return new e.Rect(
          this.x + t.x,
          this.y + t.y,
          this.width,
          this.height,
          this.degrees
        );
      },
      /**
       * Returns the smallest rectangle that will contain this and the given
       * rectangle bounding boxes.
       * @param {OpenSeadragon.Rect} rect
       * @returns {OpenSeadragon.Rect} The new rectangle.
       */
      union: function(t) {
        var i = this.getBoundingBox(), r = t.getBoundingBox(), l = Math.min(i.x, r.x), s = Math.min(i.y, r.y), o = Math.max(
          i.x + i.width,
          r.x + r.width
        ), a = Math.max(
          i.y + i.height,
          r.y + r.height
        );
        return new e.Rect(
          l,
          s,
          o - l,
          a - s
        );
      },
      /**
       * Returns the bounding box of the intersection of this rectangle with the
       * given rectangle.
       * @param {OpenSeadragon.Rect} rect
       * @returns {OpenSeadragon.Rect} the bounding box of the intersection
       * or null if the rectangles don't intersect.
       */
      intersection: function(t) {
        var i = 1e-10, r = [], l = this.getTopLeft();
        t.containsPoint(l, i) && r.push(l);
        var s = this.getTopRight();
        t.containsPoint(s, i) && r.push(s);
        var o = this.getBottomLeft();
        t.containsPoint(o, i) && r.push(o);
        var a = this.getBottomRight();
        t.containsPoint(a, i) && r.push(a);
        var h = t.getTopLeft();
        this.containsPoint(h, i) && r.push(h);
        var c = t.getTopRight();
        this.containsPoint(c, i) && r.push(c);
        var p = t.getBottomLeft();
        this.containsPoint(p, i) && r.push(p);
        var v = t.getBottomRight();
        this.containsPoint(v, i) && r.push(v);
        for (var w = this._getSegments(), E = t._getSegments(), _ = 0; _ < w.length; _++)
          for (var S = w[_], C = 0; C < E.length; C++) {
            var b = E[C], V = Z(
              S[0],
              S[1],
              b[0],
              b[1]
            );
            V && r.push(V);
          }
        function Z(le, pe, Pe, Ze) {
          var we = pe.minus(le), _e = Ze.minus(Pe), Re = -_e.x * we.y + we.x * _e.y;
          if (Re === 0)
            return null;
          var re = (we.x * (le.y - Pe.y) - we.y * (le.x - Pe.x)) / Re, Ce = (_e.x * (le.y - Pe.y) - _e.y * (le.x - Pe.x)) / Re;
          return -i <= re && re <= 1 - i && -i <= Ce && Ce <= 1 - i ? new e.Point(le.x + Ce * we.x, le.y + Ce * we.y) : null;
        }
        if (r.length === 0)
          return null;
        for (var K = r[0].x, Q = r[0].x, q = r[0].y, $ = r[0].y, ne = 1; ne < r.length; ne++) {
          var oe = r[ne];
          oe.x < K && (K = oe.x), oe.x > Q && (Q = oe.x), oe.y < q && (q = oe.y), oe.y > $ && ($ = oe.y);
        }
        return new e.Rect(K, q, Q - K, $ - q);
      },
      // private
      _getSegments: function() {
        var t = this.getTopLeft(), i = this.getTopRight(), r = this.getBottomLeft(), l = this.getBottomRight();
        return [
          [t, i],
          [i, l],
          [l, r],
          [r, t]
        ];
      },
      /**
       * Rotates a rectangle around a point.
       * @function
       * @param {Number} degrees The angle in degrees to rotate.
       * @param {OpenSeadragon.Point} [pivot] The point about which to rotate.
       * Defaults to the center of the rectangle.
       * @returns {OpenSeadragon.Rect}
       */
      rotate: function(t, i) {
        if (t = e.positiveModulo(t, 360), t === 0)
          return this.clone();
        i = i || this.getCenter();
        var r = this.getTopLeft().rotate(t, i), l = this.getTopRight().rotate(t, i), s = l.minus(r);
        s = s.apply(function(a) {
          var h = 1e-15;
          return Math.abs(a) < h ? 0 : a;
        });
        var o = Math.atan(s.y / s.x);
        return s.x < 0 ? o += Math.PI : s.y < 0 && (o += 2 * Math.PI), new e.Rect(
          r.x,
          r.y,
          this.width,
          this.height,
          o / Math.PI * 180
        );
      },
      /**
       * Retrieves the smallest horizontal (degrees=0) rectangle which contains
       * this rectangle.
       * @returns {OpenSeadragon.Rect}
       */
      getBoundingBox: function() {
        if (this.degrees === 0)
          return this.clone();
        var t = this.getTopLeft(), i = this.getTopRight(), r = this.getBottomLeft(), l = this.getBottomRight(), s = Math.min(t.x, i.x, r.x, l.x), o = Math.max(t.x, i.x, r.x, l.x), a = Math.min(t.y, i.y, r.y, l.y), h = Math.max(t.y, i.y, r.y, l.y);
        return new e.Rect(
          s,
          a,
          o - s,
          h - a
        );
      },
      /**
       * Retrieves the smallest horizontal (degrees=0) rectangle which contains
       * this rectangle and has integers x, y, width and height
       * @returns {OpenSeadragon.Rect}
       */
      getIntegerBoundingBox: function() {
        var t = this.getBoundingBox(), i = Math.floor(t.x), r = Math.floor(t.y), l = Math.ceil(t.width + t.x - i), s = Math.ceil(t.height + t.y - r);
        return new e.Rect(i, r, l, s);
      },
      /**
       * Determines whether a point is inside this rectangle (edge included).
       * @function
       * @param {OpenSeadragon.Point} point
       * @param {Number} [epsilon=0] the margin of error allowed
       * @returns {Boolean} true if the point is inside this rectangle, false
       * otherwise.
       */
      containsPoint: function(t, i) {
        i = i || 0;
        var r = this.getTopLeft(), l = this.getTopRight(), s = this.getBottomLeft(), o = l.minus(r), a = s.minus(r);
        return (t.x - r.x) * o.x + (t.y - r.y) * o.y >= -i && (t.x - l.x) * o.x + (t.y - l.y) * o.y <= i && (t.x - r.x) * a.x + (t.y - r.y) * a.y >= -i && (t.x - s.x) * a.x + (t.y - s.y) * a.y <= i;
      },
      /**
       * Provides a string representation of the rectangle which is useful for
       * debugging.
       * @function
       * @returns {String} A string representation of the rectangle.
       */
      toString: function() {
        return "[" + Math.round(this.x * 100) / 100 + ", " + Math.round(this.y * 100) / 100 + ", " + Math.round(this.width * 100) / 100 + "x" + Math.round(this.height * 100) / 100 + ", " + Math.round(this.degrees * 100) / 100 + "deg]";
      }
    };
  }(n), function(e) {
    var t = {};
    e.ReferenceStrip = function(p) {
      var v = this, w = p.viewer, E = e.getElementSize(w.element), _, S, C;
      for (p.id || (p.id = "referencestrip-" + e.now(), this.element = e.makeNeutralElement("div"), this.element.id = p.id, this.element.className = "referencestrip"), p = e.extend(!0, {
        sizeRatio: e.DEFAULT_SETTINGS.referenceStripSizeRatio,
        position: e.DEFAULT_SETTINGS.referenceStripPosition,
        scroll: e.DEFAULT_SETTINGS.referenceStripScroll,
        clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold
      }, p, {
        element: this.element
      }), e.extend(this, p), t[this.id] = {
        animating: !1
      }, this.minPixelRatio = this.viewer.minPixelRatio, this.element.tabIndex = 0, S = this.element.style, S.marginTop = "0px", S.marginRight = "0px", S.marginBottom = "0px", S.marginLeft = "0px", S.left = "0px", S.bottom = "0px", S.border = "0px", S.background = "#000", S.position = "relative", e.setElementTouchActionNone(this.element), e.setElementOpacity(this.element, 0.8), this.viewer = w, this.tracker = new e.MouseTracker({
        userData: "ReferenceStrip.tracker",
        element: this.element,
        clickHandler: e.delegate(this, i),
        dragHandler: e.delegate(this, r),
        scrollHandler: e.delegate(this, l),
        enterHandler: e.delegate(this, o),
        leaveHandler: e.delegate(this, a),
        keyDownHandler: e.delegate(this, h),
        keyHandler: e.delegate(this, c),
        preProcessEventHandler: function(b) {
          b.eventType === "wheel" && (b.preventDefault = !0);
        }
      }), p.width && p.height ? (this.element.style.width = p.width + "px", this.element.style.height = p.height + "px", w.addControl(
        this.element,
        { anchor: e.ControlAnchor.BOTTOM_LEFT }
      )) : p.scroll === "horizontal" ? (this.element.style.width = E.x * p.sizeRatio * w.tileSources.length + 12 * w.tileSources.length + "px", this.element.style.height = E.y * p.sizeRatio + "px", w.addControl(
        this.element,
        { anchor: e.ControlAnchor.BOTTOM_LEFT }
      )) : (this.element.style.height = E.y * p.sizeRatio * w.tileSources.length + 12 * w.tileSources.length + "px", this.element.style.width = E.x * p.sizeRatio + "px", w.addControl(
        this.element,
        { anchor: e.ControlAnchor.TOP_LEFT }
      )), this.panelWidth = E.x * this.sizeRatio + 8, this.panelHeight = E.y * this.sizeRatio + 8, this.panels = [], this.miniViewers = {}, C = 0; C < w.tileSources.length; C++)
        _ = e.makeNeutralElement("div"), _.id = this.element.id + "-" + C, _.style.width = v.panelWidth + "px", _.style.height = v.panelHeight + "px", _.style.display = "inline", _.style.float = "left", _.style.cssFloat = "left", _.style.styleFloat = "left", _.style.padding = "2px", e.setElementTouchActionNone(_), e.setElementPointerEventsNone(_), this.element.appendChild(_), _.activePanel = !1, this.panels.push(_);
      s(this, this.scroll === "vertical" ? E.y : E.x, 0), this.setFocus(0);
    }, e.ReferenceStrip.prototype = {
      /**
       * @function
       */
      setFocus: function(p) {
        var v = this.element.querySelector("#" + this.element.id + "-" + p), w = e.getElementSize(this.viewer.canvas), E = Number(this.element.style.width.replace("px", "")), _ = Number(this.element.style.height.replace("px", "")), S = -Number(this.element.style.marginLeft.replace("px", "")), C = -Number(this.element.style.marginTop.replace("px", "")), b;
        this.currentSelected !== v && (this.currentSelected && (this.currentSelected.style.background = "#000"), this.currentSelected = v, this.currentSelected.style.background = "#999", this.scroll === "horizontal" ? (b = Number(p) * (this.panelWidth + 3), b > S + w.x - this.panelWidth ? (b = Math.min(b, E - w.x), this.element.style.marginLeft = -b + "px", s(this, w.x, -b)) : b < S && (b = Math.max(0, b - w.x / 2), this.element.style.marginLeft = -b + "px", s(this, w.x, -b))) : (b = Number(p) * (this.panelHeight + 3), b > C + w.y - this.panelHeight ? (b = Math.min(b, _ - w.y), this.element.style.marginTop = -b + "px", s(this, w.y, -b)) : b < C && (b = Math.max(0, b - w.y / 2), this.element.style.marginTop = -b + "px", s(this, w.y, -b))), this.currentPage = p, o.call(this, { eventSource: this.tracker }));
      },
      /**
       * @function
       */
      update: function() {
        return !!t[this.id].animating;
      },
      destroy: function() {
        if (this.miniViewers)
          for (var p in this.miniViewers)
            this.miniViewers[p].destroy();
        this.tracker.destroy(), this.element && this.viewer.removeControl(this.element);
      }
    };
    function i(p) {
      if (p.quick) {
        var v;
        this.scroll === "horizontal" ? v = Math.floor(p.position.x / (this.panelWidth + 4)) : v = Math.floor(p.position.y / this.panelHeight), this.viewer.goToPage(v);
      }
      this.element.focus();
    }
    function r(p) {
      if (this.dragging = !0, this.element) {
        var v = Number(this.element.style.marginLeft.replace("px", "")), w = Number(this.element.style.marginTop.replace("px", "")), E = Number(this.element.style.width.replace("px", "")), _ = Number(this.element.style.height.replace("px", "")), S = e.getElementSize(this.viewer.canvas);
        this.scroll === "horizontal" ? -p.delta.x > 0 ? v > -(E - S.x) && (this.element.style.marginLeft = v + p.delta.x * 2 + "px", s(this, S.x, v + p.delta.x * 2)) : -p.delta.x < 0 && v < 0 && (this.element.style.marginLeft = v + p.delta.x * 2 + "px", s(this, S.x, v + p.delta.x * 2)) : -p.delta.y > 0 ? w > -(_ - S.y) && (this.element.style.marginTop = w + p.delta.y * 2 + "px", s(this, S.y, w + p.delta.y * 2)) : -p.delta.y < 0 && w < 0 && (this.element.style.marginTop = w + p.delta.y * 2 + "px", s(this, S.y, w + p.delta.y * 2));
      }
    }
    function l(p) {
      if (this.element) {
        var v = Number(this.element.style.marginLeft.replace("px", "")), w = Number(this.element.style.marginTop.replace("px", "")), E = Number(this.element.style.width.replace("px", "")), _ = Number(this.element.style.height.replace("px", "")), S = e.getElementSize(this.viewer.canvas);
        this.scroll === "horizontal" ? p.scroll > 0 ? v > -(E - S.x) && (this.element.style.marginLeft = v - p.scroll * 60 + "px", s(this, S.x, v - p.scroll * 60)) : p.scroll < 0 && v < 0 && (this.element.style.marginLeft = v - p.scroll * 60 + "px", s(this, S.x, v - p.scroll * 60)) : p.scroll < 0 ? w > S.y - _ && (this.element.style.marginTop = w + p.scroll * 60 + "px", s(this, S.y, w + p.scroll * 60)) : p.scroll > 0 && w < 0 && (this.element.style.marginTop = w + p.scroll * 60 + "px", s(this, S.y, w + p.scroll * 60)), p.preventDefault = !0;
      }
    }
    function s(p, v, w) {
      var E, _, S, C, b, V;
      for (p.scroll === "horizontal" ? E = p.panelWidth : E = p.panelHeight, _ = Math.ceil(v / E) + 5, S = Math.ceil((Math.abs(w) + v) / E) + 1, _ = S - _, _ = _ < 0 ? 0 : _, b = _; b < S && b < p.panels.length; b++)
        if (V = p.panels[b], !V.activePanel) {
          var Z, K = p.viewer.tileSources[b];
          K.referenceStripThumbnailUrl ? Z = {
            type: "image",
            url: K.referenceStripThumbnailUrl
          } : Z = K, C = new e.Viewer({
            id: V.id,
            tileSources: [Z],
            element: V,
            navigatorSizeRatio: p.sizeRatio,
            showNavigator: !1,
            mouseNavEnabled: !1,
            showNavigationControl: !1,
            showSequenceControl: !1,
            immediateRender: !0,
            blendTime: 0,
            animationTime: 0,
            loadTilesWithAjax: p.viewer.loadTilesWithAjax,
            ajaxHeaders: p.viewer.ajaxHeaders,
            useCanvas: p.useCanvas
          }), e.setElementPointerEventsNone(C.canvas), e.setElementPointerEventsNone(C.container), C.innerTracker.setTracking(!1), C.outerTracker.setTracking(!1), p.miniViewers[V.id] = C, V.activePanel = !0;
        }
    }
    function o(p) {
      var v = p.eventSource.element;
      this.scroll === "horizontal" ? v.style.marginBottom = "0px" : v.style.marginLeft = "0px";
    }
    function a(p) {
      var v = p.eventSource.element;
      this.scroll === "horizontal" ? v.style.marginBottom = "-" + e.getElementSize(v).y / 2 + "px" : v.style.marginLeft = "-" + e.getElementSize(v).x / 2 + "px";
    }
    function h(p) {
      if (!p.ctrl && !p.alt && !p.meta)
        switch (p.keyCode) {
          case 38:
            l.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), p.preventDefault = !0;
            break;
          case 40:
            l.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), p.preventDefault = !0;
            break;
          case 37:
            l.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), p.preventDefault = !0;
            break;
          case 39:
            l.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), p.preventDefault = !0;
            break;
          default:
            p.preventDefault = !1;
            break;
        }
      else
        p.preventDefault = !1;
    }
    function c(p) {
      if (!p.ctrl && !p.alt && !p.meta)
        switch (p.keyCode) {
          case 61:
            l.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), p.preventDefault = !0;
            break;
          case 45:
            l.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), p.preventDefault = !0;
            break;
          case 48:
          case 119:
          case 87:
            l.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), p.preventDefault = !0;
            break;
          case 115:
          case 83:
            l.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), p.preventDefault = !0;
            break;
          case 97:
            l.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), p.preventDefault = !0;
            break;
          case 100:
            l.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), p.preventDefault = !0;
            break;
          default:
            p.preventDefault = !1;
            break;
        }
      else
        p.preventDefault = !1;
    }
  }(n), function(e) {
    e.DisplayRect = function(t, i, r, l, s, o) {
      e.Rect.apply(this, [t, i, r, l]), this.minLevel = s, this.maxLevel = o;
    }, e.extend(e.DisplayRect.prototype, e.Rect.prototype);
  }(n), function(e) {
    e.Spring = function(i) {
      var r = arguments;
      typeof i != "object" && (i = {
        initial: r.length && typeof r[0] == "number" ? r[0] : void 0,
        /**
         * Spring stiffness.
         * @member {Number} springStiffness
         * @memberof OpenSeadragon.Spring#
         */
        springStiffness: r.length > 1 ? r[1].springStiffness : 5,
        /**
         * Animation duration per spring.
         * @member {Number} animationTime
         * @memberof OpenSeadragon.Spring#
         */
        animationTime: r.length > 1 ? r[1].animationTime : 1.5
      }), e.console.assert(
        typeof i.springStiffness == "number" && i.springStiffness !== 0,
        "[OpenSeadragon.Spring] options.springStiffness must be a non-zero number"
      ), e.console.assert(
        typeof i.animationTime == "number" && i.animationTime >= 0,
        "[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0"
      ), i.exponential && (this._exponential = !0, delete i.exponential), e.extend(!0, this, i), this.current = {
        value: typeof this.initial == "number" ? this.initial : this._exponential ? 0 : 1,
        time: e.now()
        // always work in milliseconds
      }, e.console.assert(
        !this._exponential || this.current.value !== 0,
        "[OpenSeadragon.Spring] value must be non-zero for exponential springs"
      ), this.start = {
        value: this.current.value,
        time: this.current.time
      }, this.target = {
        value: this.current.value,
        time: this.current.time
      }, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
    }, e.Spring.prototype = {
      /**
       * @function
       * @param {Number} target
       */
      resetTo: function(i) {
        e.console.assert(
          !this._exponential || i !== 0,
          "[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs"
        ), this.start.value = this.target.value = this.current.value = i, this.start.time = this.target.time = this.current.time = e.now(), this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
      },
      /**
       * @function
       * @param {Number} target
       */
      springTo: function(i) {
        e.console.assert(
          !this._exponential || i !== 0,
          "[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs"
        ), this.start.value = this.current.value, this.start.time = this.current.time, this.target.value = i, this.target.time = this.start.time + 1e3 * this.animationTime, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
      },
      /**
       * @function
       * @param {Number} delta
       */
      shiftBy: function(i) {
        this.start.value += i, this.target.value += i, this._exponential && (e.console.assert(
          this.target.value !== 0 && this.start.value !== 0,
          "[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs"
        ), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
      },
      setExponential: function(i) {
        this._exponential = i, this._exponential && (e.console.assert(
          this.current.value !== 0 && this.target.value !== 0 && this.start.value !== 0,
          "[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs"
        ), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
      },
      /**
       * @function
       * @returns true if the value got updated, false otherwise
       */
      update: function() {
        this.current.time = e.now();
        var i, r;
        this._exponential ? (i = this.start._logValue, r = this.target._logValue) : (i = this.start.value, r = this.target.value);
        var l = this.current.time >= this.target.time ? r : i + (r - i) * t(
          this.springStiffness,
          (this.current.time - this.start.time) / (this.target.time - this.start.time)
        ), s = this.current.value;
        return this._exponential ? this.current.value = Math.exp(l) : this.current.value = l, s !== this.current.value;
      },
      /**
       * Returns whether the spring is at the target value
       * @function
       * @returns {Boolean} True if at target value, false otherwise
       */
      isAtTargetValue: function() {
        return this.current.value === this.target.value;
      }
    };
    function t(i, r) {
      return (1 - Math.exp(i * -r)) / (1 - Math.exp(-i));
    }
  }(n), function(e) {
    e.ImageJob = function(i) {
      e.extend(!0, this, {
        timeout: e.DEFAULT_SETTINGS.timeout,
        jobId: null,
        tries: 0
      }, i), this.data = null, this.userData = {}, this.errorMsg = null;
    }, e.ImageJob.prototype = {
      /**
       * Starts the image job.
       * @method
       */
      start: function() {
        this.tries++;
        var i = this, r = this.abort;
        this.jobId = window.setTimeout(function() {
          i.finish(null, null, "Image load exceeded timeout (" + i.timeout + " ms)");
        }, this.timeout), this.abort = function() {
          i.source.downloadTileAbort(i), typeof r == "function" && r();
        }, this.source.downloadTileStart(this);
      },
      /**
       * Finish this job.
       * @param {*} data data that has been downloaded
       * @param {XMLHttpRequest} request reference to the request if used
       * @param {string} errorMessage description upon failure
       */
      finish: function(i, r, l) {
        this.data = i, this.request = r, this.errorMsg = l, this.jobId && window.clearTimeout(this.jobId), this.callback(this);
      }
    }, e.ImageLoader = function(i) {
      e.extend(!0, this, {
        jobLimit: e.DEFAULT_SETTINGS.imageLoaderLimit,
        timeout: e.DEFAULT_SETTINGS.timeout,
        jobQueue: [],
        failedTiles: [],
        jobsInProgress: 0
      }, i);
    }, e.ImageLoader.prototype = {
      /**
       * Add an unloaded image to the loader queue.
       * @method
       * @param {Object} options - Options for this job.
       * @param {String} [options.src] - URL of image to download.
       * @param {Tile} [options.tile] - Tile that belongs the data to. The tile instance
       *      is not internally used and serves for custom TileSources implementations.
       * @param {TileSource} [options.source] - Image loading strategy
       * @param {String} [options.loadWithAjax] - Whether to load this image with AJAX.
       * @param {String} [options.ajaxHeaders] - Headers to add to the image request if using AJAX.
       * @param {String|Boolean} [options.crossOriginPolicy] - CORS policy to use for downloads
       * @param {String} [options.postData] - POST parameters (usually but not necessarily in k=v&k2=v2... form,
       *      see TileSource::getPostData) or null
       * @param {Boolean} [options.ajaxWithCredentials] - Whether to set withCredentials on AJAX
       *      requests.
       * @param {Function} [options.callback] - Called once image has been downloaded.
       * @param {Function} [options.abort] - Called when this image job is aborted.
       */
      addJob: function(i) {
        if (!i.source) {
          e.console.error("ImageLoader.prototype.addJob() requires [options.source]. TileSource since new API defines how images are fetched. Creating a dummy TileSource.");
          var r = e.TileSource.prototype;
          i.source = {
            downloadTileStart: r.downloadTileStart,
            downloadTileAbort: r.downloadTileAbort
          };
        }
        var l = this, s = function(h) {
          t(l, h, i.callback);
        }, o = {
          src: i.src,
          tile: i.tile || {},
          source: i.source,
          loadWithAjax: i.loadWithAjax,
          ajaxHeaders: i.loadWithAjax ? i.ajaxHeaders : null,
          crossOriginPolicy: i.crossOriginPolicy,
          ajaxWithCredentials: i.ajaxWithCredentials,
          postData: i.postData,
          callback: s,
          abort: i.abort,
          timeout: this.timeout
        }, a = new e.ImageJob(o);
        !this.jobLimit || this.jobsInProgress < this.jobLimit ? (a.start(), this.jobsInProgress++) : this.jobQueue.push(a);
      },
      /**
       * Clear any unstarted image loading jobs from the queue.
       * @method
       */
      clear: function() {
        for (var i = 0; i < this.jobQueue.length; i++) {
          var r = this.jobQueue[i];
          typeof r.abort == "function" && r.abort();
        }
        this.jobQueue = [];
      }
    };
    function t(i, r, l) {
      r.errorMsg !== "" && (r.data === null || r.data === void 0) && r.tries < 1 + i.tileRetryMax && i.failedTiles.push(r);
      var s;
      i.jobsInProgress--, (!i.jobLimit || i.jobsInProgress < i.jobLimit) && i.jobQueue.length > 0 && (s = i.jobQueue.shift(), s.start(), i.jobsInProgress++), i.tileRetryMax > 0 && i.jobQueue.length === 0 && (!i.jobLimit || i.jobsInProgress < i.jobLimit) && i.failedTiles.length > 0 && (s = i.failedTiles.shift(), setTimeout(function() {
        s.start();
      }, i.tileRetryDelay), i.jobsInProgress++), l(r.data, r.errorMsg, r.request);
    }
  }(n), function(e) {
    e.Tile = function(t, i, r, l, s, o, a, h, c, p, v, w) {
      this.level = t, this.x = i, this.y = r, this.bounds = l, this.sourceBounds = p, this.exists = s, this._url = o, this.postData = v, this.context2D = a, this.loadWithAjax = h, this.ajaxHeaders = c, w === void 0 && (e.console.warn("Tile constructor needs 'cacheKey' variable: creation tile cache in Tile class is deprecated. TileSource.prototype.getTileHashKey will be used."), w = e.TileSource.prototype.getTileHashKey(t, i, r, o, c, v)), this.cacheKey = w, this.loaded = !1, this.loading = !1, this.element = null, this.imgElement = null, this.style = null, this.position = null, this.size = null, this.flipped = !1, this.blendStart = null, this.opacity = null, this.squaredDistance = null, this.visibility = null, this.hasTransparency = !1, this.beingDrawn = !1, this.lastTouchTime = 0, this.isRightMost = !1, this.isBottomMost = !1;
    }, e.Tile.prototype = {
      /**
       * Provides a string representation of this tiles level and (x,y)
       * components.
       * @function
       * @returns {String}
       */
      toString: function() {
        return this.level + "/" + this.x + "_" + this.y;
      },
      // private
      _hasTransparencyChannel: function() {
        return console.warn("Tile.prototype._hasTransparencyChannel() has been deprecated and will be removed in the future. Use TileSource.prototype.hasTransparency() instead."), !!this.context2D || this.getUrl().match(".png");
      },
      /**
       * Renders the tile in an html container.
       * @function
       * @param {Element} container
       */
      drawHTML: function(t) {
        if (!this.cacheImageRecord) {
          e.console.warn(
            "[Tile.drawHTML] attempting to draw tile %s when it's not cached",
            this.toString()
          );
          return;
        }
        if (!this.loaded) {
          e.console.warn(
            "Attempting to draw tile %s when it's not yet loaded.",
            this.toString()
          );
          return;
        }
        if (!this.element) {
          var i = this.getImage();
          if (!i)
            return;
          this.element = e.makeNeutralElement("div"), this.imgElement = i.cloneNode(), this.imgElement.style.msInterpolationMode = "nearest-neighbor", this.imgElement.style.width = "100%", this.imgElement.style.height = "100%", this.style = this.element.style, this.style.position = "absolute";
        }
        this.element.parentNode !== t && t.appendChild(this.element), this.imgElement.parentNode !== this.element && this.element.appendChild(this.imgElement), this.style.top = this.position.y + "px", this.style.left = this.position.x + "px", this.style.height = this.size.y + "px", this.style.width = this.size.x + "px", this.flipped && (this.style.transform = "scaleX(-1)"), e.setElementOpacity(this.element, this.opacity);
      },
      /**
       * The Image object for this tile.
       * @member {Object} image
       * @memberof OpenSeadragon.Tile#
       * @deprecated
       * @returns {Image}
       */
      get image() {
        return e.console.error("[Tile.image] property has been deprecated. Use [Tile.prototype.getImage] instead."), this.getImage();
      },
      /**
       * The URL of this tile's image.
       * @member {String} url
       * @memberof OpenSeadragon.Tile#
       * @deprecated
       * @returns {String}
       */
      get url() {
        return e.console.error("[Tile.url] property has been deprecated. Use [Tile.prototype.getUrl] instead."), this.getUrl();
      },
      /**
       * Get the Image object for this tile.
       * @returns {Image}
       */
      getImage: function() {
        return this.cacheImageRecord.getImage();
      },
      /**
       * Get the url string for this tile.
       * @returns {String}
       */
      getUrl: function() {
        return typeof this._url == "function" ? this._url() : this._url;
      },
      /**
       * Get the CanvasRenderingContext2D instance for tile image data drawn
       * onto Canvas if enabled and available
       * @returns {CanvasRenderingContext2D}
       */
      getCanvasContext: function() {
        return this.context2D || this.cacheImageRecord.getRenderedContext();
      },
      /**
       * Renders the tile in a canvas-based context.
       * @function
       * @param {Canvas} context
       * @param {Function} drawingHandler - Method for firing the drawing event.
       * drawingHandler({context, tile, rendered})
       * where <code>rendered</code> is the context with the pre-drawn image.
       * @param {Number} [scale=1] - Apply a scale to position and size
       * @param {OpenSeadragon.Point} [translate] - A translation vector
       * @param {Boolean} [shouldRoundPositionAndSize] - Tells whether to round
       * position and size of tiles supporting alpha channel in non-transparency
       * context.
       * @param {OpenSeadragon.TileSource} source - The source specification of the tile.
       */
      drawCanvas: function(t, i, r, l, s, o) {
        var a = this.position.times(e.pixelDensityRatio), h = this.size.times(e.pixelDensityRatio), c;
        if (!this.context2D && !this.cacheImageRecord) {
          e.console.warn(
            "[Tile.drawCanvas] attempting to draw tile %s when it's not cached",
            this.toString()
          );
          return;
        }
        if (c = this.getCanvasContext(), !this.loaded || !c) {
          e.console.warn(
            "Attempting to draw tile %s when it's not yet loaded.",
            this.toString()
          );
          return;
        }
        t.save(), t.globalAlpha = this.opacity, typeof r == "number" && r !== 1 && (a = a.times(r), h = h.times(r)), l instanceof e.Point && (a = a.plus(l)), t.globalAlpha === 1 && this.hasTransparency && (s && (a.x = Math.round(a.x), a.y = Math.round(a.y), h.x = Math.round(h.x), h.y = Math.round(h.y)), t.clearRect(
          a.x,
          a.y,
          h.x,
          h.y
        )), i({ context: t, tile: this, rendered: c });
        var p, v;
        this.sourceBounds ? (p = Math.min(this.sourceBounds.width, c.canvas.width), v = Math.min(this.sourceBounds.height, c.canvas.height)) : (p = c.canvas.width, v = c.canvas.height), t.translate(a.x + h.x / 2, 0), this.flipped && t.scale(-1, 1), t.drawImage(
          c.canvas,
          0,
          0,
          p,
          v,
          -h.x / 2,
          a.y,
          h.x,
          h.y
        ), t.restore();
      },
      /**
       * Get the ratio between current and original size.
       * @function
       * @returns {Float}
       */
      getScaleForEdgeSmoothing: function() {
        var t;
        if (this.cacheImageRecord)
          t = this.cacheImageRecord.getRenderedContext();
        else if (this.context2D)
          t = this.context2D;
        else
          return e.console.warn(
            "[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached",
            this.toString()
          ), 1;
        return t.canvas.width / (this.size.x * e.pixelDensityRatio);
      },
      /**
       * Get a translation vector that when applied to the tile position produces integer coordinates.
       * Needed to avoid swimming and twitching.
       * @function
       * @param {Number} [scale=1] - Scale to be applied to position.
       * @returns {OpenSeadragon.Point}
       */
      getTranslationForEdgeSmoothing: function(t, i, r) {
        var l = Math.max(1, Math.ceil((r.x - i.x) / 2)), s = Math.max(1, Math.ceil((r.y - i.y) / 2));
        return new e.Point(l, s).minus(
          this.position.times(e.pixelDensityRatio).times(t || 1).apply(function(o) {
            return o % 1;
          })
        );
      },
      /**
       * Removes tile from its container.
       * @function
       */
      unload: function() {
        this.imgElement && this.imgElement.parentNode && this.imgElement.parentNode.removeChild(this.imgElement), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.imgElement = null, this.loaded = !1, this.loading = !1;
      }
    };
  }(n), function(e) {
    e.OverlayPlacement = e.Placement, e.OverlayRotationMode = e.freezeObject({
      NO_ROTATION: 1,
      EXACT: 2,
      BOUNDING_BOX: 3
    }), e.Overlay = function(t, i, r) {
      var l;
      e.isPlainObject(t) ? l = t : l = {
        element: t,
        location: i,
        placement: r
      }, this.element = l.element, this.style = l.element.style, this._init(l);
    }, e.Overlay.prototype = {
      // private
      _init: function(t) {
        this.location = t.location, this.placement = t.placement === void 0 ? e.Placement.TOP_LEFT : t.placement, this.onDraw = t.onDraw, this.checkResize = t.checkResize === void 0 ? !0 : t.checkResize, this.width = t.width === void 0 ? null : t.width, this.height = t.height === void 0 ? null : t.height, this.rotationMode = t.rotationMode || e.OverlayRotationMode.EXACT, this.location instanceof e.Rect && (this.width = this.location.width, this.height = this.location.height, this.location = this.location.getTopLeft(), this.placement = e.Placement.TOP_LEFT), this.scales = this.width !== null && this.height !== null, this.bounds = new e.Rect(
          this.location.x,
          this.location.y,
          this.width,
          this.height
        ), this.position = this.location;
      },
      /**
       * Internal function to adjust the position of an overlay
       * depending on it size and placement.
       * @function
       * @param {OpenSeadragon.Point} position
       * @param {OpenSeadragon.Point} size
       */
      adjust: function(t, i) {
        var r = e.Placement.properties[this.placement];
        r && (r.isHorizontallyCentered ? t.x -= i.x / 2 : r.isRight && (t.x -= i.x), r.isVerticallyCentered ? t.y -= i.y / 2 : r.isBottom && (t.y -= i.y));
      },
      /**
       * @function
       */
      destroy: function() {
        var t = this.element, i = this.style;
        t.parentNode && (t.parentNode.removeChild(t), t.prevElementParent && (i.display = "none", document.body.appendChild(t))), this.onDraw = null, i.top = "", i.left = "", i.position = "", this.width !== null && (i.width = ""), this.height !== null && (i.height = "");
        var r = e.getCssPropertyWithVendorPrefix(
          "transformOrigin"
        ), l = e.getCssPropertyWithVendorPrefix(
          "transform"
        );
        r && l && (i[r] = "", i[l] = "");
      },
      /**
       * @function
       * @param {Element} container
       */
      drawHTML: function(t, i) {
        var r = this.element;
        r.parentNode !== t && (r.prevElementParent = r.parentNode, r.prevNextSibling = r.nextSibling, t.appendChild(r), this.style.position = "absolute", this.size = e.getElementSize(r));
        var l = this._getOverlayPositionAndSize(i), s = l.position, o = this.size = l.size, a = l.rotate;
        if (this.onDraw)
          this.onDraw(s, o, this.element);
        else {
          var h = this.style;
          h.left = s.x + "px", h.top = s.y + "px", this.width !== null && (h.width = o.x + "px"), this.height !== null && (h.height = o.y + "px");
          var c = e.getCssPropertyWithVendorPrefix(
            "transformOrigin"
          ), p = e.getCssPropertyWithVendorPrefix(
            "transform"
          );
          c && p && (a ? (h[c] = this._getTransformOrigin(), h[p] = "rotate(" + a + "deg)") : (h[c] = "", h[p] = "")), h.display = "block";
        }
      },
      // private
      _getOverlayPositionAndSize: function(t) {
        var i = t.pixelFromPoint(this.location, !0), r = this._getSizeInPixels(t);
        this.adjust(i, r);
        var l = 0;
        if (t.getRotation(!0) && this.rotationMode !== e.OverlayRotationMode.NO_ROTATION)
          if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX && this.width !== null && this.height !== null) {
            var s = new e.Rect(i.x, i.y, r.x, r.y), o = this._getBoundingBox(s, t.getRotation(!0));
            i = o.getTopLeft(), r = o.getSize();
          } else
            l = t.getRotation(!0);
        return {
          position: i,
          size: r,
          rotate: l
        };
      },
      // private
      _getSizeInPixels: function(t) {
        var i = this.size.x, r = this.size.y;
        if (this.width !== null || this.height !== null) {
          var l = t.deltaPixelsFromPointsNoRotate(
            new e.Point(this.width || 0, this.height || 0),
            !0
          );
          this.width !== null && (i = l.x), this.height !== null && (r = l.y);
        }
        if (this.checkResize && (this.width === null || this.height === null)) {
          var s = this.size = e.getElementSize(this.element);
          this.width === null && (i = s.x), this.height === null && (r = s.y);
        }
        return new e.Point(i, r);
      },
      // private
      _getBoundingBox: function(t, i) {
        var r = this._getPlacementPoint(t);
        return t.rotate(i, r).getBoundingBox();
      },
      // private
      _getPlacementPoint: function(t) {
        var i = new e.Point(t.x, t.y), r = e.Placement.properties[this.placement];
        return r && (r.isHorizontallyCentered ? i.x += t.width / 2 : r.isRight && (i.x += t.width), r.isVerticallyCentered ? i.y += t.height / 2 : r.isBottom && (i.y += t.height)), i;
      },
      // private
      _getTransformOrigin: function() {
        var t = "", i = e.Placement.properties[this.placement];
        return i && (i.isLeft ? t = "left" : i.isRight && (t = "right"), i.isTop ? t += " top" : i.isBottom && (t += " bottom")), t;
      },
      /**
       * Changes the overlay settings.
       * @function
       * @param {OpenSeadragon.Point|OpenSeadragon.Rect|Object} location
       * If an object is specified, the options are the same than the constructor
       * except for the element which can not be changed.
       * @param {OpenSeadragon.Placement} placement
       */
      update: function(t, i) {
        var r = e.isPlainObject(t) ? t : {
          location: t,
          placement: i
        };
        this._init({
          location: r.location || this.location,
          placement: r.placement !== void 0 ? r.placement : this.placement,
          onDraw: r.onDraw || this.onDraw,
          checkResize: r.checkResize || this.checkResize,
          width: r.width !== void 0 ? r.width : this.width,
          height: r.height !== void 0 ? r.height : this.height,
          rotationMode: r.rotationMode || this.rotationMode
        });
      },
      /**
       * Returns the current bounds of the overlay in viewport coordinates
       * @function
       * @param {OpenSeadragon.Viewport} viewport the viewport
       * @returns {OpenSeadragon.Rect} overlay bounds
       */
      getBounds: function(t) {
        e.console.assert(
          t,
          "A viewport must now be passed to Overlay.getBounds."
        );
        var i = this.width, r = this.height;
        if (i === null || r === null) {
          var l = t.deltaPointsFromPixelsNoRotate(this.size, !0);
          i === null && (i = l.x), r === null && (r = l.y);
        }
        var s = this.location.clone();
        return this.adjust(s, new e.Point(i, r)), this._adjustBoundsForRotation(
          t,
          new e.Rect(s.x, s.y, i, r)
        );
      },
      // private
      _adjustBoundsForRotation: function(t, i) {
        if (!t || t.getRotation(!0) === 0 || this.rotationMode === e.OverlayRotationMode.EXACT)
          return i;
        if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX) {
          if (this.width === null || this.height === null)
            return i;
          var r = this._getOverlayPositionAndSize(t);
          return t.viewerElementToViewportRectangle(new e.Rect(
            r.position.x,
            r.position.y,
            r.size.x,
            r.size.y
          ));
        }
        return i.rotate(
          -t.getRotation(!0),
          this._getPlacementPoint(i)
        );
      }
    };
  }(n), function(e) {
    e.Drawer = function(t) {
      e.console.assert(t.viewer, "[Drawer] options.viewer is required");
      var i = arguments;
      if (e.isPlainObject(t) || (t = {
        source: i[0],
        // Reference to Viewer tile source.
        viewport: i[1],
        // Reference to Viewer viewport.
        element: i[2]
        // Parent element.
      }), e.console.assert(t.viewport, "[Drawer] options.viewport is required"), e.console.assert(t.element, "[Drawer] options.element is required"), t.source && e.console.error("[Drawer] options.source is no longer accepted; use TiledImage instead"), this.viewer = t.viewer, this.viewport = t.viewport, this.debugGridColor = typeof t.debugGridColor == "string" ? [t.debugGridColor] : t.debugGridColor || e.DEFAULT_SETTINGS.debugGridColor, t.opacity && e.console.error("[Drawer] options.opacity is no longer accepted; set the opacity on the TiledImage instead"), this.useCanvas = e.supportsCanvas && (this.viewer ? this.viewer.useCanvas : !0), this.container = e.getElement(t.element), this.canvas = e.makeNeutralElement(this.useCanvas ? "canvas" : "div"), this.context = this.useCanvas ? this.canvas.getContext("2d") : null, this.sketchCanvas = null, this.sketchContext = null, this.element = this.container, this.container.dir = "ltr", this.useCanvas) {
        var r = this._calculateCanvasSize();
        this.canvas.width = r.x, this.canvas.height = r.y;
      }
      this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.position = "absolute", e.setElementOpacity(this.canvas, this.opacity, !0), e.setElementPointerEventsNone(this.canvas), e.setElementTouchActionNone(this.canvas), this.container.style.textAlign = "left", this.container.appendChild(this.canvas), this._imageSmoothingEnabled = !0;
    }, e.Drawer.prototype = {
      // deprecated
      addOverlay: function(t, i, r, l) {
        return e.console.error("drawer.addOverlay is deprecated. Use viewer.addOverlay instead."), this.viewer.addOverlay(t, i, r, l), this;
      },
      // deprecated
      updateOverlay: function(t, i, r) {
        return e.console.error("drawer.updateOverlay is deprecated. Use viewer.updateOverlay instead."), this.viewer.updateOverlay(t, i, r), this;
      },
      // deprecated
      removeOverlay: function(t) {
        return e.console.error("drawer.removeOverlay is deprecated. Use viewer.removeOverlay instead."), this.viewer.removeOverlay(t), this;
      },
      // deprecated
      clearOverlays: function() {
        return e.console.error("drawer.clearOverlays is deprecated. Use viewer.clearOverlays instead."), this.viewer.clearOverlays(), this;
      },
      /**
       * This function converts the given point from to the drawer coordinate by
       * multiplying it with the pixel density.
       * This function does not take rotation into account, thus assuming provided
       * point is at 0 degree.
       * @param {OpenSeadragon.Point} point - the pixel point to convert
       * @returns {OpenSeadragon.Point} Point in drawer coordinate system.
       */
      viewportCoordToDrawerCoord: function(t) {
        var i = this.viewport.pixelFromPointNoRotate(t, !0);
        return new e.Point(
          i.x * e.pixelDensityRatio,
          i.y * e.pixelDensityRatio
        );
      },
      /**
       * This function will create multiple polygon paths on the drawing context by provided polygons,
       * then clip the context to the paths.
       * @param {OpenSeadragon.Point[][]} polygons - an array of polygons. A polygon is an array of OpenSeadragon.Point
       * @param {Boolean} useSketch - Whether to use the sketch canvas or not.
       */
      clipWithPolygons: function(t, i) {
        if (this.useCanvas) {
          var r = this._getContext(i);
          r.beginPath(), t.forEach(function(l) {
            l.forEach(function(s, o) {
              r[o === 0 ? "moveTo" : "lineTo"](s.x, s.y);
            });
          }), r.clip();
        }
      },
      /**
       * Set the opacity of the drawer.
       * @param {Number} opacity
       * @returns {OpenSeadragon.Drawer} Chainable.
       */
      setOpacity: function(t) {
        e.console.error("drawer.setOpacity is deprecated. Use tiledImage.setOpacity instead.");
        for (var i = this.viewer.world, r = 0; r < i.getItemCount(); r++)
          i.getItemAt(r).setOpacity(t);
        return this;
      },
      /**
       * Get the opacity of the drawer.
       * @returns {Number}
       */
      getOpacity: function() {
        e.console.error("drawer.getOpacity is deprecated. Use tiledImage.getOpacity instead.");
        for (var t = this.viewer.world, i = 0, r = 0; r < t.getItemCount(); r++) {
          var l = t.getItemAt(r).getOpacity();
          l > i && (i = l);
        }
        return i;
      },
      // deprecated
      needsUpdate: function() {
        return e.console.error("[Drawer.needsUpdate] this function is deprecated. Use World.needsDraw instead."), this.viewer.world.needsDraw();
      },
      // deprecated
      numTilesLoaded: function() {
        return e.console.error("[Drawer.numTilesLoaded] this function is deprecated. Use TileCache.numTilesLoaded instead."), this.viewer.tileCache.numTilesLoaded();
      },
      // deprecated
      reset: function() {
        return e.console.error("[Drawer.reset] this function is deprecated. Use World.resetItems instead."), this.viewer.world.resetItems(), this;
      },
      // deprecated
      update: function() {
        return e.console.error("[Drawer.update] this function is deprecated. Use Drawer.clear and World.draw instead."), this.clear(), this.viewer.world.draw(), this;
      },
      /**
       * @returns {Boolean} True if rotation is supported.
       */
      canRotate: function() {
        return this.useCanvas;
      },
      /**
       * Destroy the drawer (unload current loaded tiles)
       */
      destroy: function() {
        this.canvas.width = 1, this.canvas.height = 1, this.sketchCanvas = null, this.sketchContext = null;
      },
      /**
       * Clears the Drawer so it's ready to draw another frame.
       */
      clear: function() {
        if (this.canvas.innerHTML = "", this.useCanvas) {
          var t = this._calculateCanvasSize();
          if ((this.canvas.width !== t.x || this.canvas.height !== t.y) && (this.canvas.width = t.x, this.canvas.height = t.y, this._updateImageSmoothingEnabled(this.context), this.sketchCanvas !== null)) {
            var i = this._calculateSketchCanvasSize();
            this.sketchCanvas.width = i.x, this.sketchCanvas.height = i.y, this._updateImageSmoothingEnabled(this.sketchContext);
          }
          this._clear();
        }
      },
      _clear: function(t, i) {
        if (this.useCanvas) {
          var r = this._getContext(t);
          if (i)
            r.clearRect(i.x, i.y, i.width, i.height);
          else {
            var l = r.canvas;
            r.clearRect(0, 0, l.width, l.height);
          }
        }
      },
      /**
       * Scale from OpenSeadragon viewer rectangle to drawer rectangle
       * (ignoring rotation)
       * @param {OpenSeadragon.Rect} rectangle - The rectangle in viewport coordinate system.
       * @returns {OpenSeadragon.Rect} Rectangle in drawer coordinate system.
       */
      viewportToDrawerRectangle: function(t) {
        var i = this.viewport.pixelFromPointNoRotate(t.getTopLeft(), !0), r = this.viewport.deltaPixelsFromPointsNoRotate(t.getSize(), !0);
        return new e.Rect(
          i.x * e.pixelDensityRatio,
          i.y * e.pixelDensityRatio,
          r.x * e.pixelDensityRatio,
          r.y * e.pixelDensityRatio
        );
      },
      /**
       * Draws the given tile.
       * @param {OpenSeadragon.Tile} tile - The tile to draw.
       * @param {Function} drawingHandler - Method for firing the drawing event if using canvas.
       * drawingHandler({context, tile, rendered})
       * @param {Boolean} useSketch - Whether to use the sketch canvas or not.
       * where <code>rendered</code> is the context with the pre-drawn image.
       * @param {Float} [scale=1] - Apply a scale to tile position and size. Defaults to 1.
       * @param {OpenSeadragon.Point} [translate] A translation vector to offset tile position
       * @param {Boolean} [shouldRoundPositionAndSize] - Tells whether to round
       * position and size of tiles supporting alpha channel in non-transparency
       * context.
       * @param {OpenSeadragon.TileSource} source - The source specification of the tile.
       */
      drawTile: function(t, i, r, l, s, o, a) {
        if (e.console.assert(t, "[Drawer.drawTile] tile is required"), e.console.assert(i, "[Drawer.drawTile] drawingHandler is required"), this.useCanvas) {
          var h = this._getContext(r);
          l = l || 1, t.drawCanvas(h, i, l, s, o, a);
        } else
          t.drawHTML(this.canvas);
      },
      _getContext: function(t) {
        var i = this.context;
        if (t) {
          if (this.sketchCanvas === null) {
            this.sketchCanvas = document.createElement("canvas");
            var r = this._calculateSketchCanvasSize();
            if (this.sketchCanvas.width = r.x, this.sketchCanvas.height = r.y, this.sketchContext = this.sketchCanvas.getContext("2d"), this.viewport.getRotation() === 0) {
              var l = this;
              this.viewer.addHandler("rotate", function s() {
                if (l.viewport.getRotation() !== 0) {
                  l.viewer.removeHandler("rotate", s);
                  var o = l._calculateSketchCanvasSize();
                  l.sketchCanvas.width = o.x, l.sketchCanvas.height = o.y;
                }
              });
            }
            this._updateImageSmoothingEnabled(this.sketchContext);
          }
          i = this.sketchContext;
        }
        return i;
      },
      // private
      saveContext: function(t) {
        this.useCanvas && this._getContext(t).save();
      },
      // private
      restoreContext: function(t) {
        this.useCanvas && this._getContext(t).restore();
      },
      // private
      setClip: function(t, i) {
        if (this.useCanvas) {
          var r = this._getContext(i);
          r.beginPath(), r.rect(t.x, t.y, t.width, t.height), r.clip();
        }
      },
      // private
      drawRectangle: function(t, i, r) {
        if (this.useCanvas) {
          var l = this._getContext(r);
          l.save(), l.fillStyle = i, l.fillRect(t.x, t.y, t.width, t.height), l.restore();
        }
      },
      /**
       * Blends the sketch canvas in the main canvas.
       * @param {Object} options The options
       * @param {Float} options.opacity The opacity of the blending.
       * @param {Float} [options.scale=1] The scale at which tiles were drawn on
       * the sketch. Default is 1.
       * Use scale to draw at a lower scale and then enlarge onto the main canvas.
       * @param {OpenSeadragon.Point} [options.translate] A translation vector
       * that was used to draw the tiles
       * @param {String} [options.compositeOperation] - How the image is
       * composited onto other images; see compositeOperation in
       * {@link OpenSeadragon.Options} for possible values.
       * @param {OpenSeadragon.Rect} [options.bounds] The part of the sketch
       * canvas to blend in the main canvas. If specified, options.scale and
       * options.translate get ignored.
       */
      blendSketch: function(t, i, r, l) {
        var s = t;
        if (e.isPlainObject(s) || (s = {
          opacity: t,
          scale: i,
          translate: r,
          compositeOperation: l
        }), !(!this.useCanvas || !this.sketchCanvas)) {
          t = s.opacity, l = s.compositeOperation;
          var o = s.bounds;
          if (this.context.save(), this.context.globalAlpha = t, l && (this.context.globalCompositeOperation = l), o)
            o.x < 0 && (o.width += o.x, o.x = 0), o.x + o.width > this.canvas.width && (o.width = this.canvas.width - o.x), o.y < 0 && (o.height += o.y, o.y = 0), o.y + o.height > this.canvas.height && (o.height = this.canvas.height - o.y), this.context.drawImage(
              this.sketchCanvas,
              o.x,
              o.y,
              o.width,
              o.height,
              o.x,
              o.y,
              o.width,
              o.height
            );
          else {
            i = s.scale || 1, r = s.translate;
            var a = r instanceof e.Point ? r : new e.Point(0, 0), h = 0, c = 0;
            if (r) {
              var p = this.sketchCanvas.width - this.canvas.width, v = this.sketchCanvas.height - this.canvas.height;
              h = Math.round(p / 2), c = Math.round(v / 2);
            }
            this.context.drawImage(
              this.sketchCanvas,
              a.x - h * i,
              a.y - c * i,
              (this.canvas.width + 2 * h) * i,
              (this.canvas.height + 2 * c) * i,
              -h,
              -c,
              this.canvas.width + 2 * h,
              this.canvas.height + 2 * c
            );
          }
          this.context.restore();
        }
      },
      // private
      drawDebugInfo: function(t, i, r, l) {
        if (this.useCanvas) {
          var s = this.viewer.world.getIndexOfItem(l) % this.debugGridColor.length, o = this.context;
          o.save(), o.lineWidth = 2 * e.pixelDensityRatio, o.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", o.strokeStyle = this.debugGridColor[s], o.fillStyle = this.debugGridColor[s], this.viewport.getRotation(!0) % 360 !== 0 && this._offsetForRotation({ degrees: this.viewport.getRotation(!0) }), l.getRotation(!0) % 360 !== 0 && this._offsetForRotation({
            degrees: l.getRotation(!0),
            point: l.viewport.pixelFromPointNoRotate(
              l._getRotationPoint(!0),
              !0
            )
          }), l.viewport.getRotation(!0) % 360 === 0 && l.getRotation(!0) % 360 === 0 && l._drawer.viewer.viewport.getFlip() && l._drawer._flip(), o.strokeRect(
            t.position.x * e.pixelDensityRatio,
            t.position.y * e.pixelDensityRatio,
            t.size.x * e.pixelDensityRatio,
            t.size.y * e.pixelDensityRatio
          );
          var a = (t.position.x + t.size.x / 2) * e.pixelDensityRatio, h = (t.position.y + t.size.y / 2) * e.pixelDensityRatio;
          o.translate(a, h), o.rotate(Math.PI / 180 * -this.viewport.getRotation(!0)), o.translate(-a, -h), t.x === 0 && t.y === 0 && (o.fillText(
            "Zoom: " + this.viewport.getZoom(),
            t.position.x * e.pixelDensityRatio,
            (t.position.y - 30) * e.pixelDensityRatio
          ), o.fillText(
            "Pan: " + this.viewport.getBounds().toString(),
            t.position.x * e.pixelDensityRatio,
            (t.position.y - 20) * e.pixelDensityRatio
          )), o.fillText(
            "Level: " + t.level,
            (t.position.x + 10) * e.pixelDensityRatio,
            (t.position.y + 20) * e.pixelDensityRatio
          ), o.fillText(
            "Column: " + t.x,
            (t.position.x + 10) * e.pixelDensityRatio,
            (t.position.y + 30) * e.pixelDensityRatio
          ), o.fillText(
            "Row: " + t.y,
            (t.position.x + 10) * e.pixelDensityRatio,
            (t.position.y + 40) * e.pixelDensityRatio
          ), o.fillText(
            "Order: " + r + " of " + i,
            (t.position.x + 10) * e.pixelDensityRatio,
            (t.position.y + 50) * e.pixelDensityRatio
          ), o.fillText(
            "Size: " + t.size.toString(),
            (t.position.x + 10) * e.pixelDensityRatio,
            (t.position.y + 60) * e.pixelDensityRatio
          ), o.fillText(
            "Position: " + t.position.toString(),
            (t.position.x + 10) * e.pixelDensityRatio,
            (t.position.y + 70) * e.pixelDensityRatio
          ), this.viewport.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(), l.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(), l.viewport.getRotation(!0) % 360 === 0 && l.getRotation(!0) % 360 === 0 && l._drawer.viewer.viewport.getFlip() && l._drawer._flip(), o.restore();
        }
      },
      // private
      debugRect: function(t) {
        if (this.useCanvas) {
          var i = this.context;
          i.save(), i.lineWidth = 2 * e.pixelDensityRatio, i.strokeStyle = this.debugGridColor[0], i.fillStyle = this.debugGridColor[0], i.strokeRect(
            t.x * e.pixelDensityRatio,
            t.y * e.pixelDensityRatio,
            t.width * e.pixelDensityRatio,
            t.height * e.pixelDensityRatio
          ), i.restore();
        }
      },
      /**
       * Turns image smoothing on or off for this viewer. Note: Ignored in some (especially older) browsers that do not support this property.
       *
       * @function
       * @param {Boolean} [imageSmoothingEnabled] - Whether or not the image is
       * drawn smoothly on the canvas; see imageSmoothingEnabled in
       * {@link OpenSeadragon.Options} for more explanation.
       */
      setImageSmoothingEnabled: function(t) {
        this.useCanvas && (this._imageSmoothingEnabled = t, this._updateImageSmoothingEnabled(this.context), this.viewer.forceRedraw());
      },
      // private
      _updateImageSmoothingEnabled: function(t) {
        t.msImageSmoothingEnabled = this._imageSmoothingEnabled, t.imageSmoothingEnabled = this._imageSmoothingEnabled;
      },
      /**
       * Get the canvas size
       * @param {Boolean} sketch If set to true return the size of the sketch canvas
       * @returns {OpenSeadragon.Point} The size of the canvas
       */
      getCanvasSize: function(t) {
        var i = this._getContext(t).canvas;
        return new e.Point(i.width, i.height);
      },
      getCanvasCenter: function() {
        return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
      },
      // private
      _offsetForRotation: function(t) {
        var i = t.point ? t.point.times(e.pixelDensityRatio) : this.getCanvasCenter(), r = this._getContext(t.useSketch);
        r.save(), r.translate(i.x, i.y), this.viewer.viewport.flipped ? (r.rotate(Math.PI / 180 * -t.degrees), r.scale(-1, 1)) : r.rotate(Math.PI / 180 * t.degrees), r.translate(-i.x, -i.y);
      },
      // private
      _flip: function(t) {
        t = t || {};
        var i = t.point ? t.point.times(e.pixelDensityRatio) : this.getCanvasCenter(), r = this._getContext(t.useSketch);
        r.translate(i.x, 0), r.scale(-1, 1), r.translate(-i.x, 0);
      },
      // private
      _restoreRotationChanges: function(t) {
        var i = this._getContext(t);
        i.restore();
      },
      // private
      _calculateCanvasSize: function() {
        var t = e.pixelDensityRatio, i = this.viewport.getContainerSize();
        return {
          // canvas width and height are integers
          x: Math.round(i.x * t),
          y: Math.round(i.y * t)
        };
      },
      // private
      _calculateSketchCanvasSize: function() {
        var t = this._calculateCanvasSize();
        if (this.viewport.getRotation() === 0)
          return t;
        var i = Math.ceil(Math.sqrt(
          t.x * t.x + t.y * t.y
        ));
        return {
          x: i,
          y: i
        };
      }
    };
  }(n), function(e) {
    e.Viewport = function(t) {
      var i = arguments;
      i.length && i[0] instanceof e.Point && (t = {
        containerSize: i[0],
        contentSize: i[1],
        config: i[2]
      }), t.config && (e.extend(!0, t, t.config), delete t.config), this._margins = e.extend({
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }, t.margins || {}), delete t.margins, t.initialDegrees = t.degrees, delete t.degrees, e.extend(!0, this, {
        //required settings
        containerSize: null,
        contentSize: null,
        //internal state properties
        zoomPoint: null,
        rotationPivot: null,
        viewer: null,
        //configurable options
        springStiffness: e.DEFAULT_SETTINGS.springStiffness,
        animationTime: e.DEFAULT_SETTINGS.animationTime,
        minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio,
        maxZoomPixelRatio: e.DEFAULT_SETTINGS.maxZoomPixelRatio,
        visibilityRatio: e.DEFAULT_SETTINGS.visibilityRatio,
        wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal,
        wrapVertical: e.DEFAULT_SETTINGS.wrapVertical,
        defaultZoomLevel: e.DEFAULT_SETTINGS.defaultZoomLevel,
        minZoomLevel: e.DEFAULT_SETTINGS.minZoomLevel,
        maxZoomLevel: e.DEFAULT_SETTINGS.maxZoomLevel,
        initialDegrees: e.DEFAULT_SETTINGS.degrees,
        flipped: e.DEFAULT_SETTINGS.flipped,
        homeFillsViewer: e.DEFAULT_SETTINGS.homeFillsViewer,
        silenceMultiImageWarnings: e.DEFAULT_SETTINGS.silenceMultiImageWarnings
      }, t), this._updateContainerInnerSize(), this.centerSpringX = new e.Spring({
        initial: 0,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this.centerSpringY = new e.Spring({
        initial: 0,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this.zoomSpring = new e.Spring({
        exponential: !0,
        initial: 1,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this.degreesSpring = new e.Spring({
        initial: t.initialDegrees,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._oldDegrees = this.degreesSpring.current.value, this._setContentBounds(new e.Rect(0, 0, 1, 1), 1), this.goHome(!0), this.update();
    }, e.Viewport.prototype = {
      // deprecated
      get degrees() {
        return e.console.warn("Accessing [Viewport.degrees] is deprecated. Use viewport.getRotation instead."), this.getRotation();
      },
      // deprecated
      set degrees(t) {
        e.console.warn("Setting [Viewport.degrees] is deprecated. Use viewport.rotateTo, viewport.rotateBy, or viewport.setRotation instead."), this.rotateTo(t);
      },
      /**
       * Updates the viewport's home bounds and constraints for the given content size.
       * @function
       * @param {OpenSeadragon.Point} contentSize - size of the content in content units
       * @returns {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:reset-size
       */
      resetContentSize: function(t) {
        return e.console.assert(t, "[Viewport.resetContentSize] contentSize is required"), e.console.assert(t instanceof e.Point, "[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point"), e.console.assert(t.x > 0, "[Viewport.resetContentSize] contentSize.x must be greater than 0"), e.console.assert(t.y > 0, "[Viewport.resetContentSize] contentSize.y must be greater than 0"), this._setContentBounds(new e.Rect(0, 0, 1, t.y / t.x), t.x), this;
      },
      // deprecated
      setHomeBounds: function(t, i) {
        e.console.error("[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually."), this._setContentBounds(t, i);
      },
      // Set the viewport's content bounds
      // @param {OpenSeadragon.Rect} bounds - the new bounds in viewport coordinates
      // without rotation
      // @param {Number} contentFactor - how many content units per viewport unit
      // @fires OpenSeadragon.Viewer.event:reset-size
      // @private
      _setContentBounds: function(t, i) {
        e.console.assert(t, "[Viewport._setContentBounds] bounds is required"), e.console.assert(t instanceof e.Rect, "[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect"), e.console.assert(t.width > 0, "[Viewport._setContentBounds] bounds.width must be greater than 0"), e.console.assert(t.height > 0, "[Viewport._setContentBounds] bounds.height must be greater than 0"), this._contentBoundsNoRotate = t.clone(), this._contentSizeNoRotate = this._contentBoundsNoRotate.getSize().times(
          i
        ), this._contentBounds = t.rotate(this.getRotation()).getBoundingBox(), this._contentSize = this._contentBounds.getSize().times(i), this._contentAspectRatio = this._contentSize.x / this._contentSize.y, this.viewer && this.viewer.raiseEvent("reset-size", {
          contentSize: this._contentSizeNoRotate.clone(),
          contentFactor: i,
          homeBounds: this._contentBoundsNoRotate.clone(),
          contentBounds: this._contentBounds.clone()
        });
      },
      /**
       * Returns the home zoom in "viewport zoom" value.
       * @function
       * @returns {Number} The home zoom in "viewport zoom".
       */
      getHomeZoom: function() {
        if (this.defaultZoomLevel)
          return this.defaultZoomLevel;
        var t = this._contentAspectRatio / this.getAspectRatio(), i;
        return this.homeFillsViewer ? i = t >= 1 ? t : 1 : i = t >= 1 ? 1 : t, i / this._contentBounds.width;
      },
      /**
       * Returns the home bounds in viewport coordinates.
       * @function
       * @returns {OpenSeadragon.Rect} The home bounds in vewport coordinates.
       */
      getHomeBounds: function() {
        return this.getHomeBoundsNoRotate().rotate(-this.getRotation());
      },
      /**
       * Returns the home bounds in viewport coordinates.
       * This method ignores the viewport rotation. Use
       * {@link OpenSeadragon.Viewport#getHomeBounds} to take it into account.
       * @function
       * @returns {OpenSeadragon.Rect} The home bounds in vewport coordinates.
       */
      getHomeBoundsNoRotate: function() {
        var t = this._contentBounds.getCenter(), i = 1 / this.getHomeZoom(), r = i / this.getAspectRatio();
        return new e.Rect(
          t.x - i / 2,
          t.y - r / 2,
          i,
          r
        );
      },
      /**
       * @function
       * @param {Boolean} immediately
       * @fires OpenSeadragon.Viewer.event:home
       */
      goHome: function(t) {
        return this.viewer && this.viewer.raiseEvent("home", {
          immediately: t
        }), this.fitBounds(this.getHomeBounds(), t);
      },
      /**
       * @function
       */
      getMinZoom: function() {
        var t = this.getHomeZoom(), i = this.minZoomLevel ? this.minZoomLevel : this.minZoomImageRatio * t;
        return i;
      },
      /**
       * @function
       */
      getMaxZoom: function() {
        var t = this.maxZoomLevel;
        return t || (t = this._contentSize.x * this.maxZoomPixelRatio / this._containerInnerSize.x, t /= this._contentBounds.width), Math.max(t, this.getHomeZoom());
      },
      /**
       * @function
       */
      getAspectRatio: function() {
        return this._containerInnerSize.x / this._containerInnerSize.y;
      },
      /**
       * @function
       * @returns {OpenSeadragon.Point} The size of the container, in screen coordinates.
       */
      getContainerSize: function() {
        return new e.Point(
          this.containerSize.x,
          this.containerSize.y
        );
      },
      /**
       * The margins push the "home" region in from the sides by the specified amounts.
       * @function
       * @returns {Object} Properties (Numbers, in screen coordinates): left, top, right, bottom.
       */
      getMargins: function() {
        return e.extend({}, this._margins);
      },
      /**
       * The margins push the "home" region in from the sides by the specified amounts.
       * @function
       * @param {Object} margins - Properties (Numbers, in screen coordinates): left, top, right, bottom.
       */
      setMargins: function(t) {
        e.console.assert(e.type(t) === "object", "[Viewport.setMargins] margins must be an object"), this._margins = e.extend({
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }, t), this._updateContainerInnerSize(), this.viewer && this.viewer.forceRedraw();
      },
      /**
       * Returns the bounds of the visible area in viewport coordinates.
       * @function
       * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
       * @returns {OpenSeadragon.Rect} The location you are zoomed/panned to, in viewport coordinates.
       */
      getBounds: function(t) {
        return this.getBoundsNoRotate(t).rotate(-this.getRotation(t));
      },
      /**
       * Returns the bounds of the visible area in viewport coordinates.
       * This method ignores the viewport rotation. Use
       * {@link OpenSeadragon.Viewport#getBounds} to take it into account.
       * @function
       * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
       * @returns {OpenSeadragon.Rect} The location you are zoomed/panned to, in viewport coordinates.
       */
      getBoundsNoRotate: function(t) {
        var i = this.getCenter(t), r = 1 / this.getZoom(t), l = r / this.getAspectRatio();
        return new e.Rect(
          i.x - r / 2,
          i.y - l / 2,
          r,
          l
        );
      },
      /**
       * @function
       * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
       * @returns {OpenSeadragon.Rect} The location you are zoomed/panned to,
       * including the space taken by margins, in viewport coordinates.
       */
      getBoundsWithMargins: function(t) {
        return this.getBoundsNoRotateWithMargins(t).rotate(
          -this.getRotation(t),
          this.getCenter(t)
        );
      },
      /**
       * @function
       * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
       * @returns {OpenSeadragon.Rect} The location you are zoomed/panned to,
       * including the space taken by margins, in viewport coordinates.
       */
      getBoundsNoRotateWithMargins: function(t) {
        var i = this.getBoundsNoRotate(t), r = this._containerInnerSize.x * this.getZoom(t);
        return i.x -= this._margins.left / r, i.y -= this._margins.top / r, i.width += (this._margins.left + this._margins.right) / r, i.height += (this._margins.top + this._margins.bottom) / r, i;
      },
      /**
       * @function
       * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
       */
      getCenter: function(t) {
        var i = new e.Point(
          this.centerSpringX.current.value,
          this.centerSpringY.current.value
        ), r = new e.Point(
          this.centerSpringX.target.value,
          this.centerSpringY.target.value
        ), l, s, o, a, h, c, p, v;
        return t ? i : this.zoomPoint ? (l = this.pixelFromPoint(this.zoomPoint, !0), s = this.getZoom(), o = 1 / s, a = o / this.getAspectRatio(), h = new e.Rect(
          i.x - o / 2,
          i.y - a / 2,
          o,
          a
        ), c = this._pixelFromPoint(this.zoomPoint, h), p = c.minus(l).rotate(-this.getRotation(!0)), v = p.divide(this._containerInnerSize.x * s), r.plus(v)) : r;
      },
      /**
       * @function
       * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
       */
      getZoom: function(t) {
        return t ? this.zoomSpring.current.value : this.zoomSpring.target.value;
      },
      // private
      _applyZoomConstraints: function(t) {
        return Math.max(
          Math.min(t, this.getMaxZoom()),
          this.getMinZoom()
        );
      },
      /**
       * @function
       * @private
       * @param {OpenSeadragon.Rect} bounds
       * @returns {OpenSeadragon.Rect} constrained bounds.
       */
      _applyBoundaryConstraints: function(t) {
        var i = this.viewportToViewerElementRectangle(t).getBoundingBox(), r = this.viewportToViewerElementRectangle(this._contentBoundsNoRotate).getBoundingBox(), l = !1, s = !1;
        if (!this.wrapHorizontal) {
          var o = i.x + i.width, a = r.x + r.width, h, c, p;
          i.width > r.width ? h = this.visibilityRatio * r.width : h = this.visibilityRatio * i.width, c = r.x - o + h, p = a - i.x - h, h > r.width ? (i.x += (c + p) / 2, l = !0) : p < 0 ? (i.x += p, l = !0) : c > 0 && (i.x += c, l = !0);
        }
        if (!this.wrapVertical) {
          var v = i.y + i.height, w = r.y + r.height, E, _, S;
          i.height > r.height ? E = this.visibilityRatio * r.height : E = this.visibilityRatio * i.height, _ = r.y - v + E, S = w - i.y - E, E > r.height ? (i.y += (_ + S) / 2, s = !0) : S < 0 ? (i.y += S, s = !0) : _ > 0 && (i.y += _, s = !0);
        }
        var C = l || s, b = C ? this.viewerElementToViewportRectangle(i) : t.clone();
        return b.xConstrained = l, b.yConstrained = s, b.constraintApplied = C, b;
      },
      /**
       * @function
       * @private
       * @param {Boolean} [immediately=false] - whether the function that triggered this event was
       * called with the "immediately" flag
       */
      _raiseConstraintsEvent: function(t) {
        this.viewer && this.viewer.raiseEvent("constrain", {
          immediately: t
        });
      },
      /**
       * Enforces the minZoom, maxZoom and visibilityRatio constraints by
       * zooming and panning to the closest acceptable zoom and location.
       * @function
       * @param {Boolean} [immediately=false]
       * @returns {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:constrain if constraints were applied
       */
      applyConstraints: function(t) {
        var i = this.getZoom(), r = this._applyZoomConstraints(i);
        i !== r && this.zoomTo(r, this.zoomPoint, t);
        var l = this.getConstrainedBounds(!1);
        return l.constraintApplied && (this.fitBounds(l, t), this._raiseConstraintsEvent(t)), this;
      },
      /**
       * Equivalent to {@link OpenSeadragon.Viewport#applyConstraints}
       * @function
       * @param {Boolean} [immediately=false]
       * @returns {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:constrain
       */
      ensureVisible: function(t) {
        return this.applyConstraints(t);
      },
      /**
       * @function
       * @private
       * @param {OpenSeadragon.Rect} bounds
       * @param {Object} options (immediately=false, constraints=false)
       * @returns {OpenSeadragon.Viewport} Chainable.
       */
      _fitBounds: function(t, i) {
        i = i || {};
        var r = i.immediately || !1, l = i.constraints || !1, s = this.getAspectRatio(), o = t.getCenter(), a = new e.Rect(
          t.x,
          t.y,
          t.width,
          t.height,
          t.degrees + this.getRotation()
        ).getBoundingBox();
        a.getAspectRatio() >= s ? a.height = a.width / s : a.width = a.height * s, a.x = o.x - a.width / 2, a.y = o.y - a.height / 2;
        var h = 1 / a.width;
        if (r)
          return this.panTo(o, !0), this.zoomTo(h, null, !0), l && this.applyConstraints(!0), this;
        var c = this.getCenter(!0), p = this.getZoom(!0);
        this.panTo(c, !0), this.zoomTo(p, null, !0);
        var v = this.getBounds(), w = this.getZoom();
        if (w === 0 || Math.abs(h / w - 1) < 1e-8)
          return this.zoomTo(h, null, !0), this.panTo(o, r), l && this.applyConstraints(!1), this;
        if (l) {
          this.panTo(o, !1), h = this._applyZoomConstraints(h), this.zoomTo(h, null, !1);
          var E = this.getConstrainedBounds();
          this.panTo(c, !0), this.zoomTo(p, null, !0), this.fitBounds(E);
        } else {
          var _ = a.rotate(-this.getRotation()), S = _.getTopLeft().times(h).minus(v.getTopLeft().times(w)).divide(h - w);
          this.zoomTo(h, S, r);
        }
        return this;
      },
      /**
       * Makes the viewport zoom and pan so that the specified bounds take
       * as much space as possible in the viewport.
       * Note: this method ignores the constraints (minZoom, maxZoom and
       * visibilityRatio).
       * Use {@link OpenSeadragon.Viewport#fitBoundsWithConstraints} to enforce
       * them.
       * @function
       * @param {OpenSeadragon.Rect} bounds
       * @param {Boolean} [immediately=false]
       * @returns {OpenSeadragon.Viewport} Chainable.
       */
      fitBounds: function(t, i) {
        return this._fitBounds(t, {
          immediately: i,
          constraints: !1
        });
      },
      /**
       * Makes the viewport zoom and pan so that the specified bounds take
       * as much space as possible in the viewport while enforcing the constraints
       * (minZoom, maxZoom and visibilityRatio).
       * Note: because this method enforces the constraints, part of the
       * provided bounds may end up outside of the viewport.
       * Use {@link OpenSeadragon.Viewport#fitBounds} to ignore them.
       * @function
       * @param {OpenSeadragon.Rect} bounds
       * @param {Boolean} [immediately=false]
       * @returns {OpenSeadragon.Viewport} Chainable.
       */
      fitBoundsWithConstraints: function(t, i) {
        return this._fitBounds(t, {
          immediately: i,
          constraints: !0
        });
      },
      /**
       * Zooms so the image just fills the viewer vertically.
       * @param {Boolean} immediately
       * @returns {OpenSeadragon.Viewport} Chainable.
       */
      fitVertically: function(t) {
        var i = new e.Rect(
          this._contentBounds.x + this._contentBounds.width / 2,
          this._contentBounds.y,
          0,
          this._contentBounds.height
        );
        return this.fitBounds(i, t);
      },
      /**
       * Zooms so the image just fills the viewer horizontally.
       * @param {Boolean} immediately
       * @returns {OpenSeadragon.Viewport} Chainable.
       */
      fitHorizontally: function(t) {
        var i = new e.Rect(
          this._contentBounds.x,
          this._contentBounds.y + this._contentBounds.height / 2,
          this._contentBounds.width,
          0
        );
        return this.fitBounds(i, t);
      },
      /**
       * Returns bounds taking constraints into account
       * Added to improve constrained panning
       * @param {Boolean} current - Pass true for the current location; defaults to false (target location).
       * @returns {OpenSeadragon.Rect} The bounds in viewport coordinates after applying constraints. The returned $.Rect
       *                               contains additional properties constraintsApplied, xConstrained and yConstrained.
       *                               These flags indicate whether the viewport bounds were modified by the constraints
       *                               of the viewer rectangle, and in which dimension(s).
       */
      getConstrainedBounds: function(t) {
        var i, r;
        return i = this.getBounds(t), r = this._applyBoundaryConstraints(i), r;
      },
      /**
       * @function
       * @param {OpenSeadragon.Point} delta
       * @param {Boolean} immediately
       * @returns {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:pan
       */
      panBy: function(t, i) {
        var r = new e.Point(
          this.centerSpringX.target.value,
          this.centerSpringY.target.value
        );
        return this.panTo(r.plus(t), i);
      },
      /**
       * @function
       * @param {OpenSeadragon.Point} center
       * @param {Boolean} immediately
       * @returns {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:pan
       */
      panTo: function(t, i) {
        return i ? (this.centerSpringX.resetTo(t.x), this.centerSpringY.resetTo(t.y)) : (this.centerSpringX.springTo(t.x), this.centerSpringY.springTo(t.y)), this.viewer && this.viewer.raiseEvent("pan", {
          center: t,
          immediately: i
        }), this;
      },
      /**
       * @function
       * @returns {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:zoom
       */
      zoomBy: function(t, i, r) {
        return this.zoomTo(
          this.zoomSpring.target.value * t,
          i,
          r
        );
      },
      /**
       * Zooms to the specified zoom level
       * @function
       * @param {Number} zoom The zoom level to zoom to.
       * @param {OpenSeadragon.Point} [refPoint] The point which will stay at
       * the same screen location. Defaults to the viewport center.
       * @param {Boolean} [immediately=false]
       * @returns {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:zoom
       */
      zoomTo: function(t, i, r) {
        var l = this;
        return this.zoomPoint = i instanceof e.Point && !isNaN(i.x) && !isNaN(i.y) ? i : null, r ? this._adjustCenterSpringsForZoomPoint(function() {
          l.zoomSpring.resetTo(t);
        }) : this.zoomSpring.springTo(t), this.viewer && this.viewer.raiseEvent("zoom", {
          zoom: t,
          refPoint: i,
          immediately: r
        }), this;
      },
      /**
       * Rotates this viewport to the angle specified.
       * @function
       * @param {Number} degrees The degrees to set the rotation to.
       * @param {Boolean} [immediately=false] Whether to animate to the new angle
       * or rotate immediately.
       * * @returns {OpenSeadragon.Viewport} Chainable.
       */
      setRotation: function(t, i) {
        return this.rotateTo(t, null, i);
      },
      /**
       * Gets the current rotation in degrees.
       * @function
       * @param {Boolean} [current=false] True for current rotation, false for target.
       * @returns {Number} The current rotation in degrees.
       */
      getRotation: function(t) {
        return t ? this.degreesSpring.current.value : this.degreesSpring.target.value;
      },
      /**
       * Rotates this viewport to the angle specified around a pivot point. Alias for rotateTo.
       * @function
       * @param {Number} degrees The degrees to set the rotation to.
       * @param {OpenSeadragon.Point} [pivot] (Optional) point in viewport coordinates
       * around which the rotation should be performed. Defaults to the center of the viewport.
       * @param {Boolean} [immediately=false] Whether to animate to the new angle
       * or rotate immediately.
       * * @returns {OpenSeadragon.Viewport} Chainable.
       */
      setRotationWithPivot: function(t, i, r) {
        return this.rotateTo(t, i, r);
      },
      /**
       * Rotates this viewport to the angle specified.
       * @function
       * @param {Number} degrees The degrees to set the rotation to.
       * @param {OpenSeadragon.Point} [pivot] (Optional) point in viewport coordinates
       * around which the rotation should be performed. Defaults to the center of the viewport.
       * @param {Boolean} [immediately=false] Whether to animate to the new angle
       * or rotate immediately.
       * @returns {OpenSeadragon.Viewport} Chainable.
       */
      rotateTo: function(t, i, r) {
        if (!this.viewer || !this.viewer.drawer.canRotate())
          return this;
        if (this.degreesSpring.target.value === t && this.degreesSpring.isAtTargetValue())
          return this;
        if (this.rotationPivot = i instanceof e.Point && !isNaN(i.x) && !isNaN(i.y) ? i : null, r)
          if (this.rotationPivot) {
            var l = t - this._oldDegrees;
            if (!l)
              return this.rotationPivot = null, this;
            this._rotateAboutPivot(t);
          } else
            this.degreesSpring.resetTo(t);
        else {
          var s = e.positiveModulo(this.degreesSpring.current.value, 360), o = e.positiveModulo(t, 360), a = o - s;
          a > 180 ? o -= 360 : a < -180 && (o += 360);
          var h = s - o;
          this.degreesSpring.resetTo(t + h), this.degreesSpring.springTo(t);
        }
        return this._setContentBounds(
          this.viewer.world.getHomeBounds(),
          this.viewer.world.getContentFactor()
        ), this.viewer.forceRedraw(), this.viewer.raiseEvent("rotate", { degrees: t, immediately: !!r, pivot: this.rotationPivot || this.getCenter() }), this;
      },
      /**
       * Rotates this viewport by the angle specified.
       * @function
       * @param {Number} degrees The degrees by which to rotate the viewport.
       * @param {OpenSeadragon.Point} [pivot] (Optional) point in viewport coordinates
       * around which the rotation should be performed. Defaults to the center of the viewport.
       * * @param {Boolean} [immediately=false] Whether to animate to the new angle
       * or rotate immediately.
       * @returns {OpenSeadragon.Viewport} Chainable.
       */
      rotateBy: function(t, i, r) {
        return this.rotateTo(this.degreesSpring.target.value + t, i, r);
      },
      /**
       * @function
       * @returns {OpenSeadragon.Viewport} Chainable.
       * @fires OpenSeadragon.Viewer.event:resize
       */
      resize: function(t, i) {
        var r = this.getBoundsNoRotate(), l = r, s;
        this.containerSize.x = t.x, this.containerSize.y = t.y, this._updateContainerInnerSize(), i && (s = t.x / this.containerSize.x, l.width = r.width * s, l.height = l.width / this.getAspectRatio()), this.viewer && this.viewer.raiseEvent("resize", {
          newContainerSize: t,
          maintain: i
        });
        var o = this.fitBounds(l, !0);
        return this.viewer && this.viewer.raiseEvent("after-resize", {
          newContainerSize: t,
          maintain: i
        }), o;
      },
      // private
      _updateContainerInnerSize: function() {
        this._containerInnerSize = new e.Point(
          Math.max(1, this.containerSize.x - (this._margins.left + this._margins.right)),
          Math.max(1, this.containerSize.y - (this._margins.top + this._margins.bottom))
        );
      },
      /**
       * Update the zoom, degrees, and center (X and Y) springs.
       * @function
       * @returns {Boolean} True if any change has been made, false otherwise.
       */
      update: function() {
        var t = this;
        this._adjustCenterSpringsForZoomPoint(function() {
          t.zoomSpring.update();
        }), this.degreesSpring.isAtTargetValue() && (this.rotationPivot = null), this.centerSpringX.update(), this.centerSpringY.update(), this.rotationPivot ? this._rotateAboutPivot(!0) : this.degreesSpring.update();
        var i = this.centerSpringX.current.value !== this._oldCenterX || this.centerSpringY.current.value !== this._oldCenterY || this.zoomSpring.current.value !== this._oldZoom || this.degreesSpring.current.value !== this._oldDegrees;
        return this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._oldDegrees = this.degreesSpring.current.value, i;
      },
      // private - pass true to use spring, or a number for degrees for immediate rotation
      _rotateAboutPivot: function(t) {
        var i = t === !0, r = this.rotationPivot.minus(this.getCenter());
        this.centerSpringX.shiftBy(r.x), this.centerSpringY.shiftBy(r.y), i ? this.degreesSpring.update() : this.degreesSpring.resetTo(t);
        var l = this.degreesSpring.current.value - this._oldDegrees, s = r.rotate(l * -1).times(-1);
        this.centerSpringX.shiftBy(s.x), this.centerSpringY.shiftBy(s.y);
      },
      // private
      _adjustCenterSpringsForZoomPoint: function(t) {
        if (this.zoomPoint) {
          var i = this.pixelFromPoint(this.zoomPoint, !0);
          t();
          var r = this.pixelFromPoint(this.zoomPoint, !0), l = r.minus(i), s = this.deltaPointsFromPixels(
            l,
            !0
          );
          this.centerSpringX.shiftBy(s.x), this.centerSpringY.shiftBy(s.y), this.zoomSpring.isAtTargetValue() && (this.zoomPoint = null);
        } else
          t();
      },
      /**
       * Convert a delta (translation vector) from viewport coordinates to pixels
       * coordinates. This method does not take rotation into account.
       * Consider using deltaPixelsFromPoints if you need to account for rotation.
       * @param {OpenSeadragon.Point} deltaPoints - The translation vector to convert.
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      deltaPixelsFromPointsNoRotate: function(t, i) {
        return t.times(
          this._containerInnerSize.x * this.getZoom(i)
        );
      },
      /**
       * Convert a delta (translation vector) from viewport coordinates to pixels
       * coordinates.
       * @param {OpenSeadragon.Point} deltaPoints - The translation vector to convert.
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      deltaPixelsFromPoints: function(t, i) {
        return this.deltaPixelsFromPointsNoRotate(
          t.rotate(this.getRotation(i)),
          i
        );
      },
      /**
       * Convert a delta (translation vector) from pixels coordinates to viewport
       * coordinates. This method does not take rotation into account.
       * Consider using deltaPointsFromPixels if you need to account for rotation.
       * @param {OpenSeadragon.Point} deltaPixels - The translation vector to convert.
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      deltaPointsFromPixelsNoRotate: function(t, i) {
        return t.divide(
          this._containerInnerSize.x * this.getZoom(i)
        );
      },
      /**
       * Convert a delta (translation vector) from pixels coordinates to viewport
       * coordinates.
       * @param {OpenSeadragon.Point} deltaPixels - The translation vector to convert.
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      deltaPointsFromPixels: function(t, i) {
        return this.deltaPointsFromPixelsNoRotate(t, i).rotate(-this.getRotation(i));
      },
      /**
       * Convert viewport coordinates to pixels coordinates.
       * This method does not take rotation into account.
       * Consider using pixelFromPoint if you need to account for rotation.
       * @param {OpenSeadragon.Point} point the viewport coordinates
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      pixelFromPointNoRotate: function(t, i) {
        return this._pixelFromPointNoRotate(
          t,
          this.getBoundsNoRotate(i)
        );
      },
      /**
       * Convert viewport coordinates to pixel coordinates.
       * @param {OpenSeadragon.Point} point the viewport coordinates
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      pixelFromPoint: function(t, i) {
        return this._pixelFromPoint(t, this.getBoundsNoRotate(i));
      },
      // private
      _pixelFromPointNoRotate: function(t, i) {
        return t.minus(
          i.getTopLeft()
        ).times(
          this._containerInnerSize.x / i.width
        ).plus(
          new e.Point(this._margins.left, this._margins.top)
        );
      },
      // private
      _pixelFromPoint: function(t, i) {
        return this._pixelFromPointNoRotate(
          t.rotate(this.getRotation(!0), this.getCenter(!0)),
          i
        );
      },
      /**
       * Convert pixel coordinates to viewport coordinates.
       * This method does not take rotation into account.
       * Consider using pointFromPixel if you need to account for rotation.
       * @param {OpenSeadragon.Point} pixel Pixel coordinates
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      pointFromPixelNoRotate: function(t, i) {
        var r = this.getBoundsNoRotate(i);
        return t.minus(
          new e.Point(this._margins.left, this._margins.top)
        ).divide(
          this._containerInnerSize.x / r.width
        ).plus(
          r.getTopLeft()
        );
      },
      /**
       * Convert pixel coordinates to viewport coordinates.
       * @param {OpenSeadragon.Point} pixel Pixel coordinates
       * @param {Boolean} [current=false] - Pass true for the current location;
       * defaults to false (target location).
       * @returns {OpenSeadragon.Point}
       */
      pointFromPixel: function(t, i) {
        return this.pointFromPixelNoRotate(t, i).rotate(
          -this.getRotation(i),
          this.getCenter(i)
        );
      },
      // private
      _viewportToImageDelta: function(t, i) {
        var r = this._contentBoundsNoRotate.width;
        return new e.Point(
          t * this._contentSizeNoRotate.x / r,
          i * this._contentSizeNoRotate.x / r
        );
      },
      /**
       * Translates from OpenSeadragon viewer coordinate system to image coordinate system.
       * This method can be called either by passing X,Y coordinates or an
       * OpenSeadragon.Point
       * Note: not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.
       * @function
       * @param {(OpenSeadragon.Point|Number)} viewerX either a point or the X
       * coordinate in viewport coordinate system.
       * @param {Number} [viewerY] Y coordinate in viewport coordinate system.
       * @returns {OpenSeadragon.Point} a point representing the coordinates in the image.
       */
      viewportToImageCoordinates: function(t, i) {
        if (t instanceof e.Point)
          return this.viewportToImageCoordinates(t.x, t.y);
        if (this.viewer) {
          var r = this.viewer.world.getItemCount();
          if (r > 1)
            this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.");
          else if (r === 1) {
            var l = this.viewer.world.getItemAt(0);
            return l.viewportToImageCoordinates(t, i, !0);
          }
        }
        return this._viewportToImageDelta(
          t - this._contentBoundsNoRotate.x,
          i - this._contentBoundsNoRotate.y
        );
      },
      // private
      _imageToViewportDelta: function(t, i) {
        var r = this._contentBoundsNoRotate.width;
        return new e.Point(
          t / this._contentSizeNoRotate.x * r,
          i / this._contentSizeNoRotate.x * r
        );
      },
      /**
       * Translates from image coordinate system to OpenSeadragon viewer coordinate system
       * This method can be called either by passing X,Y coordinates or an
       * OpenSeadragon.Point
       * Note: not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.
       * @function
       * @param {(OpenSeadragon.Point | Number)} imageX the point or the
       * X coordinate in image coordinate system.
       * @param {Number} [imageY] Y coordinate in image coordinate system.
       * @returns {OpenSeadragon.Point} a point representing the coordinates in the viewport.
       */
      imageToViewportCoordinates: function(t, i) {
        if (t instanceof e.Point)
          return this.imageToViewportCoordinates(t.x, t.y);
        if (this.viewer) {
          var r = this.viewer.world.getItemCount();
          if (r > 1)
            this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.");
          else if (r === 1) {
            var l = this.viewer.world.getItemAt(0);
            return l.imageToViewportCoordinates(t, i, !0);
          }
        }
        var s = this._imageToViewportDelta(t, i);
        return s.x += this._contentBoundsNoRotate.x, s.y += this._contentBoundsNoRotate.y, s;
      },
      /**
       * Translates from a rectangle which describes a portion of the image in
       * pixel coordinates to OpenSeadragon viewport rectangle coordinates.
       * This method can be called either by passing X,Y,width,height or an
       * OpenSeadragon.Rect
       * Note: not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.
       * @function
       * @param {(OpenSeadragon.Rect | Number)} imageX the rectangle or the X
       * coordinate of the top left corner of the rectangle in image coordinate system.
       * @param {Number} [imageY] the Y coordinate of the top left corner of the rectangle
       * in image coordinate system.
       * @param {Number} [pixelWidth] the width in pixel of the rectangle.
       * @param {Number} [pixelHeight] the height in pixel of the rectangle.
       * @returns {OpenSeadragon.Rect} This image's bounds in viewport coordinates
       */
      imageToViewportRectangle: function(t, i, r, l) {
        var s = t;
        if (s instanceof e.Rect || (s = new e.Rect(t, i, r, l)), this.viewer) {
          var o = this.viewer.world.getItemCount();
          if (o > 1)
            this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.");
          else if (o === 1) {
            var a = this.viewer.world.getItemAt(0);
            return a.imageToViewportRectangle(
              t,
              i,
              r,
              l,
              !0
            );
          }
        }
        var h = this.imageToViewportCoordinates(s.x, s.y), c = this._imageToViewportDelta(s.width, s.height);
        return new e.Rect(
          h.x,
          h.y,
          c.x,
          c.y,
          s.degrees
        );
      },
      /**
       * Translates from a rectangle which describes a portion of
       * the viewport in point coordinates to image rectangle coordinates.
       * This method can be called either by passing X,Y,width,height or an
       * OpenSeadragon.Rect
       * Note: not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.
       * @function
       * @param {(OpenSeadragon.Rect | Number)} viewerX either a rectangle or
       * the X coordinate of the top left corner of the rectangle in viewport
       * coordinate system.
       * @param {Number} [viewerY] the Y coordinate of the top left corner of the rectangle
       * in viewport coordinate system.
       * @param {Number} [pointWidth] the width of the rectangle in viewport coordinate system.
       * @param {Number} [pointHeight] the height of the rectangle in viewport coordinate system.
       */
      viewportToImageRectangle: function(t, i, r, l) {
        var s = t;
        if (s instanceof e.Rect || (s = new e.Rect(t, i, r, l)), this.viewer) {
          var o = this.viewer.world.getItemCount();
          if (o > 1)
            this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.");
          else if (o === 1) {
            var a = this.viewer.world.getItemAt(0);
            return a.viewportToImageRectangle(
              t,
              i,
              r,
              l,
              !0
            );
          }
        }
        var h = this.viewportToImageCoordinates(s.x, s.y), c = this._viewportToImageDelta(s.width, s.height);
        return new e.Rect(
          h.x,
          h.y,
          c.x,
          c.y,
          s.degrees
        );
      },
      /**
       * Convert pixel coordinates relative to the viewer element to image
       * coordinates.
       * Note: not accurate with multi-image.
       * @param {OpenSeadragon.Point} pixel
       * @returns {OpenSeadragon.Point}
       */
      viewerElementToImageCoordinates: function(t) {
        var i = this.pointFromPixel(t, !0);
        return this.viewportToImageCoordinates(i);
      },
      /**
       * Convert pixel coordinates relative to the image to
       * viewer element coordinates.
       * Note: not accurate with multi-image.
       * @param {OpenSeadragon.Point} pixel
       * @returns {OpenSeadragon.Point}
       */
      imageToViewerElementCoordinates: function(t) {
        var i = this.imageToViewportCoordinates(t);
        return this.pixelFromPoint(i, !0);
      },
      /**
       * Convert pixel coordinates relative to the window to image coordinates.
       * Note: not accurate with multi-image.
       * @param {OpenSeadragon.Point} pixel
       * @returns {OpenSeadragon.Point}
       */
      windowToImageCoordinates: function(t) {
        e.console.assert(
          this.viewer,
          "[Viewport.windowToImageCoordinates] the viewport must have a viewer."
        );
        var i = t.minus(
          e.getElementPosition(this.viewer.element)
        );
        return this.viewerElementToImageCoordinates(i);
      },
      /**
       * Convert image coordinates to pixel coordinates relative to the window.
       * Note: not accurate with multi-image.
       * @param {OpenSeadragon.Point} pixel
       * @returns {OpenSeadragon.Point}
       */
      imageToWindowCoordinates: function(t) {
        e.console.assert(
          this.viewer,
          "[Viewport.imageToWindowCoordinates] the viewport must have a viewer."
        );
        var i = this.imageToViewerElementCoordinates(t);
        return i.plus(
          e.getElementPosition(this.viewer.element)
        );
      },
      /**
       * Convert pixel coordinates relative to the viewer element to viewport
       * coordinates.
       * @param {OpenSeadragon.Point} pixel
       * @returns {OpenSeadragon.Point}
       */
      viewerElementToViewportCoordinates: function(t) {
        return this.pointFromPixel(t, !0);
      },
      /**
       * Convert viewport coordinates to pixel coordinates relative to the
       * viewer element.
       * @param {OpenSeadragon.Point} point
       * @returns {OpenSeadragon.Point}
       */
      viewportToViewerElementCoordinates: function(t) {
        return this.pixelFromPoint(t, !0);
      },
      /**
       * Convert a rectangle in pixel coordinates relative to the viewer element
       * to viewport coordinates.
       * @param {OpenSeadragon.Rect} rectangle the rectangle to convert
       * @returns {OpenSeadragon.Rect} the converted rectangle
       */
      viewerElementToViewportRectangle: function(t) {
        return e.Rect.fromSummits(
          this.pointFromPixel(t.getTopLeft(), !0),
          this.pointFromPixel(t.getTopRight(), !0),
          this.pointFromPixel(t.getBottomLeft(), !0)
        );
      },
      /**
       * Convert a rectangle in viewport coordinates to pixel coordinates relative
       * to the viewer element.
       * @param {OpenSeadragon.Rect} rectangle the rectangle to convert
       * @returns {OpenSeadragon.Rect} the converted rectangle
       */
      viewportToViewerElementRectangle: function(t) {
        return e.Rect.fromSummits(
          this.pixelFromPoint(t.getTopLeft(), !0),
          this.pixelFromPoint(t.getTopRight(), !0),
          this.pixelFromPoint(t.getBottomLeft(), !0)
        );
      },
      /**
       * Convert pixel coordinates relative to the window to viewport coordinates.
       * @param {OpenSeadragon.Point} pixel
       * @returns {OpenSeadragon.Point}
       */
      windowToViewportCoordinates: function(t) {
        e.console.assert(
          this.viewer,
          "[Viewport.windowToViewportCoordinates] the viewport must have a viewer."
        );
        var i = t.minus(
          e.getElementPosition(this.viewer.element)
        );
        return this.viewerElementToViewportCoordinates(i);
      },
      /**
       * Convert viewport coordinates to pixel coordinates relative to the window.
       * @param {OpenSeadragon.Point} point
       * @returns {OpenSeadragon.Point}
       */
      viewportToWindowCoordinates: function(t) {
        e.console.assert(
          this.viewer,
          "[Viewport.viewportToWindowCoordinates] the viewport must have a viewer."
        );
        var i = this.viewportToViewerElementCoordinates(t);
        return i.plus(
          e.getElementPosition(this.viewer.element)
        );
      },
      /**
       * Convert a viewport zoom to an image zoom.
       * Image zoom: ratio of the original image size to displayed image size.
       * 1 means original image size, 0.5 half size...
       * Viewport zoom: ratio of the displayed image's width to viewport's width.
       * 1 means identical width, 2 means image's width is twice the viewport's width...
       * Note: not accurate with multi-image.
       * @function
       * @param {Number} viewportZoom The viewport zoom
       * target zoom.
       * @returns {Number} imageZoom The image zoom
       */
      viewportToImageZoom: function(t) {
        if (this.viewer) {
          var i = this.viewer.world.getItemCount();
          if (i > 1)
            this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageZoom] is not accurate with multi-image.");
          else if (i === 1) {
            var r = this.viewer.world.getItemAt(0);
            return r.viewportToImageZoom(t);
          }
        }
        var l = this._contentSizeNoRotate.x, s = this._containerInnerSize.x, o = this._contentBoundsNoRotate.width, a = s / l * o;
        return t * a;
      },
      /**
       * Convert an image zoom to a viewport zoom.
       * Image zoom: ratio of the original image size to displayed image size.
       * 1 means original image size, 0.5 half size...
       * Viewport zoom: ratio of the displayed image's width to viewport's width.
       * 1 means identical width, 2 means image's width is twice the viewport's width...
       * Note: not accurate with multi-image.
       * @function
       * @param {Number} imageZoom The image zoom
       * target zoom.
       * @returns {Number} viewportZoom The viewport zoom
       */
      imageToViewportZoom: function(t) {
        if (this.viewer) {
          var i = this.viewer.world.getItemCount();
          if (i > 1)
            this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportZoom] is not accurate with multi-image.");
          else if (i === 1) {
            var r = this.viewer.world.getItemAt(0);
            return r.imageToViewportZoom(t);
          }
        }
        var l = this._contentSizeNoRotate.x, s = this._containerInnerSize.x, o = this._contentBoundsNoRotate.width, a = l / s / o;
        return t * a;
      },
      /**
       * Toggles flip state and demands a new drawing on navigator and viewer objects.
       * @function
       * @returns {OpenSeadragon.Viewport} Chainable.
       */
      toggleFlip: function() {
        return this.setFlip(!this.getFlip()), this;
      },
      /**
       * Get flip state stored on viewport.
       * @function
       * @returns {Boolean} Flip state.
       */
      getFlip: function() {
        return this.flipped;
      },
      /**
       * Sets flip state according to the state input argument.
       * @function
       * @param {Boolean} state - Flip state to set.
       * @returns {OpenSeadragon.Viewport} Chainable.
       */
      setFlip: function(t) {
        return this.flipped === t ? this : (this.flipped = t, this.viewer.navigator && this.viewer.navigator.setFlip(this.getFlip()), this.viewer.forceRedraw(), this.viewer.raiseEvent("flip", { flipped: t }), this);
      }
    };
  }(n), function(e) {
    e.TiledImage = function(s) {
      var o = this;
      e.console.assert(s.tileCache, "[TiledImage] options.tileCache is required"), e.console.assert(s.drawer, "[TiledImage] options.drawer is required"), e.console.assert(s.viewer, "[TiledImage] options.viewer is required"), e.console.assert(s.imageLoader, "[TiledImage] options.imageLoader is required"), e.console.assert(s.source, "[TiledImage] options.source is required"), e.console.assert(
        !s.clip || s.clip instanceof e.Rect,
        "[TiledImage] options.clip must be an OpenSeadragon.Rect if present"
      ), e.EventSource.call(this), this._tileCache = s.tileCache, delete s.tileCache, this._drawer = s.drawer, delete s.drawer, this._imageLoader = s.imageLoader, delete s.imageLoader, s.clip instanceof e.Rect && (this._clip = s.clip.clone()), delete s.clip;
      var a = s.x || 0;
      delete s.x;
      var h = s.y || 0;
      delete s.y, this.normHeight = s.source.dimensions.y / s.source.dimensions.x, this.contentAspectX = s.source.dimensions.x / s.source.dimensions.y;
      var c = 1;
      s.width ? (c = s.width, delete s.width, s.height && (e.console.error("specifying both width and height to a tiledImage is not supported"), delete s.height)) : s.height && (c = s.height / this.normHeight, delete s.height);
      var p = s.fitBounds;
      delete s.fitBounds;
      var v = s.fitBoundsPlacement || n.Placement.CENTER;
      delete s.fitBoundsPlacement;
      var w = s.degrees || 0;
      delete s.degrees;
      var E = s.ajaxHeaders;
      delete s.ajaxHeaders, e.extend(!0, this, {
        //internal state properties
        viewer: null,
        tilesMatrix: {},
        // A '3d' dictionary [level][x][y] --> Tile.
        coverage: {},
        // A '3d' dictionary [level][x][y] --> Boolean; shows what areas have been drawn.
        loadingCoverage: {},
        // A '3d' dictionary [level][x][y] --> Boolean; shows what areas are loaded or are being loaded/blended.
        lastDrawn: [],
        // An unordered list of Tiles drawn last frame.
        lastResetTime: 0,
        // Last time for which the tiledImage was reset.
        _midDraw: !1,
        // Is the tiledImage currently updating the viewport?
        _needsDraw: !0,
        // Does the tiledImage need to update the viewport again?
        _hasOpaqueTile: !1,
        // Do we have even one fully opaque tile?
        _tilesLoading: 0,
        // The number of pending tile requests.
        //configurable settings
        springStiffness: e.DEFAULT_SETTINGS.springStiffness,
        animationTime: e.DEFAULT_SETTINGS.animationTime,
        minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio,
        wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal,
        wrapVertical: e.DEFAULT_SETTINGS.wrapVertical,
        immediateRender: e.DEFAULT_SETTINGS.immediateRender,
        blendTime: e.DEFAULT_SETTINGS.blendTime,
        alwaysBlend: e.DEFAULT_SETTINGS.alwaysBlend,
        minPixelRatio: e.DEFAULT_SETTINGS.minPixelRatio,
        smoothTileEdgesMinZoom: e.DEFAULT_SETTINGS.smoothTileEdgesMinZoom,
        iOSDevice: e.DEFAULT_SETTINGS.iOSDevice,
        debugMode: e.DEFAULT_SETTINGS.debugMode,
        crossOriginPolicy: e.DEFAULT_SETTINGS.crossOriginPolicy,
        ajaxWithCredentials: e.DEFAULT_SETTINGS.ajaxWithCredentials,
        placeholderFillStyle: e.DEFAULT_SETTINGS.placeholderFillStyle,
        opacity: e.DEFAULT_SETTINGS.opacity,
        preload: e.DEFAULT_SETTINGS.preload,
        compositeOperation: e.DEFAULT_SETTINGS.compositeOperation,
        subPixelRoundingForTransparency: e.DEFAULT_SETTINGS.subPixelRoundingForTransparency
      }, s), this._preload = this.preload, delete this.preload, this._fullyLoaded = !1, this._xSpring = new e.Spring({
        initial: a,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this._ySpring = new e.Spring({
        initial: h,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this._scaleSpring = new e.Spring({
        initial: c,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this._degreesSpring = new e.Spring({
        initial: w,
        springStiffness: this.springStiffness,
        animationTime: this.animationTime
      }), this._updateForScale(), p && this.fitBounds(p, v, !0), this._drawingHandler = function(_) {
        o.viewer.raiseEvent("tile-drawing", e.extend({
          tiledImage: o
        }, _));
      }, this._ownAjaxHeaders = {}, this.setAjaxHeaders(E, !1);
    }, e.extend(
      e.TiledImage.prototype,
      e.EventSource.prototype,
      /** @lends OpenSeadragon.TiledImage.prototype */
      {
        /**
         * @returns {Boolean} Whether the TiledImage needs to be drawn.
         */
        needsDraw: function() {
          return this._needsDraw;
        },
        /**
         * @returns {Boolean} Whether all tiles necessary for this TiledImage to draw at the current view have been loaded.
         */
        getFullyLoaded: function() {
          return this._fullyLoaded;
        },
        // private
        _setFullyLoaded: function(s) {
          s !== this._fullyLoaded && (this._fullyLoaded = s, this.raiseEvent("fully-loaded-change", {
            fullyLoaded: this._fullyLoaded
          }));
        },
        /**
         * Clears all tiles and triggers an update on the next call to
         * {@link OpenSeadragon.TiledImage#update}.
         */
        reset: function() {
          this._tileCache.clearTilesFor(this), this.lastResetTime = e.now(), this._needsDraw = !0;
        },
        /**
         * Updates the TiledImage's bounds, animating if needed.
         * @returns {Boolean} Whether the TiledImage animated.
         */
        update: function() {
          var s = this._xSpring.update(), o = this._ySpring.update(), a = this._scaleSpring.update(), h = this._degreesSpring.update();
          return s || o || a || h ? (this._updateForScale(), this._needsDraw = !0, !0) : !1;
        },
        /**
         * Draws the TiledImage to its Drawer.
         */
        draw: function() {
          this.opacity !== 0 || this._preload ? (this._midDraw = !0, this._updateViewport(), this._midDraw = !1) : this._needsDraw = !1;
        },
        /**
         * Destroy the TiledImage (unload current loaded tiles).
         */
        destroy: function() {
          this.reset(), this.source.destroy && this.source.destroy();
        },
        /**
         * Get this TiledImage's bounds in viewport coordinates.
         * @param {Boolean} [current=false] - Pass true for the current location;
         * false for target location.
         * @returns {OpenSeadragon.Rect} This TiledImage's bounds in viewport coordinates.
         */
        getBounds: function(s) {
          return this.getBoundsNoRotate(s).rotate(this.getRotation(s), this._getRotationPoint(s));
        },
        /**
         * Get this TiledImage's bounds in viewport coordinates without taking
         * rotation into account.
         * @param {Boolean} [current=false] - Pass true for the current location;
         * false for target location.
         * @returns {OpenSeadragon.Rect} This TiledImage's bounds in viewport coordinates.
         */
        getBoundsNoRotate: function(s) {
          return s ? new e.Rect(
            this._xSpring.current.value,
            this._ySpring.current.value,
            this._worldWidthCurrent,
            this._worldHeightCurrent
          ) : new e.Rect(
            this._xSpring.target.value,
            this._ySpring.target.value,
            this._worldWidthTarget,
            this._worldHeightTarget
          );
        },
        // deprecated
        getWorldBounds: function() {
          return e.console.error("[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead"), this.getBounds();
        },
        /**
         * Get the bounds of the displayed part of the tiled image.
         * @param {Boolean} [current=false] Pass true for the current location,
         * false for the target location.
         * @returns {$.Rect} The clipped bounds in viewport coordinates.
         */
        getClippedBounds: function(s) {
          var o = this.getBoundsNoRotate(s);
          if (this._clip) {
            var a = s ? this._worldWidthCurrent : this._worldWidthTarget, h = a / this.source.dimensions.x, c = this._clip.times(h);
            o = new e.Rect(
              o.x + c.x,
              o.y + c.y,
              c.width,
              c.height
            );
          }
          return o.rotate(this.getRotation(s), this._getRotationPoint(s));
        },
        /**
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         * @returns {OpenSeadragon.Rect} Where this tile fits (in normalized coordinates).
         */
        getTileBounds: function(s, o, a) {
          var h = this.source.getNumTiles(s), c = (h.x + o % h.x) % h.x, p = (h.y + a % h.y) % h.y, v = this.source.getTileBounds(s, c, p);
          return this.getFlip() && (v.x = 1 - v.x - v.width), v.x += (o - c) / h.x, v.y += this._worldHeightCurrent / this._worldWidthCurrent * ((a - p) / h.y), v;
        },
        /**
         * @returns {OpenSeadragon.Point} This TiledImage's content size, in original pixels.
         */
        getContentSize: function() {
          return new e.Point(this.source.dimensions.x, this.source.dimensions.y);
        },
        /**
         * @returns {OpenSeadragon.Point} The TiledImage's content size, in window coordinates.
         */
        getSizeInWindowCoordinates: function() {
          var s = this.imageToWindowCoordinates(new e.Point(0, 0)), o = this.imageToWindowCoordinates(this.getContentSize());
          return new e.Point(o.x - s.x, o.y - s.y);
        },
        // private
        _viewportToImageDelta: function(s, o, a) {
          var h = a ? this._scaleSpring.current.value : this._scaleSpring.target.value;
          return new e.Point(
            s * (this.source.dimensions.x / h),
            o * (this.source.dimensions.y * this.contentAspectX / h)
          );
        },
        /**
         * Translates from OpenSeadragon viewer coordinate system to image coordinate system.
         * This method can be called either by passing X,Y coordinates or an {@link OpenSeadragon.Point}.
         * @param {Number|OpenSeadragon.Point} viewerX - The X coordinate or point in viewport coordinate system.
         * @param {Number} [viewerY] - The Y coordinate in viewport coordinate system.
         * @param {Boolean} [current=false] - Pass true to use the current location; false for target location.
         * @returns {OpenSeadragon.Point} A point representing the coordinates in the image.
         */
        viewportToImageCoordinates: function(s, o, a) {
          var h;
          return s instanceof e.Point ? (a = o, h = s) : h = new e.Point(s, o), h = h.rotate(-this.getRotation(a), this._getRotationPoint(a)), a ? this._viewportToImageDelta(
            h.x - this._xSpring.current.value,
            h.y - this._ySpring.current.value
          ) : this._viewportToImageDelta(
            h.x - this._xSpring.target.value,
            h.y - this._ySpring.target.value
          );
        },
        // private
        _imageToViewportDelta: function(s, o, a) {
          var h = a ? this._scaleSpring.current.value : this._scaleSpring.target.value;
          return new e.Point(
            s / this.source.dimensions.x * h,
            o / this.source.dimensions.y / this.contentAspectX * h
          );
        },
        /**
         * Translates from image coordinate system to OpenSeadragon viewer coordinate system
         * This method can be called either by passing X,Y coordinates or an {@link OpenSeadragon.Point}.
         * @param {Number|OpenSeadragon.Point} imageX - The X coordinate or point in image coordinate system.
         * @param {Number} [imageY] - The Y coordinate in image coordinate system.
         * @param {Boolean} [current=false] - Pass true to use the current location; false for target location.
         * @returns {OpenSeadragon.Point} A point representing the coordinates in the viewport.
         */
        imageToViewportCoordinates: function(s, o, a) {
          s instanceof e.Point && (a = o, o = s.y, s = s.x);
          var h = this._imageToViewportDelta(s, o);
          return a ? (h.x += this._xSpring.current.value, h.y += this._ySpring.current.value) : (h.x += this._xSpring.target.value, h.y += this._ySpring.target.value), h.rotate(this.getRotation(a), this._getRotationPoint(a));
        },
        /**
         * Translates from a rectangle which describes a portion of the image in
         * pixel coordinates to OpenSeadragon viewport rectangle coordinates.
         * This method can be called either by passing X,Y,width,height or an {@link OpenSeadragon.Rect}.
         * @param {Number|OpenSeadragon.Rect} imageX - The left coordinate or rectangle in image coordinate system.
         * @param {Number} [imageY] - The top coordinate in image coordinate system.
         * @param {Number} [pixelWidth] - The width in pixel of the rectangle.
         * @param {Number} [pixelHeight] - The height in pixel of the rectangle.
         * @param {Boolean} [current=false] - Pass true to use the current location; false for target location.
         * @returns {OpenSeadragon.Rect} A rect representing the coordinates in the viewport.
         */
        imageToViewportRectangle: function(s, o, a, h, c) {
          var p = s;
          p instanceof e.Rect ? c = o : p = new e.Rect(s, o, a, h);
          var v = this.imageToViewportCoordinates(p.getTopLeft(), c), w = this._imageToViewportDelta(p.width, p.height, c);
          return new e.Rect(
            v.x,
            v.y,
            w.x,
            w.y,
            p.degrees + this.getRotation(c)
          );
        },
        /**
         * Translates from a rectangle which describes a portion of
         * the viewport in point coordinates to image rectangle coordinates.
         * This method can be called either by passing X,Y,width,height or an {@link OpenSeadragon.Rect}.
         * @param {Number|OpenSeadragon.Rect} viewerX - The left coordinate or rectangle in viewport coordinate system.
         * @param {Number} [viewerY] - The top coordinate in viewport coordinate system.
         * @param {Number} [pointWidth] - The width in viewport coordinate system.
         * @param {Number} [pointHeight] - The height in viewport coordinate system.
         * @param {Boolean} [current=false] - Pass true to use the current location; false for target location.
         * @returns {OpenSeadragon.Rect} A rect representing the coordinates in the image.
         */
        viewportToImageRectangle: function(s, o, a, h, c) {
          var p = s;
          s instanceof e.Rect ? c = o : p = new e.Rect(s, o, a, h);
          var v = this.viewportToImageCoordinates(p.getTopLeft(), c), w = this._viewportToImageDelta(p.width, p.height, c);
          return new e.Rect(
            v.x,
            v.y,
            w.x,
            w.y,
            p.degrees - this.getRotation(c)
          );
        },
        /**
         * Convert pixel coordinates relative to the viewer element to image
         * coordinates.
         * @param {OpenSeadragon.Point} pixel
         * @returns {OpenSeadragon.Point}
         */
        viewerElementToImageCoordinates: function(s) {
          var o = this.viewport.pointFromPixel(s, !0);
          return this.viewportToImageCoordinates(o);
        },
        /**
         * Convert pixel coordinates relative to the image to
         * viewer element coordinates.
         * @param {OpenSeadragon.Point} pixel
         * @returns {OpenSeadragon.Point}
         */
        imageToViewerElementCoordinates: function(s) {
          var o = this.imageToViewportCoordinates(s);
          return this.viewport.pixelFromPoint(o, !0);
        },
        /**
         * Convert pixel coordinates relative to the window to image coordinates.
         * @param {OpenSeadragon.Point} pixel
         * @returns {OpenSeadragon.Point}
         */
        windowToImageCoordinates: function(s) {
          var o = s.minus(
            n.getElementPosition(this.viewer.element)
          );
          return this.viewerElementToImageCoordinates(o);
        },
        /**
         * Convert image coordinates to pixel coordinates relative to the window.
         * @param {OpenSeadragon.Point} pixel
         * @returns {OpenSeadragon.Point}
         */
        imageToWindowCoordinates: function(s) {
          var o = this.imageToViewerElementCoordinates(s);
          return o.plus(
            n.getElementPosition(this.viewer.element)
          );
        },
        // private
        // Convert rectangle in viewport coordinates to this tiled image point
        // coordinates (x in [0, 1] and y in [0, aspectRatio])
        _viewportToTiledImageRectangle: function(s) {
          var o = this._scaleSpring.current.value;
          return s = s.rotate(-this.getRotation(!0), this._getRotationPoint(!0)), new e.Rect(
            (s.x - this._xSpring.current.value) / o,
            (s.y - this._ySpring.current.value) / o,
            s.width / o,
            s.height / o,
            s.degrees
          );
        },
        /**
         * Convert a viewport zoom to an image zoom.
         * Image zoom: ratio of the original image size to displayed image size.
         * 1 means original image size, 0.5 half size...
         * Viewport zoom: ratio of the displayed image's width to viewport's width.
         * 1 means identical width, 2 means image's width is twice the viewport's width...
         * @function
         * @param {Number} viewportZoom The viewport zoom
         * @returns {Number} imageZoom The image zoom
         */
        viewportToImageZoom: function(s) {
          var o = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
          return o * s;
        },
        /**
         * Convert an image zoom to a viewport zoom.
         * Image zoom: ratio of the original image size to displayed image size.
         * 1 means original image size, 0.5 half size...
         * Viewport zoom: ratio of the displayed image's width to viewport's width.
         * 1 means identical width, 2 means image's width is twice the viewport's width...
         * Note: not accurate with multi-image.
         * @function
         * @param {Number} imageZoom The image zoom
         * @returns {Number} viewportZoom The viewport zoom
         */
        imageToViewportZoom: function(s) {
          var o = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
          return s / o;
        },
        /**
         * Sets the TiledImage's position in the world.
         * @param {OpenSeadragon.Point} position - The new position, in viewport coordinates.
         * @param {Boolean} [immediately=false] - Whether to animate to the new position or snap immediately.
         * @fires OpenSeadragon.TiledImage.event:bounds-change
         */
        setPosition: function(s, o) {
          var a = this._xSpring.target.value === s.x && this._ySpring.target.value === s.y;
          if (o) {
            if (a && this._xSpring.current.value === s.x && this._ySpring.current.value === s.y)
              return;
            this._xSpring.resetTo(s.x), this._ySpring.resetTo(s.y), this._needsDraw = !0;
          } else {
            if (a)
              return;
            this._xSpring.springTo(s.x), this._ySpring.springTo(s.y), this._needsDraw = !0;
          }
          a || this._raiseBoundsChange();
        },
        /**
         * Sets the TiledImage's width in the world, adjusting the height to match based on aspect ratio.
         * @param {Number} width - The new width, in viewport coordinates.
         * @param {Boolean} [immediately=false] - Whether to animate to the new size or snap immediately.
         * @fires OpenSeadragon.TiledImage.event:bounds-change
         */
        setWidth: function(s, o) {
          this._setScale(s, o);
        },
        /**
         * Sets the TiledImage's height in the world, adjusting the width to match based on aspect ratio.
         * @param {Number} height - The new height, in viewport coordinates.
         * @param {Boolean} [immediately=false] - Whether to animate to the new size or snap immediately.
         * @fires OpenSeadragon.TiledImage.event:bounds-change
         */
        setHeight: function(s, o) {
          this._setScale(s / this.normHeight, o);
        },
        /**
         * Sets an array of polygons to crop the TiledImage during draw tiles.
         * The render function will use the default non-zero winding rule.
         * @param {OpenSeadragon.Point[][]} polygons - represented in an array of point object in image coordinates.
         * Example format: [
         *  [{x: 197, y:172}, {x: 226, y:172}, {x: 226, y:198}, {x: 197, y:198}], // First polygon
         *  [{x: 328, y:200}, {x: 330, y:199}, {x: 332, y:201}, {x: 329, y:202}]  // Second polygon
         *  [{x: 321, y:201}, {x: 356, y:205}, {x: 341, y:250}] // Third polygon
         * ]
         */
        setCroppingPolygons: function(s) {
          var o = function(h) {
            return h instanceof e.Point || typeof h.x == "number" && typeof h.y == "number";
          }, a = function(h) {
            return h.map(function(c) {
              try {
                if (o(c))
                  return { x: c.x, y: c.y };
                throw new Error();
              } catch {
                throw new Error("A Provided cropping polygon point is not supported");
              }
            });
          };
          try {
            if (!e.isArray(s))
              throw new Error("Provided cropping polygon is not an array");
            this._croppingPolygons = s.map(function(h) {
              return a(h);
            });
          } catch (h) {
            e.console.error("[TiledImage.setCroppingPolygons] Cropping polygon format not supported"), e.console.error(h), this._croppingPolygons = null;
          }
        },
        /**
         * Resets the cropping polygons, thus next render will remove all cropping
         * polygon effects.
         */
        resetCroppingPolygons: function() {
          this._croppingPolygons = null;
        },
        /**
         * Positions and scales the TiledImage to fit in the specified bounds.
         * Note: this method fires OpenSeadragon.TiledImage.event:bounds-change
         * twice
         * @param {OpenSeadragon.Rect} bounds The bounds to fit the image into.
         * @param {OpenSeadragon.Placement} [anchor=OpenSeadragon.Placement.CENTER]
         * How to anchor the image in the bounds.
         * @param {Boolean} [immediately=false] Whether to animate to the new size
         * or snap immediately.
         * @fires OpenSeadragon.TiledImage.event:bounds-change
         */
        fitBounds: function(s, o, a) {
          o = o || e.Placement.CENTER;
          var h = e.Placement.properties[o], c = this.contentAspectX, p = 0, v = 0, w = 1, E = 1;
          if (this._clip && (c = this._clip.getAspectRatio(), w = this._clip.width / this.source.dimensions.x, E = this._clip.height / this.source.dimensions.y, s.getAspectRatio() > c ? (p = this._clip.x / this._clip.height * s.height, v = this._clip.y / this._clip.height * s.height) : (p = this._clip.x / this._clip.width * s.width, v = this._clip.y / this._clip.width * s.width)), s.getAspectRatio() > c) {
            var _ = s.height / E, S = 0;
            h.isHorizontallyCentered ? S = (s.width - s.height * c) / 2 : h.isRight && (S = s.width - s.height * c), this.setPosition(
              new e.Point(s.x - p + S, s.y - v),
              a
            ), this.setHeight(_, a);
          } else {
            var C = s.width / w, b = 0;
            h.isVerticallyCentered ? b = (s.height - s.width / c) / 2 : h.isBottom && (b = s.height - s.width / c), this.setPosition(
              new e.Point(s.x - p, s.y - v + b),
              a
            ), this.setWidth(C, a);
          }
        },
        /**
         * @returns {OpenSeadragon.Rect|null} The TiledImage's current clip rectangle,
         * in image pixels, or null if none.
         */
        getClip: function() {
          return this._clip ? this._clip.clone() : null;
        },
        /**
         * @param {OpenSeadragon.Rect|null} newClip - An area, in image pixels, to clip to
         * (portions of the image outside of this area will not be visible). Only works on
         * browsers that support the HTML5 canvas.
         * @fires OpenSeadragon.TiledImage.event:clip-change
         */
        setClip: function(s) {
          e.console.assert(
            !s || s instanceof e.Rect,
            "[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null"
          ), s instanceof e.Rect ? this._clip = s.clone() : this._clip = null, this._needsDraw = !0, this.raiseEvent("clip-change");
        },
        /**
         * @returns {Boolean} Whether the TiledImage should be flipped before rendering.
         */
        getFlip: function() {
          return !!this.flipped;
        },
        /**
         * @param {Boolean} flip Whether the TiledImage should be flipped before rendering.
         * @fires OpenSeadragon.TiledImage.event:bounds-change
         */
        setFlip: function(s) {
          this.flipped = !!s, this._needsDraw = !0, this._raiseBoundsChange();
        },
        /**
         * @returns {Number} The TiledImage's current opacity.
         */
        getOpacity: function() {
          return this.opacity;
        },
        /**
         * @param {Number} opacity Opacity the tiled image should be drawn at.
         * @fires OpenSeadragon.TiledImage.event:opacity-change
         */
        setOpacity: function(s) {
          s !== this.opacity && (this.opacity = s, this._needsDraw = !0, this.raiseEvent("opacity-change", {
            opacity: this.opacity
          }));
        },
        /**
         * @returns {Boolean} whether the tiledImage can load its tiles even when it has zero opacity.
         */
        getPreload: function() {
          return this._preload;
        },
        /**
         * Set true to load even when hidden. Set false to block loading when hidden.
         */
        setPreload: function(s) {
          this._preload = !!s, this._needsDraw = !0;
        },
        /**
         * Get the rotation of this tiled image in degrees.
         * @param {Boolean} [current=false] True for current rotation, false for target.
         * @returns {Number} the rotation of this tiled image in degrees.
         */
        getRotation: function(s) {
          return s ? this._degreesSpring.current.value : this._degreesSpring.target.value;
        },
        /**
         * Set the current rotation of this tiled image in degrees.
         * @param {Number} degrees the rotation in degrees.
         * @param {Boolean} [immediately=false] Whether to animate to the new angle
         * or rotate immediately.
         * @fires OpenSeadragon.TiledImage.event:bounds-change
         */
        setRotation: function(s, o) {
          this._degreesSpring.target.value === s && this._degreesSpring.isAtTargetValue() || (o ? this._degreesSpring.resetTo(s) : this._degreesSpring.springTo(s), this._needsDraw = !0, this._raiseBoundsChange());
        },
        /**
         * Get the point around which this tiled image is rotated
         * @private
         * @param {Boolean} current True for current rotation point, false for target.
         * @returns {OpenSeadragon.Point}
         */
        _getRotationPoint: function(s) {
          return this.getBoundsNoRotate(s).getCenter();
        },
        /**
         * @returns {String} The TiledImage's current compositeOperation.
         */
        getCompositeOperation: function() {
          return this.compositeOperation;
        },
        /**
         * @param {String} compositeOperation the tiled image should be drawn with this globalCompositeOperation.
         * @fires OpenSeadragon.TiledImage.event:composite-operation-change
         */
        setCompositeOperation: function(s) {
          s !== this.compositeOperation && (this.compositeOperation = s, this._needsDraw = !0, this.raiseEvent("composite-operation-change", {
            compositeOperation: this.compositeOperation
          }));
        },
        /**
         * Update headers to include when making AJAX requests.
         *
         * Unless `propagate` is set to false (which is likely only useful in rare circumstances),
         * the updated headers are propagated to all tiles and queued image loader jobs.
         *
         * Note that the rules for merging headers still apply, i.e. headers returned by
         * {@link OpenSeadragon.TileSource#getTileAjaxHeaders} take precedence over
         * the headers here in the tiled image (`TiledImage.ajaxHeaders`).
         *
         * @function
         * @param {Object} ajaxHeaders Updated AJAX headers, which will be merged over any headers specified in {@link OpenSeadragon.Options}.
         * @param {Boolean} [propagate=true] Whether to propagate updated headers to existing tiles and queued image loader jobs.
         */
        setAjaxHeaders: function(s, o) {
          if (s === null && (s = {}), !e.isPlainObject(s)) {
            console.error("[TiledImage.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
            return;
          }
          this._ownAjaxHeaders = s, this._updateAjaxHeaders(o);
        },
        /**
         * Update headers to include when making AJAX requests.
         *
         * This function has the same effect as calling {@link OpenSeadragon.TiledImage#setAjaxHeaders},
         * except that the headers for this tiled image do not change. This is especially useful
         * for propagating updated headers from {@link OpenSeadragon.TileSource#getTileAjaxHeaders}
         * to existing tiles.
         *
         * @private
         * @function
         * @param {Boolean} [propagate=true] Whether to propagate updated headers to existing tiles and queued image loader jobs.
         */
        _updateAjaxHeaders: function(s) {
          if (s === void 0 && (s = !0), e.isPlainObject(this.viewer.ajaxHeaders) ? this.ajaxHeaders = e.extend({}, this.viewer.ajaxHeaders, this._ownAjaxHeaders) : this.ajaxHeaders = this._ownAjaxHeaders, s) {
            var o, a, h, c;
            for (var p in this.tilesMatrix) {
              o = this.source.getNumTiles(p);
              for (var v in this.tilesMatrix[p]) {
                a = (o.x + v % o.x) % o.x;
                for (var w in this.tilesMatrix[p][v])
                  if (h = (o.y + w % o.y) % o.y, c = this.tilesMatrix[p][v][w], c.loadWithAjax = this.loadTilesWithAjax, c.loadWithAjax) {
                    var E = this.source.getTileAjaxHeaders(p, a, h);
                    c.ajaxHeaders = e.extend({}, this.ajaxHeaders, E);
                  } else
                    c.ajaxHeaders = null;
              }
            }
            for (var _ = 0; _ < this._imageLoader.jobQueue.length; _++) {
              var S = this._imageLoader.jobQueue[_];
              S.loadWithAjax = S.tile.loadWithAjax, S.ajaxHeaders = S.tile.loadWithAjax ? S.tile.ajaxHeaders : null;
            }
          }
        },
        // private
        _setScale: function(s, o) {
          var a = this._scaleSpring.target.value === s;
          if (o) {
            if (a && this._scaleSpring.current.value === s)
              return;
            this._scaleSpring.resetTo(s), this._updateForScale(), this._needsDraw = !0;
          } else {
            if (a)
              return;
            this._scaleSpring.springTo(s), this._updateForScale(), this._needsDraw = !0;
          }
          a || this._raiseBoundsChange();
        },
        // private
        _updateForScale: function() {
          this._worldWidthTarget = this._scaleSpring.target.value, this._worldHeightTarget = this.normHeight * this._scaleSpring.target.value, this._worldWidthCurrent = this._scaleSpring.current.value, this._worldHeightCurrent = this.normHeight * this._scaleSpring.current.value;
        },
        // private
        _raiseBoundsChange: function() {
          this.raiseEvent("bounds-change");
        },
        // private
        _isBottomItem: function() {
          return this.viewer.world.getItemAt(0) === this;
        },
        // private
        _getLevelsInterval: function() {
          var s = Math.max(
            this.source.minLevel,
            Math.floor(Math.log(this.minZoomImageRatio) / Math.log(2))
          ), o = this.viewport.deltaPixelsFromPointsNoRotate(
            this.source.getPixelRatio(0),
            !0
          ).x * this._scaleSpring.current.value, a = Math.min(
            Math.abs(this.source.maxLevel),
            Math.abs(Math.floor(
              Math.log(o / this.minPixelRatio) / Math.log(2)
            ))
          );
          return a = Math.max(a, this.source.minLevel || 0), s = Math.min(s, a), {
            lowestLevel: s,
            highestLevel: a
          };
        },
        /**
         * @private
         * @inner
         * Pretty much every other line in this needs to be documented so it's clear
         * how each piece of this routine contributes to the drawing process.  That's
         * why there are so many TODO's inside this function.
         */
        _updateViewport: function() {
          for (this._needsDraw = !1, this._tilesLoading = 0, this.loadingCoverage = {}; this.lastDrawn.length > 0; ) {
            var s = this.lastDrawn.pop();
            s.beingDrawn = !1;
          }
          var o = this.viewport, a = this._viewportToTiledImageRectangle(
            o.getBoundsWithMargins(!0)
          );
          if (!this.wrapHorizontal && !this.wrapVertical) {
            var h = this._viewportToTiledImageRectangle(
              this.getClippedBounds(!0)
            );
            if (a = a.intersection(h), a === null)
              return;
          }
          for (var c = this._getLevelsInterval(), p = c.lowestLevel, v = c.highestLevel, w = null, E = !1, _ = e.now(), S = v; S >= p; S--) {
            var C = !1, b = o.deltaPixelsFromPointsNoRotate(
              this.source.getPixelRatio(S),
              !0
            ).x * this._scaleSpring.current.value;
            if (S === p || !E && b >= this.minPixelRatio)
              C = !0, E = !0;
            else if (!E)
              continue;
            var V = o.deltaPixelsFromPointsNoRotate(
              this.source.getPixelRatio(S),
              !1
            ).x * this._scaleSpring.current.value, Z = o.deltaPixelsFromPointsNoRotate(
              this.source.getPixelRatio(
                Math.max(
                  this.source.getClosestLevel(),
                  0
                )
              ),
              !1
            ).x * this._scaleSpring.current.value, K = this.immediateRender ? 1 : Z, Q = Math.min(1, (b - 0.5) / 0.5), q = K / Math.abs(
              K - V
            );
            if (w = this._updateLevel(
              E,
              C,
              S,
              Q,
              q,
              a,
              _,
              w
            ), this._providesCoverage(this.coverage, S))
              break;
          }
          this._drawTiles(this.lastDrawn), w && !w.context2D ? (this._loadTile(w, _), this._needsDraw = !0, this._setFullyLoaded(!1)) : this._setFullyLoaded(this._tilesLoading === 0);
        },
        // private
        _getCornerTiles: function(s, o, a) {
          var h, c;
          this.wrapHorizontal ? (h = e.positiveModulo(o.x, 1), c = e.positiveModulo(a.x, 1)) : (h = Math.max(0, o.x), c = Math.min(1, a.x));
          var p, v, w = 1 / this.source.aspectRatio;
          this.wrapVertical ? (p = e.positiveModulo(o.y, w), v = e.positiveModulo(a.y, w)) : (p = Math.max(0, o.y), v = Math.min(w, a.y));
          var E = this.source.getTileAtPoint(s, new e.Point(h, p)), _ = this.source.getTileAtPoint(s, new e.Point(c, v)), S = this.source.getNumTiles(s);
          return this.wrapHorizontal && (E.x += S.x * Math.floor(o.x), _.x += S.x * Math.floor(a.x)), this.wrapVertical && (E.y += S.y * Math.floor(o.y / w), _.y += S.y * Math.floor(a.y / w)), {
            topLeft: E,
            bottomRight: _
          };
        },
        /**
         * Updates all tiles at a given resolution level.
         * @private
         * @param {Boolean} haveDrawn
         * @param {Boolean} drawLevel
         * @param {Number} level
         * @param {Number} levelOpacity
         * @param {Number} levelVisibility
         * @param {OpenSeadragon.Rect} drawArea
         * @param {Number} currentTime
         * @param {OpenSeadragon.Tile} best - The current "best" tile to draw.
         */
        _updateLevel: function(s, o, a, h, c, p, v, w) {
          var E = p.getBoundingBox().getTopLeft(), _ = p.getBoundingBox().getBottomRight();
          this.viewer && this.viewer.raiseEvent("update-level", {
            tiledImage: this,
            havedrawn: s,
            level: a,
            opacity: h,
            visibility: c,
            drawArea: p,
            topleft: E,
            bottomright: _,
            currenttime: v,
            best: w
          }), this._resetCoverage(this.coverage, a), this._resetCoverage(this.loadingCoverage, a);
          var S = this._getCornerTiles(a, E, _), C = S.topLeft, b = S.bottomRight, V = this.source.getNumTiles(a), Z = this.viewport.pixelFromPoint(this.viewport.getCenter());
          this.getFlip() && (b.x += 1, this.wrapHorizontal || (b.x = Math.min(b.x, V.x - 1)));
          for (var K = C.x; K <= b.x; K++)
            for (var Q = C.y; Q <= b.y; Q++) {
              var q;
              if (this.getFlip()) {
                var $ = (V.x + K % V.x) % V.x;
                q = K + V.x - $ - $ - 1;
              } else
                q = K;
              p.intersection(this.getTileBounds(a, q, Q)) !== null && (w = this._updateTile(
                o,
                s,
                q,
                Q,
                a,
                h,
                c,
                Z,
                V,
                v,
                w
              ));
            }
          return w;
        },
        /**
         * @private
         * @inner
         * Update a single tile at a particular resolution level.
         * @param {Boolean} haveDrawn
         * @param {Boolean} drawLevel
         * @param {Number} x
         * @param {Number} y
         * @param {Number} level
         * @param {Number} levelOpacity
         * @param {Number} levelVisibility
         * @param {OpenSeadragon.Point} viewportCenter
         * @param {Number} numberOfTiles
         * @param {Number} currentTime
         * @param {OpenSeadragon.Tile} best - The current "best" tile to draw.
         */
        _updateTile: function(s, o, a, h, c, p, v, w, E, _, S) {
          var C = this._getTile(
            a,
            h,
            c,
            _,
            E,
            this._worldWidthCurrent,
            this._worldHeightCurrent
          ), b = o;
          this.viewer && this.viewer.raiseEvent("update-tile", {
            tiledImage: this,
            tile: C
          }), this._setCoverage(this.coverage, c, a, h, !1);
          var V = C.loaded || C.loading || this._isCovered(this.loadingCoverage, c, a, h);
          if (this._setCoverage(this.loadingCoverage, c, a, h, V), !C.exists || (s && !b && (this._isCovered(this.coverage, c, a, h) ? this._setCoverage(this.coverage, c, a, h, !0) : b = !0), !b))
            return S;
          if (this._positionTile(
            C,
            this.source.tileOverlap,
            this.viewport,
            w,
            v
          ), !C.loaded)
            if (C.context2D)
              this._setTileLoaded(C);
            else {
              var Z = this._tileCache.getImageRecord(C.cacheKey);
              Z && this._setTileLoaded(C, Z.getData());
            }
          if (C.loaded) {
            var K = this._blendTile(
              C,
              a,
              h,
              c,
              p,
              _
            );
            K && (this._needsDraw = !0);
          } else
            C.loading ? this._tilesLoading++ : V || (S = this._compareTiles(S, C));
          return S;
        },
        /**
         * @private
         * @inner
         * Obtains a tile at the given location.
         * @param {Number} x
         * @param {Number} y
         * @param {Number} level
         * @param {Number} time
         * @param {Number} numTiles
         * @param {Number} worldWidth
         * @param {Number} worldHeight
         * @returns {OpenSeadragon.Tile}
         */
        _getTile: function(s, o, a, h, c, p, v) {
          var w, E, _, S, C, b, V, Z, K, Q, q = this.tilesMatrix, $ = this.source;
          return q[a] || (q[a] = {}), q[a][s] || (q[a][s] = {}), (!q[a][s][o] || !q[a][s][o].flipped != !this.flipped) && (w = (c.x + s % c.x) % c.x, E = (c.y + o % c.y) % c.y, _ = this.getTileBounds(a, s, o), S = $.getTileBounds(a, w, E, !0), C = $.tileExists(a, w, E), b = $.getTileUrl(a, w, E), V = $.getTilePostData(a, w, E), this.loadTilesWithAjax ? (Z = $.getTileAjaxHeaders(a, w, E), e.isPlainObject(this.ajaxHeaders) && (Z = e.extend({}, this.ajaxHeaders, Z))) : Z = null, K = $.getContext2D ? $.getContext2D(a, w, E) : void 0, Q = new e.Tile(
            a,
            s,
            o,
            _,
            C,
            b,
            K,
            this.loadTilesWithAjax,
            Z,
            S,
            V,
            $.getTileHashKey(a, w, E, b, Z, V)
          ), this.getFlip() ? w === 0 && (Q.isRightMost = !0) : w === c.x - 1 && (Q.isRightMost = !0), E === c.y - 1 && (Q.isBottomMost = !0), Q.flipped = this.flipped, q[a][s][o] = Q), Q = q[a][s][o], Q.lastTouchTime = h, Q;
        },
        /**
         * @private
         * @inner
         * Dispatch a job to the ImageLoader to load the Image for a Tile.
         * @param {OpenSeadragon.Tile} tile
         * @param {Number} time
         */
        _loadTile: function(s, o) {
          var a = this;
          s.loading = !0, this._imageLoader.addJob({
            src: s.getUrl(),
            tile: s,
            source: this.source,
            postData: s.postData,
            loadWithAjax: s.loadWithAjax,
            ajaxHeaders: s.ajaxHeaders,
            crossOriginPolicy: this.crossOriginPolicy,
            ajaxWithCredentials: this.ajaxWithCredentials,
            callback: function(h, c, p) {
              a._onTileLoad(s, o, h, c, p);
            },
            abort: function() {
              s.loading = !1;
            }
          });
        },
        /**
         * @private
         * @inner
         * Callback fired when a Tile's Image finished downloading.
         * @param {OpenSeadragon.Tile} tile
         * @param {Number} time
         * @param {*} data image data
         * @param {String} errorMsg
         * @param {XMLHttpRequest} tileRequest
         */
        _onTileLoad: function(s, o, a, h, c) {
          if (a)
            s.exists = !0;
          else {
            e.console.error("Tile %s failed to load: %s - error: %s", s, s.getUrl(), h), this.viewer.raiseEvent("tile-load-failed", {
              tile: s,
              tiledImage: this,
              time: o,
              message: h,
              tileRequest: c
            }), s.loading = !1, s.exists = !1;
            return;
          }
          if (o < this.lastResetTime) {
            e.console.warn("Ignoring tile %s loaded before reset: %s", s, s.getUrl()), s.loading = !1;
            return;
          }
          var p = this, v = function() {
            var w = p.source, E = w.getClosestLevel();
            p._setTileLoaded(s, a, E, c);
          };
          this._midDraw ? window.setTimeout(v, 1) : v();
        },
        /**
         * @private
         * @inner
         * @param {OpenSeadragon.Tile} tile
         * @param {*} data image data, the data sent to ImageJob.prototype.finish(), by default an Image object
         * @param {Number|undefined} cutoff
         * @param {XMLHttpRequest|undefined} tileRequest
         */
        _setTileLoaded: function(s, o, a, h) {
          var c = 0, p = !1, v = this;
          function w() {
            return p && e.console.error("Event 'tile-loaded' argument getCompletionCallback must be called synchronously. Its return value should be called asynchronously."), c++, E;
          }
          function E() {
            c--, c === 0 && (s.loading = !1, s.loaded = !0, s.hasTransparency = v.source.hasTransparency(
              s.context2D,
              s.getUrl(),
              s.ajaxHeaders,
              s.postData
            ), s.context2D || v._tileCache.cacheTile({
              data: o,
              tile: s,
              cutoff: a,
              tiledImage: v
            }), v._needsDraw = !0);
          }
          var _ = w();
          this.viewer.raiseEvent("tile-loaded", {
            tile: s,
            tiledImage: this,
            tileRequest: h,
            get image() {
              return e.console.error("[tile-loaded] event 'image' has been deprecated. Use 'data' property instead."), o;
            },
            data: o,
            getCompletionCallback: w
          }), p = !0, _();
        },
        /**
         * @private
         * @inner
         * @param {OpenSeadragon.Tile} tile
         * @param {Boolean} overlap
         * @param {OpenSeadragon.Viewport} viewport
         * @param {OpenSeadragon.Point} viewportCenter
         * @param {Number} levelVisibility
         */
        _positionTile: function(s, o, a, h, c) {
          var p = s.bounds.getTopLeft();
          p.x *= this._scaleSpring.current.value, p.y *= this._scaleSpring.current.value, p.x += this._xSpring.current.value, p.y += this._ySpring.current.value;
          var v = s.bounds.getSize();
          v.x *= this._scaleSpring.current.value, v.y *= this._scaleSpring.current.value;
          var w = a.pixelFromPointNoRotate(p, !0), E = a.pixelFromPointNoRotate(p, !1), _ = a.deltaPixelsFromPointsNoRotate(v, !0), S = a.deltaPixelsFromPointsNoRotate(v, !1), C = E.plus(S.divide(2)), b = h.squaredDistanceTo(C);
          o || (_ = _.plus(new e.Point(1, 1))), s.isRightMost && this.wrapHorizontal && (_.x += 0.75), s.isBottomMost && this.wrapVertical && (_.y += 0.75), s.position = w, s.size = _, s.squaredDistance = b, s.visibility = c;
        },
        /**
         * @private
         * @inner
         * Updates the opacity of a tile according to the time it has been on screen
         * to perform a fade-in.
         * Updates coverage once a tile is fully opaque.
         * Returns whether the fade-in has completed.
         *
         * @param {OpenSeadragon.Tile} tile
         * @param {Number} x
         * @param {Number} y
         * @param {Number} level
         * @param {Number} levelOpacity
         * @param {Number} currentTime
         * @returns {Boolean}
         */
        _blendTile: function(s, o, a, h, c, p) {
          var v = 1e3 * this.blendTime, w, E;
          if (s.blendStart || (s.blendStart = p), w = p - s.blendStart, E = v ? Math.min(1, w / v) : 1, this.alwaysBlend && (E *= c), s.opacity = E, this.lastDrawn.push(s), E === 1)
            this._setCoverage(this.coverage, h, o, a, !0), this._hasOpaqueTile = !0;
          else if (w < v)
            return !0;
          return !1;
        },
        /**
         * @private
         * @inner
         * Determines whether the 'last best' tile for the area is better than the
         * tile in question.
         *
         * @param {OpenSeadragon.Tile} previousBest
         * @param {OpenSeadragon.Tile} tile
         * @returns {OpenSeadragon.Tile} The new best tile.
         */
        _compareTiles: function(s, o) {
          return !s || o.visibility > s.visibility || o.visibility === s.visibility && o.squaredDistance < s.squaredDistance ? o : s;
        },
        /**
         * @private
         * @inner
         * Draws a TiledImage.
         * @param {OpenSeadragon.Tile[]} lastDrawn - An unordered list of Tiles drawn last frame.
         */
        _drawTiles: function(s) {
          if (!(this.opacity === 0 || s.length === 0 && !this.placeholderFillStyle)) {
            var o = s[0], a;
            o && (a = this.opacity < 1 || this.compositeOperation && this.compositeOperation !== "source-over" || !this._isBottomItem() && this.source.hasTransparency(o.context2D, o.getUrl(), o.ajaxHeaders, o.postData));
            var h, c, p = this.viewport.getZoom(!0), v = this.viewportToImageZoom(p);
            s.length > 1 && v > this.smoothTileEdgesMinZoom && !this.iOSDevice && this.getRotation(!0) % 360 === 0 && // TODO: support tile edge smoothing with tiled image rotation.
            e.supportsCanvas && this.viewer.useCanvas && (a = !0, h = o.getScaleForEdgeSmoothing(), c = o.getTranslationForEdgeSmoothing(
              h,
              this._drawer.getCanvasSize(!1),
              this._drawer.getCanvasSize(!0)
            ));
            var w;
            a && (h || (w = this.viewport.viewportToViewerElementRectangle(
              this.getClippedBounds(!0)
            ).getIntegerBoundingBox(), this._drawer.viewer.viewport.getFlip() && (this.viewport.getRotation(!0) % 360 !== 0 || this.getRotation(!0) % 360 !== 0) && (w.x = this._drawer.viewer.container.clientWidth - (w.x + w.width)), w = w.times(e.pixelDensityRatio)), this._drawer._clear(!0, w)), h || (this.viewport.getRotation(!0) % 360 !== 0 && this._drawer._offsetForRotation({
              degrees: this.viewport.getRotation(!0),
              useSketch: a
            }), this.getRotation(!0) % 360 !== 0 && this._drawer._offsetForRotation({
              degrees: this.getRotation(!0),
              point: this.viewport.pixelFromPointNoRotate(
                this._getRotationPoint(!0),
                !0
              ),
              useSketch: a
            }), this.viewport.getRotation(!0) % 360 === 0 && this.getRotation(!0) % 360 === 0 && this._drawer.viewer.viewport.getFlip() && this._drawer._flip());
            var E = !1;
            if (this._clip) {
              this._drawer.saveContext(a);
              var _ = this.imageToViewportRectangle(this._clip, !0);
              _ = _.rotate(-this.getRotation(!0), this._getRotationPoint(!0));
              var S = this._drawer.viewportToDrawerRectangle(_);
              h && (S = S.times(h)), c && (S = S.translate(c)), this._drawer.setClip(S, a), E = !0;
            }
            if (this._croppingPolygons) {
              var C = this;
              this._drawer.saveContext(a);
              try {
                var b = this._croppingPolygons.map(function(ne) {
                  return ne.map(function(oe) {
                    var le = C.imageToViewportCoordinates(oe.x, oe.y, !0).rotate(-C.getRotation(!0), C._getRotationPoint(!0)), pe = C._drawer.viewportCoordToDrawerCoord(le);
                    return h && (pe = pe.times(h)), c && (pe = pe.plus(c)), pe;
                  });
                });
                this._drawer.clipWithPolygons(b, a);
              } catch (ne) {
                e.console.error(ne);
              }
              E = !0;
            }
            if (this.placeholderFillStyle && this._hasOpaqueTile === !1) {
              var V = this._drawer.viewportToDrawerRectangle(this.getBounds(!0));
              h && (V = V.times(h)), c && (V = V.translate(c));
              var Z = null;
              typeof this.placeholderFillStyle == "function" ? Z = this.placeholderFillStyle(this, this._drawer.context) : Z = this.placeholderFillStyle, this._drawer.drawRectangle(V, Z, a);
            }
            var K = l(this.subPixelRoundingForTransparency), Q = !1;
            if (K === e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS)
              Q = !0;
            else if (K === e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST) {
              var q = this.viewer && this.viewer.isAnimating();
              Q = !q;
            }
            for (var $ = s.length - 1; $ >= 0; $--)
              o = s[$], this._drawer.drawTile(
                o,
                this._drawingHandler,
                a,
                h,
                c,
                Q,
                this.source
              ), o.beingDrawn = !0, this.viewer && this.viewer.raiseEvent("tile-drawn", {
                tiledImage: this,
                tile: o
              });
            E && this._drawer.restoreContext(a), h || (this.getRotation(!0) % 360 !== 0 && this._drawer._restoreRotationChanges(a), this.viewport.getRotation(!0) % 360 !== 0 && this._drawer._restoreRotationChanges(a)), a && (h && (this.viewport.getRotation(!0) % 360 !== 0 && this._drawer._offsetForRotation({
              degrees: this.viewport.getRotation(!0),
              useSketch: !1
            }), this.getRotation(!0) % 360 !== 0 && this._drawer._offsetForRotation({
              degrees: this.getRotation(!0),
              point: this.viewport.pixelFromPointNoRotate(
                this._getRotationPoint(!0),
                !0
              ),
              useSketch: !1
            })), this._drawer.blendSketch({
              opacity: this.opacity,
              scale: h,
              translate: c,
              compositeOperation: this.compositeOperation,
              bounds: w
            }), h && (this.getRotation(!0) % 360 !== 0 && this._drawer._restoreRotationChanges(!1), this.viewport.getRotation(!0) % 360 !== 0 && this._drawer._restoreRotationChanges(!1))), h || this.viewport.getRotation(!0) % 360 === 0 && this.getRotation(!0) % 360 === 0 && this._drawer.viewer.viewport.getFlip() && this._drawer._flip(), this._drawDebugInfo(s);
          }
        },
        /**
         * @private
         * @inner
         * Draws special debug information for a TiledImage if in debug mode.
         * @param {OpenSeadragon.Tile[]} lastDrawn - An unordered list of Tiles drawn last frame.
         */
        _drawDebugInfo: function(s) {
          if (this.debugMode)
            for (var o = s.length - 1; o >= 0; o--) {
              var a = s[o];
              try {
                this._drawer.drawDebugInfo(a, s.length, o, this);
              } catch (h) {
                e.console.error(h);
              }
            }
        },
        /**
         * @private
         * @inner
         * Returns true if the given tile provides coverage to lower-level tiles of
         * lower resolution representing the same content. If neither x nor y is
         * given, returns true if the entire visible level provides coverage.
         *
         * Note that out-of-bounds tiles provide coverage in this sense, since
         * there's no content that they would need to cover. Tiles at non-existent
         * levels that are within the image bounds, however, do not.
         *
         * @param {Object} coverage - A '3d' dictionary [level][x][y] --> Boolean.
         * @param {Number} level - The resolution level of the tile.
         * @param {Number} x - The X position of the tile.
         * @param {Number} y - The Y position of the tile.
         * @returns {Boolean}
         */
        _providesCoverage: function(s, o, a, h) {
          var c, p, v, w;
          if (!s[o])
            return !1;
          if (a === void 0 || h === void 0) {
            c = s[o];
            for (v in c)
              if (Object.prototype.hasOwnProperty.call(c, v)) {
                p = c[v];
                for (w in p)
                  if (Object.prototype.hasOwnProperty.call(p, w) && !p[w])
                    return !1;
              }
            return !0;
          }
          return s[o][a] === void 0 || s[o][a][h] === void 0 || s[o][a][h] === !0;
        },
        /**
         * @private
         * @inner
         * Returns true if the given tile is completely covered by higher-level
         * tiles of higher resolution representing the same content. If neither x
         * nor y is given, returns true if the entire visible level is covered.
         *
         * @param {Object} coverage - A '3d' dictionary [level][x][y] --> Boolean.
         * @param {Number} level - The resolution level of the tile.
         * @param {Number} x - The X position of the tile.
         * @param {Number} y - The Y position of the tile.
         * @returns {Boolean}
         */
        _isCovered: function(s, o, a, h) {
          return a === void 0 || h === void 0 ? this._providesCoverage(s, o + 1) : this._providesCoverage(s, o + 1, 2 * a, 2 * h) && this._providesCoverage(s, o + 1, 2 * a, 2 * h + 1) && this._providesCoverage(s, o + 1, 2 * a + 1, 2 * h) && this._providesCoverage(s, o + 1, 2 * a + 1, 2 * h + 1);
        },
        /**
         * @private
         * @inner
         * Sets whether the given tile provides coverage or not.
         *
         * @param {Object} coverage - A '3d' dictionary [level][x][y] --> Boolean.
         * @param {Number} level - The resolution level of the tile.
         * @param {Number} x - The X position of the tile.
         * @param {Number} y - The Y position of the tile.
         * @param {Boolean} covers - Whether the tile provides coverage.
         */
        _setCoverage: function(s, o, a, h, c) {
          if (!s[o]) {
            e.console.warn(
              "Setting coverage for a tile before its level's coverage has been reset: %s",
              o
            );
            return;
          }
          s[o][a] || (s[o][a] = {}), s[o][a][h] = c;
        },
        /**
         * @private
         * @inner
         * Resets coverage information for the given level. This should be called
         * after every draw routine. Note that at the beginning of the next draw
         * routine, coverage for every visible tile should be explicitly set.
         *
         * @param {Object} coverage - A '3d' dictionary [level][x][y] --> Boolean.
         * @param {Number} level - The resolution level of tiles to completely reset.
         */
        _resetCoverage: function(s, o) {
          s[o] = {};
        }
      }
    );
    var t = e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
    function i(s) {
      return s !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS && s !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST && s !== e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
    }
    function r(s) {
      return i(s) ? t : s;
    }
    function l(s) {
      if (typeof s == "number")
        return r(s);
      if (!s || !e.Browser)
        return t;
      var o = s[e.Browser.vendor];
      return i(o) && (o = s["*"]), r(o);
    }
  }(n), function(e) {
    var t = function(r) {
      e.console.assert(r, "[TileCache.cacheTile] options is required"), e.console.assert(r.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(r.tiledImage, "[TileCache.cacheTile] options.tiledImage is required"), this.tile = r.tile, this.tiledImage = r.tiledImage;
    }, i = function(r) {
      e.console.assert(r, "[ImageRecord] options is required"), e.console.assert(r.data, "[ImageRecord] options.data is required"), this._tiles = [], r.create.apply(null, [this, r.data, r.ownerTile]), this._destroyImplementation = r.destroy.bind(null, this), this.getImage = r.getImage.bind(null, this), this.getData = r.getData.bind(null, this), this.getRenderedContext = r.getRenderedContext.bind(null, this);
    };
    i.prototype = {
      destroy: function() {
        this._destroyImplementation(), this._tiles = null;
      },
      addTile: function(r) {
        e.console.assert(r, "[ImageRecord.addTile] tile is required"), this._tiles.push(r);
      },
      removeTile: function(r) {
        for (var l = 0; l < this._tiles.length; l++)
          if (this._tiles[l] === r) {
            this._tiles.splice(l, 1);
            return;
          }
        e.console.warn("[ImageRecord.removeTile] trying to remove unknown tile", r);
      },
      getTileCount: function() {
        return this._tiles.length;
      }
    }, e.TileCache = function(r) {
      r = r || {}, this._maxImageCacheCount = r.maxImageCacheCount || e.DEFAULT_SETTINGS.maxImageCacheCount, this._tilesLoaded = [], this._imagesLoaded = [], this._imagesLoadedCount = 0;
    }, e.TileCache.prototype = {
      /**
       * @returns {Number} The total number of tiles that have been loaded by
       * this TileCache.
       */
      numTilesLoaded: function() {
        return this._tilesLoaded.length;
      },
      /**
       * Caches the specified tile, removing an old tile if necessary to stay under the
       * maxImageCacheCount specified on construction. Note that if multiple tiles reference
       * the same image, there may be more tiles than maxImageCacheCount; the goal is to keep
       * the number of images below that number. Note, as well, that even the number of images
       * may temporarily surpass that number, but should eventually come back down to the max specified.
       * @param {Object} options - Tile info.
       * @param {OpenSeadragon.Tile} options.tile - The tile to cache.
       * @param {String} options.tile.cacheKey - The unique key used to identify this tile in the cache.
       * @param {Image} options.image - The image of the tile to cache.
       * @param {OpenSeadragon.TiledImage} options.tiledImage - The TiledImage that owns that tile.
       * @param {Number} [options.cutoff=0] - If adding this tile goes over the cache max count, this
       * function will release an old tile. The cutoff option specifies a tile level at or below which
       * tiles will not be released.
       */
      cacheTile: function(r) {
        e.console.assert(r, "[TileCache.cacheTile] options is required"), e.console.assert(r.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(r.tile.cacheKey, "[TileCache.cacheTile] options.tile.cacheKey is required"), e.console.assert(r.tiledImage, "[TileCache.cacheTile] options.tiledImage is required");
        var l = r.cutoff || 0, s = this._tilesLoaded.length, o = this._imagesLoaded[r.tile.cacheKey];
        if (o || (r.data || (e.console.error("[TileCache.cacheTile] options.image was renamed to options.data. '.image' attribute has been deprecated and will be removed in the future."), r.data = r.image), e.console.assert(r.data, "[TileCache.cacheTile] options.data is required to create an ImageRecord"), o = this._imagesLoaded[r.tile.cacheKey] = new i({
          data: r.data,
          ownerTile: r.tile,
          create: r.tiledImage.source.createTileCache,
          destroy: r.tiledImage.source.destroyTileCache,
          getImage: r.tiledImage.source.getTileCacheDataAsImage,
          getData: r.tiledImage.source.getTileCacheData,
          getRenderedContext: r.tiledImage.source.getTileCacheDataAsContext2D
        }), this._imagesLoadedCount++), o.addTile(r.tile), r.tile.cacheImageRecord = o, this._imagesLoadedCount > this._maxImageCacheCount) {
          for (var a = null, h = -1, c = null, p, v, w, E, _, S, C = this._tilesLoaded.length - 1; C >= 0; C--)
            if (S = this._tilesLoaded[C], p = S.tile, !(p.level <= l || p.beingDrawn)) {
              if (!a) {
                a = p, h = C, c = S;
                continue;
              }
              E = p.lastTouchTime, v = a.lastTouchTime, _ = p.level, w = a.level, (E < v || E === v && _ > w) && (a = p, h = C, c = S);
            }
          a && h >= 0 && (this._unloadTile(c), s = h);
        }
        this._tilesLoaded[s] = new t({
          tile: r.tile,
          tiledImage: r.tiledImage
        });
      },
      /**
       * Clears all tiles associated with the specified tiledImage.
       * @param {OpenSeadragon.TiledImage} tiledImage
       */
      clearTilesFor: function(r) {
        e.console.assert(r, "[TileCache.clearTilesFor] tiledImage is required");
        for (var l, s = 0; s < this._tilesLoaded.length; ++s)
          l = this._tilesLoaded[s], l.tiledImage === r && (this._unloadTile(l), this._tilesLoaded.splice(s, 1), s--);
      },
      // private
      getImageRecord: function(r) {
        return e.console.assert(r, "[TileCache.getImageRecord] cacheKey is required"), this._imagesLoaded[r];
      },
      // private
      _unloadTile: function(r) {
        e.console.assert(r, "[TileCache._unloadTile] tileRecord is required");
        var l = r.tile, s = r.tiledImage;
        l.unload(), l.cacheImageRecord = null;
        var o = this._imagesLoaded[l.cacheKey];
        o.removeTile(l), o.getTileCount() || (o.destroy(), delete this._imagesLoaded[l.cacheKey], this._imagesLoadedCount--), s.viewer.raiseEvent("tile-unloaded", {
          tile: l,
          tiledImage: s
        });
      }
    };
  }(n), function(e) {
    e.World = function(t) {
      var i = this;
      e.console.assert(t.viewer, "[World] options.viewer is required"), e.EventSource.call(this), this.viewer = t.viewer, this._items = [], this._needsDraw = !1, this._autoRefigureSizes = !0, this._needsSizesFigured = !1, this._delegatedFigureSizes = function(r) {
        i._autoRefigureSizes ? i._figureSizes() : i._needsSizesFigured = !0;
      }, this._figureSizes();
    }, e.extend(
      e.World.prototype,
      e.EventSource.prototype,
      /** @lends OpenSeadragon.World.prototype */
      {
        /**
         * Add the specified item.
         * @param {OpenSeadragon.TiledImage} item - The item to add.
         * @param {Number} [options.index] - Index for the item. If not specified, goes at the top.
         * @fires OpenSeadragon.World.event:add-item
         * @fires OpenSeadragon.World.event:metrics-change
         */
        addItem: function(t, i) {
          if (e.console.assert(t, "[World.addItem] item is required"), e.console.assert(t instanceof e.TiledImage, "[World.addItem] only TiledImages supported at this time"), i = i || {}, i.index !== void 0) {
            var r = Math.max(0, Math.min(this._items.length, i.index));
            this._items.splice(r, 0, t);
          } else
            this._items.push(t);
          this._autoRefigureSizes ? this._figureSizes() : this._needsSizesFigured = !0, this._needsDraw = !0, t.addHandler("bounds-change", this._delegatedFigureSizes), t.addHandler("clip-change", this._delegatedFigureSizes), this.raiseEvent("add-item", {
            item: t
          });
        },
        /**
         * Get the item at the specified index.
         * @param {Number} index - The item's index.
         * @returns {OpenSeadragon.TiledImage} The item at the specified index.
         */
        getItemAt: function(t) {
          return e.console.assert(t !== void 0, "[World.getItemAt] index is required"), this._items[t];
        },
        /**
         * Get the index of the given item or -1 if not present.
         * @param {OpenSeadragon.TiledImage} item - The item.
         * @returns {Number} The index of the item or -1 if not present.
         */
        getIndexOfItem: function(t) {
          return e.console.assert(t, "[World.getIndexOfItem] item is required"), e.indexOf(this._items, t);
        },
        /**
         * @returns {Number} The number of items used.
         */
        getItemCount: function() {
          return this._items.length;
        },
        /**
         * Change the index of a item so that it appears over or under others.
         * @param {OpenSeadragon.TiledImage} item - The item to move.
         * @param {Number} index - The new index.
         * @fires OpenSeadragon.World.event:item-index-change
         */
        setItemIndex: function(t, i) {
          e.console.assert(t, "[World.setItemIndex] item is required"), e.console.assert(i !== void 0, "[World.setItemIndex] index is required");
          var r = this.getIndexOfItem(t);
          if (i >= this._items.length)
            throw new Error("Index bigger than number of layers.");
          i === r || r === -1 || (this._items.splice(r, 1), this._items.splice(i, 0, t), this._needsDraw = !0, this.raiseEvent("item-index-change", {
            item: t,
            previousIndex: r,
            newIndex: i
          }));
        },
        /**
         * Remove an item.
         * @param {OpenSeadragon.TiledImage} item - The item to remove.
         * @fires OpenSeadragon.World.event:remove-item
         * @fires OpenSeadragon.World.event:metrics-change
         */
        removeItem: function(t) {
          e.console.assert(t, "[World.removeItem] item is required");
          var i = e.indexOf(this._items, t);
          i !== -1 && (t.removeHandler("bounds-change", this._delegatedFigureSizes), t.removeHandler("clip-change", this._delegatedFigureSizes), t.destroy(), this._items.splice(i, 1), this._figureSizes(), this._needsDraw = !0, this._raiseRemoveItem(t));
        },
        /**
         * Remove all items.
         * @fires OpenSeadragon.World.event:remove-item
         * @fires OpenSeadragon.World.event:metrics-change
         */
        removeAll: function() {
          this.viewer._cancelPendingImages();
          var t, i;
          for (i = 0; i < this._items.length; i++)
            t = this._items[i], t.removeHandler("bounds-change", this._delegatedFigureSizes), t.removeHandler("clip-change", this._delegatedFigureSizes), t.destroy();
          var r = this._items;
          for (this._items = [], this._figureSizes(), this._needsDraw = !0, i = 0; i < r.length; i++)
            t = r[i], this._raiseRemoveItem(t);
        },
        /**
         * Clears all tiles and triggers updates for all items.
         */
        resetItems: function() {
          for (var t = 0; t < this._items.length; t++)
            this._items[t].reset();
        },
        /**
         * Updates (i.e. animates bounds of) all items.
         */
        update: function() {
          for (var t = !1, i = 0; i < this._items.length; i++)
            t = this._items[i].update() || t;
          return t;
        },
        /**
         * Draws all items.
         */
        draw: function() {
          for (var t = 0; t < this._items.length; t++)
            this._items[t].draw();
          this._needsDraw = !1;
        },
        /**
         * @returns {Boolean} true if any items need updating.
         */
        needsDraw: function() {
          for (var t = 0; t < this._items.length; t++)
            if (this._items[t].needsDraw())
              return !0;
          return this._needsDraw;
        },
        /**
         * @returns {OpenSeadragon.Rect} The smallest rectangle that encloses all items, in viewport coordinates.
         */
        getHomeBounds: function() {
          return this._homeBounds.clone();
        },
        /**
         * To facilitate zoom constraints, we keep track of the pixel density of the
         * densest item in the World (i.e. the item whose content size to viewport size
         * ratio is the highest) and save it as this "content factor".
         * @returns {Number} the number of content units per viewport unit.
         */
        getContentFactor: function() {
          return this._contentFactor;
        },
        /**
         * As a performance optimization, setting this flag to false allows the bounds-change event handler
         * on tiledImages to skip calculations on the world bounds. If a lot of images are going to be positioned in
         * rapid succession, this is a good idea. When finished, setAutoRefigureSizes should be called with true
         * or the system may behave oddly.
         * @param {Boolean} [value] The value to which to set the flag.
         */
        setAutoRefigureSizes: function(t) {
          this._autoRefigureSizes = t, t & this._needsSizesFigured && (this._figureSizes(), this._needsSizesFigured = !1);
        },
        /**
         * Arranges all of the TiledImages with the specified settings.
         * @param {Object} options - Specifies how to arrange.
         * @param {Boolean} [options.immediately=false] - Whether to animate to the new arrangement.
         * @param {String} [options.layout] - See collectionLayout in {@link OpenSeadragon.Options}.
         * @param {Number} [options.rows] - See collectionRows in {@link OpenSeadragon.Options}.
         * @param {Number} [options.columns] - See collectionColumns in {@link OpenSeadragon.Options}.
         * @param {Number} [options.tileSize] - See collectionTileSize in {@link OpenSeadragon.Options}.
         * @param {Number} [options.tileMargin] - See collectionTileMargin in {@link OpenSeadragon.Options}.
         * @fires OpenSeadragon.World.event:metrics-change
         */
        arrange: function(t) {
          t = t || {};
          var i = t.immediately || !1, r = t.layout || e.DEFAULT_SETTINGS.collectionLayout, l = t.rows || e.DEFAULT_SETTINGS.collectionRows, s = t.columns || e.DEFAULT_SETTINGS.collectionColumns, o = t.tileSize || e.DEFAULT_SETTINGS.collectionTileSize, a = t.tileMargin || e.DEFAULT_SETTINGS.collectionTileMargin, h = o + a, c;
          !t.rows && s ? c = s : c = Math.ceil(this._items.length / l);
          var p = 0, v = 0, w, E, _, S, C;
          this.setAutoRefigureSizes(!1);
          for (var b = 0; b < this._items.length; b++)
            b && b % c === 0 && (r === "horizontal" ? (v += h, p = 0) : (p += h, v = 0)), w = this._items[b], E = w.getBounds(), E.width > E.height ? _ = o : _ = o * (E.width / E.height), S = _ * (E.height / E.width), C = new e.Point(
              p + (o - _) / 2,
              v + (o - S) / 2
            ), w.setPosition(C, i), w.setWidth(_, i), r === "horizontal" ? p += h : v += h;
          this.setAutoRefigureSizes(!0);
        },
        // private
        _figureSizes: function() {
          var t = this._homeBounds ? this._homeBounds.clone() : null, i = this._contentSize ? this._contentSize.clone() : null, r = this._contentFactor || 0;
          if (!this._items.length)
            this._homeBounds = new e.Rect(0, 0, 1, 1), this._contentSize = new e.Point(1, 1), this._contentFactor = 1;
          else {
            var l = this._items[0], s = l.getBounds();
            this._contentFactor = l.getContentSize().x / s.width;
            for (var o = l.getClippedBounds().getBoundingBox(), a = o.x, h = o.y, c = o.x + o.width, p = o.y + o.height, v = 1; v < this._items.length; v++)
              l = this._items[v], s = l.getBounds(), this._contentFactor = Math.max(
                this._contentFactor,
                l.getContentSize().x / s.width
              ), o = l.getClippedBounds().getBoundingBox(), a = Math.min(a, o.x), h = Math.min(h, o.y), c = Math.max(c, o.x + o.width), p = Math.max(p, o.y + o.height);
            this._homeBounds = new e.Rect(a, h, c - a, p - h), this._contentSize = new e.Point(
              this._homeBounds.width * this._contentFactor,
              this._homeBounds.height * this._contentFactor
            );
          }
          (this._contentFactor !== r || !this._homeBounds.equals(t) || !this._contentSize.equals(i)) && this.raiseEvent("metrics-change", {});
        },
        // private
        _raiseRemoveItem: function(t) {
          this.raiseEvent("remove-item", { item: t });
        }
      }
    );
  }(n);
})(Xi);
var kr = Xi.exports;
const Ur = /* @__PURE__ */ si(kr);
/*! @license DOMPurify 3.0.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.5/LICENSE */
const {
  entries: Yi,
  setPrototypeOf: bi,
  isFrozen: Gr,
  getPrototypeOf: Vr,
  getOwnPropertyDescriptor: jr
} = Object;
let {
  freeze: me,
  seal: Oe,
  create: Wr
} = Object, {
  apply: ii,
  construct: ni
} = typeof Reflect < "u" && Reflect;
ii || (ii = function(n, e, t) {
  return n.apply(e, t);
});
me || (me = function(n) {
  return n;
});
Oe || (Oe = function(n) {
  return n;
});
ni || (ni = function(n, e) {
  return new n(...e);
});
const qr = xe(Array.prototype.forEach), Ii = xe(Array.prototype.pop), ct = xe(Array.prototype.push), Pt = xe(String.prototype.toLowerCase), Xt = xe(String.prototype.toString), Zr = xe(String.prototype.match), Ae = xe(String.prototype.replace), Xr = xe(String.prototype.indexOf), Yr = xe(String.prototype.trim), Te = xe(RegExp.prototype.test), dt = Kr(TypeError);
function xe(d) {
  return function(n) {
    for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
      t[i - 1] = arguments[i];
    return ii(d, n, t);
  };
}
function Kr(d) {
  return function() {
    for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
      e[t] = arguments[t];
    return ni(d, e);
  };
}
function j(d, n, e) {
  var t;
  e = (t = e) !== null && t !== void 0 ? t : Pt, bi && bi(d, null);
  let i = n.length;
  for (; i--; ) {
    let r = n[i];
    if (typeof r == "string") {
      const l = e(r);
      l !== r && (Gr(n) || (n[i] = l), r = l);
    }
    d[r] = !0;
  }
  return d;
}
function st(d) {
  const n = Wr(null);
  for (const [e, t] of Yi(d))
    n[e] = t;
  return n;
}
function Et(d, n) {
  for (; d !== null; ) {
    const t = jr(d, n);
    if (t) {
      if (t.get)
        return xe(t.get);
      if (typeof t.value == "function")
        return xe(t.value);
    }
    d = Vr(d);
  }
  function e(t) {
    return console.warn("fallback value for", t), null;
  }
  return e;
}
const Ai = me(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Yt = me(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Kt = me(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Qr = me(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Qt = me(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Jr = me(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Oi = me(["#text"]), Li = me(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Jt = me(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Di = me(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), St = me(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), $r = Oe(/\{\{[\w\W]*|[\w\W]*\}\}/gm), es = Oe(/<%[\w\W]*|[\w\W]*%>/gm), ts = Oe(/\${[\w\W]*}/gm), is = Oe(/^data-[\-\w.\u00B7-\uFFFF]/), ns = Oe(/^aria-[\-\w]+$/), Ki = Oe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), rs = Oe(/^(?:\w+script|data):/i), ss = Oe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Qi = Oe(/^html$/i);
var Mi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: $r,
  ERB_EXPR: es,
  TMPLIT_EXPR: ts,
  DATA_ATTR: is,
  ARIA_ATTR: ns,
  IS_ALLOWED_URI: Ki,
  IS_SCRIPT_OR_DATA: rs,
  ATTR_WHITESPACE: ss,
  DOCTYPE_NAME: Qi
});
const os = () => typeof window > "u" ? null : window, as = function(n, e) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let t = null;
  const i = "data-tt-policy-suffix";
  e && e.hasAttribute(i) && (t = e.getAttribute(i));
  const r = "dompurify" + (t ? "#" + t : "");
  try {
    return n.createPolicy(r, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
};
function Ji() {
  let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : os();
  const n = (z) => Ji(z);
  if (n.version = "3.0.5", n.removed = [], !d || !d.document || d.document.nodeType !== 9)
    return n.isSupported = !1, n;
  const e = d.document, t = e.currentScript;
  let {
    document: i
  } = d;
  const {
    DocumentFragment: r,
    HTMLTemplateElement: l,
    Node: s,
    Element: o,
    NodeFilter: a,
    NamedNodeMap: h = d.NamedNodeMap || d.MozNamedAttrMap,
    HTMLFormElement: c,
    DOMParser: p,
    trustedTypes: v
  } = d, w = o.prototype, E = Et(w, "cloneNode"), _ = Et(w, "nextSibling"), S = Et(w, "childNodes"), C = Et(w, "parentNode");
  if (typeof l == "function") {
    const z = i.createElement("template");
    z.content && z.content.ownerDocument && (i = z.content.ownerDocument);
  }
  let b, V = "";
  const {
    implementation: Z,
    createNodeIterator: K,
    createDocumentFragment: Q,
    getElementsByTagName: q
  } = i, {
    importNode: $
  } = e;
  let ne = {};
  n.isSupported = typeof Yi == "function" && typeof C == "function" && Z && Z.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: oe,
    ERB_EXPR: le,
    TMPLIT_EXPR: pe,
    DATA_ATTR: Pe,
    ARIA_ATTR: Ze,
    IS_SCRIPT_OR_DATA: we,
    ATTR_WHITESPACE: _e
  } = Mi;
  let {
    IS_ALLOWED_URI: Re
  } = Mi, re = null;
  const Ce = j({}, [...Ai, ...Yt, ...Kt, ...Qt, ...Oi]);
  let he = null;
  const et = j({}, [...Li, ...Jt, ...Di, ...St]);
  let H = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Le = null, Ve = null, Xe = !0, De = !0, Ye = !1, tt = !0, be = !1, Ee = !1, Ke = !1, je = !1, Me = !1, Ne = !1, Ie = !1, u = !0, y = !1;
  const P = "user-content-";
  let O = !0, I = !1, F = {}, M = null;
  const J = j({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ee = null;
  const te = j({}, ["audio", "video", "img", "source", "image", "track"]);
  let G = null;
  const se = j({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), g = "http://www.w3.org/1998/Math/MathML", f = "http://www.w3.org/2000/svg", m = "http://www.w3.org/1999/xhtml";
  let T = m, R = !1, A = null;
  const k = j({}, [g, f, m], Xt);
  let X;
  const U = ["application/xhtml+xml", "text/html"], ge = "text/html";
  let Y, ve = null;
  const yt = i.createElement("form"), lt = function(x) {
    return x instanceof RegExp || x instanceof Function;
  }, it = function(x) {
    if (!(ve && ve === x)) {
      if ((!x || typeof x != "object") && (x = {}), x = st(x), X = // eslint-disable-next-line unicorn/prefer-includes
      U.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? X = ge : X = x.PARSER_MEDIA_TYPE, Y = X === "application/xhtml+xml" ? Xt : Pt, re = "ALLOWED_TAGS" in x ? j({}, x.ALLOWED_TAGS, Y) : Ce, he = "ALLOWED_ATTR" in x ? j({}, x.ALLOWED_ATTR, Y) : et, A = "ALLOWED_NAMESPACES" in x ? j({}, x.ALLOWED_NAMESPACES, Xt) : k, G = "ADD_URI_SAFE_ATTR" in x ? j(
        st(se),
        // eslint-disable-line indent
        x.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        Y
        // eslint-disable-line indent
      ) : se, ee = "ADD_DATA_URI_TAGS" in x ? j(
        st(te),
        // eslint-disable-line indent
        x.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        Y
        // eslint-disable-line indent
      ) : te, M = "FORBID_CONTENTS" in x ? j({}, x.FORBID_CONTENTS, Y) : J, Le = "FORBID_TAGS" in x ? j({}, x.FORBID_TAGS, Y) : {}, Ve = "FORBID_ATTR" in x ? j({}, x.FORBID_ATTR, Y) : {}, F = "USE_PROFILES" in x ? x.USE_PROFILES : !1, Xe = x.ALLOW_ARIA_ATTR !== !1, De = x.ALLOW_DATA_ATTR !== !1, Ye = x.ALLOW_UNKNOWN_PROTOCOLS || !1, tt = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, be = x.SAFE_FOR_TEMPLATES || !1, Ee = x.WHOLE_DOCUMENT || !1, Me = x.RETURN_DOM || !1, Ne = x.RETURN_DOM_FRAGMENT || !1, Ie = x.RETURN_TRUSTED_TYPE || !1, je = x.FORCE_BODY || !1, u = x.SANITIZE_DOM !== !1, y = x.SANITIZE_NAMED_PROPS || !1, O = x.KEEP_CONTENT !== !1, I = x.IN_PLACE || !1, Re = x.ALLOWED_URI_REGEXP || Ki, T = x.NAMESPACE || m, H = x.CUSTOM_ELEMENT_HANDLING || {}, x.CUSTOM_ELEMENT_HANDLING && lt(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && lt(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (H.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), be && (De = !1), Ne && (Me = !0), F && (re = j({}, [...Oi]), he = [], F.html === !0 && (j(re, Ai), j(he, Li)), F.svg === !0 && (j(re, Yt), j(he, Jt), j(he, St)), F.svgFilters === !0 && (j(re, Kt), j(he, Jt), j(he, St)), F.mathMl === !0 && (j(re, Qt), j(he, Di), j(he, St))), x.ADD_TAGS && (re === Ce && (re = st(re)), j(re, x.ADD_TAGS, Y)), x.ADD_ATTR && (he === et && (he = st(he)), j(he, x.ADD_ATTR, Y)), x.ADD_URI_SAFE_ATTR && j(G, x.ADD_URI_SAFE_ATTR, Y), x.FORBID_CONTENTS && (M === J && (M = st(M)), j(M, x.FORBID_CONTENTS, Y)), O && (re["#text"] = !0), Ee && j(re, ["html", "head", "body"]), re.table && (j(re, ["tbody"]), delete Le.tbody), x.TRUSTED_TYPES_POLICY) {
        if (typeof x.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw dt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof x.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw dt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        b = x.TRUSTED_TYPES_POLICY, V = b.createHTML("");
      } else
        b === void 0 && (b = as(v, t)), b !== null && typeof V == "string" && (V = b.createHTML(""));
      me && me(x), ve = x;
    }
  }, li = j({}, ["mi", "mo", "mn", "ms", "mtext"]), hi = j({}, ["foreignobject", "desc", "title", "annotation-xml"]), un = j({}, ["title", "style", "font", "a", "script"]), Tt = j({}, Yt);
  j(Tt, Kt), j(Tt, Qr);
  const kt = j({}, Qt);
  j(kt, Jr);
  const cn = function(x) {
    let L = C(x);
    (!L || !L.tagName) && (L = {
      namespaceURI: T,
      tagName: "template"
    });
    const N = Pt(x.tagName), ie = Pt(L.tagName);
    return A[x.namespaceURI] ? x.namespaceURI === f ? L.namespaceURI === m ? N === "svg" : L.namespaceURI === g ? N === "svg" && (ie === "annotation-xml" || li[ie]) : !!Tt[N] : x.namespaceURI === g ? L.namespaceURI === m ? N === "math" : L.namespaceURI === f ? N === "math" && hi[ie] : !!kt[N] : x.namespaceURI === m ? L.namespaceURI === f && !hi[ie] || L.namespaceURI === g && !li[ie] ? !1 : !kt[N] && (un[N] || !Tt[N]) : !!(X === "application/xhtml+xml" && A[x.namespaceURI]) : !1;
  }, Qe = function(x) {
    ct(n.removed, {
      element: x
    });
    try {
      x.parentNode.removeChild(x);
    } catch {
      x.remove();
    }
  }, Ut = function(x, L) {
    try {
      ct(n.removed, {
        attribute: L.getAttributeNode(x),
        from: L
      });
    } catch {
      ct(n.removed, {
        attribute: null,
        from: L
      });
    }
    if (L.removeAttribute(x), x === "is" && !he[x])
      if (Me || Ne)
        try {
          Qe(L);
        } catch {
        }
      else
        try {
          L.setAttribute(x, "");
        } catch {
        }
  }, ui = function(x) {
    let L, N;
    if (je)
      x = "<remove></remove>" + x;
    else {
      const Se = Zr(x, /^[\r\n\t ]+/);
      N = Se && Se[0];
    }
    X === "application/xhtml+xml" && T === m && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
    const ie = b ? b.createHTML(x) : x;
    if (T === m)
      try {
        L = new p().parseFromString(ie, X);
      } catch {
      }
    if (!L || !L.documentElement) {
      L = Z.createDocument(T, "template", null);
      try {
        L.documentElement.innerHTML = R ? V : ie;
      } catch {
      }
    }
    const fe = L.body || L.documentElement;
    return x && N && fe.insertBefore(i.createTextNode(N), fe.childNodes[0] || null), T === m ? q.call(L, Ee ? "html" : "body")[0] : Ee ? L.documentElement : fe;
  }, ci = function(x) {
    return K.call(
      x.ownerDocument || x,
      x,
      // eslint-disable-next-line no-bitwise
      a.SHOW_ELEMENT | a.SHOW_COMMENT | a.SHOW_TEXT,
      null,
      !1
    );
  }, dn = function(x) {
    return x instanceof c && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof h) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
  }, wt = function(x) {
    return typeof s == "object" ? x instanceof s : x && typeof x == "object" && typeof x.nodeType == "number" && typeof x.nodeName == "string";
  }, Ue = function(x, L, N) {
    ne[x] && qr(ne[x], (ie) => {
      ie.call(n, L, N, ve);
    });
  }, di = function(x) {
    let L;
    if (Ue("beforeSanitizeElements", x, null), dn(x))
      return Qe(x), !0;
    const N = Y(x.nodeName);
    if (Ue("uponSanitizeElement", x, {
      tagName: N,
      allowedTags: re
    }), x.hasChildNodes() && !wt(x.firstElementChild) && (!wt(x.content) || !wt(x.content.firstElementChild)) && Te(/<[/\w]/g, x.innerHTML) && Te(/<[/\w]/g, x.textContent))
      return Qe(x), !0;
    if (!re[N] || Le[N]) {
      if (!Le[N] && pi(N) && (H.tagNameCheck instanceof RegExp && Te(H.tagNameCheck, N) || H.tagNameCheck instanceof Function && H.tagNameCheck(N)))
        return !1;
      if (O && !M[N]) {
        const ie = C(x) || x.parentNode, fe = S(x) || x.childNodes;
        if (fe && ie) {
          const Se = fe.length;
          for (let ae = Se - 1; ae >= 0; --ae)
            ie.insertBefore(E(fe[ae], !0), _(x));
        }
      }
      return Qe(x), !0;
    }
    return x instanceof o && !cn(x) || (N === "noscript" || N === "noembed" || N === "noframes") && Te(/<\/no(script|embed|frames)/i, x.innerHTML) ? (Qe(x), !0) : (be && x.nodeType === 3 && (L = x.textContent, L = Ae(L, oe, " "), L = Ae(L, le, " "), L = Ae(L, pe, " "), x.textContent !== L && (ct(n.removed, {
      element: x.cloneNode()
    }), x.textContent = L)), Ue("afterSanitizeElements", x, null), !1);
  }, fi = function(x, L, N) {
    if (u && (L === "id" || L === "name") && (N in i || N in yt))
      return !1;
    if (!(De && !Ve[L] && Te(Pe, L))) {
      if (!(Xe && Te(Ze, L))) {
        if (!he[L] || Ve[L]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(pi(x) && (H.tagNameCheck instanceof RegExp && Te(H.tagNameCheck, x) || H.tagNameCheck instanceof Function && H.tagNameCheck(x)) && (H.attributeNameCheck instanceof RegExp && Te(H.attributeNameCheck, L) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(L)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            L === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && Te(H.tagNameCheck, N) || H.tagNameCheck instanceof Function && H.tagNameCheck(N)))
          )
            return !1;
        } else if (!G[L]) {
          if (!Te(Re, Ae(N, _e, ""))) {
            if (!((L === "src" || L === "xlink:href" || L === "href") && x !== "script" && Xr(N, "data:") === 0 && ee[x])) {
              if (!(Ye && !Te(we, Ae(N, _e, "")))) {
                if (N)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, pi = function(x) {
    return x.indexOf("-") > 0;
  }, gi = function(x) {
    let L, N, ie, fe;
    Ue("beforeSanitizeAttributes", x, null);
    const {
      attributes: Se
    } = x;
    if (!Se)
      return;
    const ae = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: he
    };
    for (fe = Se.length; fe--; ) {
      L = Se[fe];
      const {
        name: He,
        namespaceURI: Gt
      } = L;
      if (N = He === "value" ? L.value : Yr(L.value), ie = Y(He), ae.attrName = ie, ae.attrValue = N, ae.keepAttr = !0, ae.forceKeepAttr = void 0, Ue("uponSanitizeAttribute", x, ae), N = ae.attrValue, ae.forceKeepAttr || (Ut(He, x), !ae.keepAttr))
        continue;
      if (!tt && Te(/\/>/i, N)) {
        Ut(He, x);
        continue;
      }
      be && (N = Ae(N, oe, " "), N = Ae(N, le, " "), N = Ae(N, pe, " "));
      const mi = Y(x.nodeName);
      if (fi(mi, ie, N)) {
        if (y && (ie === "id" || ie === "name") && (Ut(He, x), N = P + N), b && typeof v == "object" && typeof v.getAttributeType == "function" && !Gt)
          switch (v.getAttributeType(mi, ie)) {
            case "TrustedHTML": {
              N = b.createHTML(N);
              break;
            }
            case "TrustedScriptURL": {
              N = b.createScriptURL(N);
              break;
            }
          }
        try {
          Gt ? x.setAttributeNS(Gt, He, N) : x.setAttribute(He, N), Ii(n.removed);
        } catch {
        }
      }
    }
    Ue("afterSanitizeAttributes", x, null);
  }, fn = function z(x) {
    let L;
    const N = ci(x);
    for (Ue("beforeSanitizeShadowDOM", x, null); L = N.nextNode(); )
      Ue("uponSanitizeShadowNode", L, null), !di(L) && (L.content instanceof r && z(L.content), gi(L));
    Ue("afterSanitizeShadowDOM", x, null);
  };
  return n.sanitize = function(z) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, L, N, ie, fe;
    if (R = !z, R && (z = "<!-->"), typeof z != "string" && !wt(z))
      if (typeof z.toString == "function") {
        if (z = z.toString(), typeof z != "string")
          throw dt("dirty is not a string, aborting");
      } else
        throw dt("toString is not a function");
    if (!n.isSupported)
      return z;
    if (Ke || it(x), n.removed = [], typeof z == "string" && (I = !1), I) {
      if (z.nodeName) {
        const He = Y(z.nodeName);
        if (!re[He] || Le[He])
          throw dt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (z instanceof s)
      L = ui("<!---->"), N = L.ownerDocument.importNode(z, !0), N.nodeType === 1 && N.nodeName === "BODY" || N.nodeName === "HTML" ? L = N : L.appendChild(N);
    else {
      if (!Me && !be && !Ee && // eslint-disable-next-line unicorn/prefer-includes
      z.indexOf("<") === -1)
        return b && Ie ? b.createHTML(z) : z;
      if (L = ui(z), !L)
        return Me ? null : Ie ? V : "";
    }
    L && je && Qe(L.firstChild);
    const Se = ci(I ? z : L);
    for (; ie = Se.nextNode(); )
      di(ie) || (ie.content instanceof r && fn(ie.content), gi(ie));
    if (I)
      return z;
    if (Me) {
      if (Ne)
        for (fe = Q.call(L.ownerDocument); L.firstChild; )
          fe.appendChild(L.firstChild);
      else
        fe = L;
      return (he.shadowroot || he.shadowrootmode) && (fe = $.call(e, fe, !0)), fe;
    }
    let ae = Ee ? L.outerHTML : L.innerHTML;
    return Ee && re["!doctype"] && L.ownerDocument && L.ownerDocument.doctype && L.ownerDocument.doctype.name && Te(Qi, L.ownerDocument.doctype.name) && (ae = "<!DOCTYPE " + L.ownerDocument.doctype.name + `>
` + ae), be && (ae = Ae(ae, oe, " "), ae = Ae(ae, le, " "), ae = Ae(ae, pe, " ")), b && Ie ? b.createHTML(ae) : ae;
  }, n.setConfig = function(z) {
    it(z), Ke = !0;
  }, n.clearConfig = function() {
    ve = null, Ke = !1;
  }, n.isValidAttribute = function(z, x, L) {
    ve || it({});
    const N = Y(z), ie = Y(x);
    return fi(N, ie, L);
  }, n.addHook = function(z, x) {
    typeof x == "function" && (ne[z] = ne[z] || [], ct(ne[z], x));
  }, n.removeHook = function(z) {
    if (ne[z])
      return Ii(ne[z]);
  }, n.removeHooks = function(z) {
    ne[z] && (ne[z] = []);
  }, n.removeAllHooks = function() {
    ne = {};
  }, n;
}
var ls = Ji();
function xt(d, n) {
  return ls.sanitize(d, {
    ...n,
    RETURN_DOM_FRAGMENT: !1,
    RETURN_DOM: !1,
    RETURN_DOM_IMPORT: !1,
    RETURN_TRUSTED_TYPE: !1
  });
}
function $t(d) {
  return d.replace(/(?:\r\n|\r|\n)/g, "<br/>");
}
function Ni(d) {
  return /^<.*>$/gim.test(d);
}
const Hi = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="m11.298 5.634 5.367 5.367-11.731-.007a1.004 1.004 0 0 0 0 2.008l11.73-.007-5.366 5.367a1 1 0 1 0 1.414 1.414l7.071-7.07c.091-.094.163-.205.212-.326a1 1 0 0 0 0-.764 1.002 1.002 0 0 0-.212-.325l-7.07-7.071a1 1 0 0 0-1.415 1.414Z"/></svg>
`, hs = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M21 11a1 1 0 0 0-1 1 8.05 8.05 0 1 1-2.22-5.5h-2.4a1 1 0 1 0 0 2h4.53a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1.77A10 10 0 1 0 22 12a1 1 0 0 0-1-1Z"/></svg>
`, us = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M21.92 11.6C19.9 6.91 16.1 4 12 4s-7.9 2.91-9.92 7.6a1 1 0 0 0 0 .8C4.1 17.09 7.9 20 12 20s7.9-2.91 9.92-7.6a1.001 1.001 0 0 0 0-.8ZM12 18c-3.18 0-6.17-2.29-7.9-6C5.83 8.29 8.82 6 12 6c3.18 0 6.17 2.29 7.9 6-1.73 3.71-4.72 6-7.9 6Zm0-10a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/></svg>
`, cs = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M10.94 6.08A6.93 6.93 0 0 1 12 6c3.18 0 6.17 2.29 7.91 6a15.213 15.213 0 0 1-.9 1.64 1 1 0 0 0 .05 1.152 1 1 0 0 0 1.65-.102 15.76 15.76 0 0 0 1.21-2.3 1 1 0 0 0 0-.79C19.9 6.91 16.1 4 12 4a7.77 7.77 0 0 0-1.4.12 1.014 1.014 0 0 0 .34 2v-.04ZM3.71 2.29a1.004 1.004 0 1 0-1.42 1.42l3.1 3.09a14.62 14.62 0 0 0-3.31 4.8 1 1 0 0 0 0 .8C4.1 17.09 7.9 20 12 20a9.26 9.26 0 0 0 5.05-1.54l3.24 3.25a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095l-18-18Zm6.36 9.19 2.45 2.45a2 2 0 0 1-2.45-2.45ZM12 18c-3.18 0-6.17-2.29-7.9-6a12.09 12.09 0 0 1 2.7-3.79L8.57 10A4 4 0 0 0 14 15.43L15.59 17A7.24 7.24 0 0 1 12 18Z"/></svg>
`;
var Je, ot, at, Fe, qe, $e, mt, bt, Be, We, It, $i, At, en, Ot, tn, Lt, nn, Dt, rn, Mt, sn, Nt, on, Ht, an, Ft, ln, vt, ri, Bt, hn;
const zt = class zt {
  constructor(n) {
    /**
     * Log a message to the console, or throw an exception
     */
    ue(this, Be);
    /**
     * Takes a service ID and returns the expanded URL that includes "/info.json"\
     * This format is a MUST for the IIIF Image API, so we can rely on our manipulations being valid
     */
    ue(this, It);
    /**
     * Load the manifest and extract the label, canvases and annotation pages
     */
    ue(this, At);
    /**
     * Initialize the viewer
     */
    ue(this, Ot);
    /**
     * Update the viewer
     */
    ue(this, Lt);
    /**
     * Create area for label, annotations and controls
     */
    ue(this, Dt);
    /**
     * Generate HTML markup for the title slide
     */
    ue(this, Mt);
    /**
     * Generate HTML markup for an annotation slide
     */
    ue(this, Nt);
    /**
     * Generate HTML markup for an annotation slide
     */
    ue(this, Ht);
    /**
     * Retrieves the annotationPages for the manifest
     * (Temporary solution)
     */
    ue(this, Ft);
    /**
     * Get the annotations for the current canvas
     */
    ue(this, vt);
    /**
     * Get the region from the URL as a Rect relative to the viewport of this instance's viewer
     */
    ue(this, Bt);
    ue(this, Je, void 0);
    ue(this, ot, void 0);
    ue(this, at, void 0);
    ue(this, Fe, void 0);
    /** Uppermost number of slides considering factors such as credits */
    ue(this, qe, void 0);
    /** Cached user preference on reduced-motion */
    ue(this, $e, void 0);
    ue(this, mt, void 0);
    ye(this, Je, -1), ye(this, ot, 0), ye(this, at, !0), ye(this, Fe, -1), ye(this, mt, {
      "bad-config": ["error", "Missing required config"],
      "manifest-err": ["error", "Encountered a problem loading the manifest"],
      "bad-manifest": ["error", "Could not parse the manifest"],
      "bad-container": ["error", "Container element not found"],
      "unkn-version": [
        "warn",
        "Unsupported IIIF Presentation API version detected"
      ],
      "no-label": [
        "warn",
        "Manifest doesn't contain a label. This is required by the IIIF Presentation API"
      ],
      "no-ext-anno": ["warn", "External annotationPages are not supported"]
    }), this.containerElement = null, this.showCreditSlide = !0, this.label = "", this.annotationPages = [], this.activeCanvasAnnotations = [], this.DOMPurifyConfig = {
      ALLOWED_TAGS: [
        "a",
        "b",
        "br",
        "em",
        "i",
        "p",
        "small",
        "span",
        "strong",
        "sub",
        "sup",
        "audio",
        "div"
      ],
      ALLOWED_ATTR: ["href", "src", "controls", "class", "autoplay"]
    }, typeof n.container == "string" ? this.containerElement = document.querySelector(n.container) : n.container instanceof HTMLElement && (this.containerElement = n.container), this.containerElement === null && ce(this, Be, We).call(this, "bad-container", !0), this.manifestUrl = n.manifestUrl, this.showCreditSlide = n.showCreditSlide ?? !0, (!this.containerElement || !this.manifestUrl) && ce(this, Be, We).call(this, "bad-config", !0), this.instanceId = vi(zt, bt)._++, ye(this, $e, window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches), ce(this, At, en).call(this).then(() => {
      var e;
      (e = this.containerElement) == null || e.classList.add("storiiies-viewer"), ce(this, Ot, tn).call(this), ce(this, Dt, rn).call(this);
    });
  }
  /**
   * Get the active canvas index\
   * Used to determine which canvas is currently active
   */
  get activeCanvasIndex() {
    return de(this, ot);
  }
  /**
   * Set the active canvas index and perform any necessary updates\
   * Used to navigate between canvases
   */
  set activeCanvasIndex(n) {
    ye(this, ot, n), this.activeAnnotationIndex = de(this, Fe);
  }
  /**
   * Get the active annotation index\
   * Used to determine which annotation is currently active
   */
  get activeAnnotationIndex() {
    return de(this, Je);
  }
  /**
   * Set the active annotation index and perform any necessary updates\
   * Used to navigate between annotations
   */
  set activeAnnotationIndex(n) {
    const e = de(this, Fe), t = de(this, qe);
    let i;
    n < e || n > t || (ye(this, Je, n), this.controlButtonElements.prev.disabled = !1, this.controlButtonElements.next.innerHTML = `<span class="storiiies-viewer__button-icon" inert>${Hi}</span>`, this.controlButtonElements.next.ariaLabel = "Next", n === e && (this.controlButtonElements.prev.disabled = !0), n === t && (this.controlButtonElements.next.innerHTML = `<span class="storiiies-viewer__button-icon" inert>${hs}</span>`, this.controlButtonElements.next.ariaLabel = "Restart"), this.activeAnnotationIndex === de(this, Fe) ? i = ce(this, Mt, sn).call(this) : this.activeAnnotationIndex === de(this, qe) && this.showCreditSlide ? i = ce(this, Ht, an).call(this) : i = ce(this, Nt, on).call(this), this.infoTextElement.innerHTML = i, ce(this, Lt, nn).call(this));
  }
  /**
   * Get the showInfoArea value\
   * Used to determine whether the info area is visible
   */
  get showInfoArea() {
    return de(this, at);
  }
  /**
   * Set the showInfoArea value and perform any necessary updates\
   * Used to toggle the info area visibility
   */
  set showInfoArea(n) {
    var e;
    ye(this, at, n), (e = this.containerElement) == null || e.classList.toggle(
      "storiiies-viewer--info-hidden",
      !n
    ), this.infoToggleElement.ariaLabel = `${n ? "Hide" : "Show"} annotations`, this.infoToggleElement.innerHTML = `
      <span class="storiiies-viewer__button-icon" inert>
        ${n ? cs : us}
      </span>
    `, this.infoToggleElement.ariaExpanded = `${n}`, this.infoAreaElement.inert = !n, this.infoAreaElement.classList.toggle(
      "storiiies-viewer__info-area--hidden",
      !n
    );
  }
};
Je = new WeakMap(), ot = new WeakMap(), at = new WeakMap(), Fe = new WeakMap(), qe = new WeakMap(), $e = new WeakMap(), mt = new WeakMap(), bt = new WeakMap(), Be = new WeakSet(), We = function(n, e = !1) {
  var l, s;
  const [t, i] = de(this, mt)[n], r = new Set((s = (l = this.containerElement) == null ? void 0 : l.dataset.status) == null ? void 0 : s.split(","));
  if (this.containerElement && (r.add(n), this.containerElement.dataset.status = [...r].join(",")), e)
    throw new Error(`Storiiies Viewer: ${i}`);
  console[t](`Storiiies Viewer: ${i}`);
}, It = new WeakSet(), $i = function(n) {
  return n.replace(/\/?(?:info\.json)?$/, "/info.json");
}, At = new WeakSet(), en = async function() {
  var i, r, l, s, o, a, h;
  const n = await zr(this.manifestUrl).catch(() => {
    ce(this, Be, We).call(this, "manifest-err", !0);
  });
  this.manifest = new qi(n), this.canvases = (i = this.manifest.getSequenceByIndex(0)) == null ? void 0 : i.getCanvases(), (r = this == null ? void 0 : this.canvases) != null && r.length || ce(this, Be, We).call(this, "bad-manifest", !0), this.manifest.context !== "http://iiif.io/api/presentation/3/context.json" && ce(this, Be, We).call(this, "unkn-version"), this.label = this.manifest.getLabel().getValue() || "", this.summary = ((l = this.manifest.getProperty("summary")) == null ? void 0 : l.en[0]) || "";
  let e, t;
  try {
    e = (o = (s = this.manifest) == null ? void 0 : s.getRequiredStatement()) == null ? void 0 : o.getLabel();
  } catch {
  }
  try {
    t = (h = (a = this.manifest) == null ? void 0 : a.getRequiredStatement()) == null ? void 0 : h.getValue();
  } catch {
  }
  this.requiredStatement = {
    label: e || "",
    value: t || ""
  }, this.label || (ye(this, Fe, 0), ce(this, Be, We).call(this, "no-label")), this.annotationPages = ce(this, Ft, ln).call(this), this.activeCanvasAnnotations = ce(this, vt, ri).call(this), ye(this, qe, this.showCreditSlide ? this.activeCanvasAnnotations.length : this.activeCanvasAnnotations.length - 1);
}, Ot = new WeakSet(), tn = function() {
  var e;
  const n = document.createElement("div");
  n.id = `storiiies-viewer-${this.instanceId}__osd-container`, n.classList.add("storiiies-viewer__osd-container"), (e = this.containerElement) == null || e.insertAdjacentElement("afterbegin", n), this.viewer = Ur({
    element: n,
    tileSources: [
      ce(this, It, $i).call(this, this.canvases[this.activeCanvasIndex].imageServiceIds[0])
    ],
    crossOriginPolicy: "Anonymous",
    showSequenceControl: !1,
    showHomeControl: !1,
    showZoomControl: !1,
    showFullPageControl: !1,
    visibilityRatio: 0.3
  }), this.viewer.canvas.ariaLabel = "Storiiies viewer", this.viewer.canvas.role = "application", this.viewer.element.insertAdjacentHTML(
    "afterbegin",
    `<p class="storiiies-viewer__description" id="storiiies-viewer-${this.instanceId}__description">Drag with your mouse or the arrow keys, and zoom with scroll or <kbd aria-label="plus">+</kbd> and <kbd aria-label="minus">-</kbd></p>`
  ), this.viewer.canvas.setAttribute(
    "aria-describedby",
    `storiiies-viewer-${this.instanceId}__description`
  ), this.viewer.addHandler("open", () => {
    this.containerElement && (this.containerElement.dataset.loaded = "true");
  });
}, Lt = new WeakSet(), nn = function() {
  if (this.label && this.activeAnnotationIndex === de(this, Fe)) {
    this.viewer.viewport.goHome(de(this, $e));
    return;
  }
  if (this.activeAnnotationIndex === de(this, qe) && this.showCreditSlide)
    return;
  const n = ce(this, vt, ri).call(this)[this.activeAnnotationIndex].getTarget() || "", e = ce(this, Bt, hn).call(this, n);
  e ? this.viewer.viewport.fitBoundsWithConstraints(
    e,
    de(this, $e)
  ) : this.viewer.viewport.goHome(de(this, $e));
}, Dt = new WeakSet(), rn = function() {
  var l;
  const n = document.createElement("div"), e = document.createElement("button"), t = document.createElement("button");
  e.id = `storiiies-viewer-${this.instanceId}__previous`, e.classList.add("storiiies-viewer__icon-button"), e.ariaLabel = "Previous", e.innerHTML = `
      <span class="storiiies-viewer__button-icon" inert>
        ${Hi}
      </span>
    `;
  const i = e.cloneNode();
  i.id = `storiiies-viewer-${this.instanceId}__next`, e.classList.add("storiiies-viewer__previous"), i.classList.add("storiiies-viewer__next"), [e, i].forEach((s) => {
    s.addEventListener("click", (o) => {
      o.target.ariaLabel === "Previous" ? this.activeAnnotationIndex = this.activeAnnotationIndex - 1 : this.activeAnnotationIndex === de(this, qe) ? this.activeCanvasIndex = 0 : this.activeAnnotationIndex = this.activeAnnotationIndex + 1;
    });
  }), n.append(e, i), n.insertAdjacentHTML(
    "beforeend",
    `
      <div id="storiiies-viewer-${this.instanceId}__info-text" class="storiiies-viewer__info-text" tabindex="0">
      </div>
    `
  );
  const r = n.querySelector(
    ".storiiies-viewer__info-text"
  );
  t.id = `storiiies-viewer-${this.instanceId}__info-toggle`, t.classList.add(
    "storiiies-viewer__icon-button",
    "storiiies-viewer__info-toggle"
  ), t.setAttribute(
    "aria-controls",
    `storiiies-viewer-${this.instanceId}__info-area`
  ), t.addEventListener("click", () => {
    this.showInfoArea = !this.showInfoArea;
  }), n.id = `storiiies-viewer-${this.instanceId}__info-area`, (l = this.containerElement) == null || l.insertAdjacentElement("beforeend", n), n.insertAdjacentElement("beforebegin", t), n.classList.add("storiiies-viewer__info-area"), this.infoAreaElement = n, this.infoTextElement = r, this.controlButtonElements = {
    prev: e,
    next: i
  }, this.infoToggleElement = t, this.showInfoArea = !0, this.activeAnnotationIndex = de(this, Fe);
}, Mt = new WeakSet(), sn = function() {
  const n = xt($t(this.label), this.DOMPurifyConfig), e = xt(
    Ni(this.summary) ? this.summary : $t(this.summary),
    this.DOMPurifyConfig
  );
  let t = "";
  return t = xt(
    t.concat(
      this.requiredStatement.label && `<strong>${this.requiredStatement.label}:</strong> `,
      // Required statement value might be plain text or HTML
      this.requiredStatement.value && `${Ni(this.requiredStatement.value) ? this.requiredStatement.value : $t(this.requiredStatement.value)}`
    ),
    this.DOMPurifyConfig
  ), `
        <h1 class="storiiies-viewer__title storiiies-viewer__text-section">${n}</h1>
        <div class="storiiies-viewer__text-section">${e}</div>
        <div class="storiiies-viewer__text-section">${t}</div>
      `;
}, Nt = new WeakSet(), on = function() {
  let n = "";
  const e = this.activeCanvasAnnotations[de(this, Je)].getBody();
  for (const t of e)
    if (t.getType() === "textualbody") {
      let i = t.getProperty("value");
      (t.getFormat() || "text/plain") === "text/plain" && (i = i.replace(/(?:\r\n|\r|\n)/g, "<br/>")), n += i;
    } else if (t.getType() === "sound") {
      const r = `<div class="storiiies-viewer__audio-player-container"><audio autoplay controls src="${t.id}">Your browser does not support the audio element.</audio></div>`;
      n += r;
    }
  return xt(n, this.DOMPurifyConfig);
}, Ht = new WeakSet(), an = function() {
  return `<p>Storiiies was created by <a href="https://www.cogapp.com" target="_blank">Cogapp</a>.</p><p>It's easy, and free, to create your own story - find out more at <a href="https://www.cogapp.com/storiiies" target="_blank">cogapp.com/storiiies</a>.</p><p>This viewer is released as open source - see <a href="https://cogapp.com/open-source-at-cogapp" target="_blank">cogapp.com/open-source-at-cogapp</a>.</p>`;
}, Ft = new WeakSet(), ln = function() {
  const n = [];
  return this.canvases.length && this.canvases.forEach((e) => {
    const t = e.getProperty("annotations") || [];
    return n.push(
      ...t.flatMap((i) => {
        const r = i.items;
        return r ? new ki(
          {
            ...i,
            items: r.map((l) => new gt(l, this.manifest.options)),
            type: i.type
          },
          this.manifest.options
        ) : (ce(this, Be, We).call(this, "no-ext-anno"), []);
      })
    ), [];
  }), n;
}, vt = new WeakSet(), ri = function() {
  var n;
  return ((n = this.annotationPages[this.activeCanvasIndex]) == null ? void 0 : n.getItems()) || [];
}, Bt = new WeakSet(), hn = function(n) {
  const e = n == null ? void 0 : n.split("#xywh=")[1];
  if (e) {
    const [t, i, r, l] = e.split(",").map(Number);
    return this.viewer.viewport.imageToViewportRectangle(t, i, r, l);
  }
  return null;
}, /** Index representing the number of StoriiiesViewer instances in the current scope */
ue(zt, bt, 0);
let Fi = zt;
export {
  Fi as default
};
