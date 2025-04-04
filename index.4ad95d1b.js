document.addEventListener('DOMContentLoaded', ()=>{
    const dropdownButtons = document.querySelectorAll('.js__dropdown-btn');
    dropdownButtons.forEach((dropdownBtn)=>{
        const dropdownList = dropdownBtn.nextElementSibling;
        if (dropdownList && dropdownList.classList.contains('js__dropdown-list')) dropdownBtn.addEventListener('click', (event)=>{
            event.preventDefault();
            document.querySelectorAll('.js__dropdown-list--active').forEach((activeList)=>{
                if (activeList !== dropdownList) activeList.classList.remove('js__dropdown-list--active');
            });
            document.querySelectorAll('.js__dropdown-btn--active').forEach((activeBtn)=>{
                if (activeBtn !== dropdownBtn) activeBtn.classList.remove('js__dropdown-btn--active');
            });
            // Переключаем состояние текущего списка
            dropdownList.classList.toggle('js__dropdown-list--active');
            dropdownBtn.classList.toggle('js__dropdown-btn--active');
        });
    });
});


/**
 * Swiper 11.2.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 14, 2025
 */ /**
 * SSR Window 5.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2025, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: February 12, 2025
 */ /* eslint-disable no-param-reassign */ function $189f45f12f88561c$var$isObject(obj) {
    return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function $189f45f12f88561c$var$extend(target, src) {
    if (target === void 0) target = {};
    if (src === void 0) src = {};
    const noExtend = [
        '__proto__',
        'constructor',
        'prototype'
    ];
    Object.keys(src).filter((key)=>noExtend.indexOf(key) < 0).forEach((key)=>{
        if (typeof target[key] === 'undefined') target[key] = src[key];
        else if ($189f45f12f88561c$var$isObject(src[key]) && $189f45f12f88561c$var$isObject(target[key]) && Object.keys(src[key]).length > 0) $189f45f12f88561c$var$extend(target[key], src[key]);
    });
}
const $189f45f12f88561c$var$ssrDocument = {
    body: {},
    addEventListener () {},
    removeEventListener () {},
    activeElement: {
        blur () {},
        nodeName: ''
    },
    querySelector () {
        return null;
    },
    querySelectorAll () {
        return [];
    },
    getElementById () {
        return null;
    },
    createEvent () {
        return {
            initEvent () {}
        };
    },
    createElement () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute () {},
            getElementsByTagName () {
                return [];
            }
        };
    },
    createElementNS () {
        return {};
    },
    importNode () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    }
};
function $189f45f12f88561c$export$39b482c5e57630a8() {
    const doc = typeof document !== 'undefined' ? document : {};
    $189f45f12f88561c$var$extend(doc, $189f45f12f88561c$var$ssrDocument);
    return doc;
}
const $189f45f12f88561c$var$ssrWindow = {
    document: $189f45f12f88561c$var$ssrDocument,
    navigator: {
        userAgent: ''
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    },
    history: {
        replaceState () {},
        pushState () {},
        go () {},
        back () {}
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener () {},
    removeEventListener () {},
    getComputedStyle () {
        return {
            getPropertyValue () {
                return '';
            }
        };
    },
    Image () {},
    Date () {},
    screen: {},
    setTimeout () {},
    clearTimeout () {},
    matchMedia () {
        return {};
    },
    requestAnimationFrame (callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame (id) {
        if (typeof setTimeout === 'undefined') return;
        clearTimeout(id);
    }
};
function $189f45f12f88561c$export$407448d2b89b1813() {
    const win = typeof window !== 'undefined' ? window : {};
    $189f45f12f88561c$var$extend(win, $189f45f12f88561c$var$ssrWindow);
    return win;
}



function $831683533b862e22$export$23f2a1d2818174ef(classes) {
    if (classes === void 0) classes = '';
    return classes.trim().split(' ').filter((c)=>!!c.trim());
}
function $831683533b862e22$export$d141bba7fdc215a3(obj) {
    const object = obj;
    Object.keys(object).forEach((key)=>{
        try {
            object[key] = null;
        } catch (e) {
        // no getter for object
        }
        try {
            delete object[key];
        } catch (e) {
        // something got wrong
        }
    });
}
function $831683533b862e22$export$7ccc53e8f1e7dfc5(callback, delay) {
    if (delay === void 0) delay = 0;
    return setTimeout(callback, delay);
}
function $831683533b862e22$export$4368d992c4eafac0() {
    return Date.now();
}
function $831683533b862e22$var$getComputedStyle(el) {
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    let style;
    if (window1.getComputedStyle) style = window1.getComputedStyle(el, null);
    if (!style && el.currentStyle) style = el.currentStyle;
    if (!style) style = el.style;
    return style;
}
function $831683533b862e22$export$35e795649ee09318(el, axis) {
    if (axis === void 0) axis = 'x';
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = $831683533b862e22$var$getComputedStyle(el);
    if (window1.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) curTransform = curTransform.split(', ').map((a)=>a.replace(',', '.')).join(', ');
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window1.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
    }
    if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m41;
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m42;
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
}
function $831683533b862e22$export$882b5998b3b9117c(o) {
    return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function $831683533b862e22$var$isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') return node instanceof HTMLElement;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}
function $831683533b862e22$export$efccba1c4a2ef57b() {
    const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    const noExtend = [
        '__proto__',
        'constructor',
        'prototype'
    ];
    for(let i = 1; i < arguments.length; i += 1){
        const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
        if (nextSource !== undefined && nextSource !== null && !$831683533b862e22$var$isNode(nextSource)) {
            const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0);
            for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if ($831683533b862e22$export$882b5998b3b9117c(to[nextKey]) && $831683533b862e22$export$882b5998b3b9117c(nextSource[nextKey])) {
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else $831683533b862e22$export$efccba1c4a2ef57b(to[nextKey], nextSource[nextKey]);
                    } else if (!$831683533b862e22$export$882b5998b3b9117c(to[nextKey]) && $831683533b862e22$export$882b5998b3b9117c(nextSource[nextKey])) {
                        to[nextKey] = {};
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else $831683533b862e22$export$efccba1c4a2ef57b(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
function $831683533b862e22$export$2408f22a0fab9ae5(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}
function $831683533b862e22$export$625550452a3fa3ec(_ref) {
    let { swiper: swiper, targetPosition: targetPosition, side: side } = _ref;
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = 'none';
    window1.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? 'next' : 'prev';
    const isOutOfBound = (current, target)=>{
        return dir === 'next' && current >= target || dir === 'prev' && current <= target;
    };
    const animate = ()=>{
        time = new Date().getTime();
        if (startTime === null) startTime = time;
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
        swiper.wrapperEl.scrollTo({
            [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
            swiper.wrapperEl.style.overflow = 'hidden';
            swiper.wrapperEl.style.scrollSnapType = '';
            setTimeout(()=>{
                swiper.wrapperEl.style.overflow = '';
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
            });
            window1.cancelAnimationFrame(swiper.cssModeFrameID);
            return;
        }
        swiper.cssModeFrameID = window1.requestAnimationFrame(animate);
    };
    animate();
}
function $831683533b862e22$export$39b482c5e57630a8(slideEl) {
    return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function $831683533b862e22$export$f1e1789686576879(element, selector) {
    if (selector === void 0) selector = '';
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    const children = [
        ...element.children
    ];
    if (window1.HTMLSlotElement && element instanceof HTMLSlotElement) children.push(...element.assignedElements());
    if (!selector) return children;
    return children.filter((el)=>el.matches(selector));
}
function $831683533b862e22$var$elementIsChildOfSlot(el, slot) {
    // Breadth-first search through all parent's children and assigned elements
    const elementsQueue = [
        slot
    ];
    while(elementsQueue.length > 0){
        const elementToCheck = elementsQueue.shift();
        if (el === elementToCheck) return true;
        elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : [], ...elementToCheck.assignedElements ? elementToCheck.assignedElements() : []);
    }
}
function $831683533b862e22$export$90a7f3efeed30595(el, parent) {
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    let isChild = parent.contains(el);
    if (!isChild && window1.HTMLSlotElement && parent instanceof HTMLSlotElement) {
        const children = [
            ...parent.assignedElements()
        ];
        isChild = children.includes(el);
        if (!isChild) isChild = $831683533b862e22$var$elementIsChildOfSlot(el, parent);
    }
    return isChild;
}
function $831683533b862e22$export$3b14a55fb2447963(text) {
    try {
        console.warn(text);
        return;
    } catch (err) {
    // err
    }
}
function $831683533b862e22$export$db3b6bfb95261072(tag, classes) {
    if (classes === void 0) classes = [];
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes) ? classes : $831683533b862e22$export$23f2a1d2818174ef(classes));
    return el;
}
function $831683533b862e22$export$8b22cf2602fb60ce(el) {
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    const document1 = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
    const box = el.getBoundingClientRect();
    const body = document1.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window1 ? window1.scrollY : el.scrollTop;
    const scrollLeft = el === window1 ? window1.scrollX : el.scrollLeft;
    return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
    };
}
function $831683533b862e22$export$43caf9889c228507(el, selector) {
    const prevEls = [];
    while(el.previousElementSibling){
        const prev = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if (prev.matches(selector)) prevEls.push(prev);
        } else prevEls.push(prev);
        el = prev;
    }
    return prevEls;
}
function $831683533b862e22$export$9e5f44173e64f162(el, selector) {
    const nextEls = [];
    while(el.nextElementSibling){
        const next = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if (next.matches(selector)) nextEls.push(next);
        } else nextEls.push(next);
        el = next;
    }
    return nextEls;
}
function $831683533b862e22$export$ffb5f4729a158638(el, prop) {
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    return window1.getComputedStyle(el, null).getPropertyValue(prop);
}
function $831683533b862e22$export$dda1d9f60106f0e9(el) {
    let child = el;
    let i;
    if (child) {
        i = 0;
        // eslint-disable-next-line
        while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
        return i;
    }
    return undefined;
}
function $831683533b862e22$export$407448d2b89b1813(el, selector) {
    const parents = []; // eslint-disable-line
    let parent = el.parentElement; // eslint-disable-line
    while(parent){
        if (selector) {
            if (parent.matches(selector)) parents.push(parent);
        } else parents.push(parent);
        parent = parent.parentElement;
    }
    return parents;
}
function $831683533b862e22$export$342063e11d6c3cad(el, callback) {
    function fireCallBack(e) {
        if (e.target !== el) return;
        callback.call(el, e);
        el.removeEventListener('transitionend', fireCallBack);
    }
    if (callback) el.addEventListener('transitionend', fireCallBack);
}
function $831683533b862e22$export$2d1720544b23b823(el, size, includeMargins) {
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    if (includeMargins) return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window1.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window1.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
    return el.offsetWidth;
}
function $831683533b862e22$export$953cecd6e717a553(el) {
    return (Array.isArray(el) ? el : [
        el
    ]).filter((e)=>!!e);
}
function $831683533b862e22$export$ae1af26003f05816(swiper) {
    return (v)=>{
        if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) return v + 0.001;
        return v;
    };
}


let $4e95c04dd8a5890d$var$support;
function $4e95c04dd8a5890d$var$calcSupport() {
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    const document1 = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
    return {
        smoothScroll: document1.documentElement && document1.documentElement.style && 'scrollBehavior' in document1.documentElement.style,
        touch: !!('ontouchstart' in window1 || window1.DocumentTouch && document1 instanceof window1.DocumentTouch)
    };
}
function $4e95c04dd8a5890d$var$getSupport() {
    if (!$4e95c04dd8a5890d$var$support) $4e95c04dd8a5890d$var$support = $4e95c04dd8a5890d$var$calcSupport();
    return $4e95c04dd8a5890d$var$support;
}
let $4e95c04dd8a5890d$var$deviceCached;
function $4e95c04dd8a5890d$var$calcDevice(_temp) {
    let { userAgent: userAgent } = _temp === void 0 ? {} : _temp;
    const support = $4e95c04dd8a5890d$var$getSupport();
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    const platform = window1.navigator.platform;
    const ua = userAgent || window1.navigator.userAgent;
    const device = {
        ios: false,
        android: false
    };
    const screenWidth = window1.screen.width;
    const screenHeight = window1.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === 'Win32';
    let macos = platform === 'MacIntel';
    // iPadOs 13 fix
    const iPadScreens = [
        '1024x1366',
        '1366x1024',
        '834x1194',
        '1194x834',
        '834x1112',
        '1112x834',
        '768x1024',
        '1024x768',
        '820x1180',
        '1180x820',
        '810x1080',
        '1080x810'
    ];
    if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [
            0,
            1,
            '13_0_0'
        ];
        macos = false;
    }
    // Android
    if (android && !windows) {
        device.os = 'android';
        device.android = true;
    }
    if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
    }
    // Export object
    return device;
}
function $4e95c04dd8a5890d$var$getDevice(overrides) {
    if (overrides === void 0) overrides = {};
    if (!$4e95c04dd8a5890d$var$deviceCached) $4e95c04dd8a5890d$var$deviceCached = $4e95c04dd8a5890d$var$calcDevice(overrides);
    return $4e95c04dd8a5890d$var$deviceCached;
}
let $4e95c04dd8a5890d$var$browser;
function $4e95c04dd8a5890d$var$calcBrowser() {
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    const device = $4e95c04dd8a5890d$var$getDevice();
    let needPerspectiveFix = false;
    function isSafari() {
        const ua = window1.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }
    if (isSafari()) {
        const ua = String(window1.navigator.userAgent);
        if (ua.includes('Version/')) {
            const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map((num)=>Number(num));
            needPerspectiveFix = major < 16 || major === 16 && minor < 2;
        }
    }
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window1.navigator.userAgent);
    const isSafariBrowser = isSafari();
    const need3dFix = isSafariBrowser || isWebView && device.ios;
    return {
        isSafari: needPerspectiveFix || isSafariBrowser,
        needPerspectiveFix: needPerspectiveFix,
        need3dFix: need3dFix,
        isWebView: isWebView
    };
}
function $4e95c04dd8a5890d$var$getBrowser() {
    if (!$4e95c04dd8a5890d$var$browser) $4e95c04dd8a5890d$var$browser = $4e95c04dd8a5890d$var$calcBrowser();
    return $4e95c04dd8a5890d$var$browser;
}
function $4e95c04dd8a5890d$var$Resize(_ref) {
    let { swiper: swiper, on: on, emit: emit } = _ref;
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('beforeResize');
        emit('resize');
    };
    const createObserver = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver((entries)=>{
            animationFrame = window1.requestAnimationFrame(()=>{
                const { width: width, height: height } = swiper;
                let newWidth = width;
                let newHeight = height;
                entries.forEach((_ref2)=>{
                    let { contentBoxSize: contentBoxSize, contentRect: contentRect, target: target } = _ref2;
                    if (target && target !== swiper.el) return;
                    newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                    newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                });
                if (newWidth !== width || newHeight !== height) resizeHandler();
            });
        });
        observer.observe(swiper.el);
    };
    const removeObserver = ()=>{
        if (animationFrame) window1.cancelAnimationFrame(animationFrame);
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el);
            observer = null;
        }
    };
    const orientationChangeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('orientationchange');
    };
    on('init', ()=>{
        if (swiper.params.resizeObserver && typeof window1.ResizeObserver !== 'undefined') {
            createObserver();
            return;
        }
        window1.addEventListener('resize', resizeHandler);
        window1.addEventListener('orientationchange', orientationChangeHandler);
    });
    on('destroy', ()=>{
        removeObserver();
        window1.removeEventListener('resize', resizeHandler);
        window1.removeEventListener('orientationchange', orientationChangeHandler);
    });
}
function $4e95c04dd8a5890d$var$Observer(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on, emit: emit } = _ref;
    const observers = [];
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    const attach = function(target, options) {
        if (options === void 0) options = {};
        const ObserverFunc = window1.MutationObserver || window1.WebkitMutationObserver;
        const observer = new ObserverFunc((mutations)=>{
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (swiper.__preventObserver__) return;
            if (mutations.length === 1) {
                emit('observerUpdate', mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate() {
                emit('observerUpdate', mutations[0]);
            };
            if (window1.requestAnimationFrame) window1.requestAnimationFrame(observerUpdate);
            else window1.setTimeout(observerUpdate, 0);
        });
        observer.observe(target, {
            attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
            childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options).childList,
            characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        observers.push(observer);
    };
    const init = ()=>{
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
            const containerParents = (0, $831683533b862e22$export$407448d2b89b1813)(swiper.hostEl);
            for(let i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
        }
        // Observe container
        attach(swiper.hostEl, {
            childList: swiper.params.observeSlideChildren
        });
        // Observe wrapper
        attach(swiper.wrapperEl, {
            attributes: false
        });
    };
    const destroy = ()=>{
        observers.forEach((observer)=>{
            observer.disconnect();
        });
        observers.splice(0, observers.length);
    };
    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    });
    on('init', init);
    on('destroy', destroy);
}
/* eslint-disable no-underscore-dangle */ var $4e95c04dd8a5890d$var$eventsEmitter = {
    on (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach((event)=>{
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        function onceHandler() {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
    },
    onAny (handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
        return self;
    },
    offAny (handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) self.eventsAnyListeners.splice(index, 1);
        return self;
    },
    off (events, handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach((event)=>{
            if (typeof handler === 'undefined') self.eventsListeners[event] = [];
            else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler, index)=>{
                if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
            });
        });
        return self;
    },
    emit () {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach((event)=>{
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler)=>{
                eventHandler.apply(context, [
                    event,
                    ...data
                ]);
            });
            if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler)=>{
                eventHandler.apply(context, data);
            });
        });
        return self;
    }
};
function $4e95c04dd8a5890d$var$updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) width = swiper.params.width;
    else width = el.clientWidth;
    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) height = swiper.params.height;
    else height = el.clientHeight;
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
    // Subtract paddings
    width = width - parseInt((0, $831683533b862e22$export$ffb5f4729a158638)(el, 'padding-left') || 0, 10) - parseInt((0, $831683533b862e22$export$ffb5f4729a158638)(el, 'padding-right') || 0, 10);
    height = height - parseInt((0, $831683533b862e22$export$ffb5f4729a158638)(el, 'padding-top') || 0, 10) - parseInt((0, $831683533b862e22$export$ffb5f4729a158638)(el, 'padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
        width: width,
        height: height,
        size: swiper.isHorizontal() ? width : height
    });
}
function $4e95c04dd8a5890d$var$updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const { wrapperEl: wrapperEl, slidesEl: slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL: wrongRTL } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = (0, $831683533b862e22$export$f1e1789686576879)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') offsetBefore = params.slidesOffsetBefore.call(swiper);
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') offsetAfter = params.slidesOffsetAfter.call(swiper);
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === 'undefined') return;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    else if (typeof spaceBetween === 'string') spaceBetween = parseFloat(spaceBetween);
    swiper.virtualSize = -spaceBetween;
    // reset margins
    slides.forEach((slideEl)=>{
        if (rtl) slideEl.style.marginLeft = '';
        else slideEl.style.marginRight = '';
        slideEl.style.marginBottom = '';
        slideEl.style.marginTop = '';
    });
    // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
        (0, $831683533b862e22$export$2408f22a0fab9ae5)(wrapperEl, '--swiper-centered-offset-before', '');
        (0, $831683533b862e22$export$2408f22a0fab9ae5)(wrapperEl, '--swiper-centered-offset-after', '');
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) swiper.grid.initSlides(slides);
    else if (swiper.grid) swiper.grid.unsetSlides();
    // Calc slides
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
        return typeof params.breakpoints[key].slidesPerView !== 'undefined';
    }).length > 0;
    for(let i = 0; i < slidesLength; i += 1){
        slideSize = 0;
        let slide;
        if (slides[i]) slide = slides[i];
        if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
        if (slides[i] && (0, $831683533b862e22$export$ffb5f4729a158638)(slide, 'display') === 'none') continue; // eslint-disable-line
        if (params.slidesPerView === 'auto') {
            if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel('width')] = ``;
            const slideStyles = getComputedStyle(slide);
            const currentTransform = slide.style.transform;
            const currentWebKitTransform = slide.style.webkitTransform;
            if (currentTransform) slide.style.transform = 'none';
            if (currentWebKitTransform) slide.style.webkitTransform = 'none';
            if (params.roundLengths) slideSize = swiper.isHorizontal() ? (0, $831683533b862e22$export$2d1720544b23b823)(slide, 'width', true) : (0, $831683533b862e22$export$2d1720544b23b823)(slide, 'height', true);
            else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, 'width');
                const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                const boxSizing = slideStyles.getPropertyValue('box-sizing');
                if (boxSizing && boxSizing === 'border-box') slideSize = width + marginLeft + marginRight;
                else {
                    const { clientWidth: clientWidth, offsetWidth: offsetWidth } = slide;
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) slide.style.transform = currentTransform;
            if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slides[i]) slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
        }
        if (slides[i]) slides[i].swiperSlideSize = slideSize;
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
    if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for(let i = 0; i < snapGrid.length; i += 1){
            let slidesGridItem = snapGrid[i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
    }
    if (isVirtual && params.loop) {
        const size = slidesSizesGrid[0] + spaceBetween;
        if (params.slidesPerGroup > 1) {
            const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
            const groupSize = size * params.slidesPerGroup;
            for(let i = 0; i < groups; i += 1)snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
        for(let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1){
            if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
            slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
            swiper.virtualSize += size;
        }
    }
    if (snapGrid.length === 0) snapGrid = [
        0
    ];
    if (spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
        slides.filter((_, slideIndex)=>{
            if (!params.cssMode || params.loop) return true;
            if (slideIndex === slides.length - 1) return false;
            return true;
        }).forEach((slideEl)=>{
            slideEl.style[key] = `${spaceBetween}px`;
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
        snapGrid = snapGrid.map((snap)=>{
            if (snap <= 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
        if (allSlidesSize + offsetSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
            snapGrid.forEach((snap, snapIndex)=>{
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex)=>{
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    Object.assign(swiper, {
        slides: slides,
        snapGrid: snapGrid,
        slidesGrid: slidesGrid,
        slidesSizesGrid: slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        (0, $831683533b862e22$export$2408f22a0fab9ae5)(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
        (0, $831683533b862e22$export$2408f22a0fab9ae5)(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) swiper.emit('slidesLengthChange');
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) swiper.emit('slidesGridLengthChange');
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    swiper.emit('slidesUpdated');
    if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
        if (slidesLength <= params.maxBackfaceHiddenSlides) {
            if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
    }
}
function $4e95c04dd8a5890d$var$updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === 'number') swiper.setTransition(speed);
    else if (speed === true) swiper.setTransition(swiper.params.speed);
    const getSlideByIndex = (index)=>{
        if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
        return swiper.slides[index];
    };
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide)=>{
            activeSlides.push(slide);
        });
        else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        }
    } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
    // Find new height from highest slide in view
    for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== 'undefined') {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
    }
    // Update Height
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function $4e95c04dd8a5890d$var$updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    // eslint-disable-next-line
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for(let i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
}
const $4e95c04dd8a5890d$var$toggleSlideClasses$1 = (slideEl, condition, className)=>{
    if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className);
    else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
};
function $4e95c04dd8a5890d$var$updateSlidesProgress(translate) {
    if (translate === void 0) translate = this && this.translate || 0;
    const swiper = this;
    const params = swiper.params;
    const { slides: slides, rtlTranslate: rtl, snapGrid: snapGrid } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate;
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    else if (typeof spaceBetween === 'string') spaceBetween = parseFloat(spaceBetween);
    for(let i = 0; i < slides.length; i += 1){
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
        }
        $4e95c04dd8a5890d$var$toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
        $4e95c04dd8a5890d$var$toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
}
function $4e95c04dd8a5890d$var$updateProgress(translate) {
    const swiper = this;
    if (typeof translate === 'undefined') {
        const multiplier = swiper.rtlTranslate ? -1 : 1;
        // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress: progress, isBeginning: isBeginning, isEnd: isEnd, progressLoop: progressLoop } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
        const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
        isBeginning = isBeginningRounded || progress <= 0;
        isEnd = isEndRounded || progress >= 1;
        if (isBeginningRounded) progress = 0;
        if (isEndRounded) progress = 1;
    }
    if (params.loop) {
        const firstSlideIndex = swiper.getSlideIndexByData(0);
        const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
        const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
        const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
        const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
        const translateAbs = Math.abs(translate);
        if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
        else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
        if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
        progress: progress,
        progressLoop: progressLoop,
        isBeginning: isBeginning,
        isEnd: isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) swiper.emit('reachBeginning toEdge');
    if (isEnd && !wasEnd) swiper.emit('reachEnd toEdge');
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit('fromEdge');
    swiper.emit('progress', progress);
}
const $4e95c04dd8a5890d$var$toggleSlideClasses = (slideEl, condition, className)=>{
    if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className);
    else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
};
function $4e95c04dd8a5890d$var$updateSlidesClasses() {
    const swiper = this;
    const { slides: slides, params: params, slidesEl: slidesEl, activeIndex: activeIndex } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector)=>{
        return (0, $831683533b862e22$export$f1e1789686576879)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    };
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
        if (params.loop) {
            let slideIndex = activeIndex - swiper.virtual.slidesBefore;
            if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
            if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
            activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
        } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    } else if (gridEnabled) {
        activeSlide = slides.find((slideEl)=>slideEl.column === activeIndex);
        nextSlide = slides.find((slideEl)=>slideEl.column === activeIndex + 1);
        prevSlide = slides.find((slideEl)=>slideEl.column === activeIndex - 1);
    } else activeSlide = slides[activeIndex];
    if (activeSlide) {
        if (!gridEnabled) {
            // Next Slide
            nextSlide = (0, $831683533b862e22$export$9e5f44173e64f162)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            if (params.loop && !nextSlide) nextSlide = slides[0];
            // Prev Slide
            prevSlide = (0, $831683533b862e22$export$43caf9889c228507)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            params.loop;
        }
    }
    slides.forEach((slideEl)=>{
        $4e95c04dd8a5890d$var$toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
        $4e95c04dd8a5890d$var$toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
        $4e95c04dd8a5890d$var$toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
    });
    swiper.emitSlidesClasses();
}
const $4e95c04dd8a5890d$var$processLazyPreloader = (swiper, imageEl)=>{
    if (!swiper || swiper.destroyed || !swiper.params) return;
    const slideSelector = ()=>swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
        let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        if (!lazyEl && swiper.isElement) {
            if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            else // init later
            requestAnimationFrame(()=>{
                if (slideEl.shadowRoot) {
                    lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                    if (lazyEl) lazyEl.remove();
                }
            });
        }
        if (lazyEl) lazyEl.remove();
    }
};
const $4e95c04dd8a5890d$var$unlazy = (swiper, index)=>{
    if (!swiper.slides[index]) return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute('loading');
};
const $4e95c04dd8a5890d$var$preload = (swiper)=>{
    if (!swiper || swiper.destroyed || !swiper.params) return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
        const activeColumn = activeIndex;
        const preloadColumns = [
            activeColumn - amount
        ];
        preloadColumns.push(...Array.from({
            length: amount
        }).map((_, i)=>{
            return activeColumn + slidesPerView + i;
        }));
        swiper.slides.forEach((slideEl, i)=>{
            if (preloadColumns.includes(slideEl.column)) $4e95c04dd8a5890d$var$unlazy(swiper, i);
        });
        return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) for(let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1){
        const realIndex = (i % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView) $4e95c04dd8a5890d$var$unlazy(swiper, realIndex);
    }
    else {
        for(let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1)if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) $4e95c04dd8a5890d$var$unlazy(swiper, i);
    }
};
function $4e95c04dd8a5890d$var$getActiveIndexByTranslate(swiper) {
    const { slidesGrid: slidesGrid, params: params } = swiper;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for(let i = 0; i < slidesGrid.length; i += 1){
        if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
            else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
        } else if (translate >= slidesGrid[i]) activeIndex = i;
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
    return activeIndex;
}
function $4e95c04dd8a5890d$var$updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { snapGrid: snapGrid, params: params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex)=>{
        let realIndex = aIndex - swiper.virtual.slidesBefore;
        if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
        if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
        return realIndex;
    };
    if (typeof activeIndex === 'undefined') activeIndex = $4e95c04dd8a5890d$var$getActiveIndexByTranslate(swiper);
    if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
    else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit('snapIndexChange');
        }
        return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.realIndex = getVirtualRealIndex(activeIndex);
        return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    // Get real index
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex);
    else if (gridEnabled) {
        const firstSlideInColumn = swiper.slides.find((slideEl)=>slideEl.column === activeIndex);
        let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
        if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
        realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
        const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
        if (slideIndex) realIndex = parseInt(slideIndex, 10);
        else realIndex = activeIndex;
    } else realIndex = activeIndex;
    Object.assign(swiper, {
        previousSnapIndex: previousSnapIndex,
        snapIndex: snapIndex,
        previousRealIndex: previousRealIndex,
        realIndex: realIndex,
        previousIndex: previousIndex,
        activeIndex: activeIndex
    });
    if (swiper.initialized) $4e95c04dd8a5890d$var$preload(swiper);
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        if (previousRealIndex !== realIndex) swiper.emit('realIndexChange');
        swiper.emit('slideChange');
    }
}
function $4e95c04dd8a5890d$var$updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [
        ...path.slice(path.indexOf(el) + 1, path.length)
    ].forEach((pathEl)=>{
        if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
    });
    let slideFound = false;
    let slideIndex;
    if (slide) {
        for(let i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
        else swiper.clickedIndex = slideIndex;
    } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
}
var $4e95c04dd8a5890d$var$update = {
    updateSize: $4e95c04dd8a5890d$var$updateSize,
    updateSlides: $4e95c04dd8a5890d$var$updateSlides,
    updateAutoHeight: $4e95c04dd8a5890d$var$updateAutoHeight,
    updateSlidesOffset: $4e95c04dd8a5890d$var$updateSlidesOffset,
    updateSlidesProgress: $4e95c04dd8a5890d$var$updateSlidesProgress,
    updateProgress: $4e95c04dd8a5890d$var$updateProgress,
    updateSlidesClasses: $4e95c04dd8a5890d$var$updateSlidesClasses,
    updateActiveIndex: $4e95c04dd8a5890d$var$updateActiveIndex,
    updateClickedSlide: $4e95c04dd8a5890d$var$updateClickedSlide
};
function $4e95c04dd8a5890d$var$getSwiperTranslate(axis) {
    if (axis === void 0) axis = this.isHorizontal() ? 'x' : 'y';
    const swiper = this;
    const { params: params, rtlTranslate: rtl, translate: translate, wrapperEl: wrapperEl } = swiper;
    if (params.virtualTranslate) return rtl ? -translate : translate;
    if (params.cssMode) return translate;
    let currentTranslate = (0, $831683533b862e22$export$35e795649ee09318)(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}
function $4e95c04dd8a5890d$var$setTranslate(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl, params: params, wrapperEl: wrapperEl, progress: progress } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) x = rtl ? -translate : translate;
    else y = translate;
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    else if (!params.virtualTranslate) {
        if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment();
        else y -= swiper.cssOverflowAdjustment();
        wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }
    // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== progress) swiper.updateProgress(translate);
    swiper.emit('setTranslate', swiper.translate, byController);
}
function $4e95c04dd8a5890d$var$minTranslate() {
    return -this.snapGrid[0];
}
function $4e95c04dd8a5890d$var$maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
function $4e95c04dd8a5890d$var$translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) translate = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (translateBounds === void 0) translateBounds = true;
    const swiper = this;
    const { params: params, wrapperEl: wrapperEl } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) return false;
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
    else newTranslate = translate;
    // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        else {
            if (!swiper.support.smoothScroll) {
                (0, $831683533b862e22$export$625550452a3fa3ec)({
                    swiper: swiper,
                    targetPosition: -newTranslate,
                    side: isH ? 'left' : 'top'
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: -newTranslate,
                behavior: 'smooth'
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionEnd');
        }
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionStart');
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                swiper.onTranslateToWrapperTransitionEnd = null;
                delete swiper.onTranslateToWrapperTransitionEnd;
                swiper.animating = false;
                if (runCallbacks) swiper.emit('transitionEnd');
            };
            swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}
var $4e95c04dd8a5890d$var$translate = {
    getTranslate: $4e95c04dd8a5890d$var$getSwiperTranslate,
    setTranslate: $4e95c04dd8a5890d$var$setTranslate,
    minTranslate: $4e95c04dd8a5890d$var$minTranslate,
    maxTranslate: $4e95c04dd8a5890d$var$maxTranslate,
    translateTo: $4e95c04dd8a5890d$var$translateTo
};
function $4e95c04dd8a5890d$var$setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
        swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
        swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
    }
    swiper.emit('setTransition', duration, byController);
}
function $4e95c04dd8a5890d$var$transitionEmit(_ref) {
    let { swiper: swiper, runCallbacks: runCallbacks, direction: direction, step: step } = _ref;
    const { activeIndex: activeIndex, previousIndex: previousIndex } = swiper;
    let dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';
        else if (activeIndex < previousIndex) dir = 'prev';
        else dir = 'reset';
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
            swiper.emit(`slideResetTransition${step}`);
            return;
        }
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === 'next') swiper.emit(`slideNextTransition${step}`);
        else swiper.emit(`slidePrevTransition${step}`);
    }
}
function $4e95c04dd8a5890d$var$transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params: params } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) swiper.updateAutoHeight();
    $4e95c04dd8a5890d$var$transitionEmit({
        swiper: swiper,
        runCallbacks: runCallbacks,
        direction: direction,
        step: 'Start'
    });
}
function $4e95c04dd8a5890d$var$transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params: params } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    $4e95c04dd8a5890d$var$transitionEmit({
        swiper: swiper,
        runCallbacks: runCallbacks,
        direction: direction,
        step: 'End'
    });
}
var $4e95c04dd8a5890d$var$transition = {
    setTransition: $4e95c04dd8a5890d$var$setTransition,
    transitionStart: $4e95c04dd8a5890d$var$transitionStart,
    transitionEnd: $4e95c04dd8a5890d$var$transitionEnd
};
function $4e95c04dd8a5890d$var$slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) index = 0;
    if (runCallbacks === void 0) runCallbacks = true;
    if (typeof index === 'string') index = parseInt(index, 10);
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const { params: params, snapGrid: snapGrid, slidesGrid: slidesGrid, previousIndex: previousIndex, activeIndex: activeIndex, rtlTranslate: rtl, wrapperEl: wrapperEl, enabled: enabled } = swiper;
    if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) return false;
    if (typeof speed === 'undefined') speed = swiper.params.speed;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate = -snapGrid[snapIndex];
    // Normalize slideIndex
    if (params.normalizeSlideIndex) for(let i = 0; i < slidesGrid.length; i += 1){
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
            else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
        } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) return false;
        }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit('beforeSlideChangeStart');
    // Update progress
    swiper.updateProgress(translate);
    let direction;
    if (slideIndex > activeIndex) direction = 'next';
    else if (slideIndex < activeIndex) direction = 'prev';
    else direction = 'reset';
    // initial virtual
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const isInitialVirtual = isVirtual && initial;
    // Update Index
    if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
        swiper.updateActiveIndex(slideIndex);
        // Update Height
        if (params.autoHeight) swiper.updateAutoHeight();
        swiper.updateSlidesClasses();
        if (params.effect !== 'slide') swiper.setTranslate(translate);
        if (direction !== 'reset') {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
            if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = 'none';
                swiper._immediateVirtual = true;
            }
            if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                swiper._cssModeVirtualInitialSet = true;
                requestAnimationFrame(()=>{
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
                });
            } else wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
            if (isVirtual) requestAnimationFrame(()=>{
                swiper.wrapperEl.style.scrollSnapType = '';
                swiper._immediateVirtual = false;
            });
        } else {
            if (!swiper.support.smoothScroll) {
                (0, $831683533b862e22$export$625550452a3fa3ec)({
                    swiper: swiper,
                    targetPosition: t,
                    side: isH ? 'left' : 'top'
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: t,
                behavior: 'smooth'
            });
        }
        return true;
    }
    const browser = $4e95c04dd8a5890d$var$getBrowser();
    const isSafari = browser.isSafari;
    if (isVirtual && !initial && isSafari && swiper.isElement) swiper.virtual.update(false, false, slideIndex);
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
    else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
        };
        swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
}
function $4e95c04dd8a5890d$var$slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) index = 0;
    if (runCallbacks === void 0) runCallbacks = true;
    if (typeof index === 'string') {
        const indexAsNumber = parseInt(index, 10);
        index = indexAsNumber;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === 'undefined') speed = swiper.params.speed;
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
        if (swiper.virtual && swiper.params.virtual.enabled) // eslint-disable-next-line
        newIndex = newIndex + swiper.virtual.slidesBefore;
        else {
            let targetSlideIndex;
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                targetSlideIndex = swiper.slides.find((slideEl)=>slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
            } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
            const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
            const { centeredSlides: centeredSlides } = swiper.params;
            let slidesPerView = swiper.params.slidesPerView;
            if (slidesPerView === 'auto') slidesPerView = swiper.slidesPerViewDynamic();
            else {
                slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView = slidesPerView + 1;
            }
            let needLoopFix = cols - targetSlideIndex < slidesPerView;
            if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
            if (internal && centeredSlides && swiper.params.slidesPerView !== 'auto' && !gridEnabled) needLoopFix = false;
            if (needLoopFix) {
                const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
                swiper.loopFix({
                    direction: direction,
                    slideTo: true,
                    activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                    slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
                });
            }
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                newIndex = swiper.slides.find((slideEl)=>slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
            } else newIndex = swiper.getSlideIndexByData(newIndex);
        }
    }
    requestAnimationFrame(()=>{
        swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
}
/* eslint no-unused-vars: "off" */ function $4e95c04dd8a5890d$var$slideNext(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { enabled: enabled, params: params, animating: animating } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === 'undefined') speed = swiper.params.speed;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
            direction: 'next'
        });
        // eslint-disable-next-line
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
        if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
            requestAnimationFrame(()=>{
                swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
            });
            return true;
        }
    }
    if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function $4e95c04dd8a5890d$var$slidePrev(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params: params, snapGrid: snapGrid, slidesGrid: slidesGrid, rtlTranslate: rtlTranslate, enabled: enabled, animating: animating } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === 'undefined') speed = swiper.params.speed;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
            direction: 'prev'
        });
        // eslint-disable-next-line
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val)=>normalize(val));
    const isFreeMode = params.freeMode && params.freeMode.enabled;
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && (params.cssMode || isFreeMode)) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex)=>{
            if (normalizedTranslate >= snap) // prevSnap = snap;
            prevSnapIndex = snapIndex;
        });
        if (typeof prevSnapIndex !== 'undefined') prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
    let prevIndex = 0;
    if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
        requestAnimationFrame(()=>{
            swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        });
        return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function $4e95c04dd8a5890d$var$slideReset(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === 'undefined') speed = swiper.params.speed;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function $4e95c04dd8a5890d$var$slideToClosest(speed, runCallbacks, internal, threshold) {
    if (runCallbacks === void 0) runCallbacks = true;
    if (threshold === void 0) threshold = 0.5;
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === 'undefined') speed = swiper.params.speed;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
    } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
}
function $4e95c04dd8a5890d$var$slideToClickedSlide() {
    const swiper = this;
    if (swiper.destroyed) return;
    const { params: params, slidesEl: slidesEl } = swiper;
    const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
        if (params.centeredSlides) {
            if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = swiper.getSlideIndex((0, $831683533b862e22$export$f1e1789686576879)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                (0, $831683533b862e22$export$7ccc53e8f1e7dfc5)(()=>{
                    swiper.slideTo(slideToIndex);
                });
            } else swiper.slideTo(slideToIndex);
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = swiper.getSlideIndex((0, $831683533b862e22$export$f1e1789686576879)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
            (0, $831683533b862e22$export$7ccc53e8f1e7dfc5)(()=>{
                swiper.slideTo(slideToIndex);
            });
        } else swiper.slideTo(slideToIndex);
    } else swiper.slideTo(slideToIndex);
}
var $4e95c04dd8a5890d$var$slide = {
    slideTo: $4e95c04dd8a5890d$var$slideTo,
    slideToLoop: $4e95c04dd8a5890d$var$slideToLoop,
    slideNext: $4e95c04dd8a5890d$var$slideNext,
    slidePrev: $4e95c04dd8a5890d$var$slidePrev,
    slideReset: $4e95c04dd8a5890d$var$slideReset,
    slideToClosest: $4e95c04dd8a5890d$var$slideToClosest,
    slideToClickedSlide: $4e95c04dd8a5890d$var$slideToClickedSlide
};
function $4e95c04dd8a5890d$var$loopCreate(slideRealIndex) {
    const swiper = this;
    const { params: params, slidesEl: slidesEl } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    const initSlides = ()=>{
        const slides = (0, $831683533b862e22$export$f1e1789686576879)(slidesEl, `.${params.slideClass}, swiper-slide`);
        slides.forEach((el, index)=>{
            el.setAttribute('data-swiper-slide-index', index);
        });
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides)=>{
        for(let i = 0; i < amountOfSlides; i += 1){
            const slideEl = swiper.isElement ? (0, $831683533b862e22$export$db3b6bfb95261072)('swiper-slide', [
                params.slideBlankClass
            ]) : (0, $831683533b862e22$export$db3b6bfb95261072)('div', [
                params.slideClass,
                params.slideBlankClass
            ]);
            swiper.slidesEl.append(slideEl);
        }
    };
    if (shouldFillGroup) {
        if (params.loopAddBlankSlides) {
            const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
            addBlankSlides(slidesToAdd);
            swiper.recalcSlides();
            swiper.updateSlides();
        } else (0, $831683533b862e22$export$3b14a55fb2447963)('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
        initSlides();
    } else if (shouldFillGrid) {
        if (params.loopAddBlankSlides) {
            const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
            addBlankSlides(slidesToAdd);
            swiper.recalcSlides();
            swiper.updateSlides();
        } else (0, $831683533b862e22$export$3b14a55fb2447963)('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
        initSlides();
    } else initSlides();
    swiper.loopFix({
        slideRealIndex: slideRealIndex,
        direction: params.centeredSlides ? undefined : 'next'
    });
}
function $4e95c04dd8a5890d$var$loopFix(_temp) {
    let { slideRealIndex: slideRealIndex, slideTo: slideTo = true, direction: direction, setTranslate: setTranslate, activeSlideIndex: activeSlideIndex, byController: byController, byMousewheel: byMousewheel } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit('beforeLoopFix');
    const { slides: slides, allowSlidePrev: allowSlidePrev, allowSlideNext: allowSlideNext, slidesEl: slidesEl, params: params } = swiper;
    const { centeredSlides: centeredSlides } = params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
        if (slideTo) {
            if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
            else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
            else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        swiper.emit('loopFix');
        return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === 'auto') slidesPerView = swiper.slidesPerViewDynamic();
    else {
        slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) slidesPerView = slidesPerView + 1;
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) (0, $831683533b862e22$export$3b14a55fb2447963)('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
    else if (gridEnabled && params.grid.fill === 'row') (0, $831683533b862e22$export$3b14a55fb2447963)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === 'undefined') activeSlideIndex = swiper.getSlideIndex(slides.find((el)=>el.classList.contains(params.slideActiveClass)));
    else activeIndex = activeSlideIndex;
    const isNext = direction === 'next' || !direction;
    const isPrev = direction === 'prev' || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
    // prepend last slides before start
    if (activeColIndexWithShift < loopedSlides) {
        slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
        for(let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1){
            const index = i - Math.floor(i / cols) * cols;
            if (gridEnabled) {
                const colIndexToPrepend = cols - index - 1;
                for(let i = slides.length - 1; i >= 0; i -= 1)if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
            // slides.forEach((slide, slideIndex) => {
            //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
            // });
            } else prependSlidesIndexes.push(cols - index - 1);
        }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
        slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
        for(let i = 0; i < slidesAppended; i += 1){
            const index = i - Math.floor(i / cols) * cols;
            if (gridEnabled) slides.forEach((slide, slideIndex)=>{
                if (slide.column === index) appendSlidesIndexes.push(slideIndex);
            });
            else appendSlidesIndexes.push(index);
        }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(()=>{
        swiper.__preventObserver__ = false;
    });
    if (isPrev) prependSlidesIndexes.forEach((index)=>{
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
    });
    if (isNext) appendSlidesIndexes.forEach((index)=>{
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
    });
    swiper.recalcSlides();
    if (params.slidesPerView === 'auto') swiper.updateSlides();
    else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach((slide, slideIndex)=>{
        swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
    });
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    if (slideTo) {
        if (prependSlidesIndexes.length > 0 && isPrev) {
            if (typeof slideRealIndex === 'undefined') {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff);
                else {
                    swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else if (setTranslate) {
                const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                swiper.touchEventsData.currentTranslate = swiper.translate;
            }
        } else if (appendSlidesIndexes.length > 0 && isNext) {
            if (typeof slideRealIndex === 'undefined') {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff);
                else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
        }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
        const loopParams = {
            slideRealIndex: slideRealIndex,
            direction: direction,
            setTranslate: setTranslate,
            activeSlideIndex: activeSlideIndex,
            byController: true
        };
        if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c)=>{
            if (!c.destroyed && c.params.loop) c.loopFix({
                ...loopParams,
                slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
            });
        });
        else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
            ...loopParams,
            slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
    }
    swiper.emit('loopFix');
}
function $4e95c04dd8a5890d$var$loopDestroy() {
    const swiper = this;
    const { params: params, slidesEl: slidesEl } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl)=>{
        const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
        newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl)=>{
        slideEl.removeAttribute('data-swiper-slide-index');
    });
    newSlidesOrder.forEach((slideEl)=>{
        slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
}
var $4e95c04dd8a5890d$var$loop = {
    loopCreate: $4e95c04dd8a5890d$var$loopCreate,
    loopFix: $4e95c04dd8a5890d$var$loopFix,
    loopDestroy: $4e95c04dd8a5890d$var$loopDestroy
};
function $4e95c04dd8a5890d$var$setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) swiper.__preventObserver__ = true;
    el.style.cursor = 'move';
    el.style.cursor = moving ? 'grabbing' : 'grab';
    if (swiper.isElement) requestAnimationFrame(()=>{
        swiper.__preventObserver__ = false;
    });
}
function $4e95c04dd8a5890d$var$unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    if (swiper.isElement) swiper.__preventObserver__ = true;
    swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
    if (swiper.isElement) requestAnimationFrame(()=>{
        swiper.__preventObserver__ = false;
    });
}
var $4e95c04dd8a5890d$var$grabCursor = {
    setGrabCursor: $4e95c04dd8a5890d$var$setGrabCursor,
    unsetGrabCursor: $4e95c04dd8a5890d$var$unsetGrabCursor
};
// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function $4e95c04dd8a5890d$var$closestElement(selector, base) {
    if (base === void 0) base = this;
    function __closestFrom(el) {
        if (!el || el === (0, $189f45f12f88561c$export$39b482c5e57630a8)() || el === (0, $189f45f12f88561c$export$407448d2b89b1813)()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        if (!found && !el.getRootNode) return null;
        return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
}
function $4e95c04dd8a5890d$var$preventEdgeSwipe(swiper, event, startX) {
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    const { params: params } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window1.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') {
            event.preventDefault();
            return true;
        }
        return false;
    }
    return true;
}
function $4e95c04dd8a5890d$var$onTouchStart(event) {
    const swiper = this;
    const document1 = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    const data = swiper.touchEventsData;
    if (e.type === 'pointerdown') {
        if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
        data.pointerId = e.pointerId;
    } else if (e.type === 'touchstart' && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
    if (e.type === 'touchstart') {
        // don't proceed touch event
        $4e95c04dd8a5890d$var$preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
        return;
    }
    const { params: params, touches: touches, enabled: enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === 'mouse') return;
    if (swiper.animating && params.preventInteractionOnTransition) return;
    if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
    let targetEl = e.target;
    if (params.touchEventsTarget === 'wrapper') {
        if (!(0, $831683533b862e22$export$90a7f3efeed30595)(targetEl, swiper.wrapperEl)) return;
    }
    if ('which' in e && e.which === 3) return;
    if ('button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
    // eslint-disable-next-line
    const eventPath = e.composedPath ? e.composedPath() : e.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? $4e95c04dd8a5890d$var$closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    if (!$4e95c04dd8a5890d$var$preventEdgeSwipe(swiper, e, startX)) return;
    Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = (0, $831683533b862e22$export$4368d992c4eafac0)();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
        preventDefault = false;
        if (targetEl.nodeName === 'SELECT') data.isTouched = false;
    }
    if (document1.activeElement && document1.activeElement.matches(data.focusableElements) && document1.activeElement !== targetEl && (e.pointerType === 'mouse' || e.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements))) document1.activeElement.blur();
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
    swiper.emit('touchStart', e);
}
function $4e95c04dd8a5890d$var$onTouchMove(event) {
    const document1 = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params: params, touches: touches, rtlTranslate: rtl, enabled: enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === 'mouse') return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (e.type === 'pointermove') {
        if (data.touchId !== null) return; // return from pointer if we use touch
        const id = e.pointerId;
        if (id !== data.pointerId) return;
    }
    let targetTouch;
    if (e.type === 'touchmove') {
        targetTouch = [
            ...e.changedTouches
        ].find((t)=>t.identifier === data.touchId);
        if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    } else targetTouch = e;
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) swiper.emit('touchMoveOpposite', e);
        return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
        if (data.isTouched) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY
            });
            data.touchStartTime = (0, $831683533b862e22$export$4368d992c4eafac0)();
        }
        return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) // Vertical
        {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
    }
    if (document1.activeElement && document1.activeElement.matches(data.focusableElements) && document1.activeElement !== e.target && e.pointerType !== 'mouse') document1.activeElement.blur();
    if (document1.activeElement) {
        if (e.target === document1.activeElement && e.target.matches(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) swiper.emit('touchMove', e);
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === 'undefined') {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
        else // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
    }
    if (data.isScrolling) swiper.emit('touchMoveOpposite', e);
    if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
    }
    if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) return;
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
        diff = Math.abs(diff) * (rtl ? 1 : -1);
        touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
        diff = -diff;
        touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
    if (!data.isMoved) {
        if (isLoop && allowLoopFix) swiper.loopFix({
            direction: swiper.swipeDirection
        });
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) {
            const evt = new window.CustomEvent('transitionend', {
                bubbles: true,
                cancelable: true,
                detail: {
                    bySwiperTouchMove: true
                }
            });
            swiper.wrapperEl.dispatchEvent(evt);
        }
        data.allowMomentumBounce = false;
        // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
        swiper.emit('sliderFirstMove', e);
    }
    let loopFixed;
    new Date().getTime();
    if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
        Object.assign(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY,
            startTranslate: data.currentTranslate
        });
        data.loopSwapReset = true;
        data.startTranslate = data.currentTranslate;
        return;
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) resistanceRatio = 0;
    if (diff > 0) {
        if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) swiper.loopFix({
            direction: 'prev',
            setTranslate: true,
            activeSlideIndex: 0
        });
        if (data.currentTranslate > swiper.minTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
    } else if (diff < 0) {
        if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) swiper.loopFix({
            direction: 'next',
            setTranslate: true,
            activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
        if (data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
    }
    if (disableParentSwiper) e.preventedByNestedSwiper = true;
    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
    // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode) return;
    // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
}
function $4e95c04dd8a5890d$var$onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let targetTouch;
    const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
    if (!isTouchEvent) {
        if (data.touchId !== null) return; // return from pointer if we use touch
        if (e.pointerId !== data.pointerId) return;
        targetTouch = e;
    } else {
        targetTouch = [
            ...e.changedTouches
        ].find((t)=>t.identifier === data.touchId);
        if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    }
    if ([
        'pointercancel',
        'pointerout',
        'pointerleave',
        'contextmenu'
    ].includes(e.type)) {
        const proceed = [
            'pointercancel',
            'contextmenu'
        ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
        if (!proceed) return;
    }
    data.pointerId = null;
    data.touchId = null;
    const { params: params, touches: touches, rtlTranslate: rtl, slidesGrid: slidesGrid, enabled: enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === 'mouse') return;
    if (data.allowTouchCallbacks) swiper.emit('touchEnd', e);
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
    // Time diff
    const touchEndTime = (0, $831683533b862e22$export$4368d992c4eafac0)();
    const timeDiff = touchEndTime - data.touchStartTime;
    // Tap, doubleTap, Click
    if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
        swiper.emit('tap click', e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit('doubleTap doubleClick', e);
    }
    data.lastClickTime = (0, $831683533b862e22$export$4368d992c4eafac0)();
    (0, $831683533b862e22$export$7ccc53e8f1e7dfc5)(()=>{
        if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
    else currentPos = -data.currentTranslate;
    if (params.cssMode) return;
    if (params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
            currentPos: currentPos
        });
        return;
    }
    // Find current slide
    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== 'undefined') {
            if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
            }
        } else if (swipeToLast || currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
        if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        else if (swiper.isEnd) rewindFirstIndex = 0;
    }
    // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === 'next') {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === 'prev') {
            if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex);
            else swiper.slideTo(stopIndex);
        }
    } else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === 'next') swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
            if (swiper.swipeDirection === 'prev') swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
    }
}
function $4e95c04dd8a5890d$var$onResize() {
    const swiper = this;
    const { params: params, el: el } = swiper;
    if (el && el.offsetWidth === 0) return;
    // Breakpoints
    if (params.breakpoints) swiper.setBreakpoint();
    // Save locks
    const { allowSlideNext: allowSlideNext, allowSlidePrev: allowSlidePrev, snapGrid: snapGrid } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true);
    else swiper.slideTo(swiper.activeIndex, 0, false, true);
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        clearTimeout(swiper.autoplay.resizeTimeout);
        swiper.autoplay.resizeTimeout = setTimeout(()=>{
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
        }, 500);
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}
function $4e95c04dd8a5890d$var$onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}
function $4e95c04dd8a5890d$var$onScroll() {
    const swiper = this;
    const { wrapperEl: wrapperEl, rtlTranslate: rtlTranslate, enabled: enabled } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
    else swiper.translate = -wrapperEl.scrollTop;
    // eslint-disable-next-line
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    swiper.emit('setTranslate', swiper.translate, false);
}
function $4e95c04dd8a5890d$var$onLoad(e) {
    const swiper = this;
    $4e95c04dd8a5890d$var$processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) return;
    swiper.update();
}
function $4e95c04dd8a5890d$var$onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded) return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = 'auto';
}
const $4e95c04dd8a5890d$var$events = (swiper, method)=>{
    const document1 = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
    const { params: params, el: el, wrapperEl: wrapperEl, device: device } = swiper;
    const capture = !!params.nested;
    const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    const swiperMethod = method;
    if (!el || typeof el === 'string') return;
    // Touch Events
    document1[domMethod]('touchstart', swiper.onDocumentTouchStart, {
        passive: false,
        capture: capture
    });
    el[domMethod]('touchstart', swiper.onTouchStart, {
        passive: false
    });
    el[domMethod]('pointerdown', swiper.onTouchStart, {
        passive: false
    });
    document1[domMethod]('touchmove', swiper.onTouchMove, {
        passive: false,
        capture: capture
    });
    document1[domMethod]('pointermove', swiper.onTouchMove, {
        passive: false,
        capture: capture
    });
    document1[domMethod]('touchend', swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]('pointerup', swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]('pointercancel', swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]('touchcancel', swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]('pointerout', swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]('pointerleave', swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]('contextmenu', swiper.onTouchEnd, {
        passive: true
    });
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) el[domMethod]('click', swiper.onClick, true);
    if (params.cssMode) wrapperEl[domMethod]('scroll', swiper.onScroll);
    // Resize handler
    if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', $4e95c04dd8a5890d$var$onResize, true);
    else swiper[swiperMethod]('observerUpdate', $4e95c04dd8a5890d$var$onResize, true);
    // Images loader
    el[domMethod]('load', swiper.onLoad, {
        capture: true
    });
};
function $4e95c04dd8a5890d$var$attachEvents() {
    const swiper = this;
    const { params: params } = swiper;
    swiper.onTouchStart = $4e95c04dd8a5890d$var$onTouchStart.bind(swiper);
    swiper.onTouchMove = $4e95c04dd8a5890d$var$onTouchMove.bind(swiper);
    swiper.onTouchEnd = $4e95c04dd8a5890d$var$onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = $4e95c04dd8a5890d$var$onDocumentTouchStart.bind(swiper);
    if (params.cssMode) swiper.onScroll = $4e95c04dd8a5890d$var$onScroll.bind(swiper);
    swiper.onClick = $4e95c04dd8a5890d$var$onClick.bind(swiper);
    swiper.onLoad = $4e95c04dd8a5890d$var$onLoad.bind(swiper);
    $4e95c04dd8a5890d$var$events(swiper, 'on');
}
function $4e95c04dd8a5890d$var$detachEvents() {
    const swiper = this;
    $4e95c04dd8a5890d$var$events(swiper, 'off');
}
var $4e95c04dd8a5890d$var$events$1 = {
    attachEvents: $4e95c04dd8a5890d$var$attachEvents,
    detachEvents: $4e95c04dd8a5890d$var$detachEvents
};
const $4e95c04dd8a5890d$var$isGridEnabled = (swiper, params)=>{
    return swiper.grid && params.grid && params.grid.rows > 1;
};
function $4e95c04dd8a5890d$var$setBreakpoint() {
    const swiper = this;
    const { realIndex: realIndex, initialized: initialized, params: params, el: el } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
    const document1 = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
    // Get breakpoint for window/container width and update parameters
    const breakpointsBase = params.breakpointsBase === 'window' || !params.breakpointsBase ? params.breakpointsBase : 'container';
    const breakpointContainer = [
        'window',
        'container'
    ].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document1.querySelector(params.breakpointsBase);
    const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = $4e95c04dd8a5890d$var$isGridEnabled(swiper, params);
    const isMultiRow = $4e95c04dd8a5890d$var$isGridEnabled(swiper, breakpointParams);
    const wasGrabCursor = swiper.params.grabCursor;
    const isGrabCursor = breakpointParams.grabCursor;
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        el.classList.add(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') el.classList.add(`${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    }
    if (wasGrabCursor && !isGrabCursor) swiper.unsetGrabCursor();
    else if (!wasGrabCursor && isGrabCursor) swiper.setGrabCursor();
    // Toggle navigation, pagination, scrollbar
    [
        'navigation',
        'pagination',
        'scrollbar'
    ].forEach((prop)=>{
        if (typeof breakpointParams[prop] === 'undefined') return;
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
        if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
        if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) swiper.changeDirection();
    (0, $831683533b862e22$export$efccba1c4a2ef57b)(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) swiper.disable();
    else if (!wasEnabled && isEnabled) swiper.enable();
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);
    if (initialized) {
        if (needsReLoop) {
            swiper.loopDestroy();
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        } else if (!wasLoop && hasLoop) {
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        } else if (wasLoop && !hasLoop) swiper.loopDestroy();
    }
    swiper.emit('breakpoint', breakpointParams);
}
function $4e95c04dd8a5890d$var$getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) base = 'window';
    if (!breakpoints || base === 'container' && !containerEl) return undefined;
    let breakpoint = false;
    const window1 = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    const currentHeight = base === 'window' ? window1.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point)=>{
        if (typeof point === 'string' && point.indexOf('@') === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return {
                value: value,
                point: point
            };
        }
        return {
            value: point,
            point: point
        };
    });
    points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10));
    for(let i = 0; i < points.length; i += 1){
        const { point: point, value: value } = points[i];
        if (base === 'window') {
            if (window1.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
        } else if (value <= containerEl.clientWidth) breakpoint = point;
    }
    return breakpoint || 'max';
}
var $4e95c04dd8a5890d$var$breakpoints = {
    setBreakpoint: $4e95c04dd8a5890d$var$setBreakpoint,
    getBreakpoint: $4e95c04dd8a5890d$var$getBreakpoint
};
function $4e95c04dd8a5890d$var$prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item)=>{
        if (typeof item === 'object') Object.keys(item).forEach((classNames)=>{
            if (item[classNames]) resultClasses.push(prefix + classNames);
        });
        else if (typeof item === 'string') resultClasses.push(prefix + item);
    });
    return resultClasses;
}
function $4e95c04dd8a5890d$var$addClasses() {
    const swiper = this;
    const { classNames: classNames, params: params, rtl: rtl, el: el, device: device } = swiper;
    // prettier-ignore
    const suffixes = $4e95c04dd8a5890d$var$prepareClasses([
        'initialized',
        params.direction,
        {
            'free-mode': swiper.params.freeMode && params.freeMode.enabled
        },
        {
            'autoheight': params.autoHeight
        },
        {
            'rtl': rtl
        },
        {
            'grid': params.grid && params.grid.rows > 1
        },
        {
            'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
        },
        {
            'android': device.android
        },
        {
            'ios': device.ios
        },
        {
            'css-mode': params.cssMode
        },
        {
            'centered': params.cssMode && params.centeredSlides
        },
        {
            'watch-progress': params.watchSlidesProgress
        }
    ], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
}
function $4e95c04dd8a5890d$var$removeClasses() {
    const swiper = this;
    const { el: el, classNames: classNames } = swiper;
    if (!el || typeof el === 'string') return;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
}
var $4e95c04dd8a5890d$var$classes = {
    addClasses: $4e95c04dd8a5890d$var$addClasses,
    removeClasses: $4e95c04dd8a5890d$var$removeClasses
};
function $4e95c04dd8a5890d$var$checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked, params: params } = swiper;
    const { slidesOffsetBefore: slidesOffsetBefore } = params;
    if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else swiper.isLocked = swiper.snapGrid.length === 1;
    if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
    if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
}
var $4e95c04dd8a5890d$var$checkOverflow$1 = {
    checkOverflow: $4e95c04dd8a5890d$var$checkOverflow
};
var $4e95c04dd8a5890d$export$4368d992c4eafac0 = {
    init: true,
    direction: 'horizontal',
    oneWayMovement: false,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: 'swiper',
    enabled: true,
    focusableElements: 'input, select, option, textarea, button, video, label',
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: 'swiper-',
    // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
};
function $4e95c04dd8a5890d$var$moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
        if (obj === void 0) obj = {};
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) {
            (0, $831683533b862e22$export$efccba1c4a2ef57b)(allModulesParams, obj);
            return;
        }
        if (params[moduleParamName] === true) params[moduleParamName] = {
            enabled: true
        };
        if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
        if ([
            'pagination',
            'scrollbar'
        ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) {
            (0, $831683533b862e22$export$efccba1c4a2ef57b)(allModulesParams, obj);
            return;
        }
        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) params[moduleParamName].enabled = true;
        if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
        };
        (0, $831683533b862e22$export$efccba1c4a2ef57b)(allModulesParams, obj);
    };
}
/* eslint no-param-reassign: "off" */ const $4e95c04dd8a5890d$var$prototypes = {
    eventsEmitter: $4e95c04dd8a5890d$var$eventsEmitter,
    update: $4e95c04dd8a5890d$var$update,
    translate: $4e95c04dd8a5890d$var$translate,
    transition: $4e95c04dd8a5890d$var$transition,
    slide: $4e95c04dd8a5890d$var$slide,
    loop: $4e95c04dd8a5890d$var$loop,
    grabCursor: $4e95c04dd8a5890d$var$grabCursor,
    events: $4e95c04dd8a5890d$var$events$1,
    breakpoints: $4e95c04dd8a5890d$var$breakpoints,
    checkOverflow: $4e95c04dd8a5890d$var$checkOverflow$1,
    classes: $4e95c04dd8a5890d$var$classes
};
const $4e95c04dd8a5890d$var$extendedDefaults = {};
class $4e95c04dd8a5890d$export$25ce5a424b770e84 {
    constructor(){
        let el;
        let params;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') params = args[0];
        else [el, params] = args;
        if (!params) params = {};
        params = (0, $831683533b862e22$export$efccba1c4a2ef57b)({}, params);
        if (el && !params.el) params.el = el;
        const document1 = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
        if (params.el && typeof params.el === 'string' && document1.querySelectorAll(params.el).length > 1) {
            const swipers = [];
            document1.querySelectorAll(params.el).forEach((containerEl)=>{
                const newParams = (0, $831683533b862e22$export$efccba1c4a2ef57b)({}, params, {
                    el: containerEl
                });
                swipers.push(new $4e95c04dd8a5890d$export$25ce5a424b770e84(newParams));
            });
            // eslint-disable-next-line no-constructor-return
            return swipers;
        }
        // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = $4e95c04dd8a5890d$var$getSupport();
        swiper.device = $4e95c04dd8a5890d$var$getDevice({
            userAgent: params.userAgent
        });
        swiper.browser = $4e95c04dd8a5890d$var$getBrowser();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [
            ...swiper.__modules__
        ];
        if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
        const allModulesParams = {};
        swiper.modules.forEach((mod)=>{
            mod({
                params: params,
                swiper: swiper,
                extendParams: $4e95c04dd8a5890d$var$moduleExtendParams(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
            });
        });
        // Extend defaults with modules params
        const swiperParams = (0, $831683533b862e22$export$efccba1c4a2ef57b)({}, $4e95c04dd8a5890d$export$4368d992c4eafac0, allModulesParams);
        // Extend defaults with passed params
        swiper.params = (0, $831683533b862e22$export$efccba1c4a2ef57b)({}, swiperParams, $4e95c04dd8a5890d$var$extendedDefaults, params);
        swiper.originalParams = (0, $831683533b862e22$export$efccba1c4a2ef57b)({}, swiper.params);
        swiper.passedParams = (0, $831683533b862e22$export$efccba1c4a2ef57b)({}, params);
        // add event listeners
        if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName)=>{
            swiper.on(eventName, swiper.params.on[eventName]);
        });
        if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
        // Extend Swiper
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el: el,
            // Classes
            classNames: [],
            // Slides
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal () {
                return swiper.params.direction === 'horizontal';
            },
            isVertical () {
                return swiper.params.direction === 'vertical';
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            cssOverflowAdjustment () {
                // Returns 0 unless `translate` is > 2**23
                // Should be subtracted from css values to prevent overflow
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: 0,
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                startMoving: undefined,
                pointerId: null,
                touchId: null
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        });
        swiper.emit('_swiper');
        // Init
        if (swiper.params.init) swiper.init();
        // Return app instance
        // eslint-disable-next-line no-constructor-return
        return swiper;
    }
    getDirectionLabel(property) {
        if (this.isHorizontal()) return property;
        // prettier-ignore
        return ({
            'width': 'height',
            'margin-top': 'margin-left',
            'margin-bottom ': 'margin-right',
            'margin-left': 'margin-top',
            'margin-right': 'margin-bottom',
            'padding-left': 'padding-top',
            'padding-right': 'padding-bottom',
            'marginRight': 'marginBottom'
        })[property];
    }
    getSlideIndex(slideEl) {
        const { slidesEl: slidesEl, params: params } = this;
        const slides = (0, $831683533b862e22$export$f1e1789686576879)(slidesEl, `.${params.slideClass}, swiper-slide`);
        const firstSlideIndex = (0, $831683533b862e22$export$dda1d9f60106f0e9)(slides[0]);
        return (0, $831683533b862e22$export$dda1d9f60106f0e9)(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
        return this.getSlideIndex(this.slides.find((slideEl)=>slideEl.getAttribute('data-swiper-slide-index') * 1 === index));
    }
    recalcSlides() {
        const swiper = this;
        const { slidesEl: slidesEl, params: params } = swiper;
        swiper.slides = (0, $831683533b862e22$export$f1e1789686576879)(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) swiper.setGrabCursor();
        swiper.emit('enable');
    }
    disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) swiper.unsetGrabCursor();
        swiper.emit('disable');
    }
    setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(' ').filter((className)=>{
            return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', cls.join(' '));
    }
    getSlideClasses(slideEl) {
        const swiper = this;
        if (swiper.destroyed) return '';
        return slideEl.className.split(' ').filter((className)=>{
            return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
    }
    emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.forEach((slideEl)=>{
            const classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl: slideEl,
                classNames: classNames
            });
            swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
    }
    slidesPerViewDynamic(view, exact) {
        if (view === void 0) view = 'current';
        if (exact === void 0) exact = false;
        const swiper = this;
        const { params: params, slides: slides, slidesGrid: slidesGrid, slidesSizesGrid: slidesSizesGrid, size: swiperSize, activeIndex: activeIndex } = swiper;
        let spv = 1;
        if (typeof params.slidesPerView === 'number') return params.slidesPerView;
        if (params.centeredSlides) {
            let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
            let breakLoop;
            for(let i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                slideSize += Math.ceil(slides[i].swiperSlideSize);
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
            for(let i = activeIndex - 1; i >= 0; i -= 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
        } else {
            // eslint-disable-next-line
            if (view === 'current') for(let i = activeIndex + 1; i < slides.length; i += 1){
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            }
            else // previous
            for(let i = activeIndex - 1; i >= 0; i -= 1){
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                if (slideInView) spv += 1;
            }
        }
        return spv;
    }
    update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const { snapGrid: snapGrid, params: params } = swiper;
        // Breakpoints
        if (params.breakpoints) swiper.setBreakpoint();
        [
            ...swiper.el.querySelectorAll('[loading="lazy"]')
        ].forEach((imageEl)=>{
            if (imageEl.complete) $4e95c04dd8a5890d$var$processLazyPreloader(swiper, imageEl);
        });
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
            const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        let translated;
        if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
            setTranslate();
            if (params.autoHeight) swiper.updateAutoHeight();
        } else {
            if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                translated = swiper.slideTo(slides.length - 1, 0, false, true);
            } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (!translated) setTranslate();
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        swiper.emit('update');
    }
    changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) needUpdate = true;
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') return swiper;
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
        swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.forEach((slideEl)=>{
            if (newDirection === 'vertical') slideEl.style.width = '';
            else slideEl.style.height = '';
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
    }
    changeLanguageDirection(direction) {
        const swiper = this;
        if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
        swiper.rtl = direction === 'rtl';
        swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
        if (swiper.rtl) {
            swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = 'rtl';
        } else {
            swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = 'ltr';
        }
        swiper.update();
    }
    mount(element) {
        const swiper = this;
        if (swiper.mounted) return true;
        // Find el
        let el = element || swiper.params.el;
        if (typeof el === 'string') el = document.querySelector(el);
        if (!el) return false;
        el.swiper = swiper;
        if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
        const getWrapperSelector = ()=>{
            return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
        };
        const getWrapper = ()=>{
            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = el.shadowRoot.querySelector(getWrapperSelector());
                // Children needs to return slot items
                return res;
            }
            return (0, $831683533b862e22$export$f1e1789686576879)(el, getWrapperSelector())[0];
        };
        // Find Wrapper
        let wrapperEl = getWrapper();
        if (!wrapperEl && swiper.params.createElements) {
            wrapperEl = (0, $831683533b862e22$export$db3b6bfb95261072)('div', swiper.params.wrapperClass);
            el.append(wrapperEl);
            (0, $831683533b862e22$export$f1e1789686576879)(el, `.${swiper.params.slideClass}`).forEach((slideEl)=>{
                wrapperEl.append(slideEl);
            });
        }
        Object.assign(swiper, {
            el: el,
            wrapperEl: wrapperEl,
            slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
            hostEl: swiper.isElement ? el.parentNode.host : el,
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === 'rtl' || (0, $831683533b862e22$export$ffb5f4729a158638)(el, 'direction') === 'rtl',
            rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || (0, $831683533b862e22$export$ffb5f4729a158638)(el, 'direction') === 'rtl'),
            wrongRTL: (0, $831683533b862e22$export$ffb5f4729a158638)(wrapperEl, 'display') === '-webkit-box'
        });
        return true;
    }
    init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit');
        // Set breakpoint
        if (swiper.params.breakpoints) swiper.setBreakpoint();
        // Add Classes
        swiper.addClasses();
        // Update size
        swiper.updateSize();
        // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
        // Slide To Initial Slide
        if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
        else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        // Create loop
        if (swiper.params.loop) swiper.loopCreate();
        // Attach events
        swiper.attachEvents();
        const lazyElements = [
            ...swiper.el.querySelectorAll('[loading="lazy"]')
        ];
        if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
        lazyElements.forEach((imageEl)=>{
            if (imageEl.complete) $4e95c04dd8a5890d$var$processLazyPreloader(swiper, imageEl);
            else imageEl.addEventListener('load', (e)=>{
                $4e95c04dd8a5890d$var$processLazyPreloader(swiper, e.target);
            });
        });
        $4e95c04dd8a5890d$var$preload(swiper);
        // Init Flag
        swiper.initialized = true;
        $4e95c04dd8a5890d$var$preload(swiper);
        // Emit
        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) deleteInstance = true;
        if (cleanStyles === void 0) cleanStyles = true;
        const swiper = this;
        const { params: params, el: el, wrapperEl: wrapperEl, slides: slides } = swiper;
        if (typeof swiper.params === 'undefined' || swiper.destroyed) return null;
        swiper.emit('beforeDestroy');
        // Init Flag
        swiper.initialized = false;
        // Detach events
        swiper.detachEvents();
        // Destroy loop
        if (params.loop) swiper.loopDestroy();
        // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            if (el && typeof el !== 'string') el.removeAttribute('style');
            if (wrapperEl) wrapperEl.removeAttribute('style');
            if (slides && slides.length) slides.forEach((slideEl)=>{
                slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                slideEl.removeAttribute('style');
                slideEl.removeAttribute('data-swiper-slide-index');
            });
        }
        swiper.emit('destroy');
        // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach((eventName)=>{
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            if (swiper.el && typeof swiper.el !== 'string') swiper.el.swiper = null;
            (0, $831683533b862e22$export$d141bba7fdc215a3)(swiper);
        }
        swiper.destroyed = true;
        return null;
    }
    static extendDefaults(newDefaults) {
        (0, $831683533b862e22$export$efccba1c4a2ef57b)($4e95c04dd8a5890d$var$extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
        return $4e95c04dd8a5890d$var$extendedDefaults;
    }
    static get defaults() {
        return $4e95c04dd8a5890d$export$4368d992c4eafac0;
    }
    static installModule(mod) {
        if (!$4e95c04dd8a5890d$export$25ce5a424b770e84.prototype.__modules__) $4e95c04dd8a5890d$export$25ce5a424b770e84.prototype.__modules__ = [];
        const modules = $4e95c04dd8a5890d$export$25ce5a424b770e84.prototype.__modules__;
        if (typeof mod === 'function' && modules.indexOf(mod) < 0) modules.push(mod);
    }
    static use(module) {
        if (Array.isArray(module)) {
            module.forEach((m)=>$4e95c04dd8a5890d$export$25ce5a424b770e84.installModule(m));
            return $4e95c04dd8a5890d$export$25ce5a424b770e84;
        }
        $4e95c04dd8a5890d$export$25ce5a424b770e84.installModule(module);
        return $4e95c04dd8a5890d$export$25ce5a424b770e84;
    }
}
Object.keys($4e95c04dd8a5890d$var$prototypes).forEach((prototypeGroup)=>{
    Object.keys($4e95c04dd8a5890d$var$prototypes[prototypeGroup]).forEach((protoMethod)=>{
        $4e95c04dd8a5890d$export$25ce5a424b770e84.prototype[protoMethod] = $4e95c04dd8a5890d$var$prototypes[prototypeGroup][protoMethod];
    });
});
$4e95c04dd8a5890d$export$25ce5a424b770e84.use([
    $4e95c04dd8a5890d$var$Resize,
    $4e95c04dd8a5890d$var$Observer
]);






function $4438d6a56c7fd83e$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on, emit: emit } = _ref;
    extendParams({
        virtual: {
            enabled: false,
            slides: [],
            cache: true,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: true,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    let cssModeTimeout;
    const document = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
    swiper.virtual = {
        cache: {},
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    const tempDOM = document.createElement('div');
    function renderSlide(slide, index) {
        const params = swiper.params.virtual;
        if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
        // eslint-disable-next-line
        let slideEl;
        if (params.renderSlide) {
            slideEl = params.renderSlide.call(swiper, slide, index);
            if (typeof slideEl === 'string') {
                tempDOM.innerHTML = slideEl;
                slideEl = tempDOM.children[0];
            }
        } else if (swiper.isElement) slideEl = (0, $831683533b862e22$export$db3b6bfb95261072)('swiper-slide');
        else slideEl = (0, $831683533b862e22$export$db3b6bfb95261072)('div', swiper.params.slideClass);
        slideEl.setAttribute('data-swiper-slide-index', index);
        if (!params.renderSlide) slideEl.innerHTML = slide;
        if (params.cache) swiper.virtual.cache[index] = slideEl;
        return slideEl;
    }
    function update(force, beforeInit, forceActiveIndex) {
        const { slidesPerView: slidesPerView, slidesPerGroup: slidesPerGroup, centeredSlides: centeredSlides, loop: isLoop, initialSlide: initialSlide } = swiper.params;
        if (beforeInit && !isLoop && initialSlide > 0) return;
        const { addSlidesBefore: addSlidesBefore, addSlidesAfter: addSlidesAfter } = swiper.params.virtual;
        const { from: previousFrom, to: previousTo, slides: slides, slidesGrid: previousSlidesGrid, offset: previousOffset } = swiper.virtual;
        if (!swiper.params.cssMode) swiper.updateActiveIndex();
        const activeIndex = typeof forceActiveIndex === 'undefined' ? swiper.activeIndex || 0 : forceActiveIndex;
        let offsetProp;
        if (swiper.rtlTranslate) offsetProp = 'right';
        else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        let slidesAfter;
        let slidesBefore;
        if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
            slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
            slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
            slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
        }
        let from = activeIndex - slidesBefore;
        let to = activeIndex + slidesAfter;
        if (!isLoop) {
            from = Math.max(from, 0);
            to = Math.min(to, slides.length - 1);
        }
        let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        if (isLoop && activeIndex >= slidesBefore) {
            from -= slidesBefore;
            if (!centeredSlides) offset += swiper.slidesGrid[0];
        } else if (isLoop && activeIndex < slidesBefore) {
            from = -slidesBefore;
            if (centeredSlides) offset += swiper.slidesGrid[0];
        }
        Object.assign(swiper.virtual, {
            from: from,
            to: to,
            offset: offset,
            slidesGrid: swiper.slidesGrid,
            slidesBefore: slidesBefore,
            slidesAfter: slidesAfter
        });
        function onRendered() {
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            emit('virtualUpdate');
        }
        if (previousFrom === from && previousTo === to && !force) {
            if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.forEach((slideEl)=>{
                slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
            });
            swiper.updateProgress();
            emit('virtualUpdate');
            return;
        }
        if (swiper.params.virtual.renderExternal) {
            swiper.params.virtual.renderExternal.call(swiper, {
                offset: offset,
                from: from,
                to: to,
                slides: function getSlides() {
                    const slidesToRender = [];
                    for(let i = from; i <= to; i += 1)slidesToRender.push(slides[i]);
                    return slidesToRender;
                }()
            });
            if (swiper.params.virtual.renderExternalUpdate) onRendered();
            else emit('virtualUpdate');
            return;
        }
        const prependIndexes = [];
        const appendIndexes = [];
        const getSlideIndex = (index)=>{
            let slideIndex = index;
            if (index < 0) slideIndex = slides.length + index;
            else if (slideIndex >= slides.length) // eslint-disable-next-line
            slideIndex = slideIndex - slides.length;
            return slideIndex;
        };
        if (force) swiper.slides.filter((el)=>el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach((slideEl)=>{
            slideEl.remove();
        });
        else {
            for(let i = previousFrom; i <= previousTo; i += 1)if (i < from || i > to) {
                const slideIndex = getSlideIndex(i);
                swiper.slides.filter((el)=>el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach((slideEl)=>{
                    slideEl.remove();
                });
            }
        }
        const loopFrom = isLoop ? -slides.length : 0;
        const loopTo = isLoop ? slides.length * 2 : slides.length;
        for(let i = loopFrom; i < loopTo; i += 1)if (i >= from && i <= to) {
            const slideIndex = getSlideIndex(i);
            if (typeof previousTo === 'undefined' || force) appendIndexes.push(slideIndex);
            else {
                if (i > previousTo) appendIndexes.push(slideIndex);
                if (i < previousFrom) prependIndexes.push(slideIndex);
            }
        }
        appendIndexes.forEach((index)=>{
            swiper.slidesEl.append(renderSlide(slides[index], index));
        });
        if (isLoop) for(let i = prependIndexes.length - 1; i >= 0; i -= 1){
            const index = prependIndexes[i];
            swiper.slidesEl.prepend(renderSlide(slides[index], index));
        }
        else {
            prependIndexes.sort((a, b)=>b - a);
            prependIndexes.forEach((index)=>{
                swiper.slidesEl.prepend(renderSlide(slides[index], index));
            });
        }
        (0, $831683533b862e22$export$f1e1789686576879)(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach((slideEl)=>{
            slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
        onRendered();
    }
    function appendSlide(slides) {
        if (typeof slides === 'object' && 'length' in slides) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.push(slides[i]);
        } else swiper.virtual.slides.push(slides);
        update(true);
    }
    function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
            newActiveIndex = activeIndex + slides.length;
            numberOfNewSlides = slides.length;
        } else swiper.virtual.slides.unshift(slides);
        if (swiper.params.virtual.cache) {
            const cache = swiper.virtual.cache;
            const newCache = {};
            Object.keys(cache).forEach((cachedIndex)=>{
                const cachedEl = cache[cachedIndex];
                const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
                if (cachedElIndex) cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
            });
            swiper.virtual.cache = newCache;
        }
        update(true);
        swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        let activeIndex = swiper.activeIndex;
        if (Array.isArray(slidesIndexes)) for(let i = slidesIndexes.length - 1; i >= 0; i -= 1){
            if (swiper.params.virtual.cache) {
                delete swiper.virtual.cache[slidesIndexes[i]];
                // shift cache indexes
                Object.keys(swiper.virtual.cache).forEach((key)=>{
                    if (key > slidesIndexes) {
                        swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                        swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
                        delete swiper.virtual.cache[key];
                    }
                });
            }
            swiper.virtual.slides.splice(slidesIndexes[i], 1);
            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        else {
            if (swiper.params.virtual.cache) {
                delete swiper.virtual.cache[slidesIndexes];
                // shift cache indexes
                Object.keys(swiper.virtual.cache).forEach((key)=>{
                    if (key > slidesIndexes) {
                        swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                        swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
                        delete swiper.virtual.cache[key];
                    }
                });
            }
            swiper.virtual.slides.splice(slidesIndexes, 1);
            if (slidesIndexes < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        update(true);
        swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
        swiper.virtual.slides = [];
        if (swiper.params.virtual.cache) swiper.virtual.cache = {};
        update(true);
        swiper.slideTo(0, 0);
    }
    on('beforeInit', ()=>{
        if (!swiper.params.virtual.enabled) return;
        let domSlidesAssigned;
        if (typeof swiper.passedParams.virtual.slides === 'undefined') {
            const slides = [
                ...swiper.slidesEl.children
            ].filter((el)=>el.matches(`.${swiper.params.slideClass}, swiper-slide`));
            if (slides && slides.length) {
                swiper.virtual.slides = [
                    ...slides
                ];
                domSlidesAssigned = true;
                slides.forEach((slideEl, slideIndex)=>{
                    slideEl.setAttribute('data-swiper-slide-index', slideIndex);
                    swiper.virtual.cache[slideIndex] = slideEl;
                    slideEl.remove();
                });
            }
        }
        if (!domSlidesAssigned) swiper.virtual.slides = swiper.params.virtual.slides;
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
        update(false, true);
    });
    on('setTranslate', ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode && !swiper._immediateVirtual) {
            clearTimeout(cssModeTimeout);
            cssModeTimeout = setTimeout(()=>{
                update();
            }, 100);
        } else update();
    });
    on('init update resize', ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode) (0, $831683533b862e22$export$2408f22a0fab9ae5)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    });
    Object.assign(swiper.virtual, {
        appendSlide: appendSlide,
        prependSlide: prependSlide,
        removeSlide: removeSlide,
        removeAllSlides: removeAllSlides,
        update: update
    });
}




/* eslint-disable consistent-return */ function $b262de0fa94a90b2$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on, emit: emit } = _ref;
    const document = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
    const window = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    swiper.keyboard = {
        enabled: false
    };
    extendParams({
        keyboard: {
            enabled: false,
            onlyInViewport: true,
            pageUpDown: true
        }
    });
    function handle(event) {
        if (!swiper.enabled) return;
        const { rtlTranslate: rtl } = swiper;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40;
        // Directions locks
        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return undefined;
        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) return undefined;
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
            let inView = false;
            // Check that swiper should be inside of visible area of window
            if ((0, $831683533b862e22$export$407448d2b89b1813)(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && (0, $831683533b862e22$export$407448d2b89b1813)(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) return undefined;
            const el = swiper.el;
            const swiperWidth = el.clientWidth;
            const swiperHeight = el.clientHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const swiperOffset = (0, $831683533b862e22$export$8b22cf2602fb60ce)(el);
            if (rtl) swiperOffset.left -= el.scrollLeft;
            const swiperCoord = [
                [
                    swiperOffset.left,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left,
                    swiperOffset.top + swiperHeight
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top + swiperHeight
                ]
            ];
            for(let i = 0; i < swiperCoord.length; i += 1){
                const point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                    inView = true;
                }
            }
            if (!inView) return undefined;
        }
        if (swiper.isHorizontal()) {
            if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
            if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
            if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (isPageDown || isArrowDown) swiper.slideNext();
            if (isPageUp || isArrowUp) swiper.slidePrev();
        }
        emit('keyPress', kc);
        return undefined;
    }
    function enable() {
        if (swiper.keyboard.enabled) return;
        document.addEventListener('keydown', handle);
        swiper.keyboard.enabled = true;
    }
    function disable() {
        if (!swiper.keyboard.enabled) return;
        document.removeEventListener('keydown', handle);
        swiper.keyboard.enabled = false;
    }
    on('init', ()=>{
        if (swiper.params.keyboard.enabled) enable();
    });
    on('destroy', ()=>{
        if (swiper.keyboard.enabled) disable();
    });
    Object.assign(swiper.keyboard, {
        enable: enable,
        disable: disable
    });
}




/* eslint-disable consistent-return */ function $7629c73f4b50d57c$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on, emit: emit } = _ref;
    const window = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    extendParams({
        mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarget: 'container',
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: 'swiper-no-mousewheel'
        }
    });
    swiper.mousewheel = {
        enabled: false
    };
    let timeout;
    let lastScrollTime = (0, $831683533b862e22$export$4368d992c4eafac0)();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY
        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy
        if ('detail' in e) sY = e.detail;
        if ('wheelDelta' in e) sY = -e.wheelDelta / 120;
        if ('wheelDeltaY' in e) sY = -e.wheelDeltaY / 120;
        if ('wheelDeltaX' in e) sX = -e.wheelDeltaX / 120;
        // side scrolling on FF with DOMMouseScroll
        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ('deltaY' in e) pY = e.deltaY;
        if ('deltaX' in e) pX = e.deltaX;
        if (e.shiftKey && !pX) {
            // if user scrolls with shift he wants horizontal scroll
            pX = pY;
            pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
        }
        // Fall-back if spin cannot be determined
        if (pX && !sX) sX = pX < 1 ? -1 : 1;
        if (pY && !sY) sY = pY < 1 ? -1 : 1;
        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
        };
    }
    function handleMouseEnter() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
        if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
        if (swiper.params.mousewheel.thresholdTime && (0, $831683533b862e22$export$4368d992c4eafac0)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) // Prevent if time between scrolls is below configured threshold
        return false;
        // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && (0, $831683533b862e22$export$4368d992c4eafac0)() - lastScrollTime < 60) // Return false as a default
        return true;
        // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                swiper.slideNext();
                emit('scroll', newEvent.raw);
            }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            emit('scroll', newEvent.raw);
        }
        // If you got here is because an animation has been triggered so store the current time
        lastScrollTime = new window.Date().getTime();
        // Return false as a default
        return false;
    }
    function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel;
        if (newEvent.direction < 0) {
            if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
            return true;
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
        return true;
        return false;
    }
    function handle(event1) {
        let e = event1;
        let disableParentSwiper = true;
        if (!swiper.enabled) return;
        // Ignore event if the target or its parents have the swiper-no-mousewheel class
        if (event1.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
        const params = swiper.params.mousewheel;
        if (swiper.params.cssMode) e.preventDefault();
        let targetEl = swiper.el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
        const targetElContainsTarget = targetEl && targetEl.contains(e.target);
        if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                else return true;
            } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
            else return true;
        } else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        if (delta === 0) return true;
        if (params.invert) delta = -delta;
        // Get the scroll positions
        let positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
        // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
            // Register the new event in a variable which stores the relevant data
            const newEvent = {
                time: (0, $831683533b862e22$export$4368d992c4eafac0)(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event1
            };
            // Keep the most recent events
            if (recentWheelEvents.length >= 2) recentWheelEvents.shift(); // only store the last N events
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            recentWheelEvents.push(newEvent);
            // If there is at least one previous recorded event:
            //   If direction has changed or
            //   if the scroll is quicker than the previous one:
            //     Animate the slider.
            // Else (this is the first time the wheel is moved):
            //     Animate the slider.
            if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
            } else animateSlider(newEvent);
            // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.
            if (releaseScroll(newEvent)) return true;
        } else {
            // Freemode or scrollContainer:
            // If we recently snapped after a momentum scroll, then ignore wheel events
            // to give time for the deceleration to finish. Stop ignoring after 500 msecs
            // or if it's a new scroll (larger delta or inverse sign as last event before
            // an end-of-momentum snap).
            const newEvent = {
                time: (0, $831683533b862e22$export$4368d992c4eafac0)(),
                delta: Math.abs(delta),
                direction: Math.sign(delta)
            };
            const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
            if (!ignoreWheelEvents) {
                lastEventBeforeSnap = undefined;
                let position = swiper.getTranslate() + delta * params.sensitivity;
                const wasBeginning = swiper.isBeginning;
                const wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                if (swiper.params.loop) swiper.loopFix({
                    direction: newEvent.direction < 0 ? 'next' : 'prev',
                    byMousewheel: true
                });
                if (swiper.params.freeMode.sticky) {
                    // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                    // the end of a momentum scroll by storing recent (N=15?) wheel events.
                    // 1. do all N events have decreasing or same (absolute value) delta?
                    // 2. did all N events arrive in the last M (M=500?) msecs?
                    // 3. does the earliest event have an (absolute value) delta that's
                    //    at least P (P=1?) larger than the most recent event's delta?
                    // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                    // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                    // Snap immediately and ignore remaining wheel events in this scroll.
                    // See comment above for "remaining wheel events in this scroll" determination.
                    // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                    clearTimeout(timeout);
                    timeout = undefined;
                    if (recentWheelEvents.length >= 15) recentWheelEvents.shift(); // only store the last N events
                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    const firstEvent = recentWheelEvents[0];
                    recentWheelEvents.push(newEvent);
                    if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                    recentWheelEvents.splice(0);
                    else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                        // We're at the end of the deceleration of a momentum scroll, so there's no need
                        // to wait for more events. Snap ASAP on the next tick.
                        // Also, because there's some remaining momentum we'll bias the snap in the
                        // direction of the ongoing scroll because it's better UX for the scroll to snap
                        // in the same direction as the scroll instead of reversing to snap.  Therefore,
                        // if it's already scrolled more than 20% in the current direction, keep going.
                        const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        timeout = (0, $831683533b862e22$export$7ccc53e8f1e7dfc5)(()=>{
                            if (swiper.destroyed || !swiper.params) return;
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 0); // no delay; move on next tick
                    }
                    if (!timeout) // if we get here, then we haven't detected the end of a momentum scroll, so
                    // we'll consider a scroll "complete" when there haven't been any wheel events
                    // for 500ms.
                    timeout = (0, $831683533b862e22$export$7ccc53e8f1e7dfc5)(()=>{
                        if (swiper.destroyed || !swiper.params) return;
                        const snapToThreshold = 0.5;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                    }, 500);
                }
                // Emit event
                if (!ignoreWheelEvents) emit('scroll', e);
                // Stop autoplay
                if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
                // Return page scroll on edge positions
                if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) return true;
            }
        }
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }
    function events(method) {
        let targetEl = swiper.el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
        targetEl[method]('mouseenter', handleMouseEnter);
        targetEl[method]('mouseleave', handleMouseLeave);
        targetEl[method]('wheel', handle);
    }
    function enable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.removeEventListener('wheel', handle);
            return true;
        }
        if (swiper.mousewheel.enabled) return false;
        events('addEventListener');
        swiper.mousewheel.enabled = true;
        return true;
    }
    function disable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.addEventListener(event, handle);
            return true;
        }
        if (!swiper.mousewheel.enabled) return false;
        events('removeEventListener');
        swiper.mousewheel.enabled = false;
        return true;
    }
    on('init', ()=>{
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
        if (swiper.params.mousewheel.enabled) enable();
    });
    on('destroy', ()=>{
        if (swiper.params.cssMode) enable();
        if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
        enable: enable,
        disable: disable
    });
}



function $75528d4699cb5574$export$db3b6bfb95261072(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) Object.keys(checkProps).forEach((key)=>{
        if (!params[key] && params.auto === true) {
            let element = (0, $831683533b862e22$export$f1e1789686576879)(swiper.el, `.${checkProps[key]}`)[0];
            if (!element) {
                element = (0, $831683533b862e22$export$db3b6bfb95261072)('div', checkProps[key]);
                element.className = checkProps[key];
                swiper.el.append(element);
            }
            params[key] = element;
            originalParams[key] = element;
        }
    });
    return params;
}



function $3ede398f6665eb67$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on, emit: emit } = _ref;
    extendParams({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
            navigationDisabledClass: 'swiper-navigation-disabled'
        }
    });
    swiper.navigation = {
        nextEl: null,
        prevEl: null
    };
    function getEl(el) {
        let res;
        if (el && typeof el === 'string' && swiper.isElement) {
            res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
            if (res) return res;
        }
        if (el) {
            if (typeof el === 'string') res = [
                ...document.querySelectorAll(el)
            ];
            if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
            else if (res && res.length === 1) res = res[0];
        }
        if (el && !res) return el;
        // if (Array.isArray(res) && res.length === 1) res = res[0];
        return res;
    }
    function toggleEl(el, disabled) {
        const params = swiper.params.navigation;
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        el.forEach((subEl)=>{
            if (subEl) {
                subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
                if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
                if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
            }
        });
    }
    function update() {
        // Update Navigation Buttons
        const { nextEl: nextEl, prevEl: prevEl } = swiper.navigation;
        if (swiper.params.loop) {
            toggleEl(prevEl, false);
            toggleEl(nextEl, false);
            return;
        }
        toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slidePrev();
        emit('navigationPrev');
    }
    function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slideNext();
        emit('navigationNext');
    }
    function init() {
        const params = swiper.params.navigation;
        swiper.params.navigation = (0, $75528d4699cb5574$export$db3b6bfb95261072)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev'
        });
        if (!(params.nextEl || params.prevEl)) return;
        let nextEl = getEl(params.nextEl);
        let prevEl = getEl(params.prevEl);
        Object.assign(swiper.navigation, {
            nextEl: nextEl,
            prevEl: prevEl
        });
        nextEl = (0, $831683533b862e22$export$953cecd6e717a553)(nextEl);
        prevEl = (0, $831683533b862e22$export$953cecd6e717a553)(prevEl);
        const initButton = (el, dir)=>{
            if (el) el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
            if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(' '));
        };
        nextEl.forEach((el)=>initButton(el, 'next'));
        prevEl.forEach((el)=>initButton(el, 'prev'));
    }
    function destroy() {
        let { nextEl: nextEl, prevEl: prevEl } = swiper.navigation;
        nextEl = (0, $831683533b862e22$export$953cecd6e717a553)(nextEl);
        prevEl = (0, $831683533b862e22$export$953cecd6e717a553)(prevEl);
        const destroyButton = (el, dir)=>{
            el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
            el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
        };
        nextEl.forEach((el)=>destroyButton(el, 'next'));
        prevEl.forEach((el)=>destroyButton(el, 'prev'));
    }
    on('init', ()=>{
        if (swiper.params.navigation.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            update();
        }
    });
    on('toEdge fromEdge lock unlock', ()=>{
        update();
    });
    on('destroy', ()=>{
        destroy();
    });
    on('enable disable', ()=>{
        let { nextEl: nextEl, prevEl: prevEl } = swiper.navigation;
        nextEl = (0, $831683533b862e22$export$953cecd6e717a553)(nextEl);
        prevEl = (0, $831683533b862e22$export$953cecd6e717a553)(prevEl);
        if (swiper.enabled) {
            update();
            return;
        }
        [
            ...nextEl,
            ...prevEl
        ].filter((el)=>!!el).forEach((el)=>el.classList.add(swiper.params.navigation.lockClass));
    });
    on('click', (_s, e)=>{
        let { nextEl: nextEl, prevEl: prevEl } = swiper.navigation;
        nextEl = (0, $831683533b862e22$export$953cecd6e717a553)(nextEl);
        prevEl = (0, $831683533b862e22$export$953cecd6e717a553)(prevEl);
        const targetEl = e.target;
        let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
        if (swiper.isElement && !targetIsButton) {
            const path = e.path || e.composedPath && e.composedPath();
            if (path) targetIsButton = path.find((pathEl)=>nextEl.includes(pathEl) || prevEl.includes(pathEl));
        }
        if (swiper.params.navigation.hideOnClick && !targetIsButton) {
            if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
            let isHidden;
            if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
            else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
            if (isHidden === true) emit('navigationShow');
            else emit('navigationHide');
            [
                ...nextEl,
                ...prevEl
            ].filter((el)=>!!el).forEach((el)=>el.classList.toggle(swiper.params.navigation.hiddenClass));
        }
    });
    const enable = ()=>{
        swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
        init();
        update();
    };
    const disable = ()=>{
        swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
        destroy();
    };
    Object.assign(swiper.navigation, {
        enable: enable,
        disable: disable,
        update: update,
        init: init,
        destroy: destroy
    });
}


function $568b5eab5472b7cb$export$db3b6bfb95261072(classes) {
    if (classes === void 0) classes = '';
    return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, '.')}`;
}




function $48396d89743015b3$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on, emit: emit } = _ref;
    const pfx = 'swiper-pagination';
    extendParams({
        pagination: {
            el: null,
            bulletElement: 'span',
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: 'bullets',
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: (number)=>number,
            formatFractionTotal: (number)=>number,
            bulletClass: `${pfx}-bullet`,
            bulletActiveClass: `${pfx}-bullet-active`,
            modifierClass: `${pfx}-`,
            currentClass: `${pfx}-current`,
            totalClass: `${pfx}-total`,
            hiddenClass: `${pfx}-hidden`,
            progressbarFillClass: `${pfx}-progressbar-fill`,
            progressbarOppositeClass: `${pfx}-progressbar-opposite`,
            clickableClass: `${pfx}-clickable`,
            lockClass: `${pfx}-lock`,
            horizontalClass: `${pfx}-horizontal`,
            verticalClass: `${pfx}-vertical`,
            paginationDisabledClass: `${pfx}-disabled`
        }
    });
    swiper.pagination = {
        el: null,
        bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
        return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
        const { bulletActiveClass: bulletActiveClass } = swiper.params.pagination;
        if (!bulletEl) return;
        bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
        if (bulletEl) {
            bulletEl.classList.add(`${bulletActiveClass}-${position}`);
            bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
            if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
        }
    }
    function getMoveDirection(prevIndex, nextIndex, length) {
        prevIndex = prevIndex % length;
        nextIndex = nextIndex % length;
        if (nextIndex === prevIndex + 1) return 'next';
        else if (nextIndex === prevIndex - 1) return 'previous';
        return;
    }
    function onBulletClick(e) {
        const bulletEl = e.target.closest((0, $568b5eab5472b7cb$export$db3b6bfb95261072)(swiper.params.pagination.bulletClass));
        if (!bulletEl) return;
        e.preventDefault();
        const index = (0, $831683533b862e22$export$dda1d9f60106f0e9)(bulletEl) * swiper.params.slidesPerGroup;
        if (swiper.params.loop) {
            if (swiper.realIndex === index) return;
            const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
            if (moveDirection === 'next') swiper.slideNext();
            else if (moveDirection === 'previous') swiper.slidePrev();
            else swiper.slideToLoop(index);
        } else swiper.slideTo(index);
    }
    function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        let el = swiper.pagination.el;
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        // Current/Total
        let current;
        let previousIndex;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
            previousIndex = swiper.previousRealIndex || 0;
            current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
        } else if (typeof swiper.snapIndex !== 'undefined') {
            current = swiper.snapIndex;
            previousIndex = swiper.previousSnapIndex;
        } else {
            previousIndex = swiper.previousIndex || 0;
            current = swiper.activeIndex || 0;
        }
        // Types
        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
            const bullets = swiper.pagination.bullets;
            let firstIndex;
            let lastIndex;
            let midIndex;
            if (params.dynamicBullets) {
                bulletSize = (0, $831683533b862e22$export$2d1720544b23b823)(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
                el.forEach((subEl)=>{
                    subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                });
                if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
                    dynamicBulletIndex += current - (previousIndex || 0);
                    if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1;
                    else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                }
                firstIndex = Math.max(current - dynamicBulletIndex, 0);
                lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
            }
            bullets.forEach((bulletEl)=>{
                const classesToRemove = [
                    ...[
                        '',
                        '-next',
                        '-next-next',
                        '-prev',
                        '-prev-prev',
                        '-main'
                    ].map((suffix)=>`${params.bulletActiveClass}${suffix}`)
                ].map((s)=>typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
                bulletEl.classList.remove(...classesToRemove);
            });
            if (el.length > 1) bullets.forEach((bullet)=>{
                const bulletIndex = (0, $831683533b862e22$export$dda1d9f60106f0e9)(bullet);
                if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(' '));
                else if (swiper.isElement) bullet.setAttribute('part', 'bullet');
                if (params.dynamicBullets) {
                    if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
                    if (bulletIndex === firstIndex) setSideBullets(bullet, 'prev');
                    if (bulletIndex === lastIndex) setSideBullets(bullet, 'next');
                }
            });
            else {
                const bullet = bullets[current];
                if (bullet) bullet.classList.add(...params.bulletActiveClass.split(' '));
                if (swiper.isElement) bullets.forEach((bulletEl, bulletIndex)=>{
                    bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
                });
                if (params.dynamicBullets) {
                    const firstDisplayedBullet = bullets[firstIndex];
                    const lastDisplayedBullet = bullets[lastIndex];
                    for(let i = firstIndex; i <= lastIndex; i += 1)if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
                    setSideBullets(firstDisplayedBullet, 'prev');
                    setSideBullets(lastDisplayedBullet, 'next');
                }
            }
            if (params.dynamicBullets) {
                const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                const offsetProp = rtl ? 'right' : 'left';
                bullets.forEach((bullet)=>{
                    bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
                });
            }
        }
        el.forEach((subEl, subElIndex)=>{
            if (params.type === 'fraction') {
                subEl.querySelectorAll((0, $568b5eab5472b7cb$export$db3b6bfb95261072)(params.currentClass)).forEach((fractionEl)=>{
                    fractionEl.textContent = params.formatFractionCurrent(current + 1);
                });
                subEl.querySelectorAll((0, $568b5eab5472b7cb$export$db3b6bfb95261072)(params.totalClass)).forEach((totalEl)=>{
                    totalEl.textContent = params.formatFractionTotal(total);
                });
            }
            if (params.type === 'progressbar') {
                let progressbarDirection;
                if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                else progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                const scale = (current + 1) / total;
                let scaleX = 1;
                let scaleY = 1;
                if (progressbarDirection === 'horizontal') scaleX = scale;
                else scaleY = scale;
                subEl.querySelectorAll((0, $568b5eab5472b7cb$export$db3b6bfb95261072)(params.progressbarFillClass)).forEach((progressEl)=>{
                    progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                    progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                });
            }
            if (params.type === 'custom' && params.renderCustom) {
                subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                if (subElIndex === 0) emit('paginationRender', subEl);
            } else {
                if (subElIndex === 0) emit('paginationRender', subEl);
                emit('paginationUpdate', subEl);
            }
            if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        });
    }
    function render() {
        // Render Container
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
        let el = swiper.pagination.el;
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        let paginationHTML = '';
        if (params.type === 'bullets') {
            let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
            for(let i = 0; i < numberOfBullets; i += 1)if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            else // prettier-ignore
            paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
        if (params.type === 'fraction') {
            if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
            else paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
        }
        if (params.type === 'progressbar') {
            if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
            else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
        swiper.pagination.bullets = [];
        el.forEach((subEl)=>{
            if (params.type !== 'custom') subEl.innerHTML = paginationHTML || '';
            if (params.type === 'bullets') swiper.pagination.bullets.push(...subEl.querySelectorAll((0, $568b5eab5472b7cb$export$db3b6bfb95261072)(params.bulletClass)));
        });
        if (params.type !== 'custom') emit('paginationRender', el[0]);
    }
    function init() {
        swiper.params.pagination = (0, $75528d4699cb5574$export$db3b6bfb95261072)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
            el: 'swiper-pagination'
        });
        const params = swiper.params.pagination;
        if (!params.el) return;
        let el;
        if (typeof params.el === 'string' && swiper.isElement) el = swiper.el.querySelector(params.el);
        if (!el && typeof params.el === 'string') el = [
            ...document.querySelectorAll(params.el)
        ];
        if (!el) el = params.el;
        if (!el || el.length === 0) return;
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
            el = [
                ...swiper.el.querySelectorAll(params.el)
            ];
            // check if it belongs to another nested Swiper
            if (el.length > 1) el = el.find((subEl)=>{
                if ((0, $831683533b862e22$export$407448d2b89b1813)(subEl, '.swiper')[0] !== swiper.el) return false;
                return true;
            });
        }
        if (Array.isArray(el) && el.length === 1) el = el[0];
        Object.assign(swiper.pagination, {
            el: el
        });
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        el.forEach((subEl)=>{
            if (params.type === 'bullets' && params.clickable) subEl.classList.add(...(params.clickableClass || '').split(' '));
            subEl.classList.add(params.modifierClass + params.type);
            subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            if (params.type === 'bullets' && params.dynamicBullets) {
                subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                dynamicBulletIndex = 0;
                if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
            }
            if (params.type === 'progressbar' && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
            if (params.clickable) subEl.addEventListener('click', onBulletClick);
            if (!swiper.enabled) subEl.classList.add(params.lockClass);
        });
    }
    function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        let el = swiper.pagination.el;
        if (el) {
            el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
            el.forEach((subEl)=>{
                subEl.classList.remove(params.hiddenClass);
                subEl.classList.remove(params.modifierClass + params.type);
                subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (params.clickable) {
                    subEl.classList.remove(...(params.clickableClass || '').split(' '));
                    subEl.removeEventListener('click', onBulletClick);
                }
            });
        }
        if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl)=>subEl.classList.remove(...params.bulletActiveClass.split(' ')));
    }
    on('changeDirection', ()=>{
        if (!swiper.pagination || !swiper.pagination.el) return;
        const params = swiper.params.pagination;
        let { el: el } = swiper.pagination;
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        el.forEach((subEl)=>{
            subEl.classList.remove(params.horizontalClass, params.verticalClass);
            subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        });
    });
    on('init', ()=>{
        if (swiper.params.pagination.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            render();
            update();
        }
    });
    on('activeIndexChange', ()=>{
        if (typeof swiper.snapIndex === 'undefined') update();
    });
    on('snapIndexChange', ()=>{
        update();
    });
    on('snapGridLengthChange', ()=>{
        render();
        update();
    });
    on('destroy', ()=>{
        destroy();
    });
    on('enable disable', ()=>{
        let { el: el } = swiper.pagination;
        if (el) {
            el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
            el.forEach((subEl)=>subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
        }
    });
    on('lock unlock', ()=>{
        update();
    });
    on('click', (_s, e)=>{
        const targetEl = e.target;
        const el = (0, $831683533b862e22$export$953cecd6e717a553)(swiper.pagination.el);
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
            if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
            const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
            if (isHidden === true) emit('paginationShow');
            else emit('paginationHide');
            el.forEach((subEl)=>subEl.classList.toggle(swiper.params.pagination.hiddenClass));
        }
    });
    const enable = ()=>{
        swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
        let { el: el } = swiper.pagination;
        if (el) {
            el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
            el.forEach((subEl)=>subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
        }
        init();
        render();
        update();
    };
    const disable = ()=>{
        swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
        let { el: el } = swiper.pagination;
        if (el) {
            el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
            el.forEach((subEl)=>subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
        }
        destroy();
    };
    Object.assign(swiper.pagination, {
        enable: enable,
        disable: disable,
        render: render,
        update: update,
        init: init,
        destroy: destroy
    });
}






function $f9936f97c4cb712c$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on, emit: emit } = _ref;
    const document = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
        scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
            scrollbarDisabledClass: 'swiper-scrollbar-disabled',
            horizontalClass: `swiper-scrollbar-horizontal`,
            verticalClass: `swiper-scrollbar-vertical`
        }
    });
    swiper.scrollbar = {
        el: null,
        dragEl: null
    };
    function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar: scrollbar, rtlTranslate: rtl } = swiper;
        const { dragEl: dragEl, el: el } = scrollbar;
        const params = swiper.params.scrollbar;
        const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;
        if (rtl) {
            newPos = -newPos;
            if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
            } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
        } else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
        } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
        if (swiper.isHorizontal()) {
            dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
            dragEl.style.width = `${newSize}px`;
        } else {
            dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
            dragEl.style.height = `${newSize}px`;
        }
        if (params.hide) {
            clearTimeout(timeout);
            el.style.opacity = 1;
            timeout = setTimeout(()=>{
                el.style.opacity = 0;
                el.style.transitionDuration = '400ms';
            }, 1000);
        }
    }
    function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
    }
    function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar: scrollbar } = swiper;
        const { dragEl: dragEl, el: el } = scrollbar;
        dragEl.style.width = '';
        dragEl.style.height = '';
        trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
        divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
        if (swiper.params.scrollbar.dragSize === 'auto') dragSize = trackSize * divider;
        else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        if (swiper.isHorizontal()) dragEl.style.width = `${dragSize}px`;
        else dragEl.style.height = `${dragSize}px`;
        if (divider >= 1) el.style.display = 'none';
        else el.style.display = '';
        if (swiper.params.scrollbar.hide) el.style.opacity = 0;
        if (swiper.params.watchOverflow && swiper.enabled) scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
    }
    function getPointerPosition(e) {
        return swiper.isHorizontal() ? e.clientX : e.clientY;
    }
    function setDragPosition(e) {
        const { scrollbar: scrollbar, rtlTranslate: rtl } = swiper;
        const { el: el } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - (0, $831683533b862e22$export$8b22cf2602fb60ce)(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) positionRatio = 1 - positionRatio;
        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar: scrollbar, wrapperEl: wrapperEl } = swiper;
        const { el: el, dragEl: dragEl } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        wrapperEl.style.transitionDuration = '100ms';
        dragEl.style.transitionDuration = '100ms';
        setDragPosition(e);
        clearTimeout(dragTimeout);
        el.style.transitionDuration = '0ms';
        if (params.hide) el.style.opacity = 1;
        if (swiper.params.cssMode) swiper.wrapperEl.style['scroll-snap-type'] = 'none';
        emit('scrollbarDragStart', e);
    }
    function onDragMove(e) {
        const { scrollbar: scrollbar, wrapperEl: wrapperEl } = swiper;
        const { el: el, dragEl: dragEl } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault && e.cancelable) e.preventDefault();
        else e.returnValue = false;
        setDragPosition(e);
        wrapperEl.style.transitionDuration = '0ms';
        el.style.transitionDuration = '0ms';
        dragEl.style.transitionDuration = '0ms';
        emit('scrollbarDragMove', e);
    }
    function onDragEnd(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar: scrollbar, wrapperEl: wrapperEl } = swiper;
        const { el: el } = scrollbar;
        if (!isTouched) return;
        isTouched = false;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style['scroll-snap-type'] = '';
            wrapperEl.style.transitionDuration = '';
        }
        if (params.hide) {
            clearTimeout(dragTimeout);
            dragTimeout = (0, $831683533b862e22$export$7ccc53e8f1e7dfc5)(()=>{
                el.style.opacity = 0;
                el.style.transitionDuration = '400ms';
            }, 1000);
        }
        emit('scrollbarDragEnd', e);
        if (params.snapOnRelease) swiper.slideToClosest();
    }
    function events(method) {
        const { scrollbar: scrollbar, params: params } = swiper;
        const el = scrollbar.el;
        if (!el) return;
        const target = el;
        const activeListener = params.passiveListeners ? {
            passive: false,
            capture: false
        } : false;
        const passiveListener = params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
        target[eventMethod]('pointerdown', onDragStart, activeListener);
        document[eventMethod]('pointermove', onDragMove, activeListener);
        document[eventMethod]('pointerup', onDragEnd, passiveListener);
    }
    function enableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events('on');
    }
    function disableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events('off');
    }
    function init() {
        const { scrollbar: scrollbar, el: swiperEl } = swiper;
        swiper.params.scrollbar = (0, $75528d4699cb5574$export$db3b6bfb95261072)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
            el: 'swiper-scrollbar'
        });
        const params = swiper.params.scrollbar;
        if (!params.el) return;
        let el;
        if (typeof params.el === 'string' && swiper.isElement) el = swiper.el.querySelector(params.el);
        if (!el && typeof params.el === 'string') {
            el = document.querySelectorAll(params.el);
            if (!el.length) return;
        } else if (!el) el = params.el;
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) el = swiperEl.querySelector(params.el);
        if (el.length > 0) el = el[0];
        el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        let dragEl;
        if (el) {
            dragEl = el.querySelector((0, $568b5eab5472b7cb$export$db3b6bfb95261072)(swiper.params.scrollbar.dragClass));
            if (!dragEl) {
                dragEl = (0, $831683533b862e22$export$db3b6bfb95261072)('div', swiper.params.scrollbar.dragClass);
                el.append(dragEl);
            }
        }
        Object.assign(scrollbar, {
            el: el,
            dragEl: dragEl
        });
        if (params.draggable) enableDraggable();
        if (el) el.classList[swiper.enabled ? 'remove' : 'add'](...(0, $831683533b862e22$export$23f2a1d2818174ef)(swiper.params.scrollbar.lockClass));
    }
    function destroy() {
        const params = swiper.params.scrollbar;
        const el = swiper.scrollbar.el;
        if (el) el.classList.remove(...(0, $831683533b862e22$export$23f2a1d2818174ef)(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
        disableDraggable();
    }
    on('changeDirection', ()=>{
        if (!swiper.scrollbar || !swiper.scrollbar.el) return;
        const params = swiper.params.scrollbar;
        let { el: el } = swiper.scrollbar;
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        el.forEach((subEl)=>{
            subEl.classList.remove(params.horizontalClass, params.verticalClass);
            subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        });
    });
    on('init', ()=>{
        if (swiper.params.scrollbar.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            updateSize();
            setTranslate();
        }
    });
    on('update resize observerUpdate lock unlock changeDirection', ()=>{
        updateSize();
    });
    on('setTranslate', ()=>{
        setTranslate();
    });
    on('setTransition', (_s, duration)=>{
        setTransition(duration);
    });
    on('enable disable', ()=>{
        const { el: el } = swiper.scrollbar;
        if (el) el.classList[swiper.enabled ? 'remove' : 'add'](...(0, $831683533b862e22$export$23f2a1d2818174ef)(swiper.params.scrollbar.lockClass));
    });
    on('destroy', ()=>{
        destroy();
    });
    const enable = ()=>{
        swiper.el.classList.remove(...(0, $831683533b862e22$export$23f2a1d2818174ef)(swiper.params.scrollbar.scrollbarDisabledClass));
        if (swiper.scrollbar.el) swiper.scrollbar.el.classList.remove(...(0, $831683533b862e22$export$23f2a1d2818174ef)(swiper.params.scrollbar.scrollbarDisabledClass));
        init();
        updateSize();
        setTranslate();
    };
    const disable = ()=>{
        swiper.el.classList.add(...(0, $831683533b862e22$export$23f2a1d2818174ef)(swiper.params.scrollbar.scrollbarDisabledClass));
        if (swiper.scrollbar.el) swiper.scrollbar.el.classList.add(...(0, $831683533b862e22$export$23f2a1d2818174ef)(swiper.params.scrollbar.scrollbarDisabledClass));
        destroy();
    };
    Object.assign(swiper.scrollbar, {
        enable: enable,
        disable: disable,
        updateSize: updateSize,
        setTranslate: setTranslate,
        init: init,
        destroy: destroy
    });
}



function $a42f2eb4b8baf0d6$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on } = _ref;
    extendParams({
        parallax: {
            enabled: false
        }
    });
    const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
    const setTransform = (el, progress)=>{
        const { rtl: rtl } = swiper;
        const rtlFactor = rtl ? -1 : 1;
        const p = el.getAttribute('data-swiper-parallax') || '0';
        let x = el.getAttribute('data-swiper-parallax-x');
        let y = el.getAttribute('data-swiper-parallax-y');
        const scale = el.getAttribute('data-swiper-parallax-scale');
        const opacity = el.getAttribute('data-swiper-parallax-opacity');
        const rotate = el.getAttribute('data-swiper-parallax-rotate');
        if (x || y) {
            x = x || '0';
            y = y || '0';
        } else if (swiper.isHorizontal()) {
            x = p;
            y = '0';
        } else {
            y = p;
            x = '0';
        }
        if (x.indexOf('%') >= 0) x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        else x = `${x * progress * rtlFactor}px`;
        if (y.indexOf('%') >= 0) y = `${parseInt(y, 10) * progress}%`;
        else y = `${y * progress}px`;
        if (typeof opacity !== 'undefined' && opacity !== null) {
            const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
            el.style.opacity = currentOpacity;
        }
        let transform = `translate3d(${x}, ${y}, 0px)`;
        if (typeof scale !== 'undefined' && scale !== null) {
            const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
            transform += ` scale(${currentScale})`;
        }
        if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
            const currentRotate = rotate * progress * -1;
            transform += ` rotate(${currentRotate}deg)`;
        }
        el.style.transform = transform;
    };
    const setTranslate = ()=>{
        const { el: el, slides: slides, progress: progress, snapGrid: snapGrid, isElement: isElement } = swiper;
        const elements = (0, $831683533b862e22$export$f1e1789686576879)(el, elementsSelector);
        if (swiper.isElement) elements.push(...(0, $831683533b862e22$export$f1e1789686576879)(swiper.hostEl, elementsSelector));
        elements.forEach((subEl)=>{
            setTransform(subEl, progress);
        });
        slides.forEach((slideEl, slideIndex)=>{
            let slideProgress = slideEl.progress;
            if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach((subEl)=>{
                setTransform(subEl, slideProgress);
            });
        });
    };
    const setTransition = function(duration) {
        if (duration === void 0) duration = swiper.params.speed;
        const { el: el, hostEl: hostEl } = swiper;
        const elements = [
            ...el.querySelectorAll(elementsSelector)
        ];
        if (swiper.isElement) elements.push(...hostEl.querySelectorAll(elementsSelector));
        elements.forEach((parallaxEl)=>{
            let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
            if (duration === 0) parallaxDuration = 0;
            parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
        });
    };
    on('beforeInit', ()=>{
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
    });
    on('init', ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on('setTranslate', ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on('setTransition', (_swiper, duration)=>{
        if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
    });
}




function $da01103e1a8fa261$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on, emit: emit } = _ref;
    const window = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    extendParams({
        zoom: {
            enabled: false,
            limitToOriginalSize: false,
            maxRatio: 3,
            minRatio: 1,
            panOnMouseMove: false,
            toggle: true,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed'
        }
    });
    swiper.zoom = {
        enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let isPanningWithMouse = false;
    let mousePanStart = {
        x: 0,
        y: 0
    };
    const mousePanSensitivity = -3; // Negative to invert pan direction
    let fakeGestureTouched;
    let fakeGestureMoved;
    const evCache = [];
    const gesture = {
        originX: 0,
        originY: 0,
        slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        imageEl: undefined,
        imageWrapEl: undefined,
        maxRatio: 3
    };
    const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
    };
    const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
        get () {
            return scale;
        },
        set (value) {
            if (scale !== value) {
                const imageEl = gesture.imageEl;
                const slideEl = gesture.slideEl;
                emit('zoomChange', value, imageEl, slideEl);
            }
            scale = value;
        }
    });
    function getDistanceBetweenTouches() {
        if (evCache.length < 2) return 1;
        const x1 = evCache[0].pageX;
        const y1 = evCache[0].pageY;
        const x2 = evCache[1].pageX;
        const y2 = evCache[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    }
    function getMaxRatio() {
        const params = swiper.params.zoom;
        const maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
        if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
            const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
            return Math.min(imageMaxRatio, maxRatio);
        }
        return maxRatio;
    }
    function getScaleOrigin() {
        if (evCache.length < 2) return {
            x: null,
            y: null
        };
        const box = gesture.imageEl.getBoundingClientRect();
        return [
            (evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale,
            (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale
        ];
    }
    function getSlideSelector() {
        return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    }
    function eventWithinSlide(e) {
        const slideSelector = getSlideSelector();
        if (e.target.matches(slideSelector)) return true;
        if (swiper.slides.filter((slideEl)=>slideEl.contains(e.target)).length > 0) return true;
        return false;
    }
    function eventWithinZoomContainer(e) {
        const selector = `.${swiper.params.zoom.containerClass}`;
        if (e.target.matches(selector)) return true;
        if ([
            ...swiper.hostEl.querySelectorAll(selector)
        ].filter((containerEl)=>containerEl.contains(e.target)).length > 0) return true;
        return false;
    }
    // Events
    function onGestureStart(e) {
        if (e.pointerType === 'mouse') evCache.splice(0, evCache.length);
        if (!eventWithinSlide(e)) return;
        const params = swiper.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        evCache.push(e);
        if (evCache.length < 2) return;
        fakeGestureTouched = true;
        gesture.scaleStart = getDistanceBetweenTouches();
        if (!gesture.slideEl) {
            gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
            if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
            let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
            if (imageEl) imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
            gesture.imageEl = imageEl;
            if (imageEl) gesture.imageWrapEl = (0, $831683533b862e22$export$407448d2b89b1813)(gesture.imageEl, `.${params.containerClass}`)[0];
            else gesture.imageWrapEl = undefined;
            if (!gesture.imageWrapEl) {
                gesture.imageEl = undefined;
                return;
            }
            gesture.maxRatio = getMaxRatio();
        }
        if (gesture.imageEl) {
            const [originX, originY] = getScaleOrigin();
            gesture.originX = originX;
            gesture.originY = originY;
            gesture.imageEl.style.transitionDuration = '0ms';
        }
        isScaling = true;
    }
    function onGestureChange(e) {
        if (!eventWithinSlide(e)) return;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        const pointerIndex = evCache.findIndex((cachedEv)=>cachedEv.pointerId === e.pointerId);
        if (pointerIndex >= 0) evCache[pointerIndex] = e;
        if (evCache.length < 2) return;
        fakeGestureMoved = true;
        gesture.scaleMove = getDistanceBetweenTouches();
        if (!gesture.imageEl) return;
        zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        if (zoom.scale < params.minRatio) zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function onGestureEnd(e) {
        if (!eventWithinSlide(e)) return;
        if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        const pointerIndex = evCache.findIndex((cachedEv)=>cachedEv.pointerId === e.pointerId);
        if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
        if (!fakeGestureTouched || !fakeGestureMoved) return;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        if (!gesture.imageEl) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale > 1 && gesture.slideEl) gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
        else if (zoom.scale <= 1 && gesture.slideEl) gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
        if (zoom.scale === 1) {
            gesture.originX = 0;
            gesture.originY = 0;
            gesture.slideEl = undefined;
        }
    }
    let allowTouchMoveTimeout;
    function allowTouchMove() {
        swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
    }
    function preventTouchMove() {
        clearTimeout(allowTouchMoveTimeout);
        swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
        allowTouchMoveTimeout = setTimeout(()=>{
            if (swiper.destroyed) return;
            allowTouchMove();
        });
    }
    function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.imageEl) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        const event = evCache.length > 0 ? evCache[0] : e;
        image.touchesStart.x = event.pageX;
        image.touchesStart.y = event.pageY;
    }
    function onTouchMove(e) {
        const isMouseEvent = e.pointerType === 'mouse';
        const isMousePan = isMouseEvent && swiper.params.zoom.panOnMouseMove;
        if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
        const zoom = swiper.zoom;
        if (!gesture.imageEl) return;
        if (!image.isTouched || !gesture.slideEl) {
            if (isMousePan) onMouseMove(e);
            return;
        }
        if (isMousePan) {
            onMouseMove(e);
            return;
        }
        if (!image.isMoved) {
            image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
            image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
            image.startX = (0, $831683533b862e22$export$35e795649ee09318)(gesture.imageWrapEl, 'x') || 0;
            image.startY = (0, $831683533b862e22$export$35e795649ee09318)(gesture.imageWrapEl, 'y') || 0;
            gesture.slideWidth = gesture.slideEl.offsetWidth;
            gesture.slideHeight = gesture.slideEl.offsetHeight;
            gesture.imageWrapEl.style.transitionDuration = '0ms';
        }
        // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
        image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
        const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
        if (touchesDiff > 5) swiper.allowClick = false;
        if (!image.isMoved && !isScaling) {
            if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                image.isTouched = false;
                allowTouchMove();
                return;
            }
            if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                image.isTouched = false;
                allowTouchMove();
                return;
            }
        }
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        preventTouchMove();
        image.isMoved = true;
        const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
        const { originX: originX, originY: originY } = gesture;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
        if (image.currentX < image.minX) image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        if (image.currentY < image.minY) image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
        // Velocity
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTouchEnd() {
        const zoom = swiper.zoom;
        evCache.length = 0;
        if (!gesture.imageEl) return;
        if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
        }
        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY;
        // Fix duration
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY;
        // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
        gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTransitionEnd() {
        const zoom = swiper.zoom;
        if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
            if (gesture.imageEl) gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
            if (gesture.imageWrapEl) gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
            gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
            zoom.scale = 1;
            currentScale = 1;
            gesture.slideEl = undefined;
            gesture.imageEl = undefined;
            gesture.imageWrapEl = undefined;
            gesture.originX = 0;
            gesture.originY = 0;
        }
    }
    function onMouseMove(e) {
        // Only pan if zoomed in and mouse panning is enabled
        if (currentScale <= 1 || !gesture.imageWrapEl) return;
        if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
        const currentTransform = window.getComputedStyle(gesture.imageWrapEl).transform;
        const matrix = new window.DOMMatrix(currentTransform);
        if (!isPanningWithMouse) {
            isPanningWithMouse = true;
            mousePanStart.x = e.clientX;
            mousePanStart.y = e.clientY;
            image.startX = matrix.e;
            image.startY = matrix.f;
            image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
            image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
            gesture.slideWidth = gesture.slideEl.offsetWidth;
            gesture.slideHeight = gesture.slideEl.offsetHeight;
            return;
        }
        const deltaX = (e.clientX - mousePanStart.x) * mousePanSensitivity;
        const deltaY = (e.clientY - mousePanStart.y) * mousePanSensitivity;
        const scaledWidth = image.width * currentScale;
        const scaledHeight = image.height * currentScale;
        const slideWidth = gesture.slideWidth;
        const slideHeight = gesture.slideHeight;
        const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        const maxX = -minX;
        const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        const maxY = -minY;
        const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);
        const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);
        gesture.imageWrapEl.style.transitionDuration = '0ms';
        gesture.imageWrapEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
        mousePanStart.x = e.clientX;
        mousePanStart.y = e.clientY;
        image.startX = newX;
        image.startY = newY;
    }
    function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.slideEl) {
            if (e && e.target) gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
            if (!gesture.slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.slideEl = (0, $831683533b862e22$export$f1e1789686576879)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
                else gesture.slideEl = swiper.slides[swiper.activeIndex];
            }
            let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
            if (imageEl) imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
            gesture.imageEl = imageEl;
            if (imageEl) gesture.imageWrapEl = (0, $831683533b862e22$export$407448d2b89b1813)(gesture.imageEl, `.${params.containerClass}`)[0];
            else gesture.imageWrapEl = undefined;
        }
        if (!gesture.imageEl || !gesture.imageWrapEl) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = 'hidden';
            swiper.wrapperEl.style.touchAction = 'none';
        }
        gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;
        if (typeof image.touchesStart.x === 'undefined' && e) {
            touchX = e.pageX;
            touchY = e.pageY;
        } else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
        }
        const forceZoomRatio = typeof e === 'number' ? e : null;
        if (currentScale === 1 && forceZoomRatio) {
            touchX = undefined;
            touchY = undefined;
            image.touchesStart.x = undefined;
            image.touchesStart.y = undefined;
        }
        const maxRatio = getMaxRatio();
        zoom.scale = forceZoomRatio || maxRatio;
        currentScale = forceZoomRatio || maxRatio;
        if (e && !(currentScale === 1 && forceZoomRatio)) {
            slideWidth = gesture.slideEl.offsetWidth;
            slideHeight = gesture.slideEl.offsetHeight;
            offsetX = (0, $831683533b862e22$export$8b22cf2602fb60ce)(gesture.slideEl).left + window.scrollX;
            offsetY = (0, $831683533b862e22$export$8b22cf2602fb60ce)(gesture.slideEl).top + window.scrollY;
            diffX = offsetX + slideWidth / 2 - touchX;
            diffY = offsetY + slideHeight / 2 - touchY;
            imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
            imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            translateX = diffX * zoom.scale;
            translateY = diffY * zoom.scale;
            if (translateX < translateMinX) translateX = translateMinX;
            if (translateX > translateMaxX) translateX = translateMaxX;
            if (translateY < translateMinY) translateY = translateMinY;
            if (translateY > translateMaxY) translateY = translateMaxY;
        } else {
            translateX = 0;
            translateY = 0;
        }
        if (forceZoomRatio && zoom.scale === 1) {
            gesture.originX = 0;
            gesture.originY = 0;
        }
        gesture.imageWrapEl.style.transitionDuration = '300ms';
        gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
        gesture.imageEl.style.transitionDuration = '300ms';
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function zoomOut() {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.slideEl = (0, $831683533b862e22$export$f1e1789686576879)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
            else gesture.slideEl = swiper.slides[swiper.activeIndex];
            let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
            if (imageEl) imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
            gesture.imageEl = imageEl;
            if (imageEl) gesture.imageWrapEl = (0, $831683533b862e22$export$407448d2b89b1813)(gesture.imageEl, `.${params.containerClass}`)[0];
            else gesture.imageWrapEl = undefined;
        }
        if (!gesture.imageEl || !gesture.imageWrapEl) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = '';
            swiper.wrapperEl.style.touchAction = '';
        }
        zoom.scale = 1;
        currentScale = 1;
        image.touchesStart.x = undefined;
        image.touchesStart.y = undefined;
        gesture.imageWrapEl.style.transitionDuration = '300ms';
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
        gesture.imageEl.style.transitionDuration = '300ms';
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
        gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
        gesture.slideEl = undefined;
        gesture.originX = 0;
        gesture.originY = 0;
        if (swiper.params.zoom.panOnMouseMove) {
            mousePanStart = {
                x: 0,
                y: 0
            };
            if (isPanningWithMouse) {
                isPanningWithMouse = false;
                image.startX = 0;
                image.startY = 0;
            }
        }
    }
    // Toggle Zoom
    function zoomToggle(e) {
        const zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) // Zoom Out
        zoomOut();
        else // Zoom In
        zoomIn(e);
    }
    function getListeners() {
        const passiveListener = swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        const activeListenerWithCapture = swiper.params.passiveListeners ? {
            passive: false,
            capture: true
        } : true;
        return {
            passiveListener: passiveListener,
            activeListenerWithCapture: activeListenerWithCapture
        };
    }
    // Attach/Detach Events
    function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const { passiveListener: passiveListener, activeListenerWithCapture: activeListenerWithCapture } = getListeners();
        // Scale image
        swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
        swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
        [
            'pointerup',
            'pointercancel',
            'pointerout'
        ].forEach((eventName)=>{
            swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
        });
        // Move image
        swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
    }
    function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled) return;
        zoom.enabled = false;
        const { passiveListener: passiveListener, activeListenerWithCapture: activeListenerWithCapture } = getListeners();
        // Scale image
        swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
        swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
        [
            'pointerup',
            'pointercancel',
            'pointerout'
        ].forEach((eventName)=>{
            swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
        });
        // Move image
        swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
    }
    on('init', ()=>{
        if (swiper.params.zoom.enabled) enable();
    });
    on('destroy', ()=>{
        disable();
    });
    on('touchStart', (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchStart(e);
    });
    on('touchEnd', (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchEnd();
    });
    on('doubleTap', (_s, e)=>{
        if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) zoomToggle(e);
    });
    on('transitionEnd', ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) onTransitionEnd();
    });
    on('slideChange', ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) onTransitionEnd();
    });
    Object.assign(swiper.zoom, {
        enable: enable,
        disable: disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
    });
}



/* eslint no-bitwise: ["error", { "allow": [">>"] }] */ function $637840a65b455b9b$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on } = _ref;
    extendParams({
        controller: {
            control: undefined,
            inverse: false,
            by: 'slide' // or 'container'
        }
    });
    swiper.controller = {
        control: undefined
    };
    function LinearSpline(x, y) {
        const binarySearch = function search() {
            let maxIndex;
            let minIndex;
            let guess;
            return (array, val)=>{
                minIndex = -1;
                maxIndex = array.length;
                while(maxIndex - minIndex > 1){
                    guess = maxIndex + minIndex >> 1;
                    if (array[guess] <= val) minIndex = guess;
                    else maxIndex = guess;
                }
                return maxIndex;
            };
        }();
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1;
        // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        let i1;
        let i3;
        this.interpolate = function interpolate(x2) {
            if (!x2) return 0;
            // Get the indexes of x1 and x3 (the array indexes before and after given x2):
            i3 = binarySearch(this.x, x2);
            i1 = i3 - 1;
            // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
            return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        return this;
    }
    function getInterpolateFunction(c) {
        swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper = swiper.constructor;
        function setControlledTranslate(c) {
            if (c.destroyed) return;
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
            if (swiper.params.controller.by === 'slide') {
                getInterpolateFunction(c);
                // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -swiper.controller.spline.interpolate(-translate);
            }
            if (!controlledTranslate || swiper.params.controller.by === 'container') {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) multiplier = 1;
                controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
            }
            if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
            c.updateProgress(controlledTranslate);
            c.setTranslate(controlledTranslate, swiper);
            c.updateActiveIndex();
            c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
            for(let i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
    }
    function setTransition(duration, byController) {
        const Swiper = swiper.constructor;
        const controlled = swiper.controller.control;
        let i;
        function setControlledTransition(c) {
            if (c.destroyed) return;
            c.setTransition(duration, swiper);
            if (duration !== 0) {
                c.transitionStart();
                if (c.params.autoHeight) (0, $831683533b862e22$export$7ccc53e8f1e7dfc5)(()=>{
                    c.updateAutoHeight();
                });
                (0, $831683533b862e22$export$342063e11d6c3cad)(c.wrapperEl, ()=>{
                    if (!controlled) return;
                    c.transitionEnd();
                });
            }
        }
        if (Array.isArray(controlled)) {
            for(i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
    }
    function removeSpline() {
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
        }
    }
    on('beforeInit', ()=>{
        if (typeof window !== 'undefined' && // eslint-disable-line
        (typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
            const controlElements = typeof swiper.params.controller.control === 'string' ? [
                ...document.querySelectorAll(swiper.params.controller.control)
            ] : [
                swiper.params.controller.control
            ];
            controlElements.forEach((controlElement)=>{
                if (!swiper.controller.control) swiper.controller.control = [];
                if (controlElement && controlElement.swiper) swiper.controller.control.push(controlElement.swiper);
                else if (controlElement) {
                    const eventName = `${swiper.params.eventsPrefix}init`;
                    const onControllerSwiper = (e)=>{
                        swiper.controller.control.push(e.detail[0]);
                        swiper.update();
                        controlElement.removeEventListener(eventName, onControllerSwiper);
                    };
                    controlElement.addEventListener(eventName, onControllerSwiper);
                }
            });
            return;
        }
        swiper.controller.control = swiper.params.controller.control;
    });
    on('update', ()=>{
        removeSpline();
    });
    on('resize', ()=>{
        removeSpline();
    });
    on('observerUpdate', ()=>{
        removeSpline();
    });
    on('setTranslate', (_s, translate, byController)=>{
        if (!swiper.controller.control || swiper.controller.control.destroyed) return;
        swiper.controller.setTranslate(translate, byController);
    });
    on('setTransition', (_s, duration, byController)=>{
        if (!swiper.controller.control || swiper.controller.control.destroyed) return;
        swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
        setTranslate: setTranslate,
        setTransition: setTransition
    });
}





function $0eea497b988f6467$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on } = _ref;
    extendParams({
        a11y: {
            enabled: true,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            slideLabelMessage: '{{index}} / {{slidesLength}}',
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            containerRole: null,
            itemRoleDescriptionMessage: null,
            slideRole: 'group',
            id: null,
            scrollOnFocus: true
        }
    });
    swiper.a11y = {
        clicked: false
    };
    let liveRegion = null;
    let preventFocusHandler;
    let focusTargetSlideEl;
    let visibilityChangedTimestamp = new Date().getTime();
    function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.innerHTML = '';
        notification.innerHTML = message;
    }
    function getRandomNumber(size) {
        if (size === void 0) size = 16;
        const randomChar = ()=>Math.round(16 * Math.random()).toString(16);
        return 'x'.repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable(el) {
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('tabIndex', '0');
        });
    }
    function makeElNotFocusable(el) {
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('tabIndex', '-1');
        });
    }
    function addElRole(el, role) {
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('role', role);
        });
    }
    function addElRoleDescription(el, description) {
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('aria-roledescription', description);
        });
    }
    function addElControls(el, controls) {
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('aria-controls', controls);
        });
    }
    function addElLabel(el, label) {
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('aria-label', label);
        });
    }
    function addElId(el, id) {
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('id', id);
        });
    }
    function addElLive(el, live) {
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('aria-live', live);
        });
    }
    function disableEl(el) {
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('aria-disabled', true);
        });
    }
    function enableEl(el) {
        el = (0, $831683533b862e22$export$953cecd6e717a553)(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('aria-disabled', false);
        });
    }
    function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper.params.a11y;
        const targetEl = e.target;
        if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
            if (!e.target.matches((0, $568b5eab5472b7cb$export$db3b6bfb95261072)(swiper.params.pagination.bulletClass))) return;
        }
        if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
            const prevEls = (0, $831683533b862e22$export$953cecd6e717a553)(swiper.navigation.prevEl);
            const nextEls = (0, $831683533b862e22$export$953cecd6e717a553)(swiper.navigation.nextEl);
            if (nextEls.includes(targetEl)) {
                if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
                if (swiper.isEnd) notify(params.lastSlideMessage);
                else notify(params.nextSlideMessage);
            }
            if (prevEls.includes(targetEl)) {
                if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
                if (swiper.isBeginning) notify(params.firstSlideMessage);
                else notify(params.prevSlideMessage);
            }
        }
        if (swiper.pagination && targetEl.matches((0, $568b5eab5472b7cb$export$db3b6bfb95261072)(swiper.params.pagination.bulletClass))) targetEl.click();
    }
    function updateNavigation() {
        if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
        const { nextEl: nextEl, prevEl: prevEl } = swiper.navigation;
        if (prevEl) {
            if (swiper.isBeginning) {
                disableEl(prevEl);
                makeElNotFocusable(prevEl);
            } else {
                enableEl(prevEl);
                makeElFocusable(prevEl);
            }
        }
        if (nextEl) {
            if (swiper.isEnd) {
                disableEl(nextEl);
                makeElNotFocusable(nextEl);
            } else {
                enableEl(nextEl);
                makeElFocusable(nextEl);
            }
        }
    }
    function hasPagination() {
        return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
        return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
        const params = swiper.params.a11y;
        if (!hasPagination()) return;
        swiper.pagination.bullets.forEach((bulletEl)=>{
            if (swiper.params.pagination.clickable) {
                makeElFocusable(bulletEl);
                if (!swiper.params.pagination.renderBullet) {
                    addElRole(bulletEl, 'button');
                    addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0, $831683533b862e22$export$dda1d9f60106f0e9)(bulletEl) + 1));
                }
            }
            if (bulletEl.matches((0, $568b5eab5472b7cb$export$db3b6bfb95261072)(swiper.params.pagination.bulletActiveClass))) bulletEl.setAttribute('aria-current', 'true');
            else bulletEl.removeAttribute('aria-current');
        });
    }
    const initNavEl = (el, wrapperId, message)=>{
        makeElFocusable(el);
        if (el.tagName !== 'BUTTON') {
            addElRole(el, 'button');
            el.addEventListener('keydown', onEnterOrSpaceKey);
        }
        addElLabel(el, message);
        addElControls(el, wrapperId);
    };
    const handlePointerDown = (e)=>{
        if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) preventFocusHandler = true;
        swiper.a11y.clicked = true;
    };
    const handlePointerUp = ()=>{
        preventFocusHandler = false;
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                if (!swiper.destroyed) swiper.a11y.clicked = false;
            });
        });
    };
    const onVisibilityChange = (e)=>{
        visibilityChangedTimestamp = new Date().getTime();
    };
    const handleFocus = (e)=>{
        if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
        if (new Date().getTime() - visibilityChangedTimestamp < 100) return;
        const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
        if (!slideEl || !swiper.slides.includes(slideEl)) return;
        focusTargetSlideEl = slideEl;
        const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
        const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
        if (isActive || isVisible) return;
        if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
        if (swiper.isHorizontal()) swiper.el.scrollLeft = 0;
        else swiper.el.scrollTop = 0;
        requestAnimationFrame(()=>{
            if (preventFocusHandler) return;
            if (swiper.params.loop) swiper.slideToLoop(parseInt(slideEl.getAttribute('data-swiper-slide-index')), 0);
            else swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
            preventFocusHandler = false;
        });
    };
    const initSlides = ()=>{
        const params = swiper.params.a11y;
        if (params.itemRoleDescriptionMessage) addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
        if (params.slideRole) addElRole(swiper.slides, params.slideRole);
        const slidesLength = swiper.slides.length;
        if (params.slideLabelMessage) swiper.slides.forEach((slideEl, index)=>{
            const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
            const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
            addElLabel(slideEl, ariaLabelMessage);
        });
    };
    const init = ()=>{
        const params = swiper.params.a11y;
        swiper.el.append(liveRegion);
        // Container
        const containerEl = swiper.el;
        if (params.containerRoleDescriptionMessage) addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
        if (params.containerMessage) addElLabel(containerEl, params.containerMessage);
        if (params.containerRole) addElRole(containerEl, params.containerRole);
        // Wrapper
        const wrapperEl = swiper.wrapperEl;
        const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
        const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
        addElId(wrapperEl, wrapperId);
        addElLive(wrapperEl, live);
        // Slide
        initSlides();
        // Navigation
        let { nextEl: nextEl, prevEl: prevEl } = swiper.navigation ? swiper.navigation : {};
        nextEl = (0, $831683533b862e22$export$953cecd6e717a553)(nextEl);
        prevEl = (0, $831683533b862e22$export$953cecd6e717a553)(prevEl);
        if (nextEl) nextEl.forEach((el)=>initNavEl(el, wrapperId, params.nextSlideMessage));
        if (prevEl) prevEl.forEach((el)=>initNavEl(el, wrapperId, params.prevSlideMessage));
        // Pagination
        if (hasClickablePagination()) {
            const paginationEl = (0, $831683533b862e22$export$953cecd6e717a553)(swiper.pagination.el);
            paginationEl.forEach((el)=>{
                el.addEventListener('keydown', onEnterOrSpaceKey);
            });
        }
        // Tab focus
        const document = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
        document.addEventListener('visibilitychange', onVisibilityChange);
        swiper.el.addEventListener('focus', handleFocus, true);
        swiper.el.addEventListener('focus', handleFocus, true);
        swiper.el.addEventListener('pointerdown', handlePointerDown, true);
        swiper.el.addEventListener('pointerup', handlePointerUp, true);
    };
    function destroy() {
        if (liveRegion) liveRegion.remove();
        let { nextEl: nextEl, prevEl: prevEl } = swiper.navigation ? swiper.navigation : {};
        nextEl = (0, $831683533b862e22$export$953cecd6e717a553)(nextEl);
        prevEl = (0, $831683533b862e22$export$953cecd6e717a553)(prevEl);
        if (nextEl) nextEl.forEach((el)=>el.removeEventListener('keydown', onEnterOrSpaceKey));
        if (prevEl) prevEl.forEach((el)=>el.removeEventListener('keydown', onEnterOrSpaceKey));
        // Pagination
        if (hasClickablePagination()) {
            const paginationEl = (0, $831683533b862e22$export$953cecd6e717a553)(swiper.pagination.el);
            paginationEl.forEach((el)=>{
                el.removeEventListener('keydown', onEnterOrSpaceKey);
            });
        }
        const document = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
        document.removeEventListener('visibilitychange', onVisibilityChange);
        // Tab focus
        if (swiper.el && typeof swiper.el !== 'string') {
            swiper.el.removeEventListener('focus', handleFocus, true);
            swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
            swiper.el.removeEventListener('pointerup', handlePointerUp, true);
        }
    }
    on('beforeInit', ()=>{
        liveRegion = (0, $831683533b862e22$export$db3b6bfb95261072)('span', swiper.params.a11y.notificationClass);
        liveRegion.setAttribute('aria-live', 'assertive');
        liveRegion.setAttribute('aria-atomic', 'true');
    });
    on('afterInit', ()=>{
        if (!swiper.params.a11y.enabled) return;
        init();
    });
    on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', ()=>{
        if (!swiper.params.a11y.enabled) return;
        initSlides();
    });
    on('fromEdge toEdge afterInit lock unlock', ()=>{
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
    });
    on('paginationUpdate', ()=>{
        if (!swiper.params.a11y.enabled) return;
        updatePagination();
    });
    on('destroy', ()=>{
        if (!swiper.params.a11y.enabled) return;
        destroy();
    });
}



function $20a2cccb81c115b1$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on } = _ref;
    extendParams({
        history: {
            enabled: false,
            root: '',
            replaceState: false,
            key: 'slides',
            keepQuery: false
        }
    });
    let initialized = false;
    let paths = {};
    const slugify = (text)=>{
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    };
    const getPathValues = (urlOverride)=>{
        const window = (0, $189f45f12f88561c$export$407448d2b89b1813)();
        let location;
        if (urlOverride) location = new URL(urlOverride);
        else location = window.location;
        const pathArray = location.pathname.slice(1).split('/').filter((part)=>part !== '');
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
            key: key,
            value: value
        };
    };
    const setHistory = (key, index)=>{
        const window = (0, $189f45f12f88561c$export$407448d2b89b1813)();
        if (!initialized || !swiper.params.history.enabled) return;
        let location;
        if (swiper.params.url) location = new URL(swiper.params.url);
        else location = window.location;
        const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
        let value = slugify(slide.getAttribute('data-history'));
        if (swiper.params.history.root.length > 0) {
            let root = swiper.params.history.root;
            if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
            value = `${root}/${key ? `${key}/` : ''}${value}`;
        } else if (!location.pathname.includes(key)) value = `${key ? `${key}/` : ''}${value}`;
        if (swiper.params.history.keepQuery) value += location.search;
        const currentState = window.history.state;
        if (currentState && currentState.value === value) return;
        if (swiper.params.history.replaceState) window.history.replaceState({
            value: value
        }, null, value);
        else window.history.pushState({
            value: value
        }, null, value);
    };
    const scrollToSlide = (speed, value, runCallbacks)=>{
        if (value) for(let i = 0, length = swiper.slides.length; i < length; i += 1){
            const slide = swiper.slides[i];
            const slideHistory = slugify(slide.getAttribute('data-history'));
            if (slideHistory === value) {
                const index = swiper.getSlideIndex(slide);
                swiper.slideTo(index, speed, runCallbacks);
            }
        }
        else swiper.slideTo(0, speed, runCallbacks);
    };
    const setHistoryPopState = ()=>{
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = ()=>{
        const window = (0, $189f45f12f88561c$export$407448d2b89b1813)();
        if (!swiper.params.history) return;
        if (!window.history || !window.history.pushState) {
            swiper.params.history.enabled = false;
            swiper.params.hashNavigation.enabled = true;
            return;
        }
        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) {
            if (!swiper.params.history.replaceState) window.addEventListener('popstate', setHistoryPopState);
            return;
        }
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
        if (!swiper.params.history.replaceState) window.addEventListener('popstate', setHistoryPopState);
    };
    const destroy = ()=>{
        const window = (0, $189f45f12f88561c$export$407448d2b89b1813)();
        if (!swiper.params.history.replaceState) window.removeEventListener('popstate', setHistoryPopState);
    };
    on('init', ()=>{
        if (swiper.params.history.enabled) init();
    });
    on('destroy', ()=>{
        if (swiper.params.history.enabled) destroy();
    });
    on('transitionEnd _freeModeNoMomentumRelease', ()=>{
        if (initialized) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
    on('slideChange', ()=>{
        if (initialized && swiper.params.cssMode) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
}




function $0de166b73ddce24c$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, emit: emit, on: on } = _ref;
    let initialized = false;
    const document = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
    const window = (0, $189f45f12f88561c$export$407448d2b89b1813)();
    extendParams({
        hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false,
            getSlideIndex (_s, hash) {
                if (swiper.virtual && swiper.params.virtual.enabled) {
                    const slideWithHash = swiper.slides.find((slideEl)=>slideEl.getAttribute('data-hash') === hash);
                    if (!slideWithHash) return 0;
                    const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
                    return index;
                }
                return swiper.getSlideIndex((0, $831683533b862e22$export$f1e1789686576879)(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
            }
        }
    });
    const onHashChange = ()=>{
        emit('hashChange');
        const newHash = document.location.hash.replace('#', '');
        const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
        const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
        if (newHash !== activeSlideHash) {
            const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
            if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
            swiper.slideTo(newIndex);
        }
    };
    const setHash = ()=>{
        if (!initialized || !swiper.params.hashNavigation.enabled) return;
        const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
        const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
            window.history.replaceState(null, null, `#${activeSlideHash}` || '');
            emit('hashSet');
        } else {
            document.location.hash = activeSlideHash || '';
            emit('hashSet');
        }
    };
    const init = ()=>{
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace('#', '');
        if (hash) {
            const speed = 0;
            const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
            swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
        }
        if (swiper.params.hashNavigation.watchState) window.addEventListener('hashchange', onHashChange);
    };
    const destroy = ()=>{
        if (swiper.params.hashNavigation.watchState) window.removeEventListener('hashchange', onHashChange);
    };
    on('init', ()=>{
        if (swiper.params.hashNavigation.enabled) init();
    });
    on('destroy', ()=>{
        if (swiper.params.hashNavigation.enabled) destroy();
    });
    on('transitionEnd _freeModeNoMomentumRelease', ()=>{
        if (initialized) setHash();
    });
    on('slideChange', ()=>{
        if (initialized && swiper.params.cssMode) setHash();
    });
}



/* eslint no-underscore-dangle: "off" */ /* eslint no-use-before-define: "off" */ function $774fac4d19db27e1$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on, emit: emit, params: params } = _ref;
    swiper.autoplay = {
        running: false,
        paused: false,
        timeLeft: 0
    };
    extendParams({
        autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false
        }
    });
    let timeout;
    let raf;
    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
    let autoplayTimeLeft;
    let autoplayStartTime = new Date().getTime();
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let slideChanged;
    let pausedByInteraction;
    let pausedByPointerEnter;
    function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
        if (e.target !== swiper.wrapperEl) return;
        swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
        if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) return;
        resume();
    }
    const calcTimeLeft = ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (swiper.autoplay.paused) wasPaused = true;
        else if (wasPaused) {
            autoplayDelayCurrent = autoplayTimeLeft;
            wasPaused = false;
        }
        const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
        swiper.autoplay.timeLeft = timeLeft;
        emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
        raf = requestAnimationFrame(()=>{
            calcTimeLeft();
        });
    };
    const getSlideDelay = ()=>{
        let activeSlideEl;
        if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.find((slideEl)=>slideEl.classList.contains('swiper-slide-active'));
        else activeSlideEl = swiper.slides[swiper.activeIndex];
        if (!activeSlideEl) return undefined;
        const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
        return currentSlideDelay;
    };
    const run = (delayForce)=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        cancelAnimationFrame(raf);
        calcTimeLeft();
        let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
        autoplayDelayTotal = swiper.params.autoplay.delay;
        autoplayDelayCurrent = swiper.params.autoplay.delay;
        const currentSlideDelay = getSlideDelay();
        if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
            delay = currentSlideDelay;
            autoplayDelayTotal = currentSlideDelay;
            autoplayDelayCurrent = currentSlideDelay;
        }
        autoplayTimeLeft = delay;
        const speed = swiper.params.speed;
        const proceed = ()=>{
            if (!swiper || swiper.destroyed) return;
            if (swiper.params.autoplay.reverseDirection) {
                if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                    swiper.slidePrev(speed, true, true);
                    emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                    emit('autoplay');
                }
            } else {
                if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                    swiper.slideNext(speed, true, true);
                    emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(0, speed, true, true);
                    emit('autoplay');
                }
            }
            if (swiper.params.cssMode) {
                autoplayStartTime = new Date().getTime();
                requestAnimationFrame(()=>{
                    run();
                });
            }
        };
        if (delay > 0) {
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                proceed();
            }, delay);
        } else requestAnimationFrame(()=>{
            proceed();
        });
        // eslint-disable-next-line
        return delay;
    };
    const start = ()=>{
        autoplayStartTime = new Date().getTime();
        swiper.autoplay.running = true;
        run();
        emit('autoplayStart');
    };
    const stop = ()=>{
        swiper.autoplay.running = false;
        clearTimeout(timeout);
        cancelAnimationFrame(raf);
        emit('autoplayStop');
    };
    const pause = (internal, reset)=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        clearTimeout(timeout);
        if (!internal) pausedByInteraction = true;
        const proceed = ()=>{
            emit('autoplayPause');
            if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
            else resume();
        };
        swiper.autoplay.paused = true;
        if (reset) {
            if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
            slideChanged = false;
            proceed();
            return;
        }
        const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
        autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
        if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
        if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
        proceed();
    };
    const resume = ()=>{
        if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
        autoplayStartTime = new Date().getTime();
        if (pausedByInteraction) {
            pausedByInteraction = false;
            run(autoplayTimeLeft);
        } else run();
        swiper.autoplay.paused = false;
        emit('autoplayResume');
    };
    const onVisibilityChange = ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        const document = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
        if (document.visibilityState === 'hidden') {
            pausedByInteraction = true;
            pause(true);
        }
        if (document.visibilityState === 'visible') resume();
    };
    const onPointerEnter = (e)=>{
        if (e.pointerType !== 'mouse') return;
        pausedByInteraction = true;
        pausedByPointerEnter = true;
        if (swiper.animating || swiper.autoplay.paused) return;
        pause(true);
    };
    const onPointerLeave = (e)=>{
        if (e.pointerType !== 'mouse') return;
        pausedByPointerEnter = false;
        if (swiper.autoplay.paused) resume();
    };
    const attachMouseEvents = ()=>{
        if (swiper.params.autoplay.pauseOnMouseEnter) {
            swiper.el.addEventListener('pointerenter', onPointerEnter);
            swiper.el.addEventListener('pointerleave', onPointerLeave);
        }
    };
    const detachMouseEvents = ()=>{
        if (swiper.el && typeof swiper.el !== 'string') {
            swiper.el.removeEventListener('pointerenter', onPointerEnter);
            swiper.el.removeEventListener('pointerleave', onPointerLeave);
        }
    };
    const attachDocumentEvents = ()=>{
        const document = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
        document.addEventListener('visibilitychange', onVisibilityChange);
    };
    const detachDocumentEvents = ()=>{
        const document = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
        document.removeEventListener('visibilitychange', onVisibilityChange);
    };
    on('init', ()=>{
        if (swiper.params.autoplay.enabled) {
            attachMouseEvents();
            attachDocumentEvents();
            start();
        }
    });
    on('destroy', ()=>{
        detachMouseEvents();
        detachDocumentEvents();
        if (swiper.autoplay.running) stop();
    });
    on('_freeModeStaticRelease', ()=>{
        if (pausedByTouch || pausedByInteraction) resume();
    });
    on('_freeModeNoMomentumRelease', ()=>{
        if (!swiper.params.autoplay.disableOnInteraction) pause(true, true);
        else stop();
    });
    on('beforeTransitionStart', (_s, speed, internal)=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true);
        else stop();
    });
    on('sliderFirstMove', ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (swiper.params.autoplay.disableOnInteraction) {
            stop();
            return;
        }
        isTouched = true;
        pausedByTouch = false;
        pausedByInteraction = false;
        touchStartTimeout = setTimeout(()=>{
            pausedByInteraction = true;
            pausedByTouch = true;
            pause(true);
        }, 200);
    });
    on('touchEnd', ()=>{
        if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
        clearTimeout(touchStartTimeout);
        clearTimeout(timeout);
        if (swiper.params.autoplay.disableOnInteraction) {
            pausedByTouch = false;
            isTouched = false;
            return;
        }
        if (pausedByTouch && swiper.params.cssMode) resume();
        pausedByTouch = false;
        isTouched = false;
    });
    on('slideChange', ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        slideChanged = true;
    });
    Object.assign(swiper.autoplay, {
        start: start,
        stop: stop,
        pause: pause,
        resume: resume
    });
}




function $21f49457975db620$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on } = _ref;
    extendParams({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: true,
            autoScrollOffset: 0,
            slideThumbActiveClass: 'swiper-slide-thumb-active',
            thumbsContainerClass: 'swiper-thumbs'
        }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
        swiper: null
    };
    function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        let slideToIndex;
        if (thumbsSwiper.params.loop) slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
        else slideToIndex = clickedIndex;
        if (swiper.params.loop) swiper.slideToLoop(slideToIndex);
        else swiper.slideTo(slideToIndex);
    }
    function init() {
        const { thumbs: thumbsParams } = swiper.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
            swiper.thumbs.swiper = thumbsParams.swiper;
            Object.assign(swiper.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            Object.assign(swiper.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper.thumbs.swiper.update();
        } else if ((0, $831683533b862e22$export$882b5998b3b9117c)(thumbsParams.swiper)) {
            const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
            Object.assign(thumbsSwiperParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
            swiperCreated = true;
        }
        swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', onThumbClick);
        return true;
    }
    function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        // Activate thumbs
        let thumbsToActivate = 1;
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
        if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.forEach((slideEl)=>slideEl.classList.remove(thumbActiveClass));
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for(let i = 0; i < thumbsToActivate; i += 1)(0, $831683533b862e22$export$f1e1789686576879)(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl)=>{
            slideEl.classList.add(thumbActiveClass);
        });
        else {
            for(let i = 0; i < thumbsToActivate; i += 1)if (thumbsSwiper.slides[swiper.realIndex + i]) thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
            const currentThumbsIndex = thumbsSwiper.activeIndex;
            let newThumbsIndex;
            let direction;
            if (thumbsSwiper.params.loop) {
                const newThumbsSlide = thumbsSwiper.slides.find((slideEl)=>slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`);
                newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
                direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
            } else {
                newThumbsIndex = swiper.realIndex;
                direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
            }
            if (useOffset) newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
            if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                    if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                    else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                } else newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup;
                thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
            }
        }
    }
    on('beforeInit', ()=>{
        const { thumbs: thumbs } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
            const document = (0, $189f45f12f88561c$export$39b482c5e57630a8)();
            const getThumbsElementAndInit = ()=>{
                const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
                if (thumbsElement && thumbsElement.swiper) {
                    thumbs.swiper = thumbsElement.swiper;
                    init();
                    update(true);
                } else if (thumbsElement) {
                    const eventName = `${swiper.params.eventsPrefix}init`;
                    const onThumbsSwiper = (e)=>{
                        thumbs.swiper = e.detail[0];
                        thumbsElement.removeEventListener(eventName, onThumbsSwiper);
                        init();
                        update(true);
                        thumbs.swiper.update();
                        swiper.update();
                    };
                    thumbsElement.addEventListener(eventName, onThumbsSwiper);
                }
                return thumbsElement;
            };
            const watchForThumbsToAppear = ()=>{
                if (swiper.destroyed) return;
                const thumbsElement = getThumbsElementAndInit();
                if (!thumbsElement) requestAnimationFrame(watchForThumbsToAppear);
            };
            requestAnimationFrame(watchForThumbsToAppear);
        } else {
            init();
            update(true);
        }
    });
    on('slideChange update resize observerUpdate', ()=>{
        update();
    });
    on('setTransition', (_s, duration)=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        thumbsSwiper.setTransition(duration);
    });
    on('beforeDestroy', ()=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        if (swiperCreated) thumbsSwiper.destroy();
    });
    Object.assign(swiper.thumbs, {
        init: init,
        update: update
    });
}



function $9cbf5f489c16aa92$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, emit: emit, once: once } = _ref;
    extendParams({
        freeMode: {
            enabled: false,
            momentum: true,
            momentumRatio: 1,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: false,
            minimumVelocity: 0.02
        }
    });
    function onTouchStart() {
        if (swiper.params.cssMode) return;
        const translate = swiper.getTranslate();
        swiper.setTranslate(translate);
        swiper.setTransition(0);
        swiper.touchEventsData.velocities.length = 0;
        swiper.freeMode.onTouchEnd({
            currentPos: swiper.rtl ? swiper.translate : -swiper.translate
        });
    }
    function onTouchMove() {
        if (swiper.params.cssMode) return;
        const { touchEventsData: data, touches: touches } = swiper;
        // Velocity
        if (data.velocities.length === 0) data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
        });
        data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
            time: (0, $831683533b862e22$export$4368d992c4eafac0)()
        });
    }
    function onTouchEnd(_ref2) {
        let { currentPos: currentPos } = _ref2;
        if (swiper.params.cssMode) return;
        const { params: params, wrapperEl: wrapperEl, rtlTranslate: rtl, snapGrid: snapGrid, touchEventsData: data } = swiper;
        // Time diff
        const touchEndTime = (0, $831683533b862e22$export$4368d992c4eafac0)();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1);
            else swiper.slideTo(swiper.slides.length - 1);
            return;
        }
        if (params.freeMode.momentum) {
            if (data.velocities.length > 1) {
                const lastMoveEvent = data.velocities.pop();
                const velocityEvent = data.velocities.pop();
                const distance = lastMoveEvent.position - velocityEvent.position;
                const time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
                if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) swiper.velocity = 0;
                // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || (0, $831683533b862e22$export$4368d992c4eafac0)() - lastMoveEvent.time > 300) swiper.velocity = 0;
            } else swiper.velocity = 0;
            swiper.velocity *= params.freeMode.momentumVelocityRatio;
            data.velocities.length = 0;
            let momentumDuration = 1000 * params.freeMode.momentumRatio;
            const momentumDistance = swiper.velocity * momentumDuration;
            let newPosition = swiper.translate + momentumDistance;
            if (rtl) newPosition = -newPosition;
            let doBounce = false;
            let afterBouncePosition;
            const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
            let needsLoopFix;
            if (newPosition < swiper.maxTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                    afterBouncePosition = swiper.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.maxTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (newPosition > swiper.minTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                    afterBouncePosition = swiper.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.minTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (params.freeMode.sticky) {
                let nextSlide;
                for(let j = 0; j < snapGrid.length; j += 1)if (snapGrid[j] > -newPosition) {
                    nextSlide = j;
                    break;
                }
                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') newPosition = snapGrid[nextSlide];
                else newPosition = snapGrid[nextSlide - 1];
                newPosition = -newPosition;
            }
            if (needsLoopFix) once('transitionEnd', ()=>{
                swiper.loopFix();
            });
            // Fix duration
            if (swiper.velocity !== 0) {
                if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                if (params.freeMode.sticky) {
                    // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                    // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                    // It's easy to see this when simulating touch with mouse events. To fix this,
                    // limit single-slide swipes to the default slide duration. This also has the
                    // nice side effect of matching slide speed if the user stopped moving before
                    // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                    // For faster swipes, also apply limits (albeit higher ones).
                    const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                    const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                    if (moveDistance < currentSlideSize) momentumDuration = params.speed;
                    else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5;
                    else momentumDuration = params.speed * 2.5;
                }
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            }
            if (params.freeMode.momentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                (0, $831683533b862e22$export$342063e11d6c3cad)(wrapperEl, ()=>{
                    if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                    emit('momentumBounce');
                    swiper.setTransition(params.speed);
                    setTimeout(()=>{
                        swiper.setTranslate(afterBouncePosition);
                        (0, $831683533b862e22$export$342063e11d6c3cad)(wrapperEl, ()=>{
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }, 0);
                });
            } else if (swiper.velocity) {
                emit('_freeModeNoMomentumRelease');
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                if (!swiper.animating) {
                    swiper.animating = true;
                    (0, $831683533b862e22$export$342063e11d6c3cad)(wrapperEl, ()=>{
                        if (!swiper || swiper.destroyed) return;
                        swiper.transitionEnd();
                    });
                }
            } else swiper.updateProgress(newPosition);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
            swiper.slideToClosest();
            return;
        } else if (params.freeMode) emit('_freeModeNoMomentumRelease');
        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
            emit('_freeModeStaticRelease');
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
    }
    Object.assign(swiper, {
        freeMode: {
            onTouchStart: onTouchStart,
            onTouchMove: onTouchMove,
            onTouchEnd: onTouchEnd
        }
    });
}


function $22f01e60553f6fcf$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on } = _ref;
    extendParams({
        grid: {
            rows: 1,
            fill: 'column'
        }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    let wasMultiRow;
    const getSpaceBetween = ()=>{
        let spaceBetween = swiper.params.spaceBetween;
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
        else if (typeof spaceBetween === 'string') spaceBetween = parseFloat(spaceBetween);
        return spaceBetween;
    };
    const initSlides = (slides)=>{
        const { slidesPerView: slidesPerView } = swiper.params;
        const { rows: rows, fill: fill } = swiper.params.grid;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
        numFullColumns = Math.floor(slidesLength / rows);
        if (Math.floor(slidesLength / rows) === slidesLength / rows) slidesNumberEvenToRows = slidesLength;
        else slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        if (slidesPerView !== 'auto' && fill === 'row') slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
        slidesPerRow = slidesNumberEvenToRows / rows;
    };
    const unsetSlides = ()=>{
        if (swiper.slides) swiper.slides.forEach((slide)=>{
            if (slide.swiperSlideGridSet) {
                slide.style.height = '';
                slide.style[swiper.getDirectionLabel('margin-top')] = '';
            }
        });
    };
    const updateSlide = (i, slide, slides)=>{
        const { slidesPerGroup: slidesPerGroup } = swiper.params;
        const spaceBetween = getSpaceBetween();
        const { rows: rows, fill: fill } = swiper.params.grid;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
        // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (fill === 'row' && slidesPerGroup > 1) {
            const groupIndex = Math.floor(i / (slidesPerGroup * rows));
            const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
            const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
            slide.style.order = newSlideOrderIndex;
        } else if (fill === 'column') {
            column = Math.floor(i / rows);
            row = i - column * rows;
            if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                row += 1;
                if (row >= rows) {
                    row = 0;
                    column += 1;
                }
            }
        } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
        }
        slide.row = row;
        slide.column = column;
        slide.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
        slide.style[swiper.getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
        slide.swiperSlideGridSet = true;
    };
    const updateWrapperSize = (slideSize, snapGrid)=>{
        const { centeredSlides: centeredSlides, roundLengths: roundLengths } = swiper.params;
        const spaceBetween = getSpaceBetween();
        const { rows: rows } = swiper.params.grid;
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        if (!swiper.params.cssMode) swiper.wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
        if (centeredSlides) {
            const newSlidesGrid = [];
            for(let i = 0; i < snapGrid.length; i += 1){
                let slidesGridItem = snapGrid[i];
                if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid.splice(0, snapGrid.length);
            snapGrid.push(...newSlidesGrid);
        }
    };
    const onInit = ()=>{
        wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
    };
    const onUpdate = ()=>{
        const { params: params, el: el } = swiper;
        const isMultiRow = params.grid && params.grid.rows > 1;
        if (wasMultiRow && !isMultiRow) {
            el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
            numFullColumns = 1;
            swiper.emitContainerClasses();
        } else if (!wasMultiRow && isMultiRow) {
            el.classList.add(`${params.containerModifierClass}grid`);
            if (params.grid.fill === 'column') el.classList.add(`${params.containerModifierClass}grid-column`);
            swiper.emitContainerClasses();
        }
        wasMultiRow = isMultiRow;
    };
    on('init', onInit);
    on('update', onUpdate);
    swiper.grid = {
        initSlides: initSlides,
        unsetSlides: unsetSlides,
        updateSlide: updateSlide,
        updateWrapperSize: updateWrapperSize
    };
}


function $9a62f6a5ac664641$var$appendSlide(slides) {
    const swiper = this;
    const { params: params, slidesEl: slidesEl } = swiper;
    if (params.loop) swiper.loopDestroy();
    const appendElement = (slideEl)=>{
        if (typeof slideEl === 'string') {
            const tempDOM = document.createElement('div');
            tempDOM.innerHTML = slideEl;
            slidesEl.append(tempDOM.children[0]);
            tempDOM.innerHTML = '';
        } else slidesEl.append(slideEl);
    };
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) appendElement(slides[i]);
    } else appendElement(slides);
    swiper.recalcSlides();
    if (params.loop) swiper.loopCreate();
    if (!params.observer || swiper.isElement) swiper.update();
}
function $9a62f6a5ac664641$var$prependSlide(slides) {
    const swiper = this;
    const { params: params, activeIndex: activeIndex, slidesEl: slidesEl } = swiper;
    if (params.loop) swiper.loopDestroy();
    let newActiveIndex = activeIndex + 1;
    const prependElement = (slideEl)=>{
        if (typeof slideEl === 'string') {
            const tempDOM = document.createElement('div');
            tempDOM.innerHTML = slideEl;
            slidesEl.prepend(tempDOM.children[0]);
            tempDOM.innerHTML = '';
        } else slidesEl.prepend(slideEl);
    };
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) prependElement(slides[i]);
        newActiveIndex = activeIndex + slides.length;
    } else prependElement(slides);
    swiper.recalcSlides();
    if (params.loop) swiper.loopCreate();
    if (!params.observer || swiper.isElement) swiper.update();
    swiper.slideTo(newActiveIndex, 0, false);
}
function $9a62f6a5ac664641$var$addSlide(index, slides) {
    const swiper = this;
    const { params: params, activeIndex: activeIndex, slidesEl: slidesEl } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.recalcSlides();
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
        swiper.prependSlide(slides);
        return;
    }
    if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for(let i = baseLength - 1; i >= index; i -= 1){
        const currentSlide = swiper.slides[i];
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) slidesEl.append(slides[i]);
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else slidesEl.append(slides);
    for(let i = 0; i < slidesBuffer.length; i += 1)slidesEl.append(slidesBuffer[i]);
    swiper.recalcSlides();
    if (params.loop) swiper.loopCreate();
    if (!params.observer || swiper.isElement) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}
function $9a62f6a5ac664641$var$removeSlide(slidesIndexes) {
    const swiper = this;
    const { params: params, activeIndex: activeIndex } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for(let i = 0; i < slidesIndexes.length; i += 1){
            indexToRemove = slidesIndexes[i];
            if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    swiper.recalcSlides();
    if (params.loop) swiper.loopCreate();
    if (!params.observer || swiper.isElement) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}
function $9a62f6a5ac664641$var$removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for(let i = 0; i < swiper.slides.length; i += 1)slidesIndexes.push(i);
    swiper.removeSlide(slidesIndexes);
}
function $9a62f6a5ac664641$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper } = _ref;
    Object.assign(swiper, {
        appendSlide: $9a62f6a5ac664641$var$appendSlide.bind(swiper),
        prependSlide: $9a62f6a5ac664641$var$prependSlide.bind(swiper),
        addSlide: $9a62f6a5ac664641$var$addSlide.bind(swiper),
        removeSlide: $9a62f6a5ac664641$var$removeSlide.bind(swiper),
        removeAllSlides: $9a62f6a5ac664641$var$removeAllSlides.bind(swiper)
    });
}


function $ab2b53734a40d9c9$export$f1e1789686576879(params) {
    const { effect: effect, swiper: swiper, on: on, setTranslate: setTranslate, setTransition: setTransition, overwriteParams: overwriteParams, perspective: perspective, recreateShadows: recreateShadows, getEffectParams: getEffectParams } = params;
    on('beforeInit', ()=>{
        if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on('setTranslate', ()=>{
        if (swiper.params.effect !== effect) return;
        setTranslate();
    });
    on('setTransition', (_s, duration)=>{
        if (swiper.params.effect !== effect) return;
        setTransition(duration);
    });
    on('transitionEnd', ()=>{
        if (swiper.params.effect !== effect) return;
        if (recreateShadows) {
            if (!getEffectParams || !getEffectParams().slideShadows) return;
            // remove shadows
            swiper.slides.forEach((slideEl)=>{
                slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach((shadowEl)=>shadowEl.remove());
            });
            // create new one
            recreateShadows();
        }
    });
    let requireUpdateOnVirtual;
    on('virtualUpdate', ()=>{
        if (swiper.params.effect !== effect) return;
        if (!swiper.slides.length) requireUpdateOnVirtual = true;
        requestAnimationFrame(()=>{
            if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                setTranslate();
                requireUpdateOnVirtual = false;
            }
        });
    });
}



function $2e5cc03e71c0d780$export$f1e1789686576879(effectParams, slideEl) {
    const transformEl = (0, $831683533b862e22$export$39b482c5e57630a8)(slideEl);
    if (transformEl !== slideEl) {
        transformEl.style.backfaceVisibility = 'hidden';
        transformEl.style['-webkit-backface-visibility'] = 'hidden';
    }
    return transformEl;
}



function $4ae6f1cd5183d589$export$f1e1789686576879(_ref) {
    let { swiper: swiper, duration: duration, transformElements: transformElements, allSlides: allSlides } = _ref;
    const { activeIndex: activeIndex } = swiper;
    const getSlide = (el)=>{
        if (!el.parentElement) {
            // assume shadow root
            const slide = swiper.slides.find((slideEl)=>slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
            return slide;
        }
        return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let transitionEndTarget;
        if (allSlides) transitionEndTarget = transformElements;
        else transitionEndTarget = transformElements.filter((transformEl)=>{
            const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
            return swiper.getSlideIndex(el) === activeIndex;
        });
        transitionEndTarget.forEach((el)=>{
            (0, $831683533b862e22$export$342063e11d6c3cad)(el, ()=>{
                if (eventTriggered) return;
                if (!swiper || swiper.destroyed) return;
                eventTriggered = true;
                swiper.animating = false;
                const evt = new window.CustomEvent('transitionend', {
                    bubbles: true,
                    cancelable: true
                });
                swiper.wrapperEl.dispatchEvent(evt);
            });
        });
    }
}



function $aca53ddfb08084e6$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on } = _ref;
    extendParams({
        fadeEffect: {
            crossFade: false
        }
    });
    const setTranslate = ()=>{
        const { slides: slides } = swiper;
        const params = swiper.params.fadeEffect;
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = swiper.slides[i];
            const offset = slideEl.swiperSlideOffset;
            let tx = -offset;
            if (!swiper.params.virtualTranslate) tx -= swiper.translate;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
            }
            const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
            const targetEl = (0, $2e5cc03e71c0d780$export$f1e1789686576879)(params, slideEl);
            targetEl.style.opacity = slideOpacity;
            targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, $831683533b862e22$export$39b482c5e57630a8)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
        });
        (0, $4ae6f1cd5183d589$export$f1e1789686576879)({
            swiper: swiper,
            duration: duration,
            transformElements: transformElements,
            allSlides: true
        });
    };
    (0, $ab2b53734a40d9c9$export$f1e1789686576879)({
        effect: 'fade',
        swiper: swiper,
        on: on,
        setTranslate: setTranslate,
        setTransition: setTransition,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}




function $637335d98546bd4e$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on } = _ref;
    extendParams({
        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
    const createSlideShadows = (slideEl, progress, isHorizontal)=>{
        let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBefore) {
            shadowBefore = (0, $831683533b862e22$export$db3b6bfb95261072)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
            slideEl.append(shadowBefore);
        }
        if (!shadowAfter) {
            shadowAfter = (0, $831683533b862e22$export$db3b6bfb95261072)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
            slideEl.append(shadowAfter);
        }
        if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
        if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = ()=>{
        // create new ones
        const isHorizontal = swiper.isHorizontal();
        swiper.slides.forEach((slideEl)=>{
            const progress = Math.max(Math.min(slideEl.progress, 1), -1);
            createSlideShadows(slideEl, progress, isHorizontal);
        });
    };
    const setTranslate = ()=>{
        const { el: el, wrapperEl: wrapperEl, slides: slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, browser: browser } = swiper;
        const r = (0, $831683533b862e22$export$ae1af26003f05816)(swiper);
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let cubeShadowEl;
        if (params.shadow) {
            if (isHorizontal) {
                cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
                if (!cubeShadowEl) {
                    cubeShadowEl = (0, $831683533b862e22$export$db3b6bfb95261072)('div', 'swiper-cube-shadow');
                    swiper.wrapperEl.append(cubeShadowEl);
                }
                cubeShadowEl.style.height = `${swiperWidth}px`;
            } else {
                cubeShadowEl = el.querySelector('.swiper-cube-shadow');
                if (!cubeShadowEl) {
                    cubeShadowEl = (0, $831683533b862e22$export$db3b6bfb95261072)('div', 'swiper-cube-shadow');
                    el.append(cubeShadowEl);
                }
            }
        }
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            let slideIndex = i;
            if (isVirtual) slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
            let slideAngle = slideIndex * 90;
            let round = Math.floor(slideAngle / 360);
            if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
            }
            const progress = Math.max(Math.min(slideEl.progress, 1), -1);
            let tx = 0;
            let ty = 0;
            let tz = 0;
            if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
            } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
            } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
            } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
            }
            if (rtl) tx = -tx;
            if (!isHorizontal) {
                ty = tx;
                tx = 0;
            }
            const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
            if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
            }
            slideEl.style.transform = transform;
            if (params.slideShadows) createSlideShadows(slideEl, progress, isHorizontal);
        }
        wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
        wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
        if (params.shadow) {
            if (isHorizontal) cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
            else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                const scale1 = params.shadowScale;
                const scale2 = params.shadowScale / multiplier;
                const offset = params.shadowOffset;
                cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
            }
        }
        const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
        wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
        wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
    };
    const setTransition = (duration)=>{
        const { el: el, slides: slides } = swiper;
        slides.forEach((slideEl)=>{
            slideEl.style.transitionDuration = `${duration}ms`;
            slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach((subEl)=>{
                subEl.style.transitionDuration = `${duration}ms`;
            });
        });
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
            const shadowEl = el.querySelector('.swiper-cube-shadow');
            if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
        }
    };
    (0, $ab2b53734a40d9c9$export$f1e1789686576879)({
        effect: 'cube',
        swiper: swiper,
        on: on,
        setTranslate: setTranslate,
        setTransition: setTransition,
        recreateShadows: recreateShadows,
        getEffectParams: ()=>swiper.params.cubeEffect,
        perspective: ()=>true,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            })
    });
}



function $44dfcf1e6b2ae38d$export$db3b6bfb95261072(suffix, slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
    const shadowContainer = (0, $831683533b862e22$export$39b482c5e57630a8)(slideEl);
    let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
    if (!shadowEl) {
        shadowEl = (0, $831683533b862e22$export$db3b6bfb95261072)('div', shadowClass.split(' '));
        shadowContainer.append(shadowEl);
    }
    return shadowEl;
}






function $8692bc9f200758fe$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on } = _ref;
    extendParams({
        flipEffect: {
            slideShadows: true,
            limitRotation: true
        }
    });
    const createSlideShadows = (slideEl, progress)=>{
        let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBefore) shadowBefore = (0, $44dfcf1e6b2ae38d$export$db3b6bfb95261072)('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
        if (!shadowAfter) shadowAfter = (0, $44dfcf1e6b2ae38d$export$db3b6bfb95261072)('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
        if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
        if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = ()=>{
        // Set shadows
        swiper.params.flipEffect;
        swiper.slides.forEach((slideEl)=>{
            let progress = slideEl.progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min(slideEl.progress, 1), -1);
            createSlideShadows(slideEl, progress);
        });
    };
    const setTranslate = ()=>{
        const { slides: slides, rtlTranslate: rtl } = swiper;
        const params = swiper.params.flipEffect;
        const rotateFix = (0, $831683533b862e22$export$ae1af26003f05816)(swiper);
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            let progress = slideEl.progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min(slideEl.progress, 1), -1);
            const offset = slideEl.swiperSlideOffset;
            const rotate = -180 * progress;
            let rotateY = rotate;
            let rotateX = 0;
            let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
            } else if (rtl) rotateY = -rotateY;
            slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
            if (params.slideShadows) createSlideShadows(slideEl, progress);
            const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
            const targetEl = (0, $2e5cc03e71c0d780$export$f1e1789686576879)(params, slideEl);
            targetEl.style.transform = transform;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, $831683533b862e22$export$39b482c5e57630a8)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0, $4ae6f1cd5183d589$export$f1e1789686576879)({
            swiper: swiper,
            duration: duration,
            transformElements: transformElements
        });
    };
    (0, $ab2b53734a40d9c9$export$f1e1789686576879)({
        effect: 'flip',
        swiper: swiper,
        on: on,
        setTranslate: setTranslate,
        setTransition: setTransition,
        recreateShadows: recreateShadows,
        getEffectParams: ()=>swiper.params.flipEffect,
        perspective: ()=>true,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}






function $2b76d10f9c6cc5b1$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on } = _ref;
    extendParams({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: true
        }
    });
    const setTranslate = ()=>{
        const { width: swiperWidth, height: swiperHeight, slides: slides, slidesSizesGrid: slidesSizesGrid } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        const r = (0, $831683533b862e22$export$ae1af26003f05816)(swiper);
        // Each slide offset from center
        for(let i = 0, length = slides.length; i < length; i += 1){
            const slideEl = slides[i];
            const slideSize = slidesSizesGrid[i];
            const slideOffset = slideEl.swiperSlideOffset;
            const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
            const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
            let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
            // var rotateZ = 0
            let translateZ = -translate * Math.abs(offsetMultiplier);
            let stretch = params.stretch;
            // Allow percentage to make a relative stretch for responsive sliders
            if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
            let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
            let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
            let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
            // Fix for ultra small values
            if (Math.abs(translateX) < 0.001) translateX = 0;
            if (Math.abs(translateY) < 0.001) translateY = 0;
            if (Math.abs(translateZ) < 0.001) translateZ = 0;
            if (Math.abs(rotateY) < 0.001) rotateY = 0;
            if (Math.abs(rotateX) < 0.001) rotateX = 0;
            if (Math.abs(scale) < 0.001) scale = 0;
            const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
            const targetEl = (0, $2e5cc03e71c0d780$export$f1e1789686576879)(params, slideEl);
            targetEl.style.transform = slideTransform;
            slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
            if (params.slideShadows) {
                // Set shadows
                let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
                let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
                if (!shadowBeforeEl) shadowBeforeEl = (0, $44dfcf1e6b2ae38d$export$db3b6bfb95261072)('coverflow', slideEl, isHorizontal ? 'left' : 'top');
                if (!shadowAfterEl) shadowAfterEl = (0, $44dfcf1e6b2ae38d$export$db3b6bfb95261072)('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
                if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, $831683533b862e22$export$39b482c5e57630a8)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
    };
    (0, $ab2b53734a40d9c9$export$f1e1789686576879)({
        effect: 'coverflow',
        swiper: swiper,
        on: on,
        setTranslate: setTranslate,
        setTransition: setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                watchSlidesProgress: true
            })
    });
}







function $d0d0ed1158dbca64$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on } = _ref;
    extendParams({
        creativeEffect: {
            limitProgress: 1,
            shadowPerProgress: false,
            progressMultiplier: 1,
            perspective: true,
            prev: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            }
        }
    });
    const getTranslateValue = (value)=>{
        if (typeof value === 'string') return value;
        return `${value}px`;
    };
    const setTranslate = ()=>{
        const { slides: slides, wrapperEl: wrapperEl, slidesSizesGrid: slidesSizesGrid } = swiper;
        const params = swiper.params.creativeEffect;
        const { progressMultiplier: multiplier } = params;
        const isCenteredSlides = swiper.params.centeredSlides;
        const rotateFix = (0, $831683533b862e22$export$ae1af26003f05816)(swiper);
        if (isCenteredSlides) {
            const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
            wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
        }
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            const slideProgress = slideEl.progress;
            const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
            let originalProgress = progress;
            if (!isCenteredSlides) originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
            const offset = slideEl.swiperSlideOffset;
            const t = [
                swiper.params.cssMode ? -offset - swiper.translate : -offset,
                0,
                0
            ];
            const r = [
                0,
                0,
                0
            ];
            let custom = false;
            if (!swiper.isHorizontal()) {
                t[1] = t[0];
                t[0] = 0;
            }
            let data = {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                scale: 1,
                opacity: 1
            };
            if (progress < 0) {
                data = params.next;
                custom = true;
            } else if (progress > 0) {
                data = params.prev;
                custom = true;
            }
            // set translate
            t.forEach((value, index)=>{
                t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
            });
            // set rotates
            r.forEach((value, index)=>{
                let val = data.rotate[index] * Math.abs(progress * multiplier);
                r[index] = val;
            });
            slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const translateString = t.join(', ');
            const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;
            const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
            const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
            const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
            // Set shadows
            if (custom && data.shadow || !custom) {
                let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
                if (!shadowEl && data.shadow) shadowEl = (0, $44dfcf1e6b2ae38d$export$db3b6bfb95261072)('creative', slideEl);
                if (shadowEl) {
                    const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                    shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                }
            }
            const targetEl = (0, $2e5cc03e71c0d780$export$f1e1789686576879)(params, slideEl);
            targetEl.style.transform = transform;
            targetEl.style.opacity = opacityString;
            if (data.origin) targetEl.style.transformOrigin = data.origin;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, $831683533b862e22$export$39b482c5e57630a8)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow').forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0, $4ae6f1cd5183d589$export$f1e1789686576879)({
            swiper: swiper,
            duration: duration,
            transformElements: transformElements,
            allSlides: true
        });
    };
    (0, $ab2b53734a40d9c9$export$f1e1789686576879)({
        effect: 'creative',
        swiper: swiper,
        on: on,
        setTranslate: setTranslate,
        setTransition: setTransition,
        perspective: ()=>swiper.params.creativeEffect.perspective,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}







function $d96c330f40738f47$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper, extendParams: extendParams, on: on } = _ref;
    extendParams({
        cardsEffect: {
            slideShadows: true,
            rotate: true,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    });
    const setTranslate = ()=>{
        const { slides: slides, activeIndex: activeIndex, rtlTranslate: rtl } = swiper;
        const params = swiper.params.cardsEffect;
        const { startTranslate: startTranslate, isTouched: isTouched } = swiper.touchEventsData;
        const currentTranslate = rtl ? -swiper.translate : swiper.translate;
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            const slideProgress = slideEl.progress;
            const progress = Math.min(Math.max(slideProgress, -4), 4);
            let offset = slideEl.swiperSlideOffset;
            if (swiper.params.centeredSlides && !swiper.params.cssMode) swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
            if (swiper.params.centeredSlides && swiper.params.cssMode) offset -= slides[0].swiperSlideOffset;
            let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let tY = 0;
            const tZ = -100 * Math.abs(progress);
            let scale = 1;
            let rotate = -params.perSlideRotate * progress;
            let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
            const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
            const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
            const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
            if (isSwipeToNext || isSwipeToPrev) {
                const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                rotate += -28 * progress * subProgress;
                scale += -0.5 * subProgress;
                tXAdd += 96 * subProgress;
                tY = `${-25 * subProgress * Math.abs(progress)}%`;
            }
            if (progress < 0) // next
            tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
            else if (progress > 0) // prev
            tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
            else tX = `${tX}px`;
            if (!swiper.isHorizontal()) {
                const prevY = tY;
                tY = tX;
                tX = prevY;
            }
            const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
            /* eslint-disable */ const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
            /* eslint-enable */ if (params.slideShadows) {
                // Set shadows
                let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
                if (!shadowEl) shadowEl = (0, $44dfcf1e6b2ae38d$export$db3b6bfb95261072)('cards', slideEl);
                if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
            }
            slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const targetEl = (0, $2e5cc03e71c0d780$export$f1e1789686576879)(params, slideEl);
            targetEl.style.transform = transform;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, $831683533b862e22$export$39b482c5e57630a8)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow').forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0, $4ae6f1cd5183d589$export$f1e1789686576879)({
            swiper: swiper,
            duration: duration,
            transformElements: transformElements
        });
    };
    (0, $ab2b53734a40d9c9$export$f1e1789686576879)({
        effect: 'cards',
        swiper: swiper,
        on: on,
        setTranslate: setTranslate,
        setTransition: setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                _loopSwapReset: false,
                watchSlidesProgress: true,
                loopAdditionalSlides: 3,
                centeredSlides: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}





const $a6ebff98972dc7c5$var$slides = document.querySelectorAll('.main-section__swiper-slide');
// Добавляем контейнер для пагинации внутрь каждого слайда
$a6ebff98972dc7c5$var$slides.forEach((slide)=>{
    const paginationEl = document.createElement('div');
    paginationEl.classList.add('main-section__swiper-pagination');
    slide.appendChild(paginationEl);
});
const $a6ebff98972dc7c5$var$slider = new (0, $4e95c04dd8a5890d$export$25ce5a424b770e84)('.main-section__swiper', {
    modules: [
        (0, $3ede398f6665eb67$export$2e2bcd8739ae039),
        (0, $48396d89743015b3$export$2e2bcd8739ae039)
    ],
    navigation: {
        nextEl: '.main-section__swiper-wrapper-next',
        prevEl: '.main-section__swiper-wrapper-prev'
    },
    pagination: {
        el: '.main-section__swiper-pagination',
        clickable: true,
        renderBullet: function(_, className) {
            return `<span class="${className}"></span>`; // Просто точки без цифр
        }
    },
    slidesPerView: 1,
    loop: true,
    on: {
        slideChangeTransitionEnd: function() {
            // Копируем пагинацию в каждый слайд при смене
            document.querySelectorAll('.main-section__swiper-slide').forEach((slide)=>{
                const paginationContainer = slide.querySelector('.main-section__swiper-pagination');
                if (paginationContainer) paginationContainer.innerHTML = this.pagination.bullets.map((bullet)=>bullet.outerHTML).join('');
            });
        }
    }
});





const $b25cda963a87c3b3$var$slider = new (0, $4e95c04dd8a5890d$export$25ce5a424b770e84)('.boquets__swiper', {
    modules: [
        (0, $3ede398f6665eb67$export$2e2bcd8739ae039),
        (0, $48396d89743015b3$export$2e2bcd8739ae039)
    ],
    navigation: {
        nextEl: '.boquets__swiper-wrapper-next',
        prevEl: '.boquets__swiper-wrapper-prev'
    },
    pagination: {
        el: '.boquets__swiper-pagination',
        clickable: true
    },
    slidesPerView: 1,
    loop: true
});





const $73279a0e67052f31$var$slider = new (0, $4e95c04dd8a5890d$export$25ce5a424b770e84)('.reviews__swiper', {
    modules: [
        (0, $3ede398f6665eb67$export$2e2bcd8739ae039),
        (0, $48396d89743015b3$export$2e2bcd8739ae039)
    ],
    navigation: {
        nextEl: '.reviews__swiper-wrapper-next',
        prevEl: '.reviews__swiper-wrapper-prev'
    },
    slidesPerView: 2,
    spaceBetween: 60,
    loop: true
});


document.addEventListener('DOMContentLoaded', ()=>{
    const burber = document.querySelector('.burger');
    const burberBtn = document.querySelectorAll('.js-overlay__btn');
    burberBtn.forEach((btn)=>{
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            burber.classList.toggle('burger--visible');
            btn.classList.toggle('js-overlay__btn--active');
        });
    });
});





const $788c31ef43048f1c$var$slider = new (0, $4e95c04dd8a5890d$export$25ce5a424b770e84)('.reviews-page__swiper', {
    modules: [
        (0, $3ede398f6665eb67$export$2e2bcd8739ae039),
        (0, $48396d89743015b3$export$2e2bcd8739ae039)
    ],
    navigation: {
        nextEl: '.reviews-page__swiper-wrapper-next',
        prevEl: '.reviews-page__swiper-wrapper-prev'
    },
    pagination: {
        el: '.reviews-page__swiper-pagination',
        clickable: true
    },
    breakpoints: {
        1000: {
            slidesPerView: 3
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        0: {
            slidesPerView: 1
        }
    },
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true
});





const $9970b34361e607e2$var$t = (t, e = 1e4)=>(t = parseFloat(t + "") || 0, Math.round((t + Number.EPSILON) * e) / e), $9970b34361e607e2$var$e = function(t) {
    if (!(t && t instanceof Element && t.offsetParent)) return !1;
    const e = t.scrollHeight > t.clientHeight, i = window.getComputedStyle(t).overflowY, n = -1 !== i.indexOf("hidden"), s = -1 !== i.indexOf("visible");
    return e && !n && !s;
}, $9970b34361e607e2$var$i = function(t, n) {
    return !(!t || t === document.body || n && t === n) && ($9970b34361e607e2$var$e(t) ? t : $9970b34361e607e2$var$i(t.parentElement, n));
}, $9970b34361e607e2$var$n = function(t) {
    var e = (new DOMParser).parseFromString(t, "text/html").body;
    if (e.childElementCount > 1) {
        for(var i = document.createElement("div"); e.firstChild;)i.appendChild(e.firstChild);
        return i;
    }
    return e.firstChild;
}, $9970b34361e607e2$var$s = (t)=>`${t || ""}`.split(" ").filter((t)=>!!t), $9970b34361e607e2$var$o = (t, e, i)=>{
    t && $9970b34361e607e2$var$s(e).forEach((e)=>{
        t.classList.toggle(e, i || !1);
    });
};
class $9970b34361e607e2$var$a {
    constructor(t){
        Object.defineProperty(this, "pageX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "pageY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "clientX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "clientY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "id", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "time", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "nativePointer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.nativePointer = t, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, this.clientY = t.clientY, this.id = self.Touch && t instanceof Touch ? t.identifier : -1, this.time = Date.now();
    }
}
const $9970b34361e607e2$var$r = {
    passive: !1
};
class $9970b34361e607e2$var$l {
    constructor(t, { start: e = ()=>!0, move: i = ()=>{}, end: n = ()=>{} }){
        Object.defineProperty(this, "element", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "startCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "moveCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "endCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "currentPointers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: []
        }), Object.defineProperty(this, "startPointers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: []
        }), this.element = t, this.startCallback = e, this.moveCallback = i, this.endCallback = n;
        for (const t of [
            "onPointerStart",
            "onTouchStart",
            "onMove",
            "onTouchEnd",
            "onPointerEnd",
            "onWindowBlur"
        ])this[t] = this[t].bind(this);
        this.element.addEventListener("mousedown", this.onPointerStart, $9970b34361e607e2$var$r), this.element.addEventListener("touchstart", this.onTouchStart, $9970b34361e607e2$var$r), this.element.addEventListener("touchmove", this.onMove, $9970b34361e607e2$var$r), this.element.addEventListener("touchend", this.onTouchEnd), this.element.addEventListener("touchcancel", this.onTouchEnd);
    }
    onPointerStart(t) {
        if (!t.buttons || 0 !== t.button) return;
        const e = new $9970b34361e607e2$var$a(t);
        this.currentPointers.some((t)=>t.id === e.id) || this.triggerPointerStart(e, t) && (window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
    }
    onTouchStart(t) {
        for (const e of Array.from(t.changedTouches || []))this.triggerPointerStart(new $9970b34361e607e2$var$a(e), t);
        window.addEventListener("blur", this.onWindowBlur);
    }
    onMove(t) {
        const e = this.currentPointers.slice(), i = "changedTouches" in t ? Array.from(t.changedTouches || []).map((t)=>new $9970b34361e607e2$var$a(t)) : [
            new $9970b34361e607e2$var$a(t)
        ], n = [];
        for (const t of i){
            const e = this.currentPointers.findIndex((e)=>e.id === t.id);
            e < 0 || (n.push(t), this.currentPointers[e] = t);
        }
        n.length && this.moveCallback(t, this.currentPointers.slice(), e);
    }
    onPointerEnd(t) {
        t.buttons > 0 && 0 !== t.button || (this.triggerPointerEnd(t, new $9970b34361e607e2$var$a(t)), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
    }
    onTouchEnd(t) {
        for (const e of Array.from(t.changedTouches || []))this.triggerPointerEnd(t, new $9970b34361e607e2$var$a(e));
    }
    triggerPointerStart(t, e) {
        return !!this.startCallback(e, t, this.currentPointers.slice()) && (this.currentPointers.push(t), this.startPointers.push(t), !0);
    }
    triggerPointerEnd(t, e) {
        const i = this.currentPointers.findIndex((t)=>t.id === e.id);
        i < 0 || (this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this.endCallback(t, e, this.currentPointers.slice()));
    }
    onWindowBlur() {
        this.clear();
    }
    clear() {
        for(; this.currentPointers.length;){
            const t = this.currentPointers[this.currentPointers.length - 1];
            this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), this.endCallback(new Event("touchend", {
                bubbles: !0,
                cancelable: !0,
                clientX: t.clientX,
                clientY: t.clientY
            }), t, this.currentPointers.slice());
        }
    }
    stop() {
        this.element.removeEventListener("mousedown", this.onPointerStart, $9970b34361e607e2$var$r), this.element.removeEventListener("touchstart", this.onTouchStart, $9970b34361e607e2$var$r), this.element.removeEventListener("touchmove", this.onMove, $9970b34361e607e2$var$r), this.element.removeEventListener("touchend", this.onTouchEnd), this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
    }
}
function $9970b34361e607e2$var$c(t, e) {
    return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0;
}
function $9970b34361e607e2$var$h(t, e) {
    return e ? {
        clientX: (t.clientX + e.clientX) / 2,
        clientY: (t.clientY + e.clientY) / 2
    } : t;
}
const $9970b34361e607e2$var$d = (t)=>"object" == typeof t && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t), $9970b34361e607e2$var$u = (t, ...e)=>{
    const i = e.length;
    for(let n = 0; n < i; n++){
        const i = e[n] || {};
        Object.entries(i).forEach(([e, i])=>{
            const n = Array.isArray(i) ? [] : {};
            t[e] || Object.assign(t, {
                [e]: n
            }), $9970b34361e607e2$var$d(i) ? Object.assign(t[e], $9970b34361e607e2$var$u(n, i)) : Array.isArray(i) ? Object.assign(t, {
                [e]: [
                    ...i
                ]
            }) : Object.assign(t, {
                [e]: i
            });
        });
    }
    return t;
}, $9970b34361e607e2$var$p = function(t, e) {
    return t.split(".").reduce((t, e)=>"object" == typeof t ? t[e] : void 0, e);
};
class $9970b34361e607e2$var$f {
    constructor(t = {}){
        Object.defineProperty(this, "options", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }), Object.defineProperty(this, "events", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map
        }), this.setOptions(t);
        for (const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))t.startsWith("on") && "function" == typeof this[t] && (this[t] = this[t].bind(this));
    }
    setOptions(t) {
        this.options = t ? $9970b34361e607e2$var$u({}, this.constructor.defaults, t) : {};
        for (const [t, e] of Object.entries(this.option("on") || {}))this.on(t, e);
    }
    option(t, ...e) {
        let i = $9970b34361e607e2$var$p(t, this.options);
        return i && "function" == typeof i && (i = i.call(this, this, ...e)), i;
    }
    optionFor(t, e, i, ...n) {
        let s = $9970b34361e607e2$var$p(e, t);
        var o;
        "string" != typeof (o = s) || isNaN(o) || isNaN(parseFloat(o)) || (s = parseFloat(s)), "true" === s && (s = !0), "false" === s && (s = !1), s && "function" == typeof s && (s = s.call(this, this, t, ...n));
        let a = $9970b34361e607e2$var$p(e, this.options);
        return a && "function" == typeof a ? s = a.call(this, this, t, ...n, s) : void 0 === s && (s = a), void 0 === s ? i : s;
    }
    cn(t) {
        const e = this.options.classes;
        return e && e[t] || "";
    }
    localize(t, e = []) {
        t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t, e, i)=>{
            let n = "";
            return i ? n = this.option(`${e[0] + e.toLowerCase().substring(1)}.l10n.${i}`) : e && (n = this.option(`l10n.${e}`)), n || (n = t), n;
        });
        for(let i = 0; i < e.length; i++)t = t.split(e[i][0]).join(e[i][1]);
        return t = t.replace(/\{\{(.*?)\}\}/g, (t, e)=>e);
    }
    on(t, e) {
        let i = [];
        "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), this.events || (this.events = new Map), i.forEach((t)=>{
            let i = this.events.get(t);
            i || (this.events.set(t, []), i = []), i.includes(e) || i.push(e), this.events.set(t, i);
        });
    }
    off(t, e) {
        let i = [];
        "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), i.forEach((t)=>{
            const i = this.events.get(t);
            if (Array.isArray(i)) {
                const t = i.indexOf(e);
                t > -1 && i.splice(t, 1);
            }
        });
    }
    emit(t, ...e) {
        [
            ...this.events.get(t) || []
        ].forEach((t)=>t(this, ...e)), "*" !== t && this.emit("*", t, ...e);
    }
}
Object.defineProperty($9970b34361e607e2$var$f, "version", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: "5.0.36"
}), Object.defineProperty($9970b34361e607e2$var$f, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {}
});
class $9970b34361e607e2$var$g extends $9970b34361e607e2$var$f {
    constructor(t = {}){
        super(t), Object.defineProperty(this, "plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        });
    }
    attachPlugins(t = {}) {
        const e = new Map;
        for (const [i, n] of Object.entries(t)){
            const t = this.option(i), s = this.plugins[i];
            s || !1 === t ? s && !1 === t && (s.detach(), delete this.plugins[i]) : e.set(i, new n(this, t || {}));
        }
        for (const [t, i] of e)this.plugins[t] = i, i.attach();
    }
    detachPlugins(t) {
        t = t || Object.keys(this.plugins);
        for (const e of t){
            const t = this.plugins[e];
            t && t.detach(), delete this.plugins[e];
        }
        return this.emit("detachPlugins"), this;
    }
}
var $9970b34361e607e2$var$m;
!function(t) {
    t[t.Init = 0] = "Init", t[t.Error = 1] = "Error", t[t.Ready = 2] = "Ready", t[t.Panning = 3] = "Panning", t[t.Mousemove = 4] = "Mousemove", t[t.Destroy = 5] = "Destroy";
}($9970b34361e607e2$var$m || ($9970b34361e607e2$var$m = {}));
const $9970b34361e607e2$var$v = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
], $9970b34361e607e2$var$b = {
    PANUP: "Move up",
    PANDOWN: "Move down",
    PANLEFT: "Move left",
    PANRIGHT: "Move right",
    ZOOMIN: "Zoom in",
    ZOOMOUT: "Zoom out",
    TOGGLEZOOM: "Toggle zoom level",
    TOGGLE1TO1: "Toggle zoom level",
    ITERATEZOOM: "Toggle zoom level",
    ROTATECCW: "Rotate counterclockwise",
    ROTATECW: "Rotate clockwise",
    FLIPX: "Flip horizontally",
    FLIPY: "Flip vertically",
    FITX: "Fit horizontally",
    FITY: "Fit vertically",
    RESET: "Reset",
    TOGGLEFS: "Toggle fullscreen"
}, $9970b34361e607e2$var$y = {
    content: null,
    width: "auto",
    height: "auto",
    panMode: "drag",
    touch: !0,
    dragMinThreshold: 3,
    lockAxis: !1,
    mouseMoveFactor: 1,
    mouseMoveFriction: .12,
    zoom: !0,
    pinchToZoom: !0,
    panOnlyZoomed: "auto",
    minScale: 1,
    maxScale: 2,
    friction: .25,
    dragFriction: .35,
    decelFriction: .05,
    click: "toggleZoom",
    dblClick: !1,
    wheel: "zoom",
    wheelLimit: 7,
    spinner: !0,
    bounds: "auto",
    infinite: !1,
    rubberband: !0,
    bounce: !0,
    maxVelocity: 75,
    transformParent: !1,
    classes: {
        content: "f-panzoom__content",
        isLoading: "is-loading",
        canZoomIn: "can-zoom_in",
        canZoomOut: "can-zoom_out",
        isDraggable: "is-draggable",
        isDragging: "is-dragging",
        inFullscreen: "in-fullscreen",
        htmlHasFullscreen: "with-panzoom-in-fullscreen"
    },
    l10n: $9970b34361e607e2$var$b
}, $9970b34361e607e2$var$w = '<circle cx="25" cy="25" r="20"></circle>', $9970b34361e607e2$var$x = '<div class="f-spinner"><svg viewBox="0 0 50 50">' + $9970b34361e607e2$var$w + $9970b34361e607e2$var$w + "</svg></div>", $9970b34361e607e2$var$E = (t)=>t && null !== t && t instanceof Element && "nodeType" in t, $9970b34361e607e2$var$S = (t, e)=>{
    t && $9970b34361e607e2$var$s(e).forEach((e)=>{
        t.classList.remove(e);
    });
}, $9970b34361e607e2$var$P = (t, e)=>{
    t && $9970b34361e607e2$var$s(e).forEach((e)=>{
        t.classList.add(e);
    });
}, $9970b34361e607e2$var$C = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
}, $9970b34361e607e2$var$T = 1e5, $9970b34361e607e2$var$M = 1e4, $9970b34361e607e2$var$O = "mousemove", $9970b34361e607e2$var$A = "drag", $9970b34361e607e2$var$L = "content", $9970b34361e607e2$var$z = "auto";
let $9970b34361e607e2$var$R = null, $9970b34361e607e2$var$k = null;
class $9970b34361e607e2$export$b704d075ddd20210 extends $9970b34361e607e2$var$g {
    get fits() {
        return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1;
    }
    get isTouchDevice() {
        return null === $9970b34361e607e2$var$k && ($9970b34361e607e2$var$k = window.matchMedia("(hover: none)").matches), $9970b34361e607e2$var$k;
    }
    get isMobile() {
        return null === $9970b34361e607e2$var$R && ($9970b34361e607e2$var$R = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), $9970b34361e607e2$var$R;
    }
    get panMode() {
        return this.options.panMode !== $9970b34361e607e2$var$O || this.isTouchDevice ? $9970b34361e607e2$var$A : $9970b34361e607e2$var$O;
    }
    get panOnlyZoomed() {
        const t = this.options.panOnlyZoomed;
        return t === $9970b34361e607e2$var$z ? this.isTouchDevice : t;
    }
    get isInfinite() {
        return this.option("infinite");
    }
    get angle() {
        return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0;
    }
    get targetAngle() {
        return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0;
    }
    get scale() {
        const { a: t, b: e } = this.current;
        return Math.sqrt(t * t + e * e) || 1;
    }
    get targetScale() {
        const { a: t, b: e } = this.target;
        return Math.sqrt(t * t + e * e) || 1;
    }
    get minScale() {
        return this.option("minScale") || 1;
    }
    get fullScale() {
        const { contentRect: t } = this;
        return t.fullWidth / t.fitWidth || 1;
    }
    get maxScale() {
        return this.fullScale * (this.option("maxScale") || 1) || 1;
    }
    get coverScale() {
        const { containerRect: t, contentRect: e } = this, i = Math.max(t.height / e.fitHeight, t.width / e.fitWidth) || 1;
        return Math.min(this.fullScale, i);
    }
    get isScaling() {
        return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
    }
    get isContentLoading() {
        const t = this.content;
        return !!(t && t instanceof HTMLImageElement) && !t.complete;
    }
    get isResting() {
        if (this.isBouncingX || this.isBouncingY) return !1;
        for (const t of $9970b34361e607e2$var$v){
            const e = "e" == t || "f" === t ? 1e-4 : 1e-5;
            if (Math.abs(this.target[t] - this.current[t]) > e) return !1;
        }
        return !(!this.ignoreBounds && !this.checkBounds().inBounds);
    }
    constructor(t, e = {}, i = {}){
        var s;
        if (super(e), Object.defineProperty(this, "pointerTracker", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "resizeObserver", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "updateTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "clickTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "rAF", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "isTicking", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }), Object.defineProperty(this, "ignoreBounds", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }), Object.defineProperty(this, "isBouncingX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }), Object.defineProperty(this, "isBouncingY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }), Object.defineProperty(this, "clicks", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), Object.defineProperty(this, "trackingPoints", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: []
        }), Object.defineProperty(this, "pwt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), Object.defineProperty(this, "cwd", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), Object.defineProperty(this, "pmme", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "friction", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: $9970b34361e607e2$var$m.Init
        }), Object.defineProperty(this, "isDragging", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }), Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "content", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "spinner", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "containerRect", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0
            }
        }), Object.defineProperty(this, "contentRect", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                fullWidth: 0,
                fullHeight: 0,
                fitWidth: 0,
                fitHeight: 0,
                width: 0,
                height: 0
            }
        }), Object.defineProperty(this, "dragStart", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                x: 0,
                y: 0,
                top: 0,
                left: 0,
                time: 0
            }
        }), Object.defineProperty(this, "dragOffset", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                x: 0,
                y: 0,
                time: 0
            }
        }), Object.defineProperty(this, "current", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Object.assign({}, $9970b34361e607e2$var$C)
        }), Object.defineProperty(this, "target", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Object.assign({}, $9970b34361e607e2$var$C)
        }), Object.defineProperty(this, "velocity", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                a: 0,
                b: 0,
                c: 0,
                d: 0,
                e: 0,
                f: 0
            }
        }), Object.defineProperty(this, "lockedAxis", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }), !t) throw new Error("Container Element Not Found");
        this.container = t, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, $9970b34361e607e2$export$b704d075ddd20210.Plugins), i)), this.emit("attachPlugins"), this.emit("init");
        const o = this.content;
        if (o.addEventListener("load", this.onLoad), o.addEventListener("error", this.onError), this.isContentLoading) {
            if (this.option("spinner")) {
                t.classList.add(this.cn("isLoading"));
                const e = $9970b34361e607e2$var$n($9970b34361e607e2$var$x);
                !t.contains(o) || o.parentElement instanceof HTMLPictureElement ? this.spinner = t.appendChild(e) : this.spinner = (null === (s = o.parentElement) || void 0 === s ? void 0 : s.insertBefore(e, o)) || null;
            }
            this.emit("beforeLoad");
        } else queueMicrotask(()=>{
            this.enable();
        });
    }
    initContent() {
        const { container: t } = this, e = this.cn($9970b34361e607e2$var$L);
        let i = this.option($9970b34361e607e2$var$L) || t.querySelector(`.${e}`);
        if (i || (i = t.querySelector("img,picture") || t.firstElementChild, i && $9970b34361e607e2$var$P(i, e)), i instanceof HTMLPictureElement && (i = i.querySelector("img")), !i) throw new Error("No content found");
        this.content = i;
    }
    onLoad() {
        const { spinner: t, container: e, state: i } = this;
        t && (t.remove(), this.spinner = null), this.option("spinner") && e.classList.remove(this.cn("isLoading")), this.emit("afterLoad"), i === $9970b34361e607e2$var$m.Init ? this.enable() : this.updateMetrics();
    }
    onError() {
        this.state !== $9970b34361e607e2$var$m.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), this.stop(), this.detachEvents(), this.state = $9970b34361e607e2$var$m.Error, this.emit("error"));
    }
    getNextScale(t) {
        const { fullScale: e, targetScale: i, coverScale: n, maxScale: s, minScale: o } = this;
        let a = o;
        switch(t){
            case "toggleMax":
                a = i - o < .5 * (s - o) ? s : o;
                break;
            case "toggleCover":
                a = i - o < .5 * (n - o) ? n : o;
                break;
            case "toggleZoom":
                a = i - o < .5 * (e - o) ? e : o;
                break;
            case "iterateZoom":
                let t1 = [
                    1,
                    e,
                    s
                ].sort((t, e)=>t - e), r = t1.findIndex((t)=>t > i + 1e-5);
                a = t1[r] || 1;
        }
        return a;
    }
    attachObserver() {
        var t;
        const e = ()=>{
            const { container: t, containerRect: e } = this;
            return Math.abs(e.width - t.getBoundingClientRect().width) > .1 || Math.abs(e.height - t.getBoundingClientRect().height) > .1;
        };
        this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver(()=>{
            this.updateTimer || (e() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout(()=>{
                e() && this.onResize(), this.updateTimer = null;
            }, 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null));
        })), null === (t = this.resizeObserver) || void 0 === t || t.observe(this.container);
    }
    detachObserver() {
        var t;
        null === (t = this.resizeObserver) || void 0 === t || t.disconnect();
    }
    attachEvents() {
        const { container: t } = this;
        t.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !1
        }), t.addEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.pointerTracker = new $9970b34361e607e2$var$l(t, {
            start: this.onPointerDown,
            move: this.onPointerMove,
            end: this.onPointerUp
        }), document.addEventListener($9970b34361e607e2$var$O, this.onMouseMove);
    }
    detachEvents() {
        var t;
        const { container: e } = this;
        e.removeEventListener("click", this.onClick, {
            passive: !1,
            capture: !1
        }), e.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }), null === (t = this.pointerTracker) || void 0 === t || t.stop(), this.pointerTracker = null, document.removeEventListener($9970b34361e607e2$var$O, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, !0), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null);
    }
    animate() {
        this.setTargetForce();
        const t = this.friction, e = this.option("maxVelocity");
        for (const i of $9970b34361e607e2$var$v)t ? (this.velocity[i] *= 1 - t, e && !this.isScaling && (this.velocity[i] = Math.max(Math.min(this.velocity[i], e), -1 * e)), this.current[i] += this.velocity[i]) : this.current[i] = this.target[i];
        this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame(()=>this.animate()) : this.stop("current");
    }
    setTargetForce() {
        for (const t of $9970b34361e607e2$var$v)"e" === t && this.isBouncingX || "f" === t && this.isBouncingY || (this.velocity[t] = (1 / (1 - this.friction) - 1) * (this.target[t] - this.current[t]));
    }
    checkBounds(t = 0, e = 0) {
        const { current: i } = this, n = i.e + t, s = i.f + e, o = this.getBounds(), { x: a, y: r } = o, l = a.min, c = a.max, h = r.min, d = r.max;
        let u = 0, p = 0;
        return l !== 1 / 0 && n < l ? u = l - n : c !== 1 / 0 && n > c && (u = c - n), h !== 1 / 0 && s < h ? p = h - s : d !== 1 / 0 && s > d && (p = d - s), Math.abs(u) < 1e-4 && (u = 0), Math.abs(p) < 1e-4 && (p = 0), Object.assign(Object.assign({}, o), {
            xDiff: u,
            yDiff: p,
            inBounds: !u && !p
        });
    }
    clampTargetBounds() {
        const { target: t } = this, { x: e, y: i } = this.getBounds();
        e.min !== 1 / 0 && (t.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (t.e = Math.min(t.e, e.max)), i.min !== 1 / 0 && (t.f = Math.max(t.f, i.min)), i.max !== 1 / 0 && (t.f = Math.min(t.f, i.max));
    }
    calculateContentDim(t = this.current) {
        const { content: e, contentRect: i } = this, { fitWidth: n, fitHeight: s, fullWidth: o, fullHeight: a } = i;
        let r = o, l = a;
        if (this.option("zoom") || 0 !== this.angle) {
            const i = !(e instanceof HTMLImageElement) && ("none" === window.getComputedStyle(e).maxWidth || "none" === window.getComputedStyle(e).maxHeight), c = i ? o : n, h = i ? a : s, d = this.getMatrix(t), u = new DOMPoint(0, 0).matrixTransform(d), p = new DOMPoint(0 + c, 0).matrixTransform(d), f = new DOMPoint(0 + c, 0 + h).matrixTransform(d), g = new DOMPoint(0, 0 + h).matrixTransform(d), m = Math.abs(f.x - u.x), v = Math.abs(f.y - u.y), b = Math.abs(g.x - p.x), y = Math.abs(g.y - p.y);
            r = Math.max(m, b), l = Math.max(v, y);
        }
        return {
            contentWidth: r,
            contentHeight: l
        };
    }
    setEdgeForce() {
        if (this.ignoreBounds || this.isDragging || this.panMode === $9970b34361e607e2$var$O || this.targetScale < this.scale) return this.isBouncingX = !1, void (this.isBouncingY = !1);
        const { target: t } = this, { x: e, y: i, xDiff: n, yDiff: s } = this.checkBounds();
        const o = this.option("maxVelocity");
        let a = this.velocity.e, r = this.velocity.f;
        0 !== n ? (this.isBouncingX = !0, n * a <= 0 ? a += .14 * n : (a = .14 * n, e.min !== 1 / 0 && (this.target.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (this.target.e = Math.min(t.e, e.max))), o && (a = Math.max(Math.min(a, o), -1 * o))) : this.isBouncingX = !1, 0 !== s ? (this.isBouncingY = !0, s * r <= 0 ? r += .14 * s : (r = .14 * s, i.min !== 1 / 0 && (this.target.f = Math.max(t.f, i.min)), i.max !== 1 / 0 && (this.target.f = Math.min(t.f, i.max))), o && (r = Math.max(Math.min(r, o), -1 * o))) : this.isBouncingY = !1, this.isBouncingX && (this.velocity.e = a), this.isBouncingY && (this.velocity.f = r);
    }
    enable() {
        const { content: t } = this, e = new DOMMatrixReadOnly(window.getComputedStyle(t).transform);
        for (const t of $9970b34361e607e2$var$v)this.current[t] = this.target[t] = e[t];
        this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = $9970b34361e607e2$var$m.Ready, this.emit("ready");
    }
    onClick(t) {
        var e;
        "click" === t.type && 0 === t.detail && (this.dragOffset.x = 0, this.dragOffset.y = 0), this.isDragging && (null === (e = this.pointerTracker) || void 0 === e || e.clear(), this.trackingPoints = [], this.startDecelAnim());
        const i = t.target;
        if (!i || t.defaultPrevented) return;
        if (i.hasAttribute("disabled")) return t.preventDefault(), void t.stopPropagation();
        if ((()=>{
            const t = window.getSelection();
            return t && "Range" === t.type;
        })() && !i.closest("button")) return;
        const n = i.closest("[data-panzoom-action]"), s = i.closest("[data-panzoom-change]"), o = n || s, a = o && $9970b34361e607e2$var$E(o) ? o.dataset : null;
        if (a) {
            const e = a.panzoomChange, i = a.panzoomAction;
            if ((e || i) && t.preventDefault(), e) {
                let t = {};
                try {
                    t = JSON.parse(e);
                } catch (t) {
                    console && console.warn("The given data was not valid JSON");
                }
                return void this.applyChange(t);
            }
            if (i) return void (this[i] && this[i]());
        }
        if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3) return t.preventDefault(), void t.stopPropagation();
        if (i.closest("[data-fancybox]")) return;
        const r = this.content.getBoundingClientRect(), l = this.dragStart;
        if (l.time && !this.canZoomOut() && (Math.abs(r.x - l.x) > 2 || Math.abs(r.y - l.y) > 2)) return;
        this.dragStart.time = 0;
        const c = (e)=>{
            this.option("zoom", t) && e && "string" == typeof e && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e) && "function" == typeof this[e] && (t.preventDefault(), this[e]({
                event: t
            }));
        }, h = this.option("click", t), d = this.option("dblClick", t);
        d ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout(()=>{
            1 === this.clicks ? (this.emit("click", t), !t.defaultPrevented && h && c(h)) : (this.emit("dblClick", t), t.defaultPrevented || c(d)), this.clicks = 0, this.clickTimer = null;
        }, 350))) : (this.emit("click", t), !t.defaultPrevented && h && c(h));
    }
    addTrackingPoint(t) {
        const e = this.trackingPoints.filter((t)=>t.time > Date.now() - 100);
        e.push(t), this.trackingPoints = e;
    }
    onPointerDown(t, e, i) {
        var n;
        if (!1 === this.option("touch", t)) return !1;
        this.pwt = 0, this.dragOffset = {
            x: 0,
            y: 0,
            time: 0
        }, this.trackingPoints = [];
        const s = this.content.getBoundingClientRect();
        if (this.dragStart = {
            x: s.x,
            y: s.y,
            top: s.top,
            left: s.left,
            time: Date.now()
        }, this.clickTimer) return !1;
        if (this.panMode === $9970b34361e607e2$var$O && this.targetScale > 1) return t.preventDefault(), t.stopPropagation(), !1;
        const o = t.composedPath()[0];
        if (!i.length) {
            if ([
                "TEXTAREA",
                "OPTION",
                "INPUT",
                "SELECT",
                "VIDEO",
                "IFRAME"
            ].includes(o.nodeName) || o.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]")) return !1;
            null === (n = window.getSelection()) || void 0 === n || n.removeAllRanges();
        }
        if ("mousedown" === t.type) [
            "A",
            "BUTTON"
        ].includes(o.nodeName) || t.preventDefault();
        else if (Math.abs(this.velocity.a) > .3) return !1;
        return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), this.isDragging || (this.isDragging = !0, this.addTrackingPoint(e), this.emit("touchStart", t)), !0;
    }
    onPointerMove(e, n, s) {
        if (!1 === this.option("touch", e)) return;
        if (!this.isDragging) return;
        if (n.length < 2 && this.panOnlyZoomed && $9970b34361e607e2$var$t(this.targetScale) <= $9970b34361e607e2$var$t(this.minScale)) return;
        if (this.emit("touchMove", e), e.defaultPrevented) return;
        this.addTrackingPoint(n[0]);
        const { content: o } = this, a = $9970b34361e607e2$var$h(s[0], s[1]), r = $9970b34361e607e2$var$h(n[0], n[1]);
        let l = 0, d = 0;
        if (n.length > 1) {
            const t = o.getBoundingClientRect();
            l = a.clientX - t.left - .5 * t.width, d = a.clientY - t.top - .5 * t.height;
        }
        const u = $9970b34361e607e2$var$c(s[0], s[1]), p = $9970b34361e607e2$var$c(n[0], n[1]);
        let f = u ? p / u : 1, g = r.clientX - a.clientX, m = r.clientY - a.clientY;
        this.dragOffset.x += g, this.dragOffset.y += m, this.dragOffset.time = Date.now() - this.dragStart.time;
        let v = $9970b34361e607e2$var$t(this.targetScale) === $9970b34361e607e2$var$t(this.minScale) && this.option("lockAxis");
        if (v && !this.lockedAxis) {
            if ("xy" === v || "y" === v || "touchmove" === e.type) {
                if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void e.preventDefault();
                const t = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
                this.lockedAxis = t > 45 && t < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, g = 0, m = 0;
            } else this.lockedAxis = v;
        }
        if ($9970b34361e607e2$var$i(e.target, this.content) && (v = "x", this.dragOffset.y = 0), v && "xy" !== v && this.lockedAxis !== v && $9970b34361e607e2$var$t(this.targetScale) === $9970b34361e607e2$var$t(this.minScale)) return;
        e.cancelable && e.preventDefault(), this.container.classList.add(this.cn("isDragging"));
        const b = this.checkBounds(g, m);
        this.option("rubberband") ? ("x" !== this.isInfinite && (b.xDiff > 0 && g < 0 || b.xDiff < 0 && g > 0) && (g *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitWidth * b.xDiff))), "y" !== this.isInfinite && (b.yDiff > 0 && m < 0 || b.yDiff < 0 && m > 0) && (m *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitHeight * b.yDiff)))) : (b.xDiff && (g = 0), b.yDiff && (m = 0));
        const y = this.targetScale, w = this.minScale, x = this.maxScale;
        y < .5 * w && (f = Math.max(f, w)), y > 1.5 * x && (f = Math.min(f, x)), "y" === this.lockedAxis && $9970b34361e607e2$var$t(y) === $9970b34361e607e2$var$t(w) && (g = 0), "x" === this.lockedAxis && $9970b34361e607e2$var$t(y) === $9970b34361e607e2$var$t(w) && (m = 0), this.applyChange({
            originX: l,
            originY: d,
            panX: g,
            panY: m,
            scale: f,
            friction: this.option("dragFriction"),
            ignoreBounds: !0
        });
    }
    onPointerUp(t, e, n) {
        if (n.length) return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
        this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(e), this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), $9970b34361e607e2$var$i(t.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), this.emit("touchEnd", t), this.isDragging = !1, this.lockedAxis = !1, this.state !== $9970b34361e607e2$var$m.Destroy && (t.defaultPrevented || this.startDecelAnim()));
    }
    startDecelAnim() {
        var e;
        const i = this.isScaling;
        this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;
        for (const t of $9970b34361e607e2$var$v)this.velocity[t] = 0;
        this.target.e = this.current.e, this.target.f = this.current.f, $9970b34361e607e2$var$S(this.container, "is-scaling"), $9970b34361e607e2$var$S(this.container, "is-animating"), this.isTicking = !1;
        const { trackingPoints: n } = this, s = n[0], o = n[n.length - 1];
        let a = 0, r = 0, l = 0;
        o && s && (a = o.clientX - s.clientX, r = o.clientY - s.clientY, l = o.time - s.time);
        const c = (null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1;
        1 !== c && (a *= c, r *= c);
        let h = 0, d = 0, u = 0, p = 0, f = this.option("decelFriction");
        const g = this.targetScale;
        if (l > 0) {
            u = Math.abs(a) > 3 ? a / (l / 30) : 0, p = Math.abs(r) > 3 ? r / (l / 30) : 0;
            const t = this.option("maxVelocity");
            t && (u = Math.max(Math.min(u, t), -1 * t), p = Math.max(Math.min(p, t), -1 * t));
        }
        u && (h = u / (1 / (1 - f) - 1)), p && (d = p / (1 / (1 - f) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && $9970b34361e607e2$var$t(g) === this.minScale) && (h = u = 0), ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && $9970b34361e607e2$var$t(g) === this.minScale) && (d = p = 0);
        const m = this.dragOffset.x, b = this.dragOffset.y, y = this.option("dragMinThreshold") || 0;
        Math.abs(m) < y && Math.abs(b) < y && (h = d = 0, u = p = 0), (this.option("zoom") && (g < this.minScale - 1e-5 || g > this.maxScale + 1e-5) || i && !h && !d) && (f = .35), this.applyChange({
            panX: h,
            panY: d,
            friction: f
        }), this.emit("decel", u, p, m, b);
    }
    onWheel(t) {
        var e = [
            -t.deltaX || 0,
            -t.deltaY || 0,
            -t.detail || 0
        ].reduce(function(t, e) {
            return Math.abs(e) > Math.abs(t) ? e : t;
        });
        const i = Math.max(-1, Math.min(1, e));
        if (this.emit("wheel", t, i), this.panMode === $9970b34361e607e2$var$O) return;
        if (t.defaultPrevented) return;
        const n = this.option("wheel");
        "pan" === n ? (t.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({
            panX: 2 * -t.deltaX,
            panY: 2 * -t.deltaY,
            bounce: !1
        })) : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(t);
    }
    onMouseMove(t) {
        this.panWithMouse(t);
    }
    onKeydown(t) {
        "Escape" === t.key && this.toggleFS();
    }
    onResize() {
        this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
    }
    setTransform() {
        this.emit("beforeTransform");
        const { current: e, target: i, content: n, contentRect: s } = this, o = Object.assign({}, $9970b34361e607e2$var$C);
        for (const n of $9970b34361e607e2$var$v){
            const s = "e" == n || "f" === n ? $9970b34361e607e2$var$M : $9970b34361e607e2$var$T;
            o[n] = $9970b34361e607e2$var$t(e[n], s), Math.abs(i[n] - e[n]) < ("e" == n || "f" === n ? .51 : .001) && (e[n] = i[n]);
        }
        let { a: a, b: r, c: l, d: c, e: h, f: d } = o, u = `matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`, p = n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
        if (this.option("transformParent") && (p = p.parentElement || p), p.style.transform === u) return;
        p.style.transform = u;
        const { contentWidth: f, contentHeight: g } = this.calculateContentDim();
        s.width = f, s.height = g, this.emit("afterTransform");
    }
    updateMetrics(e = !1) {
        var i;
        if (!this || this.state === $9970b34361e607e2$var$m.Destroy) return;
        if (this.isContentLoading) return;
        const n = Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1), { container: s, content: o } = this, a = o instanceof HTMLImageElement, r = s.getBoundingClientRect(), l = getComputedStyle(this.container);
        let c = r.width * n, h = r.height * n;
        const d = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom), u = c - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)), p = h - d;
        this.containerRect = {
            width: c,
            height: h,
            innerWidth: u,
            innerHeight: p
        };
        const f = parseFloat(o.dataset.width || "") || ((t)=>{
            let e = 0;
            return e = t instanceof HTMLImageElement ? t.naturalWidth : t instanceof SVGElement ? t.width.baseVal.value : Math.max(t.offsetWidth, t.scrollWidth), e || 0;
        })(o), g = parseFloat(o.dataset.height || "") || ((t)=>{
            let e = 0;
            return e = t instanceof HTMLImageElement ? t.naturalHeight : t instanceof SVGElement ? t.height.baseVal.value : Math.max(t.offsetHeight, t.scrollHeight), e || 0;
        })(o);
        let v = this.option("width", f) || $9970b34361e607e2$var$z, b = this.option("height", g) || $9970b34361e607e2$var$z;
        const y = v === $9970b34361e607e2$var$z, w = b === $9970b34361e607e2$var$z;
        "number" != typeof v && (v = f), "number" != typeof b && (b = g), y && (v = f * (b / g)), w && (b = g / (f / v));
        let x = o.parentElement instanceof HTMLPictureElement ? o.parentElement : o;
        this.option("transformParent") && (x = x.parentElement || x);
        const E = x.getAttribute("style") || "";
        x.style.setProperty("transform", "none", "important"), a && (x.style.width = "", x.style.height = ""), x.offsetHeight;
        const S = o.getBoundingClientRect();
        let P = S.width * n, C = S.height * n, T = P, M = C;
        P = Math.min(P, v), C = Math.min(C, b), a ? { width: P, height: C } = ((t, e, i, n)=>{
            const s = i / t, o = n / e, a = Math.min(s, o);
            return {
                width: t *= a,
                height: e *= a
            };
        })(v, b, P, C) : (P = Math.min(P, v), C = Math.min(C, b));
        let O = .5 * (M - C), A = .5 * (T - P);
        this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
            top: S.top - r.top + O,
            bottom: r.bottom - S.bottom + O,
            left: S.left - r.left + A,
            right: r.right - S.right + A,
            fitWidth: P,
            fitHeight: C,
            width: P,
            height: C,
            fullWidth: v,
            fullHeight: b
        }), x.style.cssText = E, a && (x.style.width = `${P}px`, x.style.height = `${C}px`), this.setTransform(), !0 !== e && this.emit("refresh"), this.ignoreBounds || ($9970b34361e607e2$var$t(this.targetScale) < $9970b34361e607e2$var$t(this.minScale) ? this.zoomTo(this.minScale, {
            friction: 0
        }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, {
            friction: 0
        }) : this.state === $9970b34361e607e2$var$m.Init || this.checkBounds().inBounds || this.requestTick()), this.updateControls();
    }
    calculateBounds() {
        const { contentWidth: e, contentHeight: i } = this.calculateContentDim(this.target), { targetScale: n, lockedAxis: s } = this, { fitWidth: o, fitHeight: a } = this.contentRect;
        let r = 0, l = 0, c = 0, h = 0;
        const d = this.option("infinite");
        if (!0 === d || s && d === s) r = -1 / 0, c = 1 / 0, l = -1 / 0, h = 1 / 0;
        else {
            let { containerRect: s, contentRect: d } = this, u = $9970b34361e607e2$var$t(o * n, $9970b34361e607e2$var$M), p = $9970b34361e607e2$var$t(a * n, $9970b34361e607e2$var$M), { innerWidth: f, innerHeight: g } = s;
            if (s.width === u && (f = s.width), s.width === p && (g = s.height), e > f) {
                c = .5 * (e - f), r = -1 * c;
                let t = .5 * (d.right - d.left);
                r += t, c += t;
            }
            if (o > f && e < f && (r -= .5 * (o - f), c -= .5 * (o - f)), i > g) {
                h = .5 * (i - g), l = -1 * h;
                let t = .5 * (d.bottom - d.top);
                l += t, h += t;
            }
            a > g && i < g && (r -= .5 * (a - g), c -= .5 * (a - g));
        }
        return {
            x: {
                min: r,
                max: c
            },
            y: {
                min: l,
                max: h
            }
        };
    }
    getBounds() {
        const t = this.option("bounds");
        return t !== $9970b34361e607e2$var$z ? t : this.calculateBounds();
    }
    updateControls() {
        const e = this, i = e.container, { panMode: n, contentRect: s, targetScale: a, minScale: r } = e;
        let l = r, c = e.option("click") || !1;
        c && (l = e.getNextScale(c));
        let h = e.canZoomIn(), d = e.canZoomOut(), u = n === $9970b34361e607e2$var$A && !!this.option("touch"), p = d && u;
        if (u && ($9970b34361e607e2$var$t(a) < $9970b34361e607e2$var$t(r) && !this.panOnlyZoomed && (p = !0), ($9970b34361e607e2$var$t(s.width, 1) > $9970b34361e607e2$var$t(s.fitWidth, 1) || $9970b34361e607e2$var$t(s.height, 1) > $9970b34361e607e2$var$t(s.fitHeight, 1)) && (p = !0)), $9970b34361e607e2$var$t(s.width * a, 1) < $9970b34361e607e2$var$t(s.fitWidth, 1) && (p = !1), n === $9970b34361e607e2$var$O && (p = !1), $9970b34361e607e2$var$o(i, this.cn("isDraggable"), p), !this.option("zoom")) return;
        let f = h && $9970b34361e607e2$var$t(l) > $9970b34361e607e2$var$t(a), g = !f && !p && d && $9970b34361e607e2$var$t(l) < $9970b34361e607e2$var$t(a);
        $9970b34361e607e2$var$o(i, this.cn("canZoomIn"), f), $9970b34361e607e2$var$o(i, this.cn("canZoomOut"), g);
        for (const t of i.querySelectorAll("[data-panzoom-action]")){
            let e = !1, i = !1;
            switch(t.dataset.panzoomAction){
                case "zoomIn":
                    h ? e = !0 : i = !0;
                    break;
                case "zoomOut":
                    d ? e = !0 : i = !0;
                    break;
                case "toggleZoom":
                case "iterateZoom":
                    h || d ? e = !0 : i = !0;
                    const n = t.querySelector("g");
                    n && (n.style.display = h ? "" : "none");
            }
            e ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex")) : i && (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
        }
    }
    panTo({ x: t = this.target.e, y: e = this.target.f, scale: i = this.targetScale, friction: n = this.option("friction"), angle: s = 0, originX: o = 0, originY: a = 0, flipX: r = !1, flipY: l = !1, ignoreBounds: c = !1 }) {
        this.state !== $9970b34361e607e2$var$m.Destroy && this.applyChange({
            panX: t - this.target.e,
            panY: e - this.target.f,
            scale: i / this.targetScale,
            angle: s,
            originX: o,
            originY: a,
            friction: n,
            flipX: r,
            flipY: l,
            ignoreBounds: c
        });
    }
    applyChange({ panX: e = 0, panY: i = 0, scale: n = 1, angle: s = 0, originX: o = -this.current.e, originY: a = -this.current.f, friction: r = this.option("friction"), flipX: l = !1, flipY: c = !1, ignoreBounds: h = !1, bounce: d = this.option("bounce") }) {
        const u = this.state;
        if (u === $9970b34361e607e2$var$m.Destroy) return;
        this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = r || 0, this.ignoreBounds = h;
        const { current: p } = this, f = p.e, g = p.f, b = this.getMatrix(this.target);
        let y = (new DOMMatrix).translate(f, g).translate(o, a).translate(e, i);
        if (this.option("zoom")) {
            if (!h) {
                const t = this.targetScale, e = this.minScale, i = this.maxScale;
                t * n < e && (n = e / t), t * n > i && (n = i / t);
            }
            y = y.scale(n);
        }
        y = y.translate(-o, -a).translate(-f, -g).multiply(b), s && (y = y.rotate(s)), l && (y = y.scale(-1, 1)), c && (y = y.scale(1, -1));
        for (const e of $9970b34361e607e2$var$v)"e" !== e && "f" !== e && (y[e] > this.minScale + 1e-5 || y[e] < this.minScale - 1e-5) ? this.target[e] = y[e] : this.target[e] = $9970b34361e607e2$var$t(y[e], $9970b34361e607e2$var$M);
        (this.targetScale < this.scale || Math.abs(n - 1) > .1 || this.panMode === $9970b34361e607e2$var$O || !1 === d) && !h && this.clampTargetBounds(), u === $9970b34361e607e2$var$m.Init ? this.animate() : this.isResting || (this.state = $9970b34361e607e2$var$m.Panning, this.requestTick());
    }
    stop(t = !1) {
        if (this.state === $9970b34361e607e2$var$m.Init || this.state === $9970b34361e607e2$var$m.Destroy) return;
        const e = this.isTicking;
        this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;
        for (const e of $9970b34361e607e2$var$v)this.velocity[e] = 0, "current" === t ? this.current[e] = this.target[e] : "target" === t && (this.target[e] = this.current[e]);
        this.setTransform(), $9970b34361e607e2$var$S(this.container, "is-scaling"), $9970b34361e607e2$var$S(this.container, "is-animating"), this.isTicking = !1, this.state = $9970b34361e607e2$var$m.Ready, e && (this.emit("endAnimation"), this.updateControls());
    }
    requestTick() {
        this.isTicking || (this.emit("startAnimation"), this.updateControls(), $9970b34361e607e2$var$P(this.container, "is-animating"), this.isScaling && $9970b34361e607e2$var$P(this.container, "is-scaling")), this.isTicking = !0, this.rAF || (this.rAF = requestAnimationFrame(()=>this.animate()));
    }
    panWithMouse(e, i = this.option("mouseMoveFriction")) {
        if (this.pmme = e, this.panMode !== $9970b34361e607e2$var$O || !e) return;
        if ($9970b34361e607e2$var$t(this.targetScale) <= $9970b34361e607e2$var$t(this.minScale)) return;
        this.emit("mouseMove", e);
        const { container: n, containerRect: s, contentRect: o } = this, a = s.width, r = s.height, l = n.getBoundingClientRect(), c = (e.clientX || 0) - l.left, h = (e.clientY || 0) - l.top;
        let { contentWidth: d, contentHeight: u } = this.calculateContentDim(this.target);
        const p = this.option("mouseMoveFactor");
        p > 1 && (d !== a && (d *= p), u !== r && (u *= p));
        let f = .5 * (d - a) - c / a * 100 / 100 * (d - a);
        f += .5 * (o.right - o.left);
        let g = .5 * (u - r) - h / r * 100 / 100 * (u - r);
        g += .5 * (o.bottom - o.top), this.applyChange({
            panX: f - this.target.e,
            panY: g - this.target.f,
            friction: i
        });
    }
    zoomWithWheel(e) {
        if (this.state === $9970b34361e607e2$var$m.Destroy || this.state === $9970b34361e607e2$var$m.Init) return;
        const i = Date.now();
        if (i - this.pwt < 45) return void e.preventDefault();
        this.pwt = i;
        var n = [
            -e.deltaX || 0,
            -e.deltaY || 0,
            -e.detail || 0
        ].reduce(function(t, e) {
            return Math.abs(e) > Math.abs(t) ? e : t;
        });
        const s = Math.max(-1, Math.min(1, n)), { targetScale: o, maxScale: a, minScale: r } = this;
        let l = o * (100 + 45 * s) / 100;
        $9970b34361e607e2$var$t(l) < $9970b34361e607e2$var$t(r) && $9970b34361e607e2$var$t(o) <= $9970b34361e607e2$var$t(r) ? (this.cwd += Math.abs(s), l = r) : $9970b34361e607e2$var$t(l) > $9970b34361e607e2$var$t(a) && $9970b34361e607e2$var$t(o) >= $9970b34361e607e2$var$t(a) ? (this.cwd += Math.abs(s), l = a) : (this.cwd = 0, l = Math.max(Math.min(l, a), r)), this.cwd > this.option("wheelLimit") || (e.preventDefault(), $9970b34361e607e2$var$t(l) !== $9970b34361e607e2$var$t(o) && this.zoomTo(l, {
            event: e
        }));
    }
    canZoomIn() {
        return this.option("zoom") && ($9970b34361e607e2$var$t(this.contentRect.width, 1) < $9970b34361e607e2$var$t(this.contentRect.fitWidth, 1) || $9970b34361e607e2$var$t(this.targetScale) < $9970b34361e607e2$var$t(this.maxScale));
    }
    canZoomOut() {
        return this.option("zoom") && $9970b34361e607e2$var$t(this.targetScale) > $9970b34361e607e2$var$t(this.minScale);
    }
    zoomIn(t = 1.25, e) {
        this.zoomTo(this.targetScale * t, e);
    }
    zoomOut(t = .8, e) {
        this.zoomTo(this.targetScale * t, e);
    }
    zoomToFit(t) {
        this.zoomTo("fit", t);
    }
    zoomToCover(t) {
        this.zoomTo("cover", t);
    }
    zoomToFull(t) {
        this.zoomTo("full", t);
    }
    zoomToMax(t) {
        this.zoomTo("max", t);
    }
    toggleZoom(t) {
        this.zoomTo(this.getNextScale("toggleZoom"), t);
    }
    toggleMax(t) {
        this.zoomTo(this.getNextScale("toggleMax"), t);
    }
    toggleCover(t) {
        this.zoomTo(this.getNextScale("toggleCover"), t);
    }
    iterateZoom(t) {
        this.zoomTo("next", t);
    }
    zoomTo(t = 1, { friction: e = $9970b34361e607e2$var$z, originX: i = $9970b34361e607e2$var$z, originY: n = $9970b34361e607e2$var$z, event: s } = {}) {
        if (this.isContentLoading || this.state === $9970b34361e607e2$var$m.Destroy) return;
        const { targetScale: o, fullScale: a, maxScale: r, coverScale: l } = this;
        if (this.stop(), this.panMode === $9970b34361e607e2$var$O && (s = this.pmme || s), s || i === $9970b34361e607e2$var$z || n === $9970b34361e607e2$var$z) {
            const t = this.content.getBoundingClientRect(), e = this.container.getBoundingClientRect(), o = s ? s.clientX : e.left + .5 * e.width, a = s ? s.clientY : e.top + .5 * e.height;
            i = o - t.left - .5 * t.width, n = a - t.top - .5 * t.height;
        }
        let c = 1;
        "number" == typeof t ? c = t : "full" === t ? c = a : "cover" === t ? c = l : "max" === t ? c = r : "fit" === t ? c = 1 : "next" === t && (c = this.getNextScale("iterateZoom")), c = c / o || 1, e = e === $9970b34361e607e2$var$z ? c > 1 ? .15 : .25 : e, this.applyChange({
            scale: c,
            originX: i,
            originY: n,
            friction: e
        }), s && this.panMode === $9970b34361e607e2$var$O && this.panWithMouse(s, e);
    }
    rotateCCW() {
        this.applyChange({
            angle: -90
        });
    }
    rotateCW() {
        this.applyChange({
            angle: 90
        });
    }
    flipX() {
        this.applyChange({
            flipX: !0
        });
    }
    flipY() {
        this.applyChange({
            flipY: !0
        });
    }
    fitX() {
        this.stop("target");
        const { containerRect: t, contentRect: e, target: i } = this;
        this.applyChange({
            panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
            panY: .5 * t.height - (e.top + .5 * e.fitHeight) - i.f,
            scale: t.width / e.fitWidth / this.targetScale,
            originX: 0,
            originY: 0,
            ignoreBounds: !0
        });
    }
    fitY() {
        this.stop("target");
        const { containerRect: t, contentRect: e, target: i } = this;
        this.applyChange({
            panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
            panY: .5 * t.innerHeight - (e.top + .5 * e.fitHeight) - i.f,
            scale: t.height / e.fitHeight / this.targetScale,
            originX: 0,
            originY: 0,
            ignoreBounds: !0
        });
    }
    toggleFS() {
        const { container: t } = this, e = this.cn("inFullscreen"), i = this.cn("htmlHasFullscreen");
        t.classList.toggle(e);
        const n = t.classList.contains(e);
        n ? (document.documentElement.classList.add(i), document.addEventListener("keydown", this.onKeydown, !0)) : (document.documentElement.classList.remove(i), document.removeEventListener("keydown", this.onKeydown, !0)), this.updateMetrics(), this.emit(n ? "enterFS" : "exitFS");
    }
    getMatrix(t = this.current) {
        const { a: e, b: i, c: n, d: s, e: o, f: a } = t;
        return new DOMMatrix([
            e,
            i,
            n,
            s,
            o,
            a
        ]);
    }
    reset(t) {
        if (this.state !== $9970b34361e607e2$var$m.Init && this.state !== $9970b34361e607e2$var$m.Destroy) {
            this.stop("current");
            for (const t of $9970b34361e607e2$var$v)this.target[t] = $9970b34361e607e2$var$C[t];
            this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), this.isResting || (this.friction = void 0 === t ? this.option("friction") : t, this.state = $9970b34361e607e2$var$m.Panning, this.requestTick());
        }
    }
    destroy() {
        this.stop(), this.state = $9970b34361e607e2$var$m.Destroy, this.detachEvents(), this.detachObserver();
        const { container: t, content: e } = this, i = this.option("classes") || {};
        for (const e of Object.values(i))t.classList.remove(e + "");
        e && (e.removeEventListener("load", this.onLoad), e.removeEventListener("error", this.onError)), this.detachPlugins();
    }
}
Object.defineProperty($9970b34361e607e2$export$b704d075ddd20210, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: $9970b34361e607e2$var$y
}), Object.defineProperty($9970b34361e607e2$export$b704d075ddd20210, "Plugins", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {}
});
const $9970b34361e607e2$var$D = function(t, e) {
    let i = !0;
    return (...n)=>{
        i && (i = !1, t(...n), setTimeout(()=>{
            i = !0;
        }, e));
    };
}, $9970b34361e607e2$var$F = (t, e)=>{
    let i = [];
    return t.childNodes.forEach((t)=>{
        t.nodeType !== Node.ELEMENT_NODE || e && !t.matches(e) || i.push(t);
    }), i;
}, $9970b34361e607e2$var$j = {
    viewport: null,
    track: null,
    enabled: !0,
    slides: [],
    axis: "x",
    transition: "fade",
    preload: 1,
    slidesPerPage: "auto",
    initialPage: 0,
    friction: .12,
    Panzoom: {
        decelFriction: .12
    },
    center: !0,
    infinite: !0,
    fill: !0,
    dragFree: !1,
    adaptiveHeight: !1,
    direction: "ltr",
    classes: {
        container: "f-carousel",
        viewport: "f-carousel__viewport",
        track: "f-carousel__track",
        slide: "f-carousel__slide",
        isLTR: "is-ltr",
        isRTL: "is-rtl",
        isHorizontal: "is-horizontal",
        isVertical: "is-vertical",
        inTransition: "in-transition",
        isSelected: "is-selected"
    },
    l10n: {
        NEXT: "Next slide",
        PREV: "Previous slide",
        GOTO: "Go to slide #%d"
    }
};
var $9970b34361e607e2$var$B;
!function(t) {
    t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Destroy = 2] = "Destroy";
}($9970b34361e607e2$var$B || ($9970b34361e607e2$var$B = {}));
const $9970b34361e607e2$var$H = (t)=>{
    if ("string" == typeof t || t instanceof HTMLElement) t = {
        html: t
    };
    else {
        const e = t.thumb;
        void 0 !== e && ("string" == typeof e && (t.thumbSrc = e), e instanceof HTMLImageElement && (t.thumbEl = e, t.thumbElSrc = e.src, t.thumbSrc = e.src), delete t.thumb);
    }
    return Object.assign({
        html: "",
        el: null,
        isDom: !1,
        class: "",
        customClass: "",
        index: -1,
        dim: 0,
        gap: 0,
        pos: 0,
        transition: !1
    }, t);
}, $9970b34361e607e2$var$N = (t = {})=>Object.assign({
        index: -1,
        slides: [],
        dim: 0,
        pos: -1
    }, t);
class $9970b34361e607e2$var$_ extends $9970b34361e607e2$var$f {
    constructor(t, e){
        super(e), Object.defineProperty(this, "instance", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        });
    }
    attach() {}
    detach() {}
}
const $9970b34361e607e2$var$$ = {
    classes: {
        list: "f-carousel__dots",
        isDynamic: "is-dynamic",
        hasDots: "has-dots",
        dot: "f-carousel__dot",
        isBeforePrev: "is-before-prev",
        isPrev: "is-prev",
        isCurrent: "is-current",
        isNext: "is-next",
        isAfterNext: "is-after-next"
    },
    dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
    dynamicFrom: 11,
    maxCount: 1 / 0,
    minCount: 2
};
class $9970b34361e607e2$var$W extends $9970b34361e607e2$var$_ {
    constructor(){
        super(...arguments), Object.defineProperty(this, "isDynamic", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }), Object.defineProperty(this, "list", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        });
    }
    onRefresh() {
        this.refresh();
    }
    build() {
        let t = this.list;
        if (!t) {
            t = document.createElement("ul"), $9970b34361e607e2$var$P(t, this.cn("list")), t.setAttribute("role", "tablist");
            const e = this.instance.container;
            e.appendChild(t), $9970b34361e607e2$var$P(e, this.cn("hasDots")), this.list = t;
        }
        return t;
    }
    refresh() {
        var t;
        const e = this.instance.pages.length, i = Math.min(2, this.option("minCount")), n = Math.max(2e3, this.option("maxCount")), s = this.option("dynamicFrom");
        if (e < i || e > n) return void this.cleanup();
        const a = "number" == typeof s && e > 5 && e >= s, r = !this.list || this.isDynamic !== a || this.list.children.length !== e;
        r && this.cleanup();
        const l = this.build();
        if ($9970b34361e607e2$var$o(l, this.cn("isDynamic"), !!a), r) for(let t = 0; t < e; t++)l.append(this.createItem(t));
        let c, h = 0;
        for (const e of [
            ...l.children
        ]){
            const i = h === this.instance.page;
            i && (c = e), $9970b34361e607e2$var$o(e, this.cn("isCurrent"), i), null === (t = e.children[0]) || void 0 === t || t.setAttribute("aria-selected", i ? "true" : "false");
            for (const t of [
                "isBeforePrev",
                "isPrev",
                "isNext",
                "isAfterNext"
            ])$9970b34361e607e2$var$S(e, this.cn(t));
            h++;
        }
        if (c = c || l.firstChild, a && c) {
            const t = c.previousElementSibling, e = t && t.previousElementSibling;
            $9970b34361e607e2$var$P(t, this.cn("isPrev")), $9970b34361e607e2$var$P(e, this.cn("isBeforePrev"));
            const i = c.nextElementSibling, n = i && i.nextElementSibling;
            $9970b34361e607e2$var$P(i, this.cn("isNext")), $9970b34361e607e2$var$P(n, this.cn("isAfterNext"));
        }
        this.isDynamic = a;
    }
    createItem(t = 0) {
        var e;
        const i = document.createElement("li");
        i.setAttribute("role", "presentation");
        const s = $9970b34361e607e2$var$n(this.instance.localize(this.option("dotTpl"), [
            [
                "%d",
                t + 1
            ]
        ]).replace(/\%i/g, t + ""));
        return i.appendChild(s), null === (e = i.children[0]) || void 0 === e || e.setAttribute("role", "tab"), i;
    }
    cleanup() {
        this.list && (this.list.remove(), this.list = null), this.isDynamic = !1, $9970b34361e607e2$var$S(this.instance.container, this.cn("hasDots"));
    }
    attach() {
        this.instance.on([
            "refresh",
            "change"
        ], this.onRefresh);
    }
    detach() {
        this.instance.off([
            "refresh",
            "change"
        ], this.onRefresh), this.cleanup();
    }
}
Object.defineProperty($9970b34361e607e2$var$W, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: $9970b34361e607e2$var$$
});
const $9970b34361e607e2$var$X = "disabled", $9970b34361e607e2$var$q = "next", $9970b34361e607e2$var$Y = "prev";
class $9970b34361e607e2$var$V extends $9970b34361e607e2$var$_ {
    constructor(){
        super(...arguments), Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "prev", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "next", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "isDom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        });
    }
    onRefresh() {
        const t = this.instance, e = t.pages.length, i = t.page;
        if (e < 2) return void this.cleanup();
        this.build();
        let n = this.prev, s = this.next;
        n && s && (n.removeAttribute($9970b34361e607e2$var$X), s.removeAttribute($9970b34361e607e2$var$X), t.isInfinite || (i <= 0 && n.setAttribute($9970b34361e607e2$var$X, ""), i >= e - 1 && s.setAttribute($9970b34361e607e2$var$X, "")));
    }
    addBtn(t) {
        var e;
        const i = this.instance, n = document.createElement("button");
        n.setAttribute("tabindex", "0"), n.setAttribute("title", i.localize(`{{${t.toUpperCase()}}}`)), $9970b34361e607e2$var$P(n, this.cn("button") + " " + this.cn(t === $9970b34361e607e2$var$q ? "isNext" : "isPrev"));
        const s = i.isRTL ? t === $9970b34361e607e2$var$q ? $9970b34361e607e2$var$Y : $9970b34361e607e2$var$q : t;
        var o;
        return n.innerHTML = i.localize(this.option(`${s}Tpl`)), n.dataset[`carousel${o = t, o ? o.match("^[a-z]") ? o.charAt(0).toUpperCase() + o.substring(1) : o : ""}`] = "true", null === (e = this.container) || void 0 === e || e.appendChild(n), n;
    }
    build() {
        const t = this.instance.container, e = this.cn("container");
        let { container: i, prev: n, next: s } = this;
        i || (i = t.querySelector("." + e), this.isDom = !!i), i || (i = document.createElement("div"), $9970b34361e607e2$var$P(i, e), t.appendChild(i)), this.container = i, s || (s = i.querySelector("[data-carousel-next]")), s || (s = this.addBtn($9970b34361e607e2$var$q)), this.next = s, n || (n = i.querySelector("[data-carousel-prev]")), n || (n = this.addBtn($9970b34361e607e2$var$Y)), this.prev = n;
    }
    cleanup() {
        this.isDom || (this.prev && this.prev.remove(), this.next && this.next.remove(), this.container && this.container.remove()), this.prev = null, this.next = null, this.container = null, this.isDom = !1;
    }
    attach() {
        this.instance.on([
            "refresh",
            "change"
        ], this.onRefresh);
    }
    detach() {
        this.instance.off([
            "refresh",
            "change"
        ], this.onRefresh), this.cleanup();
    }
}
Object.defineProperty($9970b34361e607e2$var$V, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
        classes: {
            container: "f-carousel__nav",
            button: "f-button",
            isNext: "is-next",
            isPrev: "is-prev"
        },
        nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'
    }
});
class $9970b34361e607e2$var$Z extends $9970b34361e607e2$var$_ {
    constructor(){
        super(...arguments), Object.defineProperty(this, "selectedIndex", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "target", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "nav", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        });
    }
    addAsTargetFor(t) {
        this.target = this.instance, this.nav = t, this.attachEvents();
    }
    addAsNavFor(t) {
        this.nav = this.instance, this.target = t, this.attachEvents();
    }
    attachEvents() {
        const { nav: t, target: e } = this;
        t && e && (t.options.initialSlide = e.options.initialPage, t.state === $9970b34361e607e2$var$B.Ready ? this.onNavReady(t) : t.on("ready", this.onNavReady), e.state === $9970b34361e607e2$var$B.Ready ? this.onTargetReady(e) : e.on("ready", this.onTargetReady));
    }
    onNavReady(t) {
        t.on("createSlide", this.onNavCreateSlide), t.on("Panzoom.click", this.onNavClick), t.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange();
    }
    onTargetReady(t) {
        t.on("change", this.onTargetChange), t.on("Panzoom.refresh", this.onTargetChange), this.onTargetChange();
    }
    onNavClick(t, e, i) {
        this.onNavTouch(t, t.panzoom, i);
    }
    onNavTouch(t, e, i) {
        var n, s;
        if (Math.abs(e.dragOffset.x) > 3 || Math.abs(e.dragOffset.y) > 3) return;
        const o = i.target, { nav: a, target: r } = this;
        if (!a || !r || !o) return;
        const l = o.closest("[data-index]");
        if (i.stopPropagation(), i.preventDefault(), !l) return;
        const c = parseInt(l.dataset.index || "", 10) || 0, h = r.getPageForSlide(c), d = a.getPageForSlide(c);
        a.slideTo(d), r.slideTo(h, {
            friction: (null === (s = null === (n = this.nav) || void 0 === n ? void 0 : n.plugins) || void 0 === s ? void 0 : s.Sync.option("friction")) || 0
        }), this.markSelectedSlide(c);
    }
    onNavCreateSlide(t, e) {
        e.index === this.selectedIndex && this.markSelectedSlide(e.index);
    }
    onTargetChange() {
        var t, e;
        const { target: i, nav: n } = this;
        if (!i || !n) return;
        if (n.state !== $9970b34361e607e2$var$B.Ready || i.state !== $9970b34361e607e2$var$B.Ready) return;
        const s = null === (e = null === (t = i.pages[i.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === e ? void 0 : e.index, o = n.getPageForSlide(s);
        this.markSelectedSlide(s), n.slideTo(o, null === n.prevPage && null === i.prevPage ? {
            friction: 0
        } : void 0);
    }
    markSelectedSlide(t) {
        const e = this.nav;
        e && e.state === $9970b34361e607e2$var$B.Ready && (this.selectedIndex = t, [
            ...e.slides
        ].map((e)=>{
            e.el && e.el.classList[e.index === t ? "add" : "remove"]("is-nav-selected");
        }));
    }
    attach() {
        const t = this;
        let e = t.options.target, i = t.options.nav;
        e ? t.addAsNavFor(e) : i && t.addAsTargetFor(i);
    }
    detach() {
        const t = this, e = t.nav, i = t.target;
        e && (e.off("ready", t.onNavReady), e.off("createSlide", t.onNavCreateSlide), e.off("Panzoom.click", t.onNavClick), e.off("Panzoom.touchEnd", t.onNavTouch)), t.nav = null, i && (i.off("ready", t.onTargetReady), i.off("refresh", t.onTargetChange), i.off("change", t.onTargetChange)), t.target = null;
    }
}
Object.defineProperty($9970b34361e607e2$var$Z, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
        friction: .35
    }
});
const $9970b34361e607e2$var$U = {
    Navigation: $9970b34361e607e2$var$V,
    Dots: $9970b34361e607e2$var$W,
    Sync: $9970b34361e607e2$var$Z
}, $9970b34361e607e2$var$G = "animationend", $9970b34361e607e2$var$K = "isSelected", $9970b34361e607e2$var$J = "slide";
class $9970b34361e607e2$export$144901db2ea8e967 extends $9970b34361e607e2$var$g {
    get axis() {
        return this.isHorizontal ? "e" : "f";
    }
    get isEnabled() {
        return this.state === $9970b34361e607e2$var$B.Ready;
    }
    get isInfinite() {
        let t = !1;
        const { contentDim: e, viewportDim: i, pages: n, slides: s } = this, o = s[0];
        return n.length >= 2 && o && e + o.dim >= i && (t = this.option("infinite")), t;
    }
    get isRTL() {
        return "rtl" === this.option("direction");
    }
    get isHorizontal() {
        return "x" === this.option("axis");
    }
    constructor(t, e = {}, i = {}){
        if (super(), Object.defineProperty(this, "bp", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ""
        }), Object.defineProperty(this, "lp", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), Object.defineProperty(this, "userOptions", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        }), Object.defineProperty(this, "userPlugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        }), Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: $9970b34361e607e2$var$B.Init
        }), Object.defineProperty(this, "page", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), Object.defineProperty(this, "prevPage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "viewport", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "track", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "slides", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: []
        }), Object.defineProperty(this, "pages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: []
        }), Object.defineProperty(this, "panzoom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "inTransition", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Set
        }), Object.defineProperty(this, "contentDim", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), Object.defineProperty(this, "viewportDim", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), "string" == typeof t && (t = document.querySelector(t)), !t || !$9970b34361e607e2$var$E(t)) throw new Error("No Element found");
        this.container = t, this.slideNext = $9970b34361e607e2$var$D(this.slideNext.bind(this), 150), this.slidePrev = $9970b34361e607e2$var$D(this.slidePrev.bind(this), 150), this.userOptions = e, this.userPlugins = i, queueMicrotask(()=>{
            this.processOptions();
        });
    }
    processOptions() {
        var t, e;
        const i = $9970b34361e607e2$var$u({}, $9970b34361e607e2$export$144901db2ea8e967.defaults, this.userOptions);
        let n = "";
        const s = i.breakpoints;
        if (s && $9970b34361e607e2$var$d(s)) for (const [t, e] of Object.entries(s))window.matchMedia(t).matches && $9970b34361e607e2$var$d(e) && (n += t, $9970b34361e607e2$var$u(i, e));
        n === this.bp && this.state !== $9970b34361e607e2$var$B.Init || (this.bp = n, this.state === $9970b34361e607e2$var$B.Ready && (i.initialSlide = (null === (e = null === (t = this.pages[this.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === e ? void 0 : e.index) || 0), this.state !== $9970b34361e607e2$var$B.Init && this.destroy(), super.setOptions(i), !1 === this.option("enabled") ? this.attachEvents() : setTimeout(()=>{
            this.init();
        }, 0));
    }
    init() {
        this.state = $9970b34361e607e2$var$B.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, $9970b34361e607e2$export$144901db2ea8e967.Plugins), this.userPlugins)), this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = $9970b34361e607e2$var$B.Ready, this.emit("ready");
    }
    initLayout() {
        const { container: t } = this, e = this.option("classes");
        $9970b34361e607e2$var$P(t, this.cn("container")), $9970b34361e607e2$var$o(t, e.isLTR, !this.isRTL), $9970b34361e607e2$var$o(t, e.isRTL, this.isRTL), $9970b34361e607e2$var$o(t, e.isVertical, !this.isHorizontal), $9970b34361e607e2$var$o(t, e.isHorizontal, this.isHorizontal);
        let i = this.option("viewport") || t.querySelector(`.${e.viewport}`);
        i || (i = document.createElement("div"), $9970b34361e607e2$var$P(i, e.viewport), i.append(...$9970b34361e607e2$var$F(t, `.${e.slide}`)), t.prepend(i)), i.addEventListener("scroll", this.onScroll);
        let n = this.option("track") || t.querySelector(`.${e.track}`);
        n || (n = document.createElement("div"), $9970b34361e607e2$var$P(n, e.track), n.append(...Array.from(i.childNodes))), n.setAttribute("aria-live", "polite"), i.contains(n) || i.prepend(n), this.viewport = i, this.track = n, this.emit("initLayout");
    }
    initSlides() {
        const { track: t } = this;
        if (!t) return;
        const e = [
            ...this.slides
        ], i = [];
        [
            ...$9970b34361e607e2$var$F(t, `.${this.cn($9970b34361e607e2$var$J)}`)
        ].forEach((t)=>{
            if ($9970b34361e607e2$var$E(t)) {
                const e = $9970b34361e607e2$var$H({
                    el: t,
                    isDom: !0,
                    index: this.slides.length
                });
                i.push(e);
            }
        });
        for (let t of [
            ...this.option("slides", []) || [],
            ...e
        ])i.push($9970b34361e607e2$var$H(t));
        this.slides = i;
        for(let t = 0; t < this.slides.length; t++)this.slides[t].index = t;
        for (const t of i)this.emit("beforeInitSlide", t, t.index), this.emit("initSlide", t, t.index);
        this.emit("initSlides");
    }
    setInitialPage() {
        const t = this.option("initialSlide");
        this.page = "number" == typeof t ? this.getPageForSlide(t) : parseInt(this.option("initialPage", 0) + "", 10) || 0;
    }
    setInitialPosition() {
        const { track: t, pages: e, isHorizontal: i } = this;
        if (!t || !e.length) return;
        let n = this.page;
        e[n] || (this.page = n = 0);
        const s = (e[n].pos || 0) * (this.isRTL && i ? 1 : -1), o = i ? `${s}px` : "0", a = i ? "0" : `${s}px`;
        t.style.transform = `translate3d(${o}, ${a}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight();
    }
    initPanzoom() {
        this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
        const t = this.option("Panzoom") || {};
        this.panzoom = new $9970b34361e607e2$export$b704d075ddd20210(this.viewport, $9970b34361e607e2$var$u({}, {
            content: this.track,
            zoom: !1,
            panOnlyZoomed: !1,
            lockAxis: this.isHorizontal ? "x" : "y",
            infinite: this.isInfinite,
            click: !1,
            dblClick: !1,
            touch: (t)=>!(this.pages.length < 2 && !t.options.infinite),
            bounds: ()=>this.getBounds(),
            maxVelocity: (t)=>Math.abs(t.target[this.axis] - t.current[this.axis]) < 2 * this.viewportDim ? 100 : 0
        }, t)), this.panzoom.on("*", (t, e, ...i)=>{
            this.emit(`Panzoom.${e}`, t, ...i);
        }), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation);
    }
    attachEvents() {
        const t = this.container;
        t && (t.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !1
        }), t.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize);
    }
    createPages() {
        let t = [];
        const { contentDim: e, viewportDim: i } = this;
        let n = this.option("slidesPerPage");
        n = ("auto" === n || e <= i) && !1 !== this.option("fill") ? 1 / 0 : parseFloat(n + "");
        let s = 0, o = 0, a = 0;
        for (const e of this.slides)(!t.length || o + e.dim - i > .05 || a >= n) && (t.push($9970b34361e607e2$var$N()), s = t.length - 1, o = 0, a = 0), t[s].slides.push(e), o += e.dim + e.gap, a++;
        return t;
    }
    processPages() {
        const e = this.pages, { contentDim: i, viewportDim: n, isInfinite: s } = this, o = this.option("center"), a = this.option("fill"), r = a && o && i > n && !s;
        if (e.forEach((t, e)=>{
            var s;
            t.index = e, t.pos = (null === (s = t.slides[0]) || void 0 === s ? void 0 : s.pos) || 0, t.dim = 0;
            for (const [e, i] of t.slides.entries())t.dim += i.dim, e < t.slides.length - 1 && (t.dim += i.gap);
            r && t.pos + .5 * t.dim < .5 * n ? t.pos = 0 : r && t.pos + .5 * t.dim >= i - .5 * n ? t.pos = i - n : o && (t.pos += -0.5 * (n - t.dim));
        }), e.forEach((e)=>{
            a && !s && i > n && (e.pos = Math.max(e.pos, 0), e.pos = Math.min(e.pos, i - n)), e.pos = $9970b34361e607e2$var$t(e.pos, 1e3), e.dim = $9970b34361e607e2$var$t(e.dim, 1e3), Math.abs(e.pos) <= .1 && (e.pos = 0);
        }), s) return e;
        const l = [];
        let c;
        return e.forEach((t)=>{
            const e = Object.assign({}, t);
            c && e.pos === c.pos ? (c.dim += e.dim, c.slides = [
                ...c.slides,
                ...e.slides
            ]) : (e.index = l.length, c = e, l.push(e));
        }), l;
    }
    getPageFromIndex(t = 0) {
        const e = this.pages.length;
        let i;
        return t = parseInt((t || 0).toString()) || 0, i = this.isInfinite ? (t % e + e) % e : Math.max(Math.min(t, e - 1), 0), i;
    }
    getSlideMetrics(e) {
        var i, n;
        const s = this.isHorizontal ? "width" : "height";
        let o = 0, a = 0, r = e.el;
        const l = !(!r || r.parentNode);
        if (r ? o = parseFloat(r.dataset[s] || "") || 0 : (r = document.createElement("div"), r.style.visibility = "hidden", (this.track || document.body).prepend(r)), $9970b34361e607e2$var$P(r, this.cn($9970b34361e607e2$var$J) + " " + e.class + " " + e.customClass), o) r.style[s] = `${o}px`, r.style["width" === s ? "height" : "width"] = "";
        else {
            l && (this.track || document.body).prepend(r), o = r.getBoundingClientRect()[s] * Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1);
            let t = r[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
            t - 1 > o && (o = t);
        }
        const c = getComputedStyle(r);
        return "content-box" === c.boxSizing && (this.isHorizontal ? (o += parseFloat(c.paddingLeft) || 0, o += parseFloat(c.paddingRight) || 0) : (o += parseFloat(c.paddingTop) || 0, o += parseFloat(c.paddingBottom) || 0)), a = parseFloat(c[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, l ? null === (n = r.parentElement) || void 0 === n || n.removeChild(r) : e.el || r.remove(), {
            dim: $9970b34361e607e2$var$t(o, 1e3),
            gap: $9970b34361e607e2$var$t(a, 1e3)
        };
    }
    getBounds() {
        const { isInfinite: t, isRTL: e, isHorizontal: i, pages: n } = this;
        let s = {
            min: 0,
            max: 0
        };
        if (t) s = {
            min: -1 / 0,
            max: 1 / 0
        };
        else if (n.length) {
            const t = n[0].pos, o = n[n.length - 1].pos;
            s = e && i ? {
                min: t,
                max: o
            } : {
                min: -1 * o,
                max: -1 * t
            };
        }
        return {
            x: i ? s : {
                min: 0,
                max: 0
            },
            y: i ? {
                min: 0,
                max: 0
            } : s
        };
    }
    repositionSlides() {
        let e, { isHorizontal: i, isRTL: n, isInfinite: s, viewport: o, viewportDim: a, contentDim: r, page: l, pages: c, slides: h, panzoom: d } = this, u = 0, p = 0, f = 0, g = 0;
        d ? g = -1 * d.current[this.axis] : c[l] && (g = c[l].pos || 0), e = i ? n ? "right" : "left" : "top", n && i && (g *= -1);
        for (const i of h){
            const n = i.el;
            n ? ("top" === e ? (n.style.right = "", n.style.left = "") : n.style.top = "", i.index !== u ? n.style[e] = 0 === p ? "" : `${$9970b34361e607e2$var$t(p, 1e3)}px` : n.style[e] = "", f += i.dim + i.gap, u++) : p += i.dim + i.gap;
        }
        if (s && f && o) {
            let n = getComputedStyle(o), s = "padding", l = i ? "Right" : "Bottom", c = parseFloat(n[s + (i ? "Left" : "Top")]);
            g -= c, a += c, a += parseFloat(n[s + l]);
            for (const i of h)i.el && ($9970b34361e607e2$var$t(i.pos) < $9970b34361e607e2$var$t(a) && $9970b34361e607e2$var$t(i.pos + i.dim + i.gap) < $9970b34361e607e2$var$t(g) && $9970b34361e607e2$var$t(g) > $9970b34361e607e2$var$t(r - a) && (i.el.style[e] = `${$9970b34361e607e2$var$t(p + f, 1e3)}px`), $9970b34361e607e2$var$t(i.pos + i.gap) >= $9970b34361e607e2$var$t(r - a) && $9970b34361e607e2$var$t(i.pos) > $9970b34361e607e2$var$t(g + a) && $9970b34361e607e2$var$t(g) < $9970b34361e607e2$var$t(a) && (i.el.style[e] = `-${$9970b34361e607e2$var$t(f, 1e3)}px`));
        }
        let m, v, b = [
            ...this.inTransition
        ];
        if (b.length > 1 && (m = c[b[0]], v = c[b[1]]), m && v) {
            let i = 0;
            for (const n of h)n.el ? this.inTransition.has(n.index) && m.slides.indexOf(n) < 0 && (n.el.style[e] = `${$9970b34361e607e2$var$t(i + (m.pos - v.pos), 1e3)}px`) : i += n.dim + n.gap;
        }
    }
    createSlideEl(t) {
        const { track: e, slides: i } = this;
        if (!e || !t) return;
        if (t.el && t.el.parentNode) return;
        const n = t.el || document.createElement("div");
        $9970b34361e607e2$var$P(n, this.cn($9970b34361e607e2$var$J)), $9970b34361e607e2$var$P(n, t.class), $9970b34361e607e2$var$P(n, t.customClass);
        const s = t.html;
        s && (s instanceof HTMLElement ? n.appendChild(s) : n.innerHTML = t.html + "");
        const o = [];
        i.forEach((t, e)=>{
            t.el && o.push(e);
        });
        const a = t.index;
        let r = null;
        if (o.length) r = i[o.reduce((t, e)=>Math.abs(e - a) < Math.abs(t - a) ? e : t)];
        const l = r && r.el && r.el.parentNode ? r.index < t.index ? r.el.nextSibling : r.el : null;
        e.insertBefore(n, e.contains(l) ? l : null), t.el = n, this.emit("createSlide", t);
    }
    removeSlideEl(t, e = !1) {
        const i = null == t ? void 0 : t.el;
        if (!i || !i.parentNode) return;
        const n = this.cn($9970b34361e607e2$var$K);
        if (i.classList.contains(n) && ($9970b34361e607e2$var$S(i, n), this.emit("unselectSlide", t)), t.isDom && !e) return i.removeAttribute("aria-hidden"), i.removeAttribute("data-index"), void (i.style.left = "");
        this.emit("removeSlide", t);
        const s = new CustomEvent($9970b34361e607e2$var$G);
        i.dispatchEvent(s), t.el && (t.el.remove(), t.el = null);
    }
    transitionTo(t = 0, e = this.option("transition")) {
        var i, n, s, o;
        if (!e) return !1;
        const a = this.page, { pages: r, panzoom: l } = this;
        t = parseInt((t || 0).toString()) || 0;
        const c = this.getPageFromIndex(t);
        if (!l || !r[c] || r.length < 2 || Math.abs(((null === (n = null === (i = r[a]) || void 0 === i ? void 0 : i.slides[0]) || void 0 === n ? void 0 : n.dim) || 0) - this.viewportDim) > 1) return !1;
        let h = t > a ? 1 : -1;
        this.isInfinite && (0 === a && t === r.length - 1 && (h = -1), a === r.length - 1 && 0 === t && (h = 1));
        const d = r[c].pos * (this.isRTL ? 1 : -1);
        if (a === c && Math.abs(d - l.target[this.axis]) < 1) return !1;
        this.clearTransitions();
        const u = l.isResting;
        $9970b34361e607e2$var$P(this.container, this.cn("inTransition"));
        const p = (null === (s = r[a]) || void 0 === s ? void 0 : s.slides[0]) || null, f = (null === (o = r[c]) || void 0 === o ? void 0 : o.slides[0]) || null;
        this.inTransition.add(f.index), this.createSlideEl(f);
        let g = p.el, m = f.el;
        u || e === $9970b34361e607e2$var$J || (e = "fadeFast", g = null);
        const v = this.isRTL ? "next" : "prev", b = this.isRTL ? "prev" : "next";
        return g && (this.inTransition.add(p.index), p.transition = e, g.addEventListener($9970b34361e607e2$var$G, this.onAnimationEnd), g.classList.add(`f-${e}Out`, `to-${h > 0 ? b : v}`)), m && (f.transition = e, m.addEventListener($9970b34361e607e2$var$G, this.onAnimationEnd), m.classList.add(`f-${e}In`, `from-${h > 0 ? v : b}`)), l.current[this.axis] = d, l.target[this.axis] = d, l.requestTick(), this.onChange(c), !0;
    }
    manageSlideVisiblity() {
        const t = new Set, e = new Set, i = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
        for (const n of this.slides)i.has(n) ? t.add(n) : e.add(n);
        for (const e of this.inTransition)t.add(this.slides[e]);
        for (const e of t)this.createSlideEl(e), this.lazyLoadSlide(e);
        for (const i of e)t.has(i) || this.removeSlideEl(i);
        this.markSelectedSlides(), this.repositionSlides();
    }
    markSelectedSlides() {
        if (!this.pages[this.page] || !this.pages[this.page].slides) return;
        const t = "aria-hidden";
        let e = this.cn($9970b34361e607e2$var$K);
        if (e) for (const i of this.slides){
            const n = i.el;
            n && (n.dataset.index = `${i.index}`, n.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(i) ? n.removeAttribute(t) : n.setAttribute(t, "true") : this.pages[this.page].slides.includes(i) ? (n.classList.contains(e) || ($9970b34361e607e2$var$P(n, e), this.emit("selectSlide", i)), n.removeAttribute(t)) : (n.classList.contains(e) && ($9970b34361e607e2$var$S(n, e), this.emit("unselectSlide", i)), n.setAttribute(t, "true")));
        }
    }
    flipInfiniteTrack() {
        const { axis: t, isHorizontal: e, isInfinite: i, isRTL: n, viewportDim: s, contentDim: o } = this, a = this.panzoom;
        if (!a || !i) return;
        let r = a.current[t], l = a.target[t] - r, c = 0, h = .5 * s;
        n && e ? (r < -h && (c = -1, r += o), r > o - h && (c = 1, r -= o)) : (r > h && (c = 1, r -= o), r < -o + h && (c = -1, r += o)), c && (a.current[t] = r, a.target[t] = r + l);
    }
    lazyLoadImg(t, e) {
        const i = this, s = "f-fadeIn", o = "is-preloading";
        let a = !1, r = null;
        const l = ()=>{
            a || (a = !0, r && (r.remove(), r = null), $9970b34361e607e2$var$S(e, o), e.complete && ($9970b34361e607e2$var$P(e, s), setTimeout(()=>{
                $9970b34361e607e2$var$S(e, s);
            }, 350)), this.option("adaptiveHeight") && t.el && this.pages[this.page].slides.indexOf(t) > -1 && (i.updateMetrics(), i.setViewportHeight()), this.emit("load", t));
        };
        $9970b34361e607e2$var$P(e, o), e.src = e.dataset.lazySrcset || e.dataset.lazySrc || "", delete e.dataset.lazySrc, delete e.dataset.lazySrcset, e.addEventListener("error", ()=>{
            l();
        }), e.addEventListener("load", ()=>{
            l();
        }), setTimeout(()=>{
            const i = e.parentNode;
            i && t.el && (e.complete ? l() : a || (r = $9970b34361e607e2$var$n($9970b34361e607e2$var$x), i.insertBefore(r, e)));
        }, 300);
    }
    lazyLoadSlide(t) {
        const e = t && t.el;
        if (!e) return;
        const i = new Set;
        let n = Array.from(e.querySelectorAll("[data-lazy-src],[data-lazy-srcset]"));
        e.dataset.lazySrc && n.push(e), n.map((t)=>{
            t instanceof HTMLImageElement ? i.add(t) : t instanceof HTMLElement && t.dataset.lazySrc && (t.style.backgroundImage = `url('${t.dataset.lazySrc}')`, delete t.dataset.lazySrc);
        });
        for (const e of i)this.lazyLoadImg(t, e);
    }
    onAnimationEnd(t) {
        var e;
        const i = t.target, n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1, s = this.slides[n], o = t.animationName;
        if (!i || !s || !o) return;
        const a = !!this.inTransition.has(n) && s.transition;
        a && o.substring(0, a.length + 2) === `f-${a}` && this.inTransition.delete(n), this.inTransition.size || this.clearTransitions(), n === this.page && (null === (e = this.panzoom) || void 0 === e ? void 0 : e.isResting) && this.emit("settle");
    }
    onDecel(t, e = 0, i = 0, n = 0, s = 0) {
        if (this.option("dragFree")) return void this.setPageFromPosition();
        const { isRTL: o, isHorizontal: a, axis: r, pages: l } = this, c = l.length, h = Math.abs(Math.atan2(i, e) / (Math.PI / 180));
        let d = 0;
        if (d = h > 45 && h < 135 ? a ? 0 : i : a ? e : 0, !c) return;
        let u = this.page, p = o && a ? 1 : -1;
        const f = t.current[r] * p;
        let { pageIndex: g } = this.getPageFromPosition(f);
        Math.abs(d) > 5 ? (l[u].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (u = g), u = o && a ? d < 0 ? u - 1 : u + 1 : d < 0 ? u + 1 : u - 1) : u = 0 === n && 0 === s ? u : g, this.slideTo(u, {
            transition: !1,
            friction: t.option("decelFriction")
        });
    }
    onClick(t) {
        const e = t.target, i = e && $9970b34361e607e2$var$E(e) ? e.dataset : null;
        let n, s;
        i && (void 0 !== i.carouselPage ? (s = "slideTo", n = i.carouselPage) : void 0 !== i.carouselNext ? s = "slideNext" : void 0 !== i.carouselPrev && (s = "slidePrev")), s ? (t.preventDefault(), t.stopPropagation(), e && !e.hasAttribute("disabled") && this[s](n)) : this.emit("click", t);
    }
    onSlideTo(t) {
        const e = t.detail || 0;
        this.slideTo(this.getPageForSlide(e), {
            friction: 0
        });
    }
    onChange(t, e = 0) {
        const i = this.page;
        this.prevPage = i, this.page = t, this.option("adaptiveHeight") && this.setViewportHeight(), t !== i && (this.markSelectedSlides(), this.emit("change", t, i, e));
    }
    onRefresh() {
        let t = this.contentDim, e = this.viewportDim;
        this.updateMetrics(), this.contentDim === t && this.viewportDim === e || this.slideTo(this.page, {
            friction: 0,
            transition: !1
        });
    }
    onScroll() {
        var t;
        null === (t = this.viewport) || void 0 === t || t.scroll(0, 0);
    }
    onResize() {
        this.option("breakpoints") && this.processOptions();
    }
    onBeforeTransform(t) {
        this.lp !== t.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), this.lp = t.current.e;
    }
    onEndAnimation() {
        this.inTransition.size || this.emit("settle");
    }
    reInit(t = null, e = null) {
        this.destroy(), this.state = $9970b34361e607e2$var$B.Init, this.prevPage = null, this.userOptions = t || this.userOptions, this.userPlugins = e || this.userPlugins, this.processOptions();
    }
    slideTo(t = 0, { friction: e = this.option("friction"), transition: i = this.option("transition") } = {}) {
        if (this.state === $9970b34361e607e2$var$B.Destroy) return;
        t = parseInt((t || 0).toString()) || 0;
        const n = this.getPageFromIndex(t), { axis: s, isHorizontal: o, isRTL: a, pages: r, panzoom: l } = this, c = r.length, h = a && o ? 1 : -1;
        if (!l || !c) return;
        if (this.page !== n) {
            const e = new Event("beforeChange", {
                bubbles: !0,
                cancelable: !0
            });
            if (this.emit("beforeChange", e, t), e.defaultPrevented) return;
        }
        if (this.transitionTo(t, i)) return;
        let d = r[n].pos;
        if (this.isInfinite) {
            const e = this.contentDim, i = l.target[s] * h;
            if (2 === c) d += e * Math.floor(parseFloat(t + "") / 2);
            else d = [
                d,
                d - e,
                d + e
            ].reduce(function(t, e) {
                return Math.abs(e - i) < Math.abs(t - i) ? e : t;
            });
        }
        d *= h, Math.abs(l.target[s] - d) < 1 || (l.panTo({
            x: o ? d : 0,
            y: o ? 0 : d,
            friction: e
        }), this.onChange(n));
    }
    slideToClosest(t) {
        if (this.panzoom) {
            const { pageIndex: e } = this.getPageFromPosition();
            this.slideTo(e, t);
        }
    }
    slideNext() {
        this.slideTo(this.page + 1);
    }
    slidePrev() {
        this.slideTo(this.page - 1);
    }
    clearTransitions() {
        this.inTransition.clear(), $9970b34361e607e2$var$S(this.container, this.cn("inTransition"));
        const t = [
            "to-prev",
            "to-next",
            "from-prev",
            "from-next"
        ];
        for (const e of this.slides){
            const i = e.el;
            if (i) {
                i.removeEventListener($9970b34361e607e2$var$G, this.onAnimationEnd), i.classList.remove(...t);
                const n = e.transition;
                n && i.classList.remove(`f-${n}Out`, `f-${n}In`);
            }
        }
        this.manageSlideVisiblity();
    }
    addSlide(t, e) {
        var i, n, s, o;
        const a = this.panzoom, r = (null === (i = this.pages[this.page]) || void 0 === i ? void 0 : i.pos) || 0, l = (null === (n = this.pages[this.page]) || void 0 === n ? void 0 : n.dim) || 0, c = this.contentDim < this.viewportDim;
        let h = Array.isArray(e) ? e : [
            e
        ];
        const d = [];
        for (const t of h)d.push($9970b34361e607e2$var$H(t));
        this.slides.splice(t, 0, ...d);
        for(let t = 0; t < this.slides.length; t++)this.slides[t].index = t;
        for (const t of d)this.emit("beforeInitSlide", t, t.index);
        if (this.page >= t && (this.page += d.length), this.updateMetrics(), a) {
            const e = (null === (s = this.pages[this.page]) || void 0 === s ? void 0 : s.pos) || 0, i = (null === (o = this.pages[this.page]) || void 0 === o ? void 0 : o.dim) || 0, n = this.pages.length || 1, h = this.isRTL ? l - i : i - l, d = this.isRTL ? r - e : e - r;
            c && 1 === n ? (t <= this.page && (a.current[this.axis] -= h, a.target[this.axis] -= h), a.panTo({
                [this.isHorizontal ? "x" : "y"]: -1 * e
            })) : d && t <= this.page && (a.target[this.axis] -= d, a.current[this.axis] -= d, a.requestTick());
        }
        for (const t of d)this.emit("initSlide", t, t.index);
    }
    prependSlide(t) {
        this.addSlide(0, t);
    }
    appendSlide(t) {
        this.addSlide(this.slides.length, t);
    }
    removeSlide(t) {
        const e = this.slides.length;
        t = (t % e + e) % e;
        const i = this.slides[t];
        if (i) {
            this.removeSlideEl(i, !0), this.slides.splice(t, 1);
            for(let t = 0; t < this.slides.length; t++)this.slides[t].index = t;
            this.updateMetrics(), this.slideTo(this.page, {
                friction: 0,
                transition: !1
            }), this.emit("destroySlide", i);
        }
    }
    updateMetrics() {
        const { panzoom: e, viewport: i, track: n, slides: s, isHorizontal: o, isInfinite: a } = this;
        if (!n) return;
        const r = o ? "width" : "height", l = o ? "offsetWidth" : "offsetHeight";
        if (i) {
            let e = Math.max(i[l], $9970b34361e607e2$var$t(i.getBoundingClientRect()[r], 1e3)), n = getComputedStyle(i), s = "padding", a = o ? "Right" : "Bottom";
            e -= parseFloat(n[s + (o ? "Left" : "Top")]) + parseFloat(n[s + a]), this.viewportDim = e;
        }
        let c, h = 0;
        for (const [e, i] of s.entries()){
            let n = 0, o = 0;
            !i.el && c ? (n = c.dim, o = c.gap) : ({ dim: n, gap: o } = this.getSlideMetrics(i), c = i), n = $9970b34361e607e2$var$t(n, 1e3), o = $9970b34361e607e2$var$t(o, 1e3), i.dim = n, i.gap = o, i.pos = h, h += n, (a || e < s.length - 1) && (h += o);
        }
        h = $9970b34361e607e2$var$t(h, 1e3), this.contentDim = h, e && (e.contentRect[r] = h, e.contentRect[o ? "fullWidth" : "fullHeight"] = h), this.pages = this.createPages(), this.pages = this.processPages(), this.state === $9970b34361e607e2$var$B.Init && this.setInitialPage(), this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), this.manageSlideVisiblity(), this.emit("refresh");
    }
    getProgress(e, i = !1, n = !1) {
        void 0 === e && (e = this.page);
        const s = this, o = s.panzoom, a = s.contentDim, r = s.pages[e] || 0;
        if (!r || !o) return e > this.page ? -1 : 1;
        let l = -1 * o.current.e, c = $9970b34361e607e2$var$t((l - r.pos) / (1 * r.dim), 1e3), h = c, d = c;
        this.isInfinite && !0 !== n && (h = $9970b34361e607e2$var$t((l - r.pos + a) / (1 * r.dim), 1e3), d = $9970b34361e607e2$var$t((l - r.pos - a) / (1 * r.dim), 1e3));
        let u = [
            c,
            h,
            d
        ].reduce(function(t, e) {
            return Math.abs(e) < Math.abs(t) ? e : t;
        });
        return i ? u : u > 1 ? 1 : u < -1 ? -1 : u;
    }
    setViewportHeight() {
        const { page: t, pages: e, viewport: i, isHorizontal: n } = this;
        if (!i || !e[t]) return;
        let s = 0;
        n && this.track && (this.track.style.height = "auto", e[t].slides.forEach((t)=>{
            t.el && (s = Math.max(s, t.el.offsetHeight));
        })), i.style.height = s ? `${s}px` : "";
    }
    getPageForSlide(t) {
        for (const e of this.pages)for (const i of e.slides)if (i.index === t) return e.index;
        return -1;
    }
    getVisibleSlides(t = 0) {
        var e;
        const i = new Set;
        let { panzoom: n, contentDim: s, viewportDim: o, pages: a, page: r } = this;
        if (o) {
            s = s + (null === (e = this.slides[this.slides.length - 1]) || void 0 === e ? void 0 : e.gap) || 0;
            let l = 0;
            l = n && n.state !== $9970b34361e607e2$var$m.Init && n.state !== $9970b34361e607e2$var$m.Destroy ? -1 * n.current[this.axis] : a[r] && a[r].pos || 0, this.isInfinite && (l -= Math.floor(l / s) * s), this.isRTL && this.isHorizontal && (l *= -1);
            const c = l - o * t, h = l + o * (t + 1), d = this.isInfinite ? [
                -1,
                0,
                1
            ] : [
                0
            ];
            for (const t of this.slides)for (const e of d){
                const n = t.pos + e * s, o = n + t.dim + t.gap;
                n < h && o > c && i.add(t);
            }
        }
        return i;
    }
    getPageFromPosition(t) {
        const { viewportDim: e, contentDim: i, slides: n, pages: s, panzoom: o } = this, a = s.length, r = n.length, l = n[0], c = n[r - 1], h = this.option("center");
        let d = 0, u = 0, p = 0, f = void 0 === t ? -1 * ((null == o ? void 0 : o.target[this.axis]) || 0) : t;
        h && (f += .5 * e), this.isInfinite ? (f < l.pos - .5 * c.gap && (f -= i, p = -1), f > c.pos + c.dim + .5 * c.gap && (f -= i, p = 1)) : f = Math.max(l.pos || 0, Math.min(f, c.pos));
        let g = c, m = n.find((t)=>{
            const e = t.pos - .5 * g.gap, i = t.pos + t.dim + .5 * t.gap;
            return g = t, f >= e && f < i;
        });
        return m || (m = c), u = this.getPageForSlide(m.index), d = u + p * a, {
            page: d,
            pageIndex: u
        };
    }
    setPageFromPosition() {
        const { pageIndex: t } = this.getPageFromPosition();
        this.onChange(t);
    }
    destroy() {
        if ([
            $9970b34361e607e2$var$B.Destroy
        ].includes(this.state)) return;
        this.state = $9970b34361e607e2$var$B.Destroy;
        const { container: t, viewport: e, track: i, slides: n, panzoom: s } = this, o = this.option("classes");
        t.removeEventListener("click", this.onClick, {
            passive: !1,
            capture: !1
        }), t.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), s && (s.destroy(), this.panzoom = null), n && n.forEach((t)=>{
            this.removeSlideEl(t);
        }), this.detachPlugins(), e && (e.removeEventListener("scroll", this.onScroll), e.offsetParent && i && i.offsetParent && e.replaceWith(...i.childNodes));
        for (const [e, i] of Object.entries(o))"container" !== e && i && t.classList.remove(i);
        this.track = null, this.viewport = null, this.page = 0, this.slides = [];
        const a = this.events.get("ready");
        this.events = new Map, a && this.events.set("ready", a);
    }
}
Object.defineProperty($9970b34361e607e2$export$144901db2ea8e967, "Panzoom", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: $9970b34361e607e2$export$b704d075ddd20210
}), Object.defineProperty($9970b34361e607e2$export$144901db2ea8e967, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: $9970b34361e607e2$var$j
}), Object.defineProperty($9970b34361e607e2$export$144901db2ea8e967, "Plugins", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: $9970b34361e607e2$var$U
});
const $9970b34361e607e2$var$tt = function(t) {
    if (!$9970b34361e607e2$var$E(t)) return 0;
    const e = window.scrollY, i = window.innerHeight, n = e + i, s = t.getBoundingClientRect(), o = s.y + e, a = s.height, r = o + a;
    if (e > r || n < o) return 0;
    if (e < o && n > r) return 100;
    if (o < e && r > n) return 100;
    let l = a;
    o < e && (l -= e - o), r > n && (l -= r - n);
    const c = l / i * 100;
    return Math.round(c);
}, $9970b34361e607e2$var$et = !("undefined" == typeof window || !window.document || !window.document.createElement);
let $9970b34361e607e2$var$it;
const $9970b34361e607e2$var$nt = [
    "a[href]",
    "area[href]",
    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
    "select:not([disabled]):not([aria-hidden])",
    "textarea:not([disabled]):not([aria-hidden])",
    "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)",
    "iframe",
    "object",
    "embed",
    "video",
    "audio",
    "[contenteditable]",
    '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'
].join(","), $9970b34361e607e2$var$st = (t)=>{
    if (t && $9970b34361e607e2$var$et) {
        void 0 === $9970b34361e607e2$var$it && document.createElement("div").focus({
            get preventScroll () {
                return $9970b34361e607e2$var$it = !0, !1;
            }
        });
        try {
            if ($9970b34361e607e2$var$it) t.focus({
                preventScroll: !0
            });
            else {
                const e = window.scrollY || document.body.scrollTop, i = window.scrollX || document.body.scrollLeft;
                t.focus(), document.body.scrollTo({
                    top: e,
                    left: i,
                    behavior: "auto"
                });
            }
        } catch (t) {}
    }
}, $9970b34361e607e2$var$ot = ()=>{
    const t = document;
    let e, i = "", n = "", s = "";
    return t.fullscreenEnabled ? (i = "requestFullscreen", n = "exitFullscreen", s = "fullscreenElement") : t.webkitFullscreenEnabled && (i = "webkitRequestFullscreen", n = "webkitExitFullscreen", s = "webkitFullscreenElement"), i && (e = {
        request: function(e = t.documentElement) {
            return "webkitRequestFullscreen" === i ? e[i](Element.ALLOW_KEYBOARD_INPUT) : e[i]();
        },
        exit: function() {
            return t[s] && t[n]();
        },
        isFullscreen: function() {
            return t[s];
        }
    }), e;
}, $9970b34361e607e2$var$at = {
    animated: !0,
    autoFocus: !0,
    backdropClick: "close",
    Carousel: {
        classes: {
            container: "fancybox__carousel",
            viewport: "fancybox__viewport",
            track: "fancybox__track",
            slide: "fancybox__slide"
        }
    },
    closeButton: "auto",
    closeExisting: !1,
    commonCaption: !1,
    compact: ()=>window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
    contentClick: "toggleZoom",
    contentDblClick: !1,
    defaultType: "image",
    defaultDisplay: "flex",
    dragToClose: !0,
    Fullscreen: {
        autoStart: !1
    },
    groupAll: !1,
    groupAttr: "data-fancybox",
    hideClass: "f-fadeOut",
    hideScrollbar: !0,
    idle: 3500,
    keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "prev",
        ArrowDown: "next",
        ArrowRight: "next",
        ArrowLeft: "prev"
    },
    l10n: Object.assign(Object.assign({}, $9970b34361e607e2$var$b), {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        MODAL: "You can close this modal content with the ESC key",
        ERROR: "Something Went Wrong, Please Try Again Later",
        IMAGE_ERROR: "Image Not Found",
        ELEMENT_NOT_FOUND: "HTML Element Not Found",
        AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
        AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
        IFRAME_ERROR: "Error Loading Page",
        TOGGLE_ZOOM: "Toggle zoom level",
        TOGGLE_THUMBS: "Toggle thumbnails",
        TOGGLE_SLIDESHOW: "Toggle slideshow",
        TOGGLE_FULLSCREEN: "Toggle full-screen mode",
        DOWNLOAD: "Download"
    }),
    parentEl: null,
    placeFocusBack: !0,
    showClass: "f-zoomInUp",
    startIndex: 0,
    tpl: {
        closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
        main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'
    },
    trapFocus: !0,
    wheel: "zoom"
};
var $9970b34361e607e2$var$rt, $9970b34361e607e2$var$lt;
!function(t) {
    t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Closing = 2] = "Closing", t[t.CustomClosing = 3] = "CustomClosing", t[t.Destroy = 4] = "Destroy";
}($9970b34361e607e2$var$rt || ($9970b34361e607e2$var$rt = {})), function(t) {
    t[t.Loading = 0] = "Loading", t[t.Opening = 1] = "Opening", t[t.Ready = 2] = "Ready", t[t.Closing = 3] = "Closing";
}($9970b34361e607e2$var$lt || ($9970b34361e607e2$var$lt = {}));
let $9970b34361e607e2$var$ct = "", $9970b34361e607e2$var$ht = !1, $9970b34361e607e2$var$dt = !1, $9970b34361e607e2$var$ut = null;
const $9970b34361e607e2$var$pt = ()=>{
    let t = "", e = "";
    const i = $9970b34361e607e2$export$cb45b08d97cdc4fd.getInstance();
    if (i) {
        const n = i.carousel, s = i.getSlide();
        if (n && s) {
            let o = s.slug || void 0, a = s.triggerEl || void 0;
            e = o || i.option("slug") || "", !e && a && a.dataset && (e = a.dataset.fancybox || ""), e && "true" !== e && (t = "#" + e + (!o && n.slides.length > 1 ? "-" + (s.index + 1) : ""));
        }
    }
    return {
        hash: t,
        slug: e,
        index: 1
    };
}, $9970b34361e607e2$var$ft = ()=>{
    const t = new URL(document.URL).hash, e = t.slice(1).split("-"), i = e[e.length - 1], n = i && /^\+?\d+$/.test(i) && parseInt(e.pop() || "1", 10) || 1;
    return {
        hash: t,
        slug: e.join("-"),
        index: n
    };
}, $9970b34361e607e2$var$gt = ()=>{
    const { slug: t, index: e } = $9970b34361e607e2$var$ft();
    if (!t) return;
    let i = document.querySelector(`[data-slug="${t}"]`);
    if (i && i.dispatchEvent(new CustomEvent("click", {
        bubbles: !0,
        cancelable: !0
    })), $9970b34361e607e2$export$cb45b08d97cdc4fd.getInstance()) return;
    const n = document.querySelectorAll(`[data-fancybox="${t}"]`);
    n.length && (i = n[e - 1], i && i.dispatchEvent(new CustomEvent("click", {
        bubbles: !0,
        cancelable: !0
    })));
}, $9970b34361e607e2$var$mt = ()=>{
    if (!1 === $9970b34361e607e2$export$cb45b08d97cdc4fd.defaults.Hash) return;
    const t = $9970b34361e607e2$export$cb45b08d97cdc4fd.getInstance();
    if (!1 === (null == t ? void 0 : t.options.Hash)) return;
    const { slug: e, index: i } = $9970b34361e607e2$var$ft(), { slug: n } = $9970b34361e607e2$var$pt();
    t && (e === n ? t.jumpTo(i - 1) : ($9970b34361e607e2$var$ht = !0, t.close())), $9970b34361e607e2$var$gt();
}, $9970b34361e607e2$var$vt = ()=>{
    $9970b34361e607e2$var$ut && clearTimeout($9970b34361e607e2$var$ut), queueMicrotask(()=>{
        $9970b34361e607e2$var$mt();
    });
}, $9970b34361e607e2$var$bt = ()=>{
    window.addEventListener("hashchange", $9970b34361e607e2$var$vt, !1), setTimeout(()=>{
        $9970b34361e607e2$var$mt();
    }, 500);
};
$9970b34361e607e2$var$et && (/complete|interactive|loaded/.test(document.readyState) ? $9970b34361e607e2$var$bt() : document.addEventListener("DOMContentLoaded", $9970b34361e607e2$var$bt));
const $9970b34361e607e2$var$yt = "is-zooming-in";
class $9970b34361e607e2$var$wt extends $9970b34361e607e2$var$_ {
    onCreateSlide(t, e, i) {
        const n = this.instance.optionFor(i, "src") || "";
        i.el && "image" === i.type && "string" == typeof n && this.setImage(i, n);
    }
    onRemoveSlide(t, e, i) {
        i.panzoom && i.panzoom.destroy(), i.panzoom = void 0, i.imageEl = void 0;
    }
    onChange(t, e, i, n) {
        $9970b34361e607e2$var$S(this.instance.container, $9970b34361e607e2$var$yt);
        for (const t of e.slides){
            const e = t.panzoom;
            e && t.index !== i && e.reset(.35);
        }
    }
    onClose() {
        var t;
        const e = this.instance, i = e.container, n = e.getSlide();
        if (!i || !i.parentElement || !n) return;
        const { el: s, contentEl: o, panzoom: a, thumbElSrc: r } = n;
        if (!s || !r || !o || !a || a.isContentLoading || a.state === $9970b34361e607e2$var$m.Init || a.state === $9970b34361e607e2$var$m.Destroy) return;
        a.updateMetrics();
        let l = this.getZoomInfo(n);
        if (!l) return;
        this.instance.state = $9970b34361e607e2$var$rt.CustomClosing, i.classList.remove($9970b34361e607e2$var$yt), i.classList.add("is-zooming-out"), o.style.backgroundImage = `url('${r}')`;
        const c = i.getBoundingClientRect();
        1 === ((null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1) && Object.assign(i.style, {
            position: "absolute",
            top: `${i.offsetTop + window.scrollY}px`,
            left: `${i.offsetLeft + window.scrollX}px`,
            bottom: "auto",
            right: "auto",
            width: `${c.width}px`,
            height: `${c.height}px`,
            overflow: "hidden"
        });
        const { x: h, y: d, scale: u, opacity: p } = l;
        if (p) {
            const t = ((t, e, i, n)=>{
                const s = e - t, o = n - i;
                return (e)=>i + ((e - t) / s * o || 0);
            })(a.scale, u, 1, 0);
            a.on("afterTransform", ()=>{
                o.style.opacity = t(a.scale) + "";
            });
        }
        a.on("endAnimation", ()=>{
            e.destroy();
        }), a.target.a = u, a.target.b = 0, a.target.c = 0, a.target.d = u, a.panTo({
            x: h,
            y: d,
            scale: u,
            friction: p ? .2 : .33,
            ignoreBounds: !0
        }), a.isResting && e.destroy();
    }
    setImage(t, e) {
        const i = this.instance;
        t.src = e, this.process(t, e).then((e)=>{
            const { contentEl: n, imageEl: s, thumbElSrc: o, el: a } = t;
            if (i.isClosing() || !n || !s) return;
            n.offsetHeight;
            const r = !!i.isOpeningSlide(t) && this.getZoomInfo(t);
            if (this.option("protected") && a) {
                a.addEventListener("contextmenu", (t)=>{
                    t.preventDefault();
                });
                const t = document.createElement("div");
                $9970b34361e607e2$var$P(t, "fancybox-protected"), n.appendChild(t);
            }
            if (o && r) {
                const s = e.contentRect, a = Math.max(s.fullWidth, s.fullHeight);
                let c = null;
                !r.opacity && a > 1200 && (c = document.createElement("img"), $9970b34361e607e2$var$P(c, "fancybox-ghost"), c.src = o, n.appendChild(c));
                const h = ()=>{
                    c && ($9970b34361e607e2$var$P(c, "f-fadeFastOut"), setTimeout(()=>{
                        c && (c.remove(), c = null);
                    }, 200));
                };
                (l = o, new Promise((t, e)=>{
                    const i = new Image;
                    i.onload = t, i.onerror = e, i.src = l;
                })).then(()=>{
                    i.hideLoading(t), t.state = $9970b34361e607e2$var$lt.Opening, this.instance.emit("reveal", t), this.zoomIn(t).then(()=>{
                        h(), this.instance.done(t);
                    }, ()=>{}), c && setTimeout(()=>{
                        h();
                    }, a > 2500 ? 800 : 200);
                }, ()=>{
                    i.hideLoading(t), i.revealContent(t);
                });
            } else {
                const n = this.optionFor(t, "initialSize"), s = this.optionFor(t, "zoom"), o = {
                    event: i.prevMouseMoveEvent || i.options.event,
                    friction: s ? .12 : 0
                };
                let a = i.optionFor(t, "showClass") || void 0, r = !0;
                i.isOpeningSlide(t) && ("full" === n ? e.zoomToFull(o) : "cover" === n ? e.zoomToCover(o) : "max" === n ? e.zoomToMax(o) : r = !1, e.stop("current")), r && a && (a = e.isDragging ? "f-fadeIn" : ""), i.hideLoading(t), i.revealContent(t, a);
            }
            var l;
        }, ()=>{
            i.setError(t, "{{IMAGE_ERROR}}");
        });
    }
    process(t, e) {
        return new Promise((i, s)=>{
            var o;
            const a = this.instance, r = t.el;
            a.clearContent(t), a.showLoading(t);
            let l = this.optionFor(t, "content");
            if ("string" == typeof l && (l = $9970b34361e607e2$var$n(l)), !l || !$9970b34361e607e2$var$E(l)) {
                if (l = document.createElement("img"), l instanceof HTMLImageElement) {
                    let i = "", n = t.caption;
                    i = "string" == typeof n && n ? n.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${t.index + 1} of ${(null === (o = a.carousel) || void 0 === o ? void 0 : o.pages.length) || 1}`, l.src = e || "", l.alt = i, l.draggable = !1, t.srcset && l.setAttribute("srcset", t.srcset), this.instance.isOpeningSlide(t) && (l.fetchPriority = "high");
                }
                t.sizes && l.setAttribute("sizes", t.sizes);
            }
            $9970b34361e607e2$var$P(l, "fancybox-image"), t.imageEl = l, a.setContent(t, l, !1);
            t.panzoom = new $9970b34361e607e2$export$b704d075ddd20210(r, $9970b34361e607e2$var$u({
                transformParent: !0
            }, this.option("Panzoom") || {}, {
                content: l,
                width: (e, i)=>a.optionFor(t, "width", "auto", i) || "auto",
                height: (e, i)=>a.optionFor(t, "height", "auto", i) || "auto",
                wheel: ()=>{
                    const t = a.option("wheel");
                    return ("zoom" === t || "pan" == t) && t;
                },
                click: (e, i)=>{
                    var n, s;
                    if (a.isCompact || a.isClosing()) return !1;
                    if (t.index !== (null === (n = a.getSlide()) || void 0 === n ? void 0 : n.index)) return !1;
                    if (i) {
                        const t = i.composedPath()[0];
                        if ([
                            "A",
                            "BUTTON",
                            "TEXTAREA",
                            "OPTION",
                            "INPUT",
                            "SELECT",
                            "VIDEO"
                        ].includes(t.nodeName)) return !1;
                    }
                    let o = !i || i.target && (null === (s = t.contentEl) || void 0 === s ? void 0 : s.contains(i.target));
                    return a.option(o ? "contentClick" : "backdropClick") || !1;
                },
                dblClick: ()=>a.isCompact ? "toggleZoom" : a.option("contentDblClick") || !1,
                spinner: !1,
                panOnlyZoomed: !0,
                wheelLimit: 1 / 0,
                on: {
                    ready: (t)=>{
                        i(t);
                    },
                    error: ()=>{
                        s();
                    },
                    destroy: ()=>{
                        s();
                    }
                }
            }));
        });
    }
    zoomIn(t) {
        return new Promise((e, i)=>{
            const n = this.instance, s = n.container, { panzoom: o, contentEl: a, el: r } = t;
            o && o.updateMetrics();
            const l = this.getZoomInfo(t);
            if (!(l && r && a && o && s)) return void i();
            const { x: c, y: h, scale: d, opacity: u } = l, p = ()=>{
                t.state !== $9970b34361e607e2$var$lt.Closing && (u && (a.style.opacity = Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - d)), 0) + ""), o.scale >= 1 && o.scale > o.targetScale - .1 && e(o));
            }, f = (t)=>{
                (t.scale < .99 || t.scale > 1.01) && !t.isDragging || ($9970b34361e607e2$var$S(s, $9970b34361e607e2$var$yt), a.style.opacity = "", t.off("endAnimation", f), t.off("touchStart", f), t.off("afterTransform", p), e(t));
            };
            o.on("endAnimation", f), o.on("touchStart", f), o.on("afterTransform", p), o.on([
                "error",
                "destroy"
            ], ()=>{
                i();
            }), o.panTo({
                x: c,
                y: h,
                scale: d,
                friction: 0,
                ignoreBounds: !0
            }), o.stop("current");
            const g = {
                event: "mousemove" === o.panMode ? n.prevMouseMoveEvent || n.options.event : void 0
            }, m = this.optionFor(t, "initialSize");
            $9970b34361e607e2$var$P(s, $9970b34361e607e2$var$yt), n.hideLoading(t), "full" === m ? o.zoomToFull(g) : "cover" === m ? o.zoomToCover(g) : "max" === m ? o.zoomToMax(g) : o.reset(.172);
        });
    }
    getZoomInfo(t) {
        const { el: e, imageEl: i, thumbEl: n, panzoom: s } = t, o = this.instance, a = o.container;
        if (!e || !i || !n || !s || $9970b34361e607e2$var$tt(n) < 3 || !this.optionFor(t, "zoom") || !a || o.state === $9970b34361e607e2$var$rt.Destroy) return !1;
        if ("0" === getComputedStyle(a).getPropertyValue("--f-images-zoom")) return !1;
        const r = window.visualViewport || null;
        if (1 !== (r ? r.scale : 1)) return !1;
        let { top: l, left: c, width: h, height: d } = n.getBoundingClientRect(), { top: u, left: p, fitWidth: f, fitHeight: g } = s.contentRect;
        if (!(h && d && f && g)) return !1;
        const m = s.container.getBoundingClientRect();
        p += m.left, u += m.top;
        const v = -1 * (p + .5 * f - (c + .5 * h)), b = -1 * (u + .5 * g - (l + .5 * d)), y = h / f;
        let w = this.option("zoomOpacity") || !1;
        return "auto" === w && (w = Math.abs(h / d - f / g) > .1), {
            x: v,
            y: b,
            scale: y,
            opacity: w
        };
    }
    attach() {
        const t = this, e = t.instance;
        e.on("Carousel.change", t.onChange), e.on("Carousel.createSlide", t.onCreateSlide), e.on("Carousel.removeSlide", t.onRemoveSlide), e.on("close", t.onClose);
    }
    detach() {
        const t = this, e = t.instance;
        e.off("Carousel.change", t.onChange), e.off("Carousel.createSlide", t.onCreateSlide), e.off("Carousel.removeSlide", t.onRemoveSlide), e.off("close", t.onClose);
    }
}
Object.defineProperty($9970b34361e607e2$var$wt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
        initialSize: "fit",
        Panzoom: {
            maxScale: 1
        },
        protected: !1,
        zoom: !0,
        zoomOpacity: "auto"
    }
}), "function" == typeof SuppressedError && SuppressedError;
const $9970b34361e607e2$var$xt = "html", $9970b34361e607e2$var$Et = "image", $9970b34361e607e2$var$St = "map", $9970b34361e607e2$var$Pt = "youtube", $9970b34361e607e2$var$Ct = "vimeo", $9970b34361e607e2$var$Tt = "html5video", $9970b34361e607e2$var$Mt = (t, e = {})=>{
    const i = new URL(t), n = new URLSearchParams(i.search), s = new URLSearchParams;
    for (const [t, i] of [
        ...n,
        ...Object.entries(e)
    ]){
        let e = i + "";
        if ("t" === t) {
            let t = e.match(/((\d*)m)?(\d*)s?/);
            t && s.set("start", 60 * parseInt(t[2] || "0") + parseInt(t[3] || "0") + "");
        } else s.set(t, e);
    }
    let o = s + "", a = t.match(/#t=((.*)?\d+s)/);
    return a && (o += `#t=${a[1]}`), o;
}, $9970b34361e607e2$var$Ot = {
    ajax: null,
    autoSize: !0,
    iframeAttr: {
        allow: "autoplay; fullscreen",
        scrolling: "auto"
    },
    preload: !0,
    videoAutoplay: !0,
    videoRatio: 16 / 9,
    videoTpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
    videoFormat: "",
    vimeo: {
        byline: 1,
        color: "00adef",
        controls: 1,
        dnt: 1,
        muted: 0
    },
    youtube: {
        controls: 1,
        enablejsapi: 1,
        nocookie: 1,
        rel: 0,
        fs: 1
    }
}, $9970b34361e607e2$var$At = [
    "image",
    "html",
    "ajax",
    "inline",
    "clone",
    "iframe",
    "map",
    "pdf",
    "html5video",
    "youtube",
    "vimeo"
];
class $9970b34361e607e2$var$Lt extends $9970b34361e607e2$var$_ {
    onBeforeInitSlide(t, e, i) {
        this.processType(i);
    }
    onCreateSlide(t, e, i) {
        this.setContent(i);
    }
    onClearContent(t, e) {
        e.xhr && (e.xhr.abort(), e.xhr = null);
        const i = e.iframeEl;
        i && (i.onload = i.onerror = null, i.src = "//about:blank", e.iframeEl = null);
        const n = e.contentEl, s = e.placeholderEl;
        if ("inline" === e.type && n && s) n.classList.remove("fancybox__content"), "none" !== getComputedStyle(n).getPropertyValue("display") && (n.style.display = "none"), setTimeout(()=>{
            s && (n && s.parentNode && s.parentNode.insertBefore(n, s), s.remove());
        }, 0), e.contentEl = void 0, e.placeholderEl = void 0;
        else for(; e.el && e.el.firstChild;)e.el.removeChild(e.el.firstChild);
    }
    onSelectSlide(t, e, i) {
        i.state === $9970b34361e607e2$var$lt.Ready && this.playVideo();
    }
    onUnselectSlide(t, e, i) {
        var n, s;
        if (i.type === $9970b34361e607e2$var$Tt) {
            try {
                null === (s = null === (n = i.el) || void 0 === n ? void 0 : n.querySelector("video")) || void 0 === s || s.pause();
            } catch (t) {}
            return;
        }
        let o;
        i.type === $9970b34361e607e2$var$Ct ? o = {
            method: "pause",
            value: "true"
        } : i.type === $9970b34361e607e2$var$Pt && (o = {
            event: "command",
            func: "pauseVideo"
        }), o && i.iframeEl && i.iframeEl.contentWindow && i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"), i.poller && clearTimeout(i.poller);
    }
    onDone(t, e) {
        t.isCurrentSlide(e) && !t.isClosing() && this.playVideo();
    }
    onRefresh(t, e) {
        e.slides.forEach((t)=>{
            t.el && (this.resizeIframe(t), this.setAspectRatio(t));
        });
    }
    onMessage(t) {
        try {
            let e = JSON.parse(t.data);
            if ("https://player.vimeo.com" === t.origin) {
                if ("ready" === e.event) for (let e of Array.from(document.getElementsByClassName("fancybox__iframe")))e instanceof HTMLIFrameElement && e.contentWindow === t.source && (e.dataset.ready = "true");
            } else if (t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === e.event) {
                const t = document.getElementById(e.id);
                t && (t.dataset.ready = "true");
            }
        } catch (t) {}
    }
    loadAjaxContent(t) {
        const e = this.instance.optionFor(t, "src") || "";
        this.instance.showLoading(t);
        const i = this.instance, n = new XMLHttpRequest;
        i.showLoading(t), n.onreadystatechange = function() {
            n.readyState === XMLHttpRequest.DONE && i.state === $9970b34361e607e2$var$rt.Ready && (i.hideLoading(t), 200 === n.status ? i.setContent(t, n.responseText) : i.setError(t, 404 === n.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
        };
        const s = t.ajax || null;
        n.open(s ? "POST" : "GET", e + ""), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(s), t.xhr = n;
    }
    setInlineContent(t) {
        let e = null;
        if ($9970b34361e607e2$var$E(t.src)) e = t.src;
        else if ("string" == typeof t.src) {
            const i = t.src.split("#", 2).pop();
            e = i ? document.getElementById(i) : null;
        }
        if (e) {
            if ("clone" === t.type || e.closest(".fancybox__slide")) {
                e = e.cloneNode(!0);
                const i = e.dataset.animationName;
                i && (e.classList.remove(i), delete e.dataset.animationName);
                let n = e.getAttribute("id");
                n = n ? `${n}--clone` : `clone-${this.instance.id}-${t.index}`, e.setAttribute("id", n);
            } else if (e.parentNode) {
                const i = document.createElement("div");
                i.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(i, e), t.placeholderEl = i;
            }
            this.instance.setContent(t, e);
        } else this.instance.setError(t, "{{ELEMENT_NOT_FOUND}}");
    }
    setIframeContent(t) {
        const { src: e, el: i } = t;
        if (!e || "string" != typeof e || !i) return;
        i.classList.add("is-loading");
        const n = this.instance, s = document.createElement("iframe");
        s.className = "fancybox__iframe", s.setAttribute("id", `fancybox__iframe_${n.id}_${t.index}`);
        for (const [e, i] of Object.entries(this.optionFor(t, "iframeAttr") || {}))s.setAttribute(e, i);
        s.onerror = ()=>{
            n.setError(t, "{{IFRAME_ERROR}}");
        }, t.iframeEl = s;
        const o = this.optionFor(t, "preload");
        if ("iframe" !== t.type || !1 === o) return s.setAttribute("src", t.src + ""), n.setContent(t, s, !1), this.resizeIframe(t), void n.revealContent(t);
        n.showLoading(t), s.onload = ()=>{
            if (!s.src.length) return;
            const e = "true" !== s.dataset.ready;
            s.dataset.ready = "true", this.resizeIframe(t), e ? n.revealContent(t) : n.hideLoading(t);
        }, s.setAttribute("src", e), n.setContent(t, s, !1);
    }
    resizeIframe(t) {
        const { type: e, iframeEl: i } = t;
        if (e === $9970b34361e607e2$var$Pt || e === $9970b34361e607e2$var$Ct) return;
        const n = null == i ? void 0 : i.parentElement;
        if (!i || !n) return;
        let s = t.autoSize;
        void 0 === s && (s = this.optionFor(t, "autoSize"));
        let o = t.width || 0, a = t.height || 0;
        o && a && (s = !1);
        const r = n && n.style;
        if (!1 !== t.preload && !1 !== s && r) try {
            const t = window.getComputedStyle(n), e = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight), s = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom), l = i.contentWindow;
            if (l) {
                const t = l.document, i = t.getElementsByTagName($9970b34361e607e2$var$xt)[0], n = t.body;
                r.width = "", n.style.overflow = "hidden", o = o || i.scrollWidth + e, r.width = `${o}px`, n.style.overflow = "", r.flex = "0 0 auto", r.height = `${n.scrollHeight}px`, a = i.scrollHeight + s;
            }
        } catch (t) {}
        if (o || a) {
            const t = {
                flex: "0 1 auto",
                width: "",
                height: ""
            };
            o && "auto" !== o && (t.width = `${o}px`), a && "auto" !== a && (t.height = `${a}px`), Object.assign(r, t);
        }
    }
    playVideo() {
        const t = this.instance.getSlide();
        if (!t) return;
        const { el: e } = t;
        if (!e || !e.offsetParent) return;
        if (!this.optionFor(t, "videoAutoplay")) return;
        if (t.type === $9970b34361e607e2$var$Tt) try {
            const t = e.querySelector("video");
            if (t) {
                const e = t.play();
                void 0 !== e && e.then(()=>{}).catch((e)=>{
                    t.muted = !0, t.play();
                });
            }
        } catch (t) {}
        if (t.type !== $9970b34361e607e2$var$Pt && t.type !== $9970b34361e607e2$var$Ct) return;
        const i = ()=>{
            if (t.iframeEl && t.iframeEl.contentWindow) {
                let e;
                if ("true" === t.iframeEl.dataset.ready) return e = t.type === $9970b34361e607e2$var$Pt ? {
                    event: "command",
                    func: "playVideo"
                } : {
                    method: "play",
                    value: "true"
                }, e && t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"), void (t.poller = void 0);
                t.type === $9970b34361e607e2$var$Pt && (e = {
                    event: "listening",
                    id: t.iframeEl.getAttribute("id")
                }, t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"));
            }
            t.poller = setTimeout(i, 250);
        };
        i();
    }
    processType(t) {
        if (t.html) return t.type = $9970b34361e607e2$var$xt, t.src = t.html, void (t.html = "");
        const e = this.instance.optionFor(t, "src", "");
        if (!e || "string" != typeof e) return;
        let i = t.type, n = null;
        if (n = e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
            const s = this.optionFor(t, $9970b34361e607e2$var$Pt), { nocookie: o } = s, a = function(t, e) {
                var i = {};
                for(var n in t)Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var s = 0;
                    for(n = Object.getOwnPropertySymbols(t); s < n.length; s++)e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]]);
                }
                return i;
            }(s, [
                "nocookie"
            ]), r = `www.youtube${o ? "-nocookie" : ""}.com`, l = $9970b34361e607e2$var$Mt(e, a), c = encodeURIComponent(n[2]);
            t.videoId = c, t.src = `https://${r}/embed/${c}?${l}`, t.thumbSrc = t.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`, i = $9970b34361e607e2$var$Pt;
        } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
            const s = $9970b34361e607e2$var$Mt(e, this.optionFor(t, $9970b34361e607e2$var$Ct)), o = encodeURIComponent(n[1]), a = n[4] || "";
            t.videoId = o, t.src = `https://player.vimeo.com/video/${o}?${a ? `h=${a}${s ? "&" : ""}` : ""}${s}`, i = $9970b34361e607e2$var$Ct;
        }
        if (!i && t.triggerEl) {
            const e = t.triggerEl.dataset.type;
            $9970b34361e607e2$var$At.includes(e) && (i = e);
        }
        i || "string" == typeof e && ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = $9970b34361e607e2$var$Tt, t.videoFormat = t.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = $9970b34361e607e2$var$Et : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")), (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = `https://maps.google.${n[1]}/?ll=${(n[2] ? n[2] + "&z=" + Math.floor(parseFloat(n[3])) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&")}&output=${n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, i = $9970b34361e607e2$var$St) : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = `https://maps.google.${n[1]}/maps?q=${n[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, i = $9970b34361e607e2$var$St), i = i || this.instance.option("defaultType"), t.type = i, i === $9970b34361e607e2$var$Et && (t.thumbSrc = t.thumbSrc || t.src);
    }
    setContent(t) {
        const e = this.instance.optionFor(t, "src") || "";
        if (t && t.type && e) {
            switch(t.type){
                case $9970b34361e607e2$var$xt:
                    this.instance.setContent(t, e);
                    break;
                case $9970b34361e607e2$var$Tt:
                    const i = this.option("videoTpl");
                    i && this.instance.setContent(t, i.replace(/\{\{src\}\}/gi, e + "").replace(/\{\{format\}\}/gi, this.optionFor(t, "videoFormat") || "").replace(/\{\{poster\}\}/gi, t.poster || t.thumbSrc || ""));
                    break;
                case "inline":
                case "clone":
                    this.setInlineContent(t);
                    break;
                case "ajax":
                    this.loadAjaxContent(t);
                    break;
                case "pdf":
                case $9970b34361e607e2$var$St:
                case $9970b34361e607e2$var$Pt:
                case $9970b34361e607e2$var$Ct:
                    t.preload = !1;
                case "iframe":
                    this.setIframeContent(t);
            }
            this.setAspectRatio(t);
        }
    }
    setAspectRatio(t) {
        const e = t.contentEl;
        if (!(t.el && e && t.type && [
            $9970b34361e607e2$var$Pt,
            $9970b34361e607e2$var$Ct,
            $9970b34361e607e2$var$Tt
        ].includes(t.type))) return;
        let i, n = t.width || "auto", s = t.height || "auto";
        if ("auto" === n || "auto" === s) {
            i = this.optionFor(t, "videoRatio");
            const e = (i + "").match(/(\d+)\s*\/\s?(\d+)/);
            i = e && e.length > 2 ? parseFloat(e[1]) / parseFloat(e[2]) : parseFloat(i + "");
        } else n && s && (i = n / s);
        if (!i) return;
        e.style.aspectRatio = "", e.style.width = "", e.style.height = "", e.offsetHeight;
        const o = e.getBoundingClientRect(), a = o.width || 1, r = o.height || 1;
        e.style.aspectRatio = i + "", i < a / r ? (s = "auto" === s ? r : Math.min(r, s), e.style.width = "auto", e.style.height = `${s}px`) : (n = "auto" === n ? a : Math.min(a, n), e.style.width = `${n}px`, e.style.height = "auto");
    }
    attach() {
        const t = this, e = t.instance;
        e.on("Carousel.beforeInitSlide", t.onBeforeInitSlide), e.on("Carousel.createSlide", t.onCreateSlide), e.on("Carousel.selectSlide", t.onSelectSlide), e.on("Carousel.unselectSlide", t.onUnselectSlide), e.on("Carousel.Panzoom.refresh", t.onRefresh), e.on("done", t.onDone), e.on("clearContent", t.onClearContent), window.addEventListener("message", t.onMessage);
    }
    detach() {
        const t = this, e = t.instance;
        e.off("Carousel.beforeInitSlide", t.onBeforeInitSlide), e.off("Carousel.createSlide", t.onCreateSlide), e.off("Carousel.selectSlide", t.onSelectSlide), e.off("Carousel.unselectSlide", t.onUnselectSlide), e.off("Carousel.Panzoom.refresh", t.onRefresh), e.off("done", t.onDone), e.off("clearContent", t.onClearContent), window.removeEventListener("message", t.onMessage);
    }
}
Object.defineProperty($9970b34361e607e2$var$Lt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: $9970b34361e607e2$var$Ot
});
const $9970b34361e607e2$var$zt = "play", $9970b34361e607e2$var$Rt = "pause", $9970b34361e607e2$var$kt = "ready";
class $9970b34361e607e2$var$It extends $9970b34361e607e2$var$_ {
    constructor(){
        super(...arguments), Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: $9970b34361e607e2$var$kt
        }), Object.defineProperty(this, "inHover", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }), Object.defineProperty(this, "timer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "progressBar", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        });
    }
    get isActive() {
        return this.state !== $9970b34361e607e2$var$kt;
    }
    onReady(t) {
        this.option("autoStart") && (t.isInfinite || t.page < t.pages.length - 1) && this.start();
    }
    onChange() {
        this.removeProgressBar(), this.pause();
    }
    onSettle() {
        this.resume();
    }
    onVisibilityChange() {
        "visible" === document.visibilityState ? this.resume() : this.pause();
    }
    onMouseEnter() {
        this.inHover = !0, this.pause();
    }
    onMouseLeave() {
        var t;
        this.inHover = !1, (null === (t = this.instance.panzoom) || void 0 === t ? void 0 : t.isResting) && this.resume();
    }
    onTimerEnd() {
        const t = this.instance;
        "play" === this.state && (t.isInfinite || t.page !== t.pages.length - 1 ? t.slideNext() : t.slideTo(0));
    }
    removeProgressBar() {
        this.progressBar && (this.progressBar.remove(), this.progressBar = null);
    }
    createProgressBar() {
        var t;
        if (!this.option("showProgress")) return null;
        this.removeProgressBar();
        const e = this.instance, i = (null === (t = e.pages[e.page]) || void 0 === t ? void 0 : t.slides) || [];
        let n = this.option("progressParentEl");
        if (n || (n = (1 === i.length ? i[0].el : null) || e.viewport), !n) return null;
        const s = document.createElement("div");
        return $9970b34361e607e2$var$P(s, "f-progress"), n.prepend(s), this.progressBar = s, s.offsetHeight, s;
    }
    set() {
        const t = this, e = t.instance;
        if (e.pages.length < 2) return;
        if (t.timer) return;
        const i = t.option("timeout");
        t.state = $9970b34361e607e2$var$zt, $9970b34361e607e2$var$P(e.container, "has-autoplay");
        let n = t.createProgressBar();
        n && (n.style.transitionDuration = `${i}ms`, n.style.transform = "scaleX(1)"), t.timer = setTimeout(()=>{
            t.timer = null, t.inHover || t.onTimerEnd();
        }, i), t.emit("set");
    }
    clear() {
        const t = this;
        t.timer && (clearTimeout(t.timer), t.timer = null), t.removeProgressBar();
    }
    start() {
        const t = this;
        if (t.set(), t.state !== $9970b34361e607e2$var$kt) {
            if (t.option("pauseOnHover")) {
                const e = t.instance.container;
                e.addEventListener("mouseenter", t.onMouseEnter, !1), e.addEventListener("mouseleave", t.onMouseLeave, !1);
            }
            document.addEventListener("visibilitychange", t.onVisibilityChange, !1), t.emit("start");
        }
    }
    stop() {
        const t = this, e = t.state, i = t.instance.container;
        t.clear(), t.state = $9970b34361e607e2$var$kt, i.removeEventListener("mouseenter", t.onMouseEnter, !1), i.removeEventListener("mouseleave", t.onMouseLeave, !1), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), $9970b34361e607e2$var$S(i, "has-autoplay"), e !== $9970b34361e607e2$var$kt && t.emit("stop");
    }
    pause() {
        const t = this;
        t.state === $9970b34361e607e2$var$zt && (t.state = $9970b34361e607e2$var$Rt, t.clear(), t.emit($9970b34361e607e2$var$Rt));
    }
    resume() {
        const t = this, e = t.instance;
        if (e.isInfinite || e.page !== e.pages.length - 1) {
            if (t.state !== $9970b34361e607e2$var$zt) {
                if (t.state === $9970b34361e607e2$var$Rt && !t.inHover) {
                    const e = new Event("resume", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    t.emit("resume", e), e.defaultPrevented || t.set();
                }
            } else t.set();
        } else t.stop();
    }
    toggle() {
        this.state === $9970b34361e607e2$var$zt || this.state === $9970b34361e607e2$var$Rt ? this.stop() : this.start();
    }
    attach() {
        const t = this, e = t.instance;
        e.on("ready", t.onReady), e.on("Panzoom.startAnimation", t.onChange), e.on("Panzoom.endAnimation", t.onSettle), e.on("Panzoom.touchMove", t.onChange);
    }
    detach() {
        const t = this, e = t.instance;
        e.off("ready", t.onReady), e.off("Panzoom.startAnimation", t.onChange), e.off("Panzoom.endAnimation", t.onSettle), e.off("Panzoom.touchMove", t.onChange), t.stop();
    }
}
Object.defineProperty($9970b34361e607e2$var$It, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
        autoStart: !0,
        pauseOnHover: !0,
        progressParentEl: null,
        showProgress: !0,
        timeout: 3e3
    }
});
class $9970b34361e607e2$var$Dt extends $9970b34361e607e2$var$_ {
    constructor(){
        super(...arguments), Object.defineProperty(this, "ref", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        });
    }
    onPrepare(t) {
        const e = t.carousel;
        if (!e) return;
        const i = t.container;
        i && (e.options.Autoplay = $9970b34361e607e2$var$u({
            autoStart: !1
        }, this.option("Autoplay") || {}, {
            pauseOnHover: !1,
            timeout: this.option("timeout"),
            progressParentEl: ()=>this.option("progressParentEl") || null,
            on: {
                start: ()=>{
                    t.emit("startSlideshow");
                },
                set: (e)=>{
                    var n;
                    i.classList.add("has-slideshow"), (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) !== $9970b34361e607e2$var$lt.Ready && e.pause();
                },
                stop: ()=>{
                    i.classList.remove("has-slideshow"), t.isCompact || t.endIdle(), t.emit("endSlideshow");
                },
                resume: (e, i)=>{
                    var n, s, o;
                    !i || !i.cancelable || (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) === $9970b34361e607e2$var$lt.Ready && (null === (o = null === (s = t.carousel) || void 0 === s ? void 0 : s.panzoom) || void 0 === o ? void 0 : o.isResting) || i.preventDefault();
                }
            }
        }), e.attachPlugins({
            Autoplay: $9970b34361e607e2$var$It
        }), this.ref = e.plugins.Autoplay);
    }
    onReady(t) {
        const e = t.carousel, i = this.ref;
        i && e && this.option("playOnStart") && (e.isInfinite || e.page < e.pages.length - 1) && i.start();
    }
    onDone(t, e) {
        const i = this.ref, n = t.carousel;
        if (!i || !n) return;
        const s = e.panzoom;
        s && s.on("startAnimation", ()=>{
            t.isCurrentSlide(e) && i.stop();
        }), t.isCurrentSlide(e) && i.resume();
    }
    onKeydown(t, e) {
        var i;
        const n = this.ref;
        n && e === this.option("key") && "BUTTON" !== (null === (i = document.activeElement) || void 0 === i ? void 0 : i.nodeName) && n.toggle();
    }
    attach() {
        const t = this, e = t.instance;
        e.on("Carousel.init", t.onPrepare), e.on("Carousel.ready", t.onReady), e.on("done", t.onDone), e.on("keydown", t.onKeydown);
    }
    detach() {
        const t = this, e = t.instance;
        e.off("Carousel.init", t.onPrepare), e.off("Carousel.ready", t.onReady), e.off("done", t.onDone), e.off("keydown", t.onKeydown);
    }
}
Object.defineProperty($9970b34361e607e2$var$Dt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
        key: " ",
        playOnStart: !1,
        progressParentEl: (t)=>{
            var e;
            return (null === (e = t.instance.container) || void 0 === e ? void 0 : e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t.instance.container;
        },
        timeout: 3e3
    }
});
const $9970b34361e607e2$var$Ft = {
    classes: {
        container: "f-thumbs f-carousel__thumbs",
        viewport: "f-thumbs__viewport",
        track: "f-thumbs__track",
        slide: "f-thumbs__slide",
        isResting: "is-resting",
        isSelected: "is-selected",
        isLoading: "is-loading",
        hasThumbs: "has-thumbs"
    },
    minCount: 2,
    parentEl: null,
    thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
    type: "modern"
};
var $9970b34361e607e2$var$jt;
!function(t) {
    t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Hidden = 2] = "Hidden";
}($9970b34361e607e2$var$jt || ($9970b34361e607e2$var$jt = {}));
const $9970b34361e607e2$var$Bt = "isResting", $9970b34361e607e2$var$Ht = "thumbWidth", $9970b34361e607e2$var$Nt = "thumbHeight", $9970b34361e607e2$var$_t = "thumbClipWidth";
let $9970b34361e607e2$var$$t = class extends $9970b34361e607e2$var$_ {
    constructor(){
        super(...arguments), Object.defineProperty(this, "type", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "modern"
        }), Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "track", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "carousel", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "thumbWidth", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), Object.defineProperty(this, "thumbClipWidth", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), Object.defineProperty(this, "thumbHeight", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), Object.defineProperty(this, "thumbGap", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), Object.defineProperty(this, "thumbExtraGap", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: $9970b34361e607e2$var$jt.Init
        });
    }
    get isModern() {
        return "modern" === this.type;
    }
    onInitSlide(t, e) {
        const i = e.el ? e.el.dataset : void 0;
        i && (e.thumbSrc = i.thumbSrc || e.thumbSrc || "", e[$9970b34361e607e2$var$_t] = parseFloat(i[$9970b34361e607e2$var$_t] || "") || e[$9970b34361e607e2$var$_t] || 0, e[$9970b34361e607e2$var$Nt] = parseFloat(i.thumbHeight || "") || e[$9970b34361e607e2$var$Nt] || 0), this.addSlide(e);
    }
    onInitSlides() {
        this.build();
    }
    onChange() {
        var t;
        if (!this.isModern) return;
        const e = this.container, i = this.instance, n = i.panzoom, s = this.carousel, a = s ? s.panzoom : null, r = i.page;
        if (n && s && a) {
            if (n.isDragging) {
                $9970b34361e607e2$var$S(e, this.cn($9970b34361e607e2$var$Bt));
                let n = (null === (t = s.pages[r]) || void 0 === t ? void 0 : t.pos) || 0;
                n += i.getProgress(r) * (this[$9970b34361e607e2$var$_t] + this.thumbGap);
                let o = a.getBounds();
                -1 * n > o.x.min && -1 * n < o.x.max && a.panTo({
                    x: -1 * n,
                    friction: .12
                });
            } else $9970b34361e607e2$var$o(e, this.cn($9970b34361e607e2$var$Bt), n.isResting);
            this.shiftModern();
        }
    }
    onRefresh() {
        this.updateProps();
        for (const t of this.instance.slides || [])this.resizeModernSlide(t);
        this.shiftModern();
    }
    isDisabled() {
        const t = this.option("minCount") || 0;
        if (t) {
            const e = this.instance;
            let i = 0;
            for (const t of e.slides || [])t.thumbSrc && i++;
            if (i < t) return !0;
        }
        const e = this.option("type");
        return [
            "modern",
            "classic"
        ].indexOf(e) < 0;
    }
    getThumb(t) {
        const e = this.option("thumbTpl") || "";
        return {
            html: this.instance.localize(e, [
                [
                    "%i",
                    t.index
                ],
                [
                    "%d",
                    t.index + 1
                ],
                [
                    "%s",
                    t.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                ]
            ])
        };
    }
    addSlide(t) {
        const e = this.carousel;
        e && e.addSlide(t.index, this.getThumb(t));
    }
    getSlides() {
        const t = [];
        for (const e of this.instance.slides || [])t.push(this.getThumb(e));
        return t;
    }
    resizeModernSlide(t) {
        this.isModern && (t[$9970b34361e607e2$var$Ht] = t[$9970b34361e607e2$var$_t] && t[$9970b34361e607e2$var$Nt] ? Math.round(this[$9970b34361e607e2$var$Nt] * (t[$9970b34361e607e2$var$_t] / t[$9970b34361e607e2$var$Nt])) : this[$9970b34361e607e2$var$Ht]);
    }
    updateProps() {
        const t = this.container;
        if (!t) return;
        const e = (e)=>parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-" + e)) || 0;
        this.thumbGap = e("gap"), this.thumbExtraGap = e("extra-gap"), this[$9970b34361e607e2$var$Ht] = e("width") || 40, this[$9970b34361e607e2$var$_t] = e("clip-width") || 40, this[$9970b34361e607e2$var$Nt] = e("height") || 40;
    }
    build() {
        const t = this;
        if (t.state !== $9970b34361e607e2$var$jt.Init) return;
        if (t.isDisabled()) return void t.emit("disabled");
        const e = t.instance, i = e.container, n = t.getSlides(), s = t.option("type");
        t.type = s;
        const o = t.option("parentEl"), a = t.cn("container"), r = t.cn("track");
        let l = null == o ? void 0 : o.querySelector("." + a);
        l || (l = document.createElement("div"), $9970b34361e607e2$var$P(l, a), o ? o.appendChild(l) : i.after(l)), $9970b34361e607e2$var$P(l, `is-${s}`), $9970b34361e607e2$var$P(i, t.cn("hasThumbs")), t.container = l, t.updateProps();
        let c = l.querySelector("." + r);
        c || (c = document.createElement("div"), $9970b34361e607e2$var$P(c, t.cn("track")), l.appendChild(c)), t.track = c;
        const h = $9970b34361e607e2$var$u({}, {
            track: c,
            infinite: !1,
            center: !0,
            fill: "classic" === s,
            dragFree: !0,
            slidesPerPage: 1,
            transition: !1,
            preload: .25,
            friction: .12,
            Panzoom: {
                maxVelocity: 0
            },
            Dots: !1,
            Navigation: !1,
            classes: {
                container: "f-thumbs",
                viewport: "f-thumbs__viewport",
                track: "f-thumbs__track",
                slide: "f-thumbs__slide"
            }
        }, t.option("Carousel") || {}, {
            Sync: {
                target: e
            },
            slides: n
        }), d = new e.constructor(l, h);
        d.on("createSlide", (e, i)=>{
            t.setProps(i.index), t.emit("createSlide", i, i.el);
        }), d.on("ready", ()=>{
            t.shiftModern(), t.emit("ready");
        }), d.on("refresh", ()=>{
            t.shiftModern();
        }), d.on("Panzoom.click", (e, i, n)=>{
            t.onClick(n);
        }), t.carousel = d, t.state = $9970b34361e607e2$var$jt.Ready;
    }
    onClick(t) {
        t.preventDefault(), t.stopPropagation();
        const e = this.instance, { pages: i, page: n } = e, s = (t)=>{
            if (t) {
                const e = t.closest("[data-carousel-index]");
                if (e) return [
                    parseInt(e.dataset.carouselIndex || "", 10) || 0,
                    e
                ];
            }
            return [
                -1,
                void 0
            ];
        }, o = (t, e)=>{
            const i = document.elementFromPoint(t, e);
            return i ? s(i) : [
                -1,
                void 0
            ];
        };
        let [a, r] = s(t.target);
        if (a > -1) return;
        const l = this[$9970b34361e607e2$var$_t], c = t.clientX, h = t.clientY;
        let [d, u] = o(c - l, h), [p, f] = o(c + l, h);
        u && f ? (a = Math.abs(c - u.getBoundingClientRect().right) < Math.abs(c - f.getBoundingClientRect().left) ? d : p, a === n && (a = a === d ? p : d)) : u ? a = d : f && (a = p), a > -1 && i[a] && e.slideTo(a);
    }
    getShift(t) {
        var e;
        const i = this, { instance: n } = i, s = i.carousel;
        if (!n || !s) return 0;
        const o = i[$9970b34361e607e2$var$Ht], a = i[$9970b34361e607e2$var$_t], r = i.thumbGap, l = i.thumbExtraGap;
        if (!(null === (e = s.slides[t]) || void 0 === e ? void 0 : e.el)) return 0;
        const c = .5 * (o - a), h = n.pages.length - 1;
        let d = n.getProgress(0), u = n.getProgress(h), p = n.getProgress(t, !1, !0), f = 0, g = c + l + r;
        const m = d < 0 && d > -1, v = u > 0 && u < 1;
        return 0 === t ? (f = g * Math.abs(d), v && 1 === d && (f -= g * Math.abs(u))) : t === h ? (f = g * Math.abs(u) * -1, m && -1 === u && (f += g * Math.abs(d))) : m || v ? (f = -1 * g, f += g * Math.abs(d), f += g * (1 - Math.abs(u))) : f = g * p, f;
    }
    setProps(e) {
        var i;
        const n = this;
        if (!n.isModern) return;
        const { instance: s } = n, o = n.carousel;
        if (s && o) {
            const a = null === (i = o.slides[e]) || void 0 === i ? void 0 : i.el;
            if (a && a.childNodes.length) {
                let i = $9970b34361e607e2$var$t(1 - Math.abs(s.getProgress(e))), o = $9970b34361e607e2$var$t(n.getShift(e));
                a.style.setProperty("--progress", i ? i + "" : ""), a.style.setProperty("--shift", o + "");
            }
        }
    }
    shiftModern() {
        const t = this;
        if (!t.isModern) return;
        const { instance: e, track: i } = t, n = e.panzoom, s = t.carousel;
        if (!(e && i && n && s)) return;
        if (n.state === $9970b34361e607e2$var$m.Init || n.state === $9970b34361e607e2$var$m.Destroy) return;
        for (const i of e.slides)t.setProps(i.index);
        let o = (t[$9970b34361e607e2$var$_t] + t.thumbGap) * (s.slides.length || 0);
        i.style.setProperty("--width", o + "");
    }
    cleanup() {
        const t = this;
        t.carousel && t.carousel.destroy(), t.carousel = null, t.container && t.container.remove(), t.container = null, t.track && t.track.remove(), t.track = null, t.state = $9970b34361e607e2$var$jt.Init, $9970b34361e607e2$var$S(t.instance.container, t.cn("hasThumbs"));
    }
    attach() {
        const t = this, e = t.instance;
        e.on("initSlide", t.onInitSlide), e.state === $9970b34361e607e2$var$B.Init ? e.on("initSlides", t.onInitSlides) : t.onInitSlides(), e.on([
            "change",
            "Panzoom.afterTransform"
        ], t.onChange), e.on("Panzoom.refresh", t.onRefresh);
    }
    detach() {
        const t = this, e = t.instance;
        e.off("initSlide", t.onInitSlide), e.off("initSlides", t.onInitSlides), e.off([
            "change",
            "Panzoom.afterTransform"
        ], t.onChange), e.off("Panzoom.refresh", t.onRefresh), t.cleanup();
    }
};
Object.defineProperty($9970b34361e607e2$var$$t, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: $9970b34361e607e2$var$Ft
});
const $9970b34361e607e2$var$Wt = Object.assign(Object.assign({}, $9970b34361e607e2$var$Ft), {
    key: "t",
    showOnStart: !0,
    parentEl: null
}), $9970b34361e607e2$var$Xt = "is-masked", $9970b34361e607e2$var$qt = "aria-hidden";
class $9970b34361e607e2$var$Yt extends $9970b34361e607e2$var$_ {
    constructor(){
        super(...arguments), Object.defineProperty(this, "ref", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "hidden", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        });
    }
    get isEnabled() {
        const t = this.ref;
        return t && !t.isDisabled();
    }
    get isHidden() {
        return this.hidden;
    }
    onClick(t, e) {
        e.stopPropagation();
    }
    onCreateSlide(t, e) {
        var i, n, s;
        const o = (null === (s = null === (n = null === (i = this.instance) || void 0 === i ? void 0 : i.carousel) || void 0 === n ? void 0 : n.slides[e.index]) || void 0 === s ? void 0 : s.type) || "", a = e.el;
        if (a && o) {
            let t = `for-${o}`;
            [
                "video",
                "youtube",
                "vimeo",
                "html5video"
            ].includes(o) && (t += " for-video"), $9970b34361e607e2$var$P(a, t);
        }
    }
    onInit() {
        var t;
        const e = this, i = e.instance, n = i.carousel;
        if (e.ref || !n) return;
        const s = e.option("parentEl") || i.footer || i.container;
        if (!s) return;
        const o = $9970b34361e607e2$var$u({}, e.options, {
            parentEl: s,
            classes: {
                container: "f-thumbs fancybox__thumbs"
            },
            Carousel: {
                Sync: {
                    friction: i.option("Carousel.friction") || 0
                }
            },
            on: {
                ready: (t)=>{
                    const i = t.container;
                    i && this.hidden && (e.refresh(), i.style.transition = "none", e.hide(), i.offsetHeight, queueMicrotask(()=>{
                        i.style.transition = "", e.show();
                    }));
                }
            }
        });
        o.Carousel = o.Carousel || {}, o.Carousel.on = $9970b34361e607e2$var$u((null === (t = e.options.Carousel) || void 0 === t ? void 0 : t.on) || {}, {
            click: this.onClick,
            createSlide: this.onCreateSlide
        }), n.options.Thumbs = o, n.attachPlugins({
            Thumbs: $9970b34361e607e2$var$$t
        }), e.ref = n.plugins.Thumbs, e.option("showOnStart") || (e.ref.state = $9970b34361e607e2$var$jt.Hidden, e.hidden = !0);
    }
    onResize() {
        var t;
        const e = null === (t = this.ref) || void 0 === t ? void 0 : t.container;
        e && (e.style.maxHeight = "");
    }
    onKeydown(t, e) {
        const i = this.option("key");
        i && i === e && this.toggle();
    }
    toggle() {
        const t = this.ref;
        if (t && !t.isDisabled()) return t.state === $9970b34361e607e2$var$jt.Hidden ? (t.state = $9970b34361e607e2$var$jt.Init, void t.build()) : void (this.hidden ? this.show() : this.hide());
    }
    show() {
        const t = this.ref;
        if (!t || t.isDisabled()) return;
        const e = t.container;
        e && (this.refresh(), e.offsetHeight, e.removeAttribute($9970b34361e607e2$var$qt), e.classList.remove($9970b34361e607e2$var$Xt), this.hidden = !1);
    }
    hide() {
        const t = this.ref, e = t && t.container;
        e && (this.refresh(), e.offsetHeight, e.classList.add($9970b34361e607e2$var$Xt), e.setAttribute($9970b34361e607e2$var$qt, "true")), this.hidden = !0;
    }
    refresh() {
        const t = this.ref;
        if (!t || !t.state) return;
        const e = t.container, i = (null == e ? void 0 : e.firstChild) || null;
        e && i && i.childNodes.length && (e.style.maxHeight = `${i.getBoundingClientRect().height}px`);
    }
    attach() {
        const t = this, e = t.instance;
        e.state === $9970b34361e607e2$var$rt.Init ? e.on("Carousel.init", t.onInit) : t.onInit(), e.on("resize", t.onResize), e.on("keydown", t.onKeydown);
    }
    detach() {
        var t;
        const e = this, i = e.instance;
        i.off("Carousel.init", e.onInit), i.off("resize", e.onResize), i.off("keydown", e.onKeydown), null === (t = i.carousel) || void 0 === t || t.detachPlugins([
            "Thumbs"
        ]), e.ref = null;
    }
}
Object.defineProperty($9970b34361e607e2$var$Yt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: $9970b34361e607e2$var$Wt
});
const $9970b34361e607e2$var$Vt = {
    panLeft: {
        icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
        change: {
            panX: -100
        }
    },
    panRight: {
        icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
        change: {
            panX: 100
        }
    },
    panUp: {
        icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
        change: {
            panY: -100
        }
    },
    panDown: {
        icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
        change: {
            panY: 100
        }
    },
    zoomIn: {
        icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
        action: "zoomIn"
    },
    zoomOut: {
        icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "zoomOut"
    },
    toggle1to1: {
        icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
        action: "toggleZoom"
    },
    toggleZoom: {
        icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "toggleZoom"
    },
    iterateZoom: {
        icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "iterateZoom"
    },
    rotateCCW: {
        icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
        action: "rotateCCW"
    },
    rotateCW: {
        icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
        action: "rotateCW"
    },
    flipX: {
        icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
        action: "flipX"
    },
    flipY: {
        icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
        action: "flipY"
    },
    fitX: {
        icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
        action: "fitX"
    },
    fitY: {
        icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
        action: "fitY"
    },
    reset: {
        icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
        action: "reset"
    },
    toggleFS: {
        icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
        action: "toggleFS"
    }
};
var $9970b34361e607e2$var$Zt;
!function(t) {
    t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Disabled = 2] = "Disabled";
}($9970b34361e607e2$var$Zt || ($9970b34361e607e2$var$Zt = {}));
const $9970b34361e607e2$var$Ut = {
    absolute: "auto",
    display: {
        left: [
            "infobar"
        ],
        middle: [],
        right: [
            "iterateZoom",
            "slideshow",
            "fullscreen",
            "thumbs",
            "close"
        ]
    },
    enabled: "auto",
    items: {
        infobar: {
            tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'
        },
        download: {
            tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'
        },
        prev: {
            tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'
        },
        next: {
            tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'
        },
        slideshow: {
            tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'
        },
        fullscreen: {
            tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'
        },
        thumbs: {
            tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'
        },
        close: {
            tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'
        }
    },
    parentEl: null
}, $9970b34361e607e2$var$Gt = {
    tabindex: "-1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
}, $9970b34361e607e2$var$Kt = "has-toolbar", $9970b34361e607e2$var$Jt = "fancybox__toolbar";
class $9970b34361e607e2$var$Qt extends $9970b34361e607e2$var$_ {
    constructor(){
        super(...arguments), Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: $9970b34361e607e2$var$Zt.Init
        }), Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        });
    }
    onReady(t) {
        var e;
        if (!t.carousel) return;
        let i = this.option("display"), n = this.option("absolute"), s = this.option("enabled");
        if ("auto" === s) {
            const t = this.instance.carousel;
            let e = 0;
            if (t) for (const i of t.slides)(i.panzoom || "image" === i.type) && e++;
            e || (s = !1);
        }
        s || (i = void 0);
        let o = 0;
        const a = {
            left: [],
            middle: [],
            right: []
        };
        if (i) for (const t of [
            "left",
            "middle",
            "right"
        ])for (const n of i[t]){
            const i = this.createEl(n);
            i && (null === (e = a[t]) || void 0 === e || e.push(i), o++);
        }
        let r = null;
        if (o && (r = this.createContainer()), r) {
            for (const [t, e] of Object.entries(a)){
                const i = document.createElement("div");
                $9970b34361e607e2$var$P(i, $9970b34361e607e2$var$Jt + "__column is-" + t);
                for (const t of e)i.appendChild(t);
                "auto" !== n || "middle" !== t || e.length || (n = !0), r.appendChild(i);
            }
            !0 === n && $9970b34361e607e2$var$P(r, "is-absolute"), this.state = $9970b34361e607e2$var$Zt.Ready, this.onRefresh();
        } else this.state = $9970b34361e607e2$var$Zt.Disabled;
    }
    onClick(t) {
        var e, i;
        const n = this.instance, s = n.getSlide(), o = null == s ? void 0 : s.panzoom, a = t.target, r = a && $9970b34361e607e2$var$E(a) ? a.dataset : null;
        if (!r) return;
        if (void 0 !== r.fancyboxToggleThumbs) return t.preventDefault(), t.stopPropagation(), void (null === (e = n.plugins.Thumbs) || void 0 === e || e.toggle());
        if (void 0 !== r.fancyboxToggleFullscreen) return t.preventDefault(), t.stopPropagation(), void this.instance.toggleFullscreen();
        if (void 0 !== r.fancyboxToggleSlideshow) {
            t.preventDefault(), t.stopPropagation();
            const e = null === (i = n.carousel) || void 0 === i ? void 0 : i.plugins.Autoplay;
            let s = e.isActive;
            return o && "mousemove" === o.panMode && !s && o.reset(), void (s ? e.stop() : e.start());
        }
        const l = r.panzoomAction, c = r.panzoomChange;
        if ((c || l) && (t.preventDefault(), t.stopPropagation()), c) {
            let t = {};
            try {
                t = JSON.parse(c);
            } catch (t) {}
            o && o.applyChange(t);
        } else l && o && o[l] && o[l]();
    }
    onChange() {
        this.onRefresh();
    }
    onRefresh() {
        if (this.instance.isClosing()) return;
        const t = this.container;
        if (!t) return;
        const e = this.instance.getSlide();
        if (!e || e.state !== $9970b34361e607e2$var$lt.Ready) return;
        const i = e && !e.error && e.panzoom;
        for (const e of t.querySelectorAll("[data-panzoom-action]"))i ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
        let n = i && i.canZoomIn(), s = i && i.canZoomOut();
        for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]'))n ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
        for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]'))s ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
        for (const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')){
            s || n ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
            const t = e.querySelector("g");
            t && (t.style.display = n ? "" : "none");
        }
    }
    onDone(t, e) {
        var i;
        null === (i = e.panzoom) || void 0 === i || i.on("afterTransform", ()=>{
            this.instance.isCurrentSlide(e) && this.onRefresh();
        }), this.instance.isCurrentSlide(e) && this.onRefresh();
    }
    createContainer() {
        const t = this.instance.container;
        if (!t) return null;
        const e = this.option("parentEl") || t;
        let i = e.querySelector("." + $9970b34361e607e2$var$Jt);
        return i || (i = document.createElement("div"), $9970b34361e607e2$var$P(i, $9970b34361e607e2$var$Jt), e.prepend(i)), i.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !0
        }), t && $9970b34361e607e2$var$P(t, $9970b34361e607e2$var$Kt), this.container = i, i;
    }
    createEl(t) {
        const e = this.instance, i = e.carousel;
        if (!i) return null;
        if ("toggleFS" === t) return null;
        if ("fullscreen" === t && !$9970b34361e607e2$var$ot()) return null;
        let s = null;
        const o = i.slides.length || 0;
        let a = 0, r = 0;
        for (const t of i.slides)(t.panzoom || "image" === t.type) && a++, ("image" === t.type || t.downloadSrc) && r++;
        if (o < 2 && [
            "infobar",
            "prev",
            "next"
        ].includes(t)) return s;
        if (void 0 !== $9970b34361e607e2$var$Vt[t] && !a) return null;
        if ("download" === t && !r) return null;
        if ("thumbs" === t) {
            const t = e.plugins.Thumbs;
            if (!t || !t.isEnabled) return null;
        }
        if ("slideshow" === t) {
            if (!i.plugins.Autoplay || o < 2) return null;
        }
        if (void 0 !== $9970b34361e607e2$var$Vt[t]) {
            const e = $9970b34361e607e2$var$Vt[t];
            s = document.createElement("button"), s.setAttribute("title", this.instance.localize(`{{${t.toUpperCase()}}}`)), $9970b34361e607e2$var$P(s, "f-button"), e.action && (s.dataset.panzoomAction = e.action), e.change && (s.dataset.panzoomChange = JSON.stringify(e.change)), s.appendChild($9970b34361e607e2$var$n(this.instance.localize(e.icon)));
        } else {
            const e = (this.option("items") || [])[t];
            e && (s = $9970b34361e607e2$var$n(this.instance.localize(e.tpl)), "function" == typeof e.click && s.addEventListener("click", (t)=>{
                t.preventDefault(), t.stopPropagation(), "function" == typeof e.click && e.click.call(this, this, t);
            }));
        }
        const l = null == s ? void 0 : s.querySelector("svg");
        if (l) for (const [t, e] of Object.entries($9970b34361e607e2$var$Gt))l.getAttribute(t) || l.setAttribute(t, String(e));
        return s;
    }
    removeContainer() {
        const t = this.container;
        t && t.remove(), this.container = null, this.state = $9970b34361e607e2$var$Zt.Disabled;
        const e = this.instance.container;
        e && $9970b34361e607e2$var$S(e, $9970b34361e607e2$var$Kt);
    }
    attach() {
        const t = this, e = t.instance;
        e.on("Carousel.initSlides", t.onReady), e.on("done", t.onDone), e.on([
            "reveal",
            "Carousel.change"
        ], t.onChange), t.onReady(t.instance);
    }
    detach() {
        const t = this, e = t.instance;
        e.off("Carousel.initSlides", t.onReady), e.off("done", t.onDone), e.off([
            "reveal",
            "Carousel.change"
        ], t.onChange), t.removeContainer();
    }
}
Object.defineProperty($9970b34361e607e2$var$Qt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: $9970b34361e607e2$var$Ut
});
const $9970b34361e607e2$var$te = {
    Hash: class extends $9970b34361e607e2$var$_ {
        onReady() {
            $9970b34361e607e2$var$ht = !1;
        }
        onChange(t) {
            $9970b34361e607e2$var$ut && clearTimeout($9970b34361e607e2$var$ut);
            const { hash: e } = $9970b34361e607e2$var$pt(), { hash: i } = $9970b34361e607e2$var$ft(), n = t.isOpeningSlide(t.getSlide());
            n && ($9970b34361e607e2$var$ct = i === e ? "" : i), e && e !== i && ($9970b34361e607e2$var$ut = setTimeout(()=>{
                try {
                    if (t.state === $9970b34361e607e2$var$rt.Ready) {
                        let t = "replaceState";
                        n && !$9970b34361e607e2$var$dt && (t = "pushState", $9970b34361e607e2$var$dt = !0), window.history[t]({}, document.title, window.location.pathname + window.location.search + e);
                    }
                } catch (t) {}
            }, 300));
        }
        onClose(t) {
            if ($9970b34361e607e2$var$ut && clearTimeout($9970b34361e607e2$var$ut), !$9970b34361e607e2$var$ht && $9970b34361e607e2$var$dt) return $9970b34361e607e2$var$dt = !1, $9970b34361e607e2$var$ht = !1, void window.history.back();
            if (!$9970b34361e607e2$var$ht) try {
                window.history.replaceState({}, document.title, window.location.pathname + window.location.search + ($9970b34361e607e2$var$ct || ""));
            } catch (t) {}
        }
        attach() {
            const t = this.instance;
            t.on("ready", this.onReady), t.on([
                "Carousel.ready",
                "Carousel.change"
            ], this.onChange), t.on("close", this.onClose);
        }
        detach() {
            const t = this.instance;
            t.off("ready", this.onReady), t.off([
                "Carousel.ready",
                "Carousel.change"
            ], this.onChange), t.off("close", this.onClose);
        }
        static parseURL() {
            return $9970b34361e607e2$var$ft();
        }
        static startFromUrl() {
            $9970b34361e607e2$var$gt();
        }
        static destroy() {
            window.removeEventListener("hashchange", $9970b34361e607e2$var$vt, !1);
        }
    },
    Html: $9970b34361e607e2$var$Lt,
    Images: $9970b34361e607e2$var$wt,
    Slideshow: $9970b34361e607e2$var$Dt,
    Thumbs: $9970b34361e607e2$var$Yt,
    Toolbar: $9970b34361e607e2$var$Qt
}, $9970b34361e607e2$var$ee = "with-fancybox", $9970b34361e607e2$var$ie = "hide-scrollbar", $9970b34361e607e2$var$ne = "--fancybox-scrollbar-compensate", $9970b34361e607e2$var$se = "--fancybox-body-margin", $9970b34361e607e2$var$oe = "aria-hidden", $9970b34361e607e2$var$ae = "is-using-tab", $9970b34361e607e2$var$re = "is-animated", $9970b34361e607e2$var$le = "is-compact", $9970b34361e607e2$var$ce = "is-loading", $9970b34361e607e2$var$he = "is-opening", $9970b34361e607e2$var$de = "has-caption", $9970b34361e607e2$var$ue = "disabled", $9970b34361e607e2$var$pe = "tabindex", $9970b34361e607e2$var$fe = "download", $9970b34361e607e2$var$ge = "href", $9970b34361e607e2$var$me = "src", $9970b34361e607e2$var$ve = (t)=>"string" == typeof t, $9970b34361e607e2$var$be = function() {
    var t = window.getSelection();
    return !!t && "Range" === t.type;
};
let $9970b34361e607e2$var$ye, $9970b34361e607e2$var$we = null, $9970b34361e607e2$var$xe = null, $9970b34361e607e2$var$Ee = 0, $9970b34361e607e2$var$Se = 0, $9970b34361e607e2$var$Pe = 0, $9970b34361e607e2$var$Ce = 0;
const $9970b34361e607e2$var$Te = new Map;
let $9970b34361e607e2$var$Me = 0;
class $9970b34361e607e2$export$cb45b08d97cdc4fd extends $9970b34361e607e2$var$g {
    get isIdle() {
        return this.idle;
    }
    get isCompact() {
        return this.option("compact");
    }
    constructor(t = [], e = {}, i = {}){
        super(e), Object.defineProperty(this, "userSlides", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: []
        }), Object.defineProperty(this, "userPlugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        }), Object.defineProperty(this, "idle", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }), Object.defineProperty(this, "idleTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "clickTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "pwt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), Object.defineProperty(this, "ignoreFocusChange", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }), Object.defineProperty(this, "startedFs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }), Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: $9970b34361e607e2$var$rt.Init
        }), Object.defineProperty(this, "id", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
        }), Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "caption", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "footer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "carousel", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "lastFocus", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null
        }), Object.defineProperty(this, "prevMouseMoveEvent", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), $9970b34361e607e2$var$ye || ($9970b34361e607e2$var$ye = $9970b34361e607e2$var$ot()), this.id = e.id || ++$9970b34361e607e2$var$Me, $9970b34361e607e2$var$Te.set(this.id, this), this.userSlides = t, this.userPlugins = i, queueMicrotask(()=>{
            this.init();
        });
    }
    init() {
        if (this.state === $9970b34361e607e2$var$rt.Destroy) return;
        this.state = $9970b34361e607e2$var$rt.Init, this.attachPlugins(Object.assign(Object.assign({}, $9970b34361e607e2$export$cb45b08d97cdc4fd.Plugins), this.userPlugins)), this.emit("init"), this.emit("attachPlugins"), !0 === this.option("hideScrollbar") && (()=>{
            if (!$9970b34361e607e2$var$et) return;
            const t = document, e = t.body, i = t.documentElement;
            if (e.classList.contains($9970b34361e607e2$var$ie)) return;
            let n = window.innerWidth - i.getBoundingClientRect().width;
            const s = parseFloat(window.getComputedStyle(e).marginRight);
            n < 0 && (n = 0), i.style.setProperty($9970b34361e607e2$var$ne, `${n}px`), s && e.style.setProperty($9970b34361e607e2$var$se, `${s}px`), e.classList.add($9970b34361e607e2$var$ie);
        })(), this.initLayout(), this.scale();
        const t = ()=>{
            this.initCarousel(this.userSlides), this.state = $9970b34361e607e2$var$rt.Ready, this.attachEvents(), this.emit("ready"), setTimeout(()=>{
                this.container && this.container.setAttribute($9970b34361e607e2$var$oe, "false");
            }, 16);
        };
        this.option("Fullscreen.autoStart") && $9970b34361e607e2$var$ye && !$9970b34361e607e2$var$ye.isFullscreen() ? $9970b34361e607e2$var$ye.request().then(()=>{
            this.startedFs = !0, t();
        }).catch(()=>t()) : t();
    }
    initLayout() {
        var t, e;
        const i = this.option("parentEl") || document.body, s = $9970b34361e607e2$var$n(this.localize(this.option("tpl.main") || ""));
        if (s) {
            if (s.setAttribute("id", `fancybox-${this.id}`), s.setAttribute("aria-label", this.localize("{{MODAL}}")), s.classList.toggle($9970b34361e607e2$var$le, this.isCompact), $9970b34361e607e2$var$P(s, this.option("mainClass") || ""), $9970b34361e607e2$var$P(s, $9970b34361e607e2$var$he), this.container = s, this.footer = s.querySelector(".fancybox__footer"), i.appendChild(s), $9970b34361e607e2$var$P(document.documentElement, $9970b34361e607e2$var$ee), $9970b34361e607e2$var$we && $9970b34361e607e2$var$xe || ($9970b34361e607e2$var$we = document.createElement("span"), $9970b34361e607e2$var$P($9970b34361e607e2$var$we, "fancybox-focus-guard"), $9970b34361e607e2$var$we.setAttribute($9970b34361e607e2$var$pe, "0"), $9970b34361e607e2$var$we.setAttribute($9970b34361e607e2$var$oe, "true"), $9970b34361e607e2$var$we.setAttribute("aria-label", "Focus guard"), $9970b34361e607e2$var$xe = $9970b34361e607e2$var$we.cloneNode(), null === (t = s.parentElement) || void 0 === t || t.insertBefore($9970b34361e607e2$var$we, s), null === (e = s.parentElement) || void 0 === e || e.append($9970b34361e607e2$var$xe)), s.addEventListener("mousedown", (t)=>{
                $9970b34361e607e2$var$Ee = t.pageX, $9970b34361e607e2$var$Se = t.pageY, $9970b34361e607e2$var$S(s, $9970b34361e607e2$var$ae);
            }), this.option("closeExisting")) for (const t of $9970b34361e607e2$var$Te.values())t.id !== this.id && t.close();
            else this.option("animated") && ($9970b34361e607e2$var$P(s, $9970b34361e607e2$var$re), setTimeout(()=>{
                this.isClosing() || $9970b34361e607e2$var$S(s, $9970b34361e607e2$var$re);
            }, 350));
            this.emit("initLayout");
        }
    }
    initCarousel(t) {
        const i = this.container;
        if (!i) return;
        const n = i.querySelector(".fancybox__carousel");
        if (!n) return;
        const s = this.carousel = new $9970b34361e607e2$export$144901db2ea8e967(n, $9970b34361e607e2$var$u({}, {
            slides: t,
            transition: "fade",
            Panzoom: {
                lockAxis: this.option("dragToClose") ? "xy" : "x",
                infinite: !!this.option("dragToClose") && "y"
            },
            Dots: !1,
            Navigation: {
                classes: {
                    container: "fancybox__nav",
                    button: "f-button",
                    isNext: "is-next",
                    isPrev: "is-prev"
                }
            },
            initialPage: this.option("startIndex"),
            l10n: this.option("l10n")
        }, this.option("Carousel") || {}));
        s.on("*", (t, e, ...i)=>{
            this.emit(`Carousel.${e}`, t, ...i);
        }), s.on([
            "ready",
            "change"
        ], ()=>{
            this.manageCaption();
        }), this.on("Carousel.removeSlide", (t, e, i)=>{
            this.clearContent(i), i.state = void 0;
        }), s.on("Panzoom.touchStart", ()=>{
            var t, e;
            this.isCompact || this.endIdle(), (null === (t = document.activeElement) || void 0 === t ? void 0 : t.closest(".f-thumbs")) && (null === (e = this.container) || void 0 === e || e.focus());
        }), s.on("settle", ()=>{
            this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && !this.isClosing && this.checkFocus();
        }), this.option("dragToClose") && (s.on("Panzoom.afterTransform", (t, i)=>{
            const n = this.getSlide();
            if (n && $9970b34361e607e2$var$e(n.el)) return;
            const s = this.container;
            if (s) {
                const t = Math.abs(i.current.f), e = t < 1 ? "" : Math.max(.5, Math.min(1, 1 - t / i.contentRect.fitHeight * 1.5));
                s.style.setProperty("--fancybox-ts", e ? "0s" : ""), s.style.setProperty("--fancybox-opacity", e + "");
            }
        }), s.on("Panzoom.touchEnd", (t, i, n)=>{
            var s;
            const o = this.getSlide();
            if (o && $9970b34361e607e2$var$e(o.el)) return;
            if (i.isMobile && document.activeElement && -1 !== [
                "TEXTAREA",
                "INPUT"
            ].indexOf(null === (s = document.activeElement) || void 0 === s ? void 0 : s.nodeName)) return;
            const a = Math.abs(i.dragOffset.y);
            "y" === i.lockedAxis && (a >= 200 || a >= 50 && i.dragOffset.time < 300) && (n && n.cancelable && n.preventDefault(), this.close(n, "f-throwOut" + (i.current.f < 0 ? "Up" : "Down")));
        })), s.on("change", (t)=>{
            var e;
            let i = null === (e = this.getSlide()) || void 0 === e ? void 0 : e.triggerEl;
            if (i) {
                const e = new CustomEvent("slideTo", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: t.page
                });
                i.dispatchEvent(e);
            }
        }), s.on([
            "refresh",
            "change"
        ], (t)=>{
            const e = this.container;
            if (!e) return;
            for (const i of e.querySelectorAll("[data-fancybox-current-index]"))i.innerHTML = t.page + 1;
            for (const i of e.querySelectorAll("[data-fancybox-count]"))i.innerHTML = t.pages.length;
            if (!t.isInfinite) {
                for (const i of e.querySelectorAll("[data-fancybox-next]"))t.page < t.pages.length - 1 ? (i.removeAttribute($9970b34361e607e2$var$ue), i.removeAttribute($9970b34361e607e2$var$pe)) : (i.setAttribute($9970b34361e607e2$var$ue, ""), i.setAttribute($9970b34361e607e2$var$pe, "-1"));
                for (const i of e.querySelectorAll("[data-fancybox-prev]"))t.page > 0 ? (i.removeAttribute($9970b34361e607e2$var$ue), i.removeAttribute($9970b34361e607e2$var$pe)) : (i.setAttribute($9970b34361e607e2$var$ue, ""), i.setAttribute($9970b34361e607e2$var$pe, "-1"));
            }
            const i = this.getSlide();
            if (!i) return;
            let n = i.downloadSrc || "";
            n || "image" !== i.type || i.error || !$9970b34361e607e2$var$ve(i[$9970b34361e607e2$var$me]) || (n = i[$9970b34361e607e2$var$me]);
            for (const t of e.querySelectorAll("[data-fancybox-download]")){
                const e = i.downloadFilename;
                n ? (t.removeAttribute($9970b34361e607e2$var$ue), t.removeAttribute($9970b34361e607e2$var$pe), t.setAttribute($9970b34361e607e2$var$ge, n), t.setAttribute($9970b34361e607e2$var$fe, e || n), t.setAttribute("target", "_blank")) : (t.setAttribute($9970b34361e607e2$var$ue, ""), t.setAttribute($9970b34361e607e2$var$pe, "-1"), t.removeAttribute($9970b34361e607e2$var$ge), t.removeAttribute($9970b34361e607e2$var$fe));
            }
        }), this.emit("initCarousel");
    }
    attachEvents() {
        const t = this, e = t.container;
        if (!e) return;
        e.addEventListener("click", t.onClick, {
            passive: !1,
            capture: !1
        }), e.addEventListener("wheel", t.onWheel, {
            passive: !1,
            capture: !1
        }), document.addEventListener("keydown", t.onKeydown, {
            passive: !1,
            capture: !0
        }), document.addEventListener("visibilitychange", t.onVisibilityChange, !1), document.addEventListener("mousemove", t.onMousemove), t.option("trapFocus") && document.addEventListener("focus", t.onFocus, !0), window.addEventListener("resize", t.onResize);
        const i = window.visualViewport;
        i && (i.addEventListener("scroll", t.onResize), i.addEventListener("resize", t.onResize));
    }
    detachEvents() {
        const t = this, e = t.container;
        if (!e) return;
        document.removeEventListener("keydown", t.onKeydown, {
            passive: !1,
            capture: !0
        }), e.removeEventListener("wheel", t.onWheel, {
            passive: !1,
            capture: !1
        }), e.removeEventListener("click", t.onClick, {
            passive: !1,
            capture: !1
        }), document.removeEventListener("mousemove", t.onMousemove), window.removeEventListener("resize", t.onResize);
        const i = window.visualViewport;
        i && (i.removeEventListener("resize", t.onResize), i.removeEventListener("scroll", t.onResize)), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), document.removeEventListener("focus", t.onFocus, !0);
    }
    scale() {
        const t = this.container;
        if (!t) return;
        const e = window.visualViewport, i = Math.max(1, (null == e ? void 0 : e.scale) || 1);
        let n = "", s = "", o = "";
        if (e && i > 1) {
            let t = `${e.offsetLeft}px`, a = `${e.offsetTop}px`;
            n = e.width * i + "px", s = e.height * i + "px", o = `translate3d(${t}, ${a}, 0) scale(${1 / i})`;
        }
        t.style.transform = o, t.style.width = n, t.style.height = s;
    }
    onClick(t) {
        var e;
        const { container: i, isCompact: n } = this;
        if (!i || this.isClosing()) return;
        !n && this.option("idle") && this.resetIdle();
        const s = t.composedPath()[0];
        if (s.closest(".fancybox-spinner") || s.closest("[data-fancybox-close]")) return t.preventDefault(), void this.close(t);
        if (s.closest("[data-fancybox-prev]")) return t.preventDefault(), void this.prev();
        if (s.closest("[data-fancybox-next]")) return t.preventDefault(), void this.next();
        if ("click" === t.type && 0 === t.detail) return;
        if (Math.abs(t.pageX - $9970b34361e607e2$var$Ee) > 30 || Math.abs(t.pageY - $9970b34361e607e2$var$Se) > 30) return;
        const o = document.activeElement;
        if ($9970b34361e607e2$var$be() && o && i.contains(o)) return;
        if (n && "image" === (null === (e = this.getSlide()) || void 0 === e ? void 0 : e.type)) return void (this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null) : this.clickTimer = setTimeout(()=>{
            this.toggleIdle(), this.clickTimer = null;
        }, 350));
        if (this.emit("click", t), t.defaultPrevented) return;
        let a = !1;
        if (s.closest(".fancybox__content")) {
            if (o) {
                if (o.closest("[contenteditable]")) return;
                s.matches($9970b34361e607e2$var$nt) || o.blur();
            }
            if ($9970b34361e607e2$var$be()) return;
            a = this.option("contentClick");
        } else s.closest(".fancybox__carousel") && !s.matches($9970b34361e607e2$var$nt) && (a = this.option("backdropClick"));
        "close" === a ? (t.preventDefault(), this.close(t)) : "next" === a ? (t.preventDefault(), this.next()) : "prev" === a && (t.preventDefault(), this.prev());
    }
    onWheel(t) {
        const e = t.target;
        let n = this.option("wheel", t);
        e.closest(".fancybox__thumbs") && (n = "slide");
        const s = "slide" === n, o = [
            -t.deltaX || 0,
            -t.deltaY || 0,
            -t.detail || 0
        ].reduce(function(t, e) {
            return Math.abs(e) > Math.abs(t) ? e : t;
        }), a = Math.max(-1, Math.min(1, o)), r = Date.now();
        this.pwt && r - this.pwt < 300 ? s && t.preventDefault() : (this.pwt = r, this.emit("wheel", t, a), t.defaultPrevented || ("close" === n ? (t.preventDefault(), this.close(t)) : "slide" === n && ($9970b34361e607e2$var$i(e) || (t.preventDefault(), this[a > 0 ? "prev" : "next"]()))));
    }
    onScroll() {
        window.scrollTo($9970b34361e607e2$var$Pe, $9970b34361e607e2$var$Ce);
    }
    onKeydown(t) {
        if (!this.isTopmost()) return;
        this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
        const e = t.key, i = this.option("keyboard");
        if (!i) return;
        const n = t.composedPath()[0], s = document.activeElement && document.activeElement.classList, o = s && s.contains("f-button") || n.dataset.carouselPage || n.dataset.carouselIndex;
        if ("Escape" !== e && !o && $9970b34361e607e2$var$E(n)) {
            if (n.isContentEditable || -1 !== [
                "TEXTAREA",
                "OPTION",
                "INPUT",
                "SELECT",
                "VIDEO"
            ].indexOf(n.nodeName)) return;
        }
        if ("Tab" === t.key ? $9970b34361e607e2$var$P(this.container, $9970b34361e607e2$var$ae) : $9970b34361e607e2$var$S(this.container, $9970b34361e607e2$var$ae), t.ctrlKey || t.altKey || t.shiftKey) return;
        this.emit("keydown", e, t);
        const a = i[e];
        a && "function" == typeof this[a] && (t.preventDefault(), this[a]());
    }
    onResize() {
        const t = this.container;
        if (!t) return;
        const e = this.isCompact;
        t.classList.toggle($9970b34361e607e2$var$le, e), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), this.scale(), this.emit("resize");
    }
    onFocus(t) {
        this.isTopmost() && this.checkFocus(t);
    }
    onMousemove(t) {
        this.prevMouseMoveEvent = t, !this.isCompact && this.option("idle") && this.resetIdle();
    }
    onVisibilityChange() {
        "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
    }
    manageCloseBtn(t) {
        const e = this.optionFor(t, "closeButton") || !1;
        if ("auto" === e) {
            const t = this.plugins.Toolbar;
            if (t && t.state === $9970b34361e607e2$var$Zt.Ready) return;
        }
        if (!e) return;
        if (!t.contentEl || t.closeBtnEl) return;
        const i = this.option("tpl.closeButton");
        if (i) {
            const e = $9970b34361e607e2$var$n(this.localize(i));
            t.closeBtnEl = t.contentEl.appendChild(e), t.el && $9970b34361e607e2$var$P(t.el, "has-close-btn");
        }
    }
    manageCaption(t) {
        var e, i;
        const n = "fancybox__caption", s = this.container;
        if (!s) return;
        $9970b34361e607e2$var$S(s, $9970b34361e607e2$var$de);
        const o = this.isCompact || this.option("commonCaption"), a = !o;
        if (this.caption && this.stop(this.caption), a && this.caption && (this.caption.remove(), this.caption = null), o && !this.caption) for (const t of (null === (e = this.carousel) || void 0 === e ? void 0 : e.slides) || [])t.captionEl && (t.captionEl.remove(), t.captionEl = void 0, $9970b34361e607e2$var$S(t.el, $9970b34361e607e2$var$de), null === (i = t.el) || void 0 === i || i.removeAttribute("aria-labelledby"));
        if (t || (t = this.getSlide()), !t || o && !this.isCurrentSlide(t)) return;
        const r = t.el;
        let l = this.optionFor(t, "caption", "");
        if (!l) return void (o && this.caption && this.animate(this.caption, "f-fadeOut", ()=>{
            this.caption && (this.caption.innerHTML = "");
        }));
        let c = null;
        if (a) {
            if (c = t.captionEl || null, r && !c) {
                const e = n + `_${this.id}_${t.index}`;
                c = document.createElement("div"), $9970b34361e607e2$var$P(c, n), c.setAttribute("id", e), t.captionEl = r.appendChild(c), $9970b34361e607e2$var$P(r, $9970b34361e607e2$var$de), r.setAttribute("aria-labelledby", e);
            }
        } else {
            if (c = this.caption, c || (c = s.querySelector("." + n)), !c) {
                c = document.createElement("div"), c.dataset.fancyboxCaption = "", $9970b34361e607e2$var$P(c, n);
                (this.footer || s).prepend(c);
            }
            $9970b34361e607e2$var$P(s, $9970b34361e607e2$var$de), this.caption = c;
        }
        c && (c.innerHTML = "", $9970b34361e607e2$var$ve(l) || "number" == typeof l ? c.innerHTML = l + "" : l instanceof HTMLElement && c.appendChild(l));
    }
    checkFocus(t) {
        this.focus(t);
    }
    focus(t) {
        var e;
        if (this.ignoreFocusChange) return;
        const i = document.activeElement || null, n = (null == t ? void 0 : t.target) || null, s = this.container, o = null === (e = this.carousel) || void 0 === e ? void 0 : e.viewport;
        if (!s || !o) return;
        if (!t && i && s.contains(i)) return;
        const a = this.getSlide(), r = a && a.state === $9970b34361e607e2$var$lt.Ready ? a.el : null;
        if (!r || r.contains(i) || s === i) return;
        t && t.cancelable && t.preventDefault(), this.ignoreFocusChange = !0;
        const l = Array.from(s.querySelectorAll($9970b34361e607e2$var$nt));
        let c = [], h = null;
        for (let t of l){
            const e = !t.offsetParent || !!t.closest('[aria-hidden="true"]'), i = r && r.contains(t), n = !o.contains(t);
            if (t === s || (i || n) && !e) {
                c.push(t);
                const e = t.dataset.origTabindex;
                void 0 !== e && e && (t.tabIndex = parseFloat(e)), t.removeAttribute("data-orig-tabindex"), !t.hasAttribute("autoFocus") && h || (h = t);
            } else {
                const e = void 0 === t.dataset.origTabindex ? t.getAttribute("tabindex") || "" : t.dataset.origTabindex;
                e && (t.dataset.origTabindex = e), t.tabIndex = -1;
            }
        }
        let d = null;
        t ? (!n || c.indexOf(n) < 0) && (d = h || s, c.length && (i === $9970b34361e607e2$var$xe ? d = c[0] : this.lastFocus !== s && i !== $9970b34361e607e2$var$we || (d = c[c.length - 1]))) : d = a && "image" === a.type ? s : h || s, d && $9970b34361e607e2$var$st(d), this.lastFocus = document.activeElement, this.ignoreFocusChange = !1;
    }
    next() {
        const t = this.carousel;
        t && t.pages.length > 1 && t.slideNext();
    }
    prev() {
        const t = this.carousel;
        t && t.pages.length > 1 && t.slidePrev();
    }
    jumpTo(...t) {
        this.carousel && this.carousel.slideTo(...t);
    }
    isTopmost() {
        var t;
        return (null === (t = $9970b34361e607e2$export$cb45b08d97cdc4fd.getInstance()) || void 0 === t ? void 0 : t.id) == this.id;
    }
    animate(t = null, e = "", i) {
        if (!t || !e) return void (i && i());
        this.stop(t);
        const n = (s)=>{
            s.target === t && t.dataset.animationName && (t.removeEventListener("animationend", n), delete t.dataset.animationName, i && i(), $9970b34361e607e2$var$S(t, e));
        };
        t.dataset.animationName = e, t.addEventListener("animationend", n), $9970b34361e607e2$var$P(t, e);
    }
    stop(t) {
        t && t.dispatchEvent(new CustomEvent("animationend", {
            bubbles: !1,
            cancelable: !0,
            currentTarget: t
        }));
    }
    setContent(t, e = "", i = !0) {
        if (this.isClosing()) return;
        const s = t.el;
        if (!s) return;
        let o = null;
        if ($9970b34361e607e2$var$E(e) ? o = e : (o = $9970b34361e607e2$var$n(e + ""), $9970b34361e607e2$var$E(o) || (o = document.createElement("div"), o.innerHTML = e + "")), [
            "img",
            "picture",
            "iframe",
            "video",
            "audio"
        ].includes(o.nodeName.toLowerCase())) {
            const t = document.createElement("div");
            t.appendChild(o), o = t;
        }
        $9970b34361e607e2$var$E(o) && t.filter && !t.error && (o = o.querySelector(t.filter)), o && $9970b34361e607e2$var$E(o) ? ($9970b34361e607e2$var$P(o, "fancybox__content"), t.id && o.setAttribute("id", t.id), s.classList.add(`has-${t.error ? "error" : t.type || "unknown"}`), s.prepend(o), "none" === o.style.display && (o.style.display = ""), "none" === getComputedStyle(o).getPropertyValue("display") && (o.style.display = t.display || this.option("defaultDisplay") || "flex"), t.contentEl = o, i && this.revealContent(t), this.manageCloseBtn(t), this.manageCaption(t)) : this.setError(t, "{{ELEMENT_NOT_FOUND}}");
    }
    revealContent(t, e) {
        const i = t.el, n = t.contentEl;
        i && n && (this.emit("reveal", t), this.hideLoading(t), t.state = $9970b34361e607e2$var$lt.Opening, (e = this.isOpeningSlide(t) ? void 0 === e ? this.optionFor(t, "showClass") : e : "f-fadeIn") ? this.animate(n, e, ()=>{
            this.done(t);
        }) : this.done(t));
    }
    done(t) {
        this.isClosing() || (t.state = $9970b34361e607e2$var$lt.Ready, this.emit("done", t), $9970b34361e607e2$var$P(t.el, "is-done"), this.isCurrentSlide(t) && this.option("autoFocus") && queueMicrotask(()=>{
            var e;
            null === (e = t.panzoom) || void 0 === e || e.updateControls(), this.option("autoFocus") && this.focus();
        }), this.isOpeningSlide(t) && ($9970b34361e607e2$var$S(this.container, $9970b34361e607e2$var$he), !this.isCompact && this.option("idle") && this.setIdle()));
    }
    isCurrentSlide(t) {
        const e = this.getSlide();
        return !(!t || !e) && e.index === t.index;
    }
    isOpeningSlide(t) {
        var e, i;
        return null === (null === (e = this.carousel) || void 0 === e ? void 0 : e.prevPage) && t && t.index === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index);
    }
    showLoading(t) {
        t.state = $9970b34361e607e2$var$lt.Loading;
        const e = t.el;
        if (!e) return;
        $9970b34361e607e2$var$P(e, $9970b34361e607e2$var$ce), this.emit("loading", t), t.spinnerEl || setTimeout(()=>{
            if (!this.isClosing() && !t.spinnerEl && t.state === $9970b34361e607e2$var$lt.Loading) {
                let i = $9970b34361e607e2$var$n($9970b34361e607e2$var$x);
                $9970b34361e607e2$var$P(i, "fancybox-spinner"), t.spinnerEl = i, e.prepend(i), this.animate(i, "f-fadeIn");
            }
        }, 250);
    }
    hideLoading(t) {
        const e = t.el;
        if (!e) return;
        const i = t.spinnerEl;
        this.isClosing() ? null == i || i.remove() : ($9970b34361e607e2$var$S(e, $9970b34361e607e2$var$ce), i && this.animate(i, "f-fadeOut", ()=>{
            i.remove();
        }), t.state === $9970b34361e607e2$var$lt.Loading && (this.emit("loaded", t), t.state = $9970b34361e607e2$var$lt.Ready));
    }
    setError(t, e) {
        if (this.isClosing()) return;
        const i = new Event("error", {
            bubbles: !0,
            cancelable: !0
        });
        if (this.emit("error", i, t), i.defaultPrevented) return;
        t.error = e, this.hideLoading(t), this.clearContent(t);
        const n = document.createElement("div");
        n.classList.add("fancybox-error"), n.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, n);
    }
    clearContent(t) {
        if (void 0 === t.state) return;
        this.emit("clearContent", t), t.contentEl && (t.contentEl.remove(), t.contentEl = void 0);
        const e = t.el;
        e && ($9970b34361e607e2$var$S(e, "has-error"), $9970b34361e607e2$var$S(e, "has-unknown"), $9970b34361e607e2$var$S(e, `has-${t.type || "unknown"}`)), t.closeBtnEl && t.closeBtnEl.remove(), t.closeBtnEl = void 0, t.captionEl && t.captionEl.remove(), t.captionEl = void 0, t.spinnerEl && t.spinnerEl.remove(), t.spinnerEl = void 0;
    }
    getSlide() {
        var t;
        const e = this.carousel;
        return (null === (t = null == e ? void 0 : e.pages[null == e ? void 0 : e.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0;
    }
    close(t, e) {
        if (this.isClosing()) return;
        const i = new Event("shouldClose", {
            bubbles: !0,
            cancelable: !0
        });
        if (this.emit("shouldClose", i, t), i.defaultPrevented) return;
        t && t.cancelable && (t.preventDefault(), t.stopPropagation());
        const n = ()=>{
            this.proceedClose(t, e);
        };
        this.startedFs && $9970b34361e607e2$var$ye && $9970b34361e607e2$var$ye.isFullscreen() ? Promise.resolve($9970b34361e607e2$var$ye.exit()).then(()=>n()) : n();
    }
    clearIdle() {
        this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null;
    }
    setIdle(t = !1) {
        const e = ()=>{
            this.clearIdle(), this.idle = !0, $9970b34361e607e2$var$P(this.container, "is-idle"), this.emit("setIdle");
        };
        if (this.clearIdle(), !this.isClosing()) {
            if (t) e();
            else {
                const t = this.option("idle");
                t && (this.idleTimer = setTimeout(e, t));
            }
        }
    }
    endIdle() {
        this.clearIdle(), this.idle && !this.isClosing() && (this.idle = !1, $9970b34361e607e2$var$S(this.container, "is-idle"), this.emit("endIdle"));
    }
    resetIdle() {
        this.endIdle(), this.setIdle();
    }
    toggleIdle() {
        this.idle ? this.endIdle() : this.setIdle(!0);
    }
    toggleFullscreen() {
        $9970b34361e607e2$var$ye && ($9970b34361e607e2$var$ye.isFullscreen() ? $9970b34361e607e2$var$ye.exit() : $9970b34361e607e2$var$ye.request().then(()=>{
            this.startedFs = !0;
        }));
    }
    isClosing() {
        return [
            $9970b34361e607e2$var$rt.Closing,
            $9970b34361e607e2$var$rt.CustomClosing,
            $9970b34361e607e2$var$rt.Destroy
        ].includes(this.state);
    }
    proceedClose(t, e) {
        var i, n;
        this.state = $9970b34361e607e2$var$rt.Closing, this.clearIdle(), this.detachEvents();
        const s = this.container, o = this.carousel, a = this.getSlide(), r = a && this.option("placeFocusBack") ? a.triggerEl || this.option("triggerEl") : null;
        if (r && ($9970b34361e607e2$var$tt(r) ? $9970b34361e607e2$var$st(r) : r.focus()), s && ($9970b34361e607e2$var$S(s, $9970b34361e607e2$var$he), $9970b34361e607e2$var$P(s, "is-closing"), s.setAttribute($9970b34361e607e2$var$oe, "true"), this.option("animated") && $9970b34361e607e2$var$P(s, $9970b34361e607e2$var$re), s.style.pointerEvents = "none"), o) {
            o.clearTransitions(), null === (i = o.panzoom) || void 0 === i || i.destroy(), null === (n = o.plugins.Navigation) || void 0 === n || n.detach();
            for (const t of o.slides){
                t.state = $9970b34361e607e2$var$lt.Closing, this.hideLoading(t);
                const e = t.contentEl;
                e && this.stop(e);
                const i = null == t ? void 0 : t.panzoom;
                i && (i.stop(), i.detachEvents(), i.detachObserver()), this.isCurrentSlide(t) || o.emit("removeSlide", t);
            }
        }
        $9970b34361e607e2$var$Pe = window.scrollX, $9970b34361e607e2$var$Ce = window.scrollY, window.addEventListener("scroll", this.onScroll), this.emit("close", t), this.state !== $9970b34361e607e2$var$rt.CustomClosing ? (void 0 === e && a && (e = this.optionFor(a, "hideClass")), e && a ? (this.animate(a.contentEl, e, ()=>{
            o && o.emit("removeSlide", a);
        }), setTimeout(()=>{
            this.destroy();
        }, 500)) : this.destroy()) : setTimeout(()=>{
            this.destroy();
        }, 500);
    }
    destroy() {
        var t;
        if (this.state === $9970b34361e607e2$var$rt.Destroy) return;
        window.removeEventListener("scroll", this.onScroll), this.state = $9970b34361e607e2$var$rt.Destroy, null === (t = this.carousel) || void 0 === t || t.destroy();
        const e = this.container;
        e && e.remove(), $9970b34361e607e2$var$Te.delete(this.id);
        const i = $9970b34361e607e2$export$cb45b08d97cdc4fd.getInstance();
        i ? i.focus() : ($9970b34361e607e2$var$we && ($9970b34361e607e2$var$we.remove(), $9970b34361e607e2$var$we = null), $9970b34361e607e2$var$xe && ($9970b34361e607e2$var$xe.remove(), $9970b34361e607e2$var$xe = null), $9970b34361e607e2$var$S(document.documentElement, $9970b34361e607e2$var$ee), (()=>{
            if (!$9970b34361e607e2$var$et) return;
            const t = document, e = t.body;
            e.classList.remove($9970b34361e607e2$var$ie), e.style.setProperty($9970b34361e607e2$var$se, ""), t.documentElement.style.setProperty($9970b34361e607e2$var$ne, "");
        })(), this.emit("destroy"));
    }
    static bind(t, e, i) {
        if (!$9970b34361e607e2$var$et) return;
        let n, s = "", o = {};
        if (void 0 === t ? n = document.body : $9970b34361e607e2$var$ve(t) ? (n = document.body, s = t, "object" == typeof e && (o = e || {})) : (n = t, $9970b34361e607e2$var$ve(e) && (s = e), "object" == typeof i && (o = i || {})), !n || !$9970b34361e607e2$var$E(n)) return;
        s = s || "[data-fancybox]";
        const a = $9970b34361e607e2$export$cb45b08d97cdc4fd.openers.get(n) || new Map;
        a.set(s, o), $9970b34361e607e2$export$cb45b08d97cdc4fd.openers.set(n, a), 1 === a.size && n.addEventListener("click", $9970b34361e607e2$export$cb45b08d97cdc4fd.fromEvent);
    }
    static unbind(t, e) {
        let i, n = "";
        if ($9970b34361e607e2$var$ve(t) ? (i = document.body, n = t) : (i = t, $9970b34361e607e2$var$ve(e) && (n = e)), !i) return;
        const s = $9970b34361e607e2$export$cb45b08d97cdc4fd.openers.get(i);
        s && n && s.delete(n), n && s || ($9970b34361e607e2$export$cb45b08d97cdc4fd.openers.delete(i), i.removeEventListener("click", $9970b34361e607e2$export$cb45b08d97cdc4fd.fromEvent));
    }
    static destroy() {
        let t;
        for(; t = $9970b34361e607e2$export$cb45b08d97cdc4fd.getInstance();)t.destroy();
        for (const t of $9970b34361e607e2$export$cb45b08d97cdc4fd.openers.keys())t.removeEventListener("click", $9970b34361e607e2$export$cb45b08d97cdc4fd.fromEvent);
        $9970b34361e607e2$export$cb45b08d97cdc4fd.openers = new Map;
    }
    static fromEvent(t) {
        if (t.defaultPrevented) return;
        if (t.button && 0 !== t.button) return;
        if (t.ctrlKey || t.metaKey || t.shiftKey) return;
        let e = t.composedPath()[0];
        const i = e.closest("[data-fancybox-trigger]");
        if (i) {
            const t = i.dataset.fancyboxTrigger || "", n = document.querySelectorAll(`[data-fancybox="${t}"]`), s = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
            e = n[s] || e;
        }
        if (!(e && e instanceof Element)) return;
        let n, s, o, a;
        if ([
            ...$9970b34361e607e2$export$cb45b08d97cdc4fd.openers
        ].reverse().find(([t, i])=>!(!t.contains(e) || ![
                ...i
            ].reverse().find(([i, r])=>{
                let l = e.closest(i);
                return !!l && (n = t, s = i, o = l, a = r, !0);
            }))), !n || !s || !o) return;
        a = a || {}, t.preventDefault(), e = o;
        let r = [], l = $9970b34361e607e2$var$u({}, $9970b34361e607e2$var$at, a);
        l.event = t, l.triggerEl = e, l.delegate = i;
        const c = l.groupAll, h = l.groupAttr, d = h && e ? e.getAttribute(`${h}`) : "";
        if ((!e || d || c) && (r = [].slice.call(n.querySelectorAll(s))), e && !c && (r = d ? r.filter((t)=>t.getAttribute(`${h}`) === d) : [
            e
        ]), !r.length) return;
        const p = $9970b34361e607e2$export$cb45b08d97cdc4fd.getInstance();
        return p && p.options.triggerEl && r.indexOf(p.options.triggerEl) > -1 ? void 0 : (e && (l.startIndex = r.indexOf(e)), $9970b34361e607e2$export$cb45b08d97cdc4fd.fromNodes(r, l));
    }
    static fromSelector(t, e, i) {
        let n = null, s = "", o = {};
        if ($9970b34361e607e2$var$ve(t) ? (n = document.body, s = t, "object" == typeof e && (o = e || {})) : t instanceof HTMLElement && $9970b34361e607e2$var$ve(e) && (n = t, s = e, "object" == typeof i && (o = i || {})), !n || !s) return !1;
        const a = $9970b34361e607e2$export$cb45b08d97cdc4fd.openers.get(n);
        return !!a && (o = $9970b34361e607e2$var$u({}, a.get(s) || {}, o), !!o && $9970b34361e607e2$export$cb45b08d97cdc4fd.fromNodes(Array.from(n.querySelectorAll(s)), o));
    }
    static fromNodes(t, e) {
        e = $9970b34361e607e2$var$u({}, $9970b34361e607e2$var$at, e || {});
        const i = [];
        for (const n of t){
            const t = n.dataset || {}, s = t[$9970b34361e607e2$var$me] || n.getAttribute($9970b34361e607e2$var$ge) || n.getAttribute("currentSrc") || n.getAttribute($9970b34361e607e2$var$me) || void 0;
            let o;
            const a = e.delegate;
            let r;
            a && i.length === e.startIndex && (o = a instanceof HTMLImageElement ? a : a.querySelector("img:not([aria-hidden])")), o || (o = n instanceof HTMLImageElement ? n : n.querySelector("img:not([aria-hidden])")), o && (r = o.currentSrc || o[$9970b34361e607e2$var$me] || void 0, !r && o.dataset && (r = o.dataset.lazySrc || o.dataset[$9970b34361e607e2$var$me] || void 0));
            const l = {
                src: s,
                triggerEl: n,
                thumbEl: o,
                thumbElSrc: r,
                thumbSrc: r
            };
            for(const e in t){
                let i = t[e] + "";
                i = "false" !== i && ("true" === i || i), l[e] = i;
            }
            i.push(l);
        }
        return new $9970b34361e607e2$export$cb45b08d97cdc4fd(i, e);
    }
    static getInstance(t) {
        if (t) return $9970b34361e607e2$var$Te.get(t);
        return Array.from($9970b34361e607e2$var$Te.values()).reverse().find((t)=>!t.isClosing() && t) || null;
    }
    static getSlide() {
        var t;
        return (null === (t = $9970b34361e607e2$export$cb45b08d97cdc4fd.getInstance()) || void 0 === t ? void 0 : t.getSlide()) || null;
    }
    static show(t = [], e = {}) {
        return new $9970b34361e607e2$export$cb45b08d97cdc4fd(t, e);
    }
    static next() {
        const t = $9970b34361e607e2$export$cb45b08d97cdc4fd.getInstance();
        t && t.next();
    }
    static prev() {
        const t = $9970b34361e607e2$export$cb45b08d97cdc4fd.getInstance();
        t && t.prev();
    }
    static close(t = !0, ...e) {
        if (t) for (const t of $9970b34361e607e2$var$Te.values())t.close(...e);
        else {
            const t = $9970b34361e607e2$export$cb45b08d97cdc4fd.getInstance();
            t && t.close(...e);
        }
    }
}
Object.defineProperty($9970b34361e607e2$export$cb45b08d97cdc4fd, "version", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: "5.0.36"
}), Object.defineProperty($9970b34361e607e2$export$cb45b08d97cdc4fd, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: $9970b34361e607e2$var$at
}), Object.defineProperty($9970b34361e607e2$export$cb45b08d97cdc4fd, "Plugins", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: $9970b34361e607e2$var$te
}), Object.defineProperty($9970b34361e607e2$export$cb45b08d97cdc4fd, "openers", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: new Map
});



// Создаем миниатюрный слайдер
const $831f8f56f2360669$var$slider = new (0, $4e95c04dd8a5890d$export$25ce5a424b770e84)('.product-page__second-swiper', {
    modules: [
        (0, $9cbf5f489c16aa92$export$2e2bcd8739ae039),
        (0, $3ede398f6665eb67$export$2e2bcd8739ae039),
        (0, $48396d89743015b3$export$2e2bcd8739ae039),
        (0, $21f49457975db620$export$2e2bcd8739ae039)
    ],
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    watchSlidesProgress: true
});
// Создаем главный слайдер и привязываем к миниатюрному
const $831f8f56f2360669$var$sliderMain = new (0, $4e95c04dd8a5890d$export$25ce5a424b770e84)('.product-page__main-swiper', {
    modules: [
        (0, $3ede398f6665eb67$export$2e2bcd8739ae039),
        (0, $48396d89743015b3$export$2e2bcd8739ae039),
        (0, $21f49457975db620$export$2e2bcd8739ae039)
    ],
    navigation: {
        nextEl: '.product-page__swiper-wrapper-next',
        prevEl: '.product-page__swiper-wrapper-prev'
    },
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    thumbs: {
        swiper: $831f8f56f2360669$var$slider
    }
});
// Инициализация
(0, $9970b34361e607e2$export$cb45b08d97cdc4fd).bind("[data-fancybox]", {
});


document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const overlayContent = document.querySelector('.overlay__content-wrapper');
    const overlayBtn = document.querySelectorAll('.js-overlay__btn-open');
    const overlayBtnClose = document.querySelector('.js-overlay__btn-close');
    const form = overlay.querySelector('.form');
    overlayBtn.forEach((btn)=>{
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            overlay.classList.toggle('overlay--hidden');
        });
    });
    overlayBtnClose.addEventListener('click', function() {
        overlay.classList.add('overlay--hidden');
    });
    // Закрытие при клике вне попапа
    overlay.addEventListener('click', function(e) {
        if (!overlayContent.contains(e.target)) overlay.classList.add('overlay--hidden');
    });
    // Симуляция отправки формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Эмуляция процесса отправки (например, с задержкой)
        setTimeout(()=>{
            overlay.classList.add('overlay--hidden');
            form.reset(); // Очистка формы после отправки
        }, 1000);
    });
});




