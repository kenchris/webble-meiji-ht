import { a as __extends, b as __assign, _ as __decorate } from '../common/tslib.es6-ed95dd19.js';
import { h as html } from '../common/lit-html-01826b4e.js';
import { query, property, css, customElement } from '../lit-element.js';
import './mwc-icon.js';
import { M as MDCFoundation } from '../common/foundation-5da43da3.js';
import { a as addHasRemoveClass } from '../common/base-element-da29a93c.js';
import { c as classMap } from '../common/class-map-5937e1bf.js';
import { o as observer } from '../common/observer-8c5412ba.js';
import { i as ifDefined } from '../common/if-defined-d40ae088.js';
import '../common/mwc-list-8214a904.js';
import { C as Corner } from '../common/mwc-menu-09a15751.js';
import { F as FormElement, l as lineRipple, f as floatingLabel } from '../common/mwc-line-ripple-directive-e23c6cec.js';

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * KEY provides normalized string values for keys.
 */
var KEY = {
    UNKNOWN: 'Unknown',
    BACKSPACE: 'Backspace',
    ENTER: 'Enter',
    SPACEBAR: 'Spacebar',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown',
    END: 'End',
    HOME: 'Home',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_UP: 'ArrowUp',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_DOWN: 'ArrowDown',
    DELETE: 'Delete',
};
var normalizedKeys = new Set();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
var KEY_CODE = {
    BACKSPACE: 8,
    ENTER: 13,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    DELETE: 46,
};
var mappedKeyCodes = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this
// by hand.
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
/**
 * normalizeKey returns the normalized string for a navigational action.
 */
function normalizeKey(evt) {
    var key = evt.key;
    // If the event already has a normalized key, return it
    if (normalizedKeys.has(key)) {
        return key;
    }
    // tslint:disable-next-line:deprecation
    var mappedKey = mappedKeyCodes.get(evt.keyCode);
    if (mappedKey) {
        return mappedKey;
    }
    return KEY.UNKNOWN;
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ACTIVATED: 'mdc-select--activated',
    DISABLED: 'mdc-select--disabled',
    FOCUSED: 'mdc-select--focused',
    INVALID: 'mdc-select--invalid',
    OUTLINED: 'mdc-select--outlined',
    REQUIRED: 'mdc-select--required',
    ROOT: 'mdc-select',
    SELECTED_ITEM_CLASS: 'mdc-list-item--selected',
    WITH_LEADING_ICON: 'mdc-select--with-leading-icon',
};
var strings = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_SELECTED_ATTR: 'aria-selected',
    CHANGE_EVENT: 'MDCSelect:change',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-select__icon',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    MENU_SELECTOR: '.mdc-select__menu',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    SELECTED_ITEM_SELECTOR: "." + cssClasses.SELECTED_ITEM_CLASS,
    SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
    SELECT_ANCHOR_SELECTOR: '.mdc-select__anchor',
    VALUE_ATTR: 'data-value',
};
var numbers = {
    LABEL_SCALE: 0.75,
    UNSET_INDEX: -1,
};

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCSelectFoundation = /** @class */ (function (_super) {
    __extends(MDCSelectFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCSelectFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, __assign(__assign({}, MDCSelectFoundation.defaultAdapter), adapter)) || this;
        // Index of the currently selected menu item.
        _this.selectedIndex = numbers.UNSET_INDEX;
        // VALUE_ATTR values of the menu items.
        _this.menuItemValues = [];
        // Disabled state
        _this.disabled = false;
        // isMenuOpen is used to track the state of the menu by listening to the
        // MDCMenuSurface:closed event For reference, menu.open will return false if
        // the menu is still closing, but isMenuOpen returns false only after the menu
        // has closed
        _this.isMenuOpen = false;
        _this.leadingIcon = foundationMap.leadingIcon;
        _this.helperText = foundationMap.helperText;
        return _this;
    }
    Object.defineProperty(MDCSelectFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                activateBottomLine: function () { return undefined; },
                deactivateBottomLine: function () { return undefined; },
                getSelectedMenuItem: function () { return null; },
                hasLabel: function () { return false; },
                floatLabel: function () { return undefined; },
                getLabelWidth: function () { return 0; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
                setRippleCenter: function () { return undefined; },
                notifyChange: function () { return undefined; },
                setSelectedText: function () { return undefined; },
                isSelectAnchorFocused: function () { return false; },
                getSelectAnchorAttr: function () { return ''; },
                setSelectAnchorAttr: function () { return undefined; },
                openMenu: function () { return undefined; },
                closeMenu: function () { return undefined; },
                getAnchorElement: function () { return null; },
                setMenuAnchorElement: function () { return undefined; },
                setMenuAnchorCorner: function () { return undefined; },
                setMenuWrapFocus: function () { return undefined; },
                setAttributeAtIndex: function () { return undefined; },
                removeAttributeAtIndex: function () { return undefined; },
                focusMenuItemAtIndex: function () { return undefined; },
                getMenuItemCount: function () { return 0; },
                getMenuItemValues: function () { return []; },
                getMenuItemTextAtIndex: function () { return ''; },
                getMenuItemAttr: function () { return ''; },
                addClassAtIndex: function () { return undefined; },
                removeClassAtIndex: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /** Returns the index of the currently selected menu item, or -1 if none. */
    MDCSelectFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
    };
    MDCSelectFoundation.prototype.setSelectedIndex = function (index, closeMenu) {
        if (closeMenu === void 0) { closeMenu = false; }
        if (index >= this.adapter_.getMenuItemCount()) {
            return;
        }
        this.removeSelectionAtIndex(this.selectedIndex);
        this.setSelectionAtIndex(index);
        if (closeMenu) {
            this.adapter_.closeMenu();
        }
        this.handleChange();
    };
    MDCSelectFoundation.prototype.setValue = function (value) {
        var index = this.menuItemValues.indexOf(value);
        this.setSelectedIndex(index);
    };
    MDCSelectFoundation.prototype.getValue = function () {
        var listItem = this.adapter_.getSelectedMenuItem();
        if (listItem) {
            return this.adapter_.getMenuItemAttr(listItem, strings.VALUE_ATTR) || '';
        }
        return '';
    };
    MDCSelectFoundation.prototype.getDisabled = function () {
        return this.disabled;
    };
    MDCSelectFoundation.prototype.setDisabled = function (isDisabled) {
        this.disabled = isDisabled;
        if (this.disabled) {
            this.adapter_.addClass(cssClasses.DISABLED);
            this.adapter_.closeMenu();
        }
        else {
            this.adapter_.removeClass(cssClasses.DISABLED);
        }
        if (this.leadingIcon) {
            this.leadingIcon.setDisabled(this.disabled);
        }
        this.adapter_.setSelectAnchorAttr('tabindex', this.disabled ? '-1' : '0');
        this.adapter_.setSelectAnchorAttr('aria-disabled', this.disabled.toString());
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCSelectFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText) {
            this.helperText.setContent(content);
        }
    };
    /**
     * Re-calculates if the notched outline should be notched and if the label
     * should float.
     */
    MDCSelectFoundation.prototype.layout = function () {
        if (this.adapter_.hasLabel()) {
            var optionHasValue = this.getValue().length > 0;
            var isFocused = this.adapter_.hasClass(cssClasses.FOCUSED);
            var shouldFloatAndNotch = optionHasValue || isFocused;
            this.notchOutline(shouldFloatAndNotch);
            this.adapter_.floatLabel(shouldFloatAndNotch);
        }
    };
    /**
     * Synchronizes the list of options with the state of the foundation. Call
     * this whenever menu options are dynamically updated.
     */
    MDCSelectFoundation.prototype.layoutOptions = function () {
        this.menuItemValues = this.adapter_.getMenuItemValues();
        var selectedIndex = this.menuItemValues.indexOf(this.getValue());
        this.setSelectionAtIndex(selectedIndex);
    };
    MDCSelectFoundation.prototype.handleMenuOpened = function () {
        if (this.menuItemValues.length === 0) {
            return;
        }
        // Menu should open to the last selected element, should open to first menu item otherwise.
        var focusItemIndex = this.selectedIndex >= 0 ? this.selectedIndex : 0;
        this.adapter_.focusMenuItemAtIndex(focusItemIndex);
    };
    MDCSelectFoundation.prototype.handleMenuClosed = function () {
        this.adapter_.removeClass(cssClasses.ACTIVATED);
        this.isMenuOpen = false;
        this.adapter_.setSelectAnchorAttr('aria-expanded', 'false');
        // Unfocus the select if menu is closed without a selection
        if (!this.adapter_.isSelectAnchorFocused()) {
            this.blur();
        }
    };
    /**
     * Handles value changes, via change event or programmatic updates.
     */
    MDCSelectFoundation.prototype.handleChange = function () {
        this.layout();
        this.adapter_.notifyChange(this.getValue());
        var isRequired = this.adapter_.hasClass(cssClasses.REQUIRED);
        if (isRequired) {
            this.setValid(this.isValid());
            if (this.helperText) {
                this.helperText.setValidity(this.isValid());
            }
        }
    };
    MDCSelectFoundation.prototype.handleMenuItemAction = function (index) {
        this.setSelectedIndex(index, /** closeMenu */ true);
    };
    /**
     * Handles focus events from select element.
     */
    MDCSelectFoundation.prototype.handleFocus = function () {
        this.adapter_.addClass(cssClasses.FOCUSED);
        this.layout();
        this.adapter_.activateBottomLine();
        if (this.helperText) {
            this.helperText.showToScreenReader();
        }
    };
    /**
     * Handles blur events from select element.
     */
    MDCSelectFoundation.prototype.handleBlur = function () {
        if (this.isMenuOpen) {
            return;
        }
        this.blur();
    };
    MDCSelectFoundation.prototype.handleClick = function (normalizedX) {
        if (this.isMenuOpen) {
            return;
        }
        this.adapter_.setRippleCenter(normalizedX);
        this.adapter_.addClass(cssClasses.ACTIVATED);
        this.adapter_.openMenu();
        this.isMenuOpen = true;
        this.adapter_.setSelectAnchorAttr('aria-expanded', 'true');
    };
    MDCSelectFoundation.prototype.handleKeydown = function (event) {
        if (this.isMenuOpen) {
            return;
        }
        var isEnter = normalizeKey(event) === 'Enter';
        var isSpace = normalizeKey(event) === 'Spacebar';
        var arrowUp = normalizeKey(event) === 'ArrowUp';
        var arrowDown = normalizeKey(event) === 'ArrowDown';
        if (this.adapter_.hasClass(cssClasses.FOCUSED) && (isEnter || isSpace || arrowUp || arrowDown)) {
            if (arrowUp && this.selectedIndex > 0) {
                this.setSelectedIndex(this.selectedIndex - 1);
            }
            else if (arrowDown &&
                this.selectedIndex < this.adapter_.getMenuItemCount() - 1) {
                this.setSelectedIndex(this.selectedIndex + 1);
            }
            this.adapter_.addClass(cssClasses.ACTIVATED);
            this.adapter_.openMenu();
            this.isMenuOpen = true;
            this.adapter_.setSelectAnchorAttr('aria-expanded', 'true');
            event.preventDefault();
        }
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCSelectFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter_.hasOutline()) {
            return;
        }
        var isFocused = this.adapter_.hasClass(cssClasses.FOCUSED);
        if (openNotch) {
            var labelScale = numbers.LABEL_SCALE;
            var labelWidth = this.adapter_.getLabelWidth() * labelScale;
            this.adapter_.notchOutline(labelWidth);
        }
        else if (!isFocused) {
            this.adapter_.closeOutline();
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon) {
            this.leadingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCSelectFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon) {
            this.leadingIcon.setContent(content);
        }
    };
    MDCSelectFoundation.prototype.setValid = function (isValid) {
        this.adapter_.setSelectAnchorAttr('aria-invalid', (!isValid).toString());
        if (isValid) {
            this.adapter_.removeClass(cssClasses.INVALID);
        }
        else {
            this.adapter_.addClass(cssClasses.INVALID);
        }
    };
    MDCSelectFoundation.prototype.isValid = function () {
        if (this.adapter_.hasClass(cssClasses.REQUIRED) && !this.adapter_.hasClass(cssClasses.DISABLED)) {
            // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
            // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
            return this.selectedIndex !== numbers.UNSET_INDEX &&
                (this.selectedIndex !== 0 || Boolean(this.getValue()));
        }
        return true;
    };
    MDCSelectFoundation.prototype.setRequired = function (isRequired) {
        if (isRequired) {
            this.adapter_.addClass(cssClasses.REQUIRED);
        }
        else {
            this.adapter_.removeClass(cssClasses.REQUIRED);
        }
        this.adapter_.setSelectAnchorAttr('aria-required', isRequired.toString());
    };
    MDCSelectFoundation.prototype.getRequired = function () {
        return this.adapter_.getSelectAnchorAttr('aria-required') === 'true';
    };
    MDCSelectFoundation.prototype.init = function () {
        var anchorEl = this.adapter_.getAnchorElement();
        if (anchorEl) {
            this.adapter_.setMenuAnchorElement(anchorEl);
            this.adapter_.setMenuAnchorCorner(Corner.BOTTOM_START);
        }
        this.adapter_.setMenuWrapFocus(false);
        this.setDisabled(this.adapter_.hasClass(cssClasses.DISABLED));
        this.layoutOptions();
        this.layout();
    };
    /**
     * Unfocuses the select component.
     */
    MDCSelectFoundation.prototype.blur = function () {
        this.adapter_.removeClass(cssClasses.FOCUSED);
        this.layout();
        this.adapter_.deactivateBottomLine();
        var isRequired = this.adapter_.hasClass(cssClasses.REQUIRED);
        if (isRequired) {
            this.setValid(this.isValid());
            if (this.helperText) {
                this.helperText.setValidity(this.isValid());
            }
        }
    };
    MDCSelectFoundation.prototype.setSelectionAtIndex = function (index) {
        this.selectedIndex = index;
        if (index === numbers.UNSET_INDEX) {
            this.adapter_.setSelectedText('');
            return;
        }
        this.adapter_.setSelectedText(this.adapter_.getMenuItemTextAtIndex(index).trim());
        this.adapter_.addClassAtIndex(index, cssClasses.SELECTED_ITEM_CLASS);
        this.adapter_.setAttributeAtIndex(index, strings.ARIA_SELECTED_ATTR, 'true');
    };
    MDCSelectFoundation.prototype.removeSelectionAtIndex = function (index) {
        if (index !== numbers.UNSET_INDEX) {
            this.adapter_.removeClassAtIndex(index, cssClasses.SELECTED_ITEM_CLASS);
            this.adapter_.removeAttributeAtIndex(index, strings.ARIA_SELECTED_ATTR);
        }
    };
    return MDCSelectFoundation;
}(MDCFoundation));

const createValidityObj = (customValidity = {}) => {
    /*
     * We need to make ValidityState an object because it is readonly and
     * we cannot use the spread operator. Also, we don't export
     * `CustomValidityState` because it is a leaky implementation and the user
     * already has access to `ValidityState` in lib.dom.ts. Also an interface
     * {a: Type} can be casted to {readonly a: Type} so passing any object
     * should be fine.
     */
    const objectifiedCustomValidity = {};
    // eslint-disable-next-line guard-for-in
    for (const propName in customValidity) {
        /*
         * Casting is needed because ValidityState's props are all readonly and
         * thus cannot be set on `onjectifiedCustomValidity`. In the end, the
         * interface is the same as ValidityState (but not readonly), but the
         * function signature casts the output to ValidityState (thus readonly).
         */
        objectifiedCustomValidity[propName] =
            customValidity[propName];
    }
    return Object.assign({ badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: true, valueMissing: false }, objectifiedCustomValidity);
};
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires opened
 * @fires closed
 * @fires change
 * @fires invalid
 */
class SelectBase extends FormElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCSelectFoundation;
        this.disabled = false;
        this.outlined = false;
        this.label = '';
        this.outlineOpen = false;
        this.outlineWidth = 0;
        this.value = '';
        this.selectedText = '';
        this.icon = '';
        this.menuOpen = false;
        this.helper = '';
        this.validateOnInitialRender = false;
        this.validationMessage = '';
        this.required = false;
        this.fullwidth = false;
        this.naturalMenuWidth = false;
        this.isUiValid = true;
        this.listeners = [];
        this.onBodyClickBound = () => undefined;
        this._menuUpdateComplete = null;
        this.renderReady = false;
        this.valueSetDirectly = false;
        this.validityTransform = null;
        this._validity = createValidityObj();
    }
    get items() {
        const menuElement = this.menuElement;
        if (menuElement) {
            return menuElement.items;
        }
        return [];
    }
    get selected() {
        const menuElement = this.menuElement;
        if (menuElement) {
            return menuElement.selected;
        }
        return null;
    }
    get index() {
        const menuElement = this.menuElement;
        if (menuElement) {
            return menuElement.index;
        }
        return -1;
    }
    get shouldRenderHelperText() {
        return !!this.helper || !!this.validationMessage;
    }
    get validity() {
        this._checkValidity(this.value);
        return this._validity;
    }
    render() {
        let outlinedOrUnderlined = html ``;
        if (this.outlined) {
            outlinedOrUnderlined = this.renderOutlined();
        }
        else {
            outlinedOrUnderlined = this.renderUnderlined();
        }
        const classes = {
            'mdc-select--disabled': this.disabled,
            'mdc-select--no-label': !this.label,
            'mdc-select--outlined': this.outlined,
            'mdc-select--with-leading-icon': !!this.icon,
            'mdc-select--required': this.required,
            'mdc-select--invalid': !this.isUiValid,
            'mdc-select--fullwidth': this.fullwidth,
        };
        const describedby = this.shouldRenderHelperText ? 'helper-text' : undefined;
        return html `
      <div class="mdc-select ${classMap(classes)}">
        <input
            class="formElement"
            .value=${this.value}
            hidden
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby="label"
            aria-required=${this.required}
            aria-describedby=${ifDefined(describedby)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.icon ? this.renderIcon(this.icon) : ''}
          <span class="mdc-select__selected-text">${this.selectedText}</span>
          <span class="mdc-select__dropdown-icon">
            <svg
                width="10px"
                height="5px"
                viewBox="7 10 10 5">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${outlinedOrUnderlined}
        </div>
        ${this.renderHelperText()}
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface"
            activatable
            .fullwidth=${!this.naturalMenuWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}>
          <slot></slot>
        </mwc-menu>
      </div>`;
    }
    renderHelperText() {
        const showValidationMessage = this.validationMessage && !this.isUiValid;
        const classes = {
            'mdc-select-helper-text--validation-msg': showValidationMessage,
            'hidden': !this.shouldRenderHelperText,
        };
        return html `
        <p
          class="mdc-select-helper-text ${classMap(classes)}"
          id="helper-text">${showValidationMessage ? this.validationMessage : this.helper}</p>`;
    }
    renderOutlined() {
        let labelTemplate = '';
        if (this.label) {
            labelTemplate = this.renderLabel();
        }
        return html `
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${labelTemplate}
      </mwc-notched-outline>`;
    }
    renderUnderlined() {
        let labelTemplate = '';
        if (this.label) {
            labelTemplate = this.renderLabel();
        }
        return html `
      ${labelTemplate}
      <div .lineRippleFoundation=${lineRipple()}></div>
    `;
    }
    renderLabel() {
        return html `
      <label
          .floatingLabelFoundation=${floatingLabel(this.label)}
          @labelchange=${this.onLabelChange}
          id="label">
        ${this.label}
      </label>
    `;
    }
    renderIcon(icon) {
        return html `<mwc-icon class="mdc-select__icon"><div>${icon}</div></mwc-icon>`;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { activateBottomLine: () => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.activate();
                }
            }, deactivateBottomLine: () => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.deactivate();
                }
            }, getSelectedMenuItem: () => {
                const menuElement = this.menuElement;
                if (!menuElement) {
                    return null;
                }
                return menuElement.selected;
            }, hasLabel: () => {
                return !!this.label;
            }, floatLabel: (shouldFloat) => {
                if (this.labelElement) {
                    this.labelElement.floatingLabelFoundation.float(shouldFloat);
                }
            }, getLabelWidth: () => {
                if (this.labelElement) {
                    return this.labelElement.floatingLabelFoundation.getWidth();
                }
                return 0;
            }, hasOutline: () => this.outlined, notchOutline: (labelWidth) => {
                const outlineElement = this.outlineElement;
                if (outlineElement && !this.outlineOpen) {
                    this.outlineWidth = labelWidth;
                    this.outlineOpen = true;
                }
            }, closeOutline: () => {
                if (this.outlineElement) {
                    this.outlineOpen = false;
                }
            }, setRippleCenter: (normalizedX) => {
                if (this.lineRippleElement) {
                    const foundation = this.lineRippleElement.lineRippleFoundation;
                    foundation.setRippleCenter(normalizedX);
                }
            }, notifyChange: async (value) => {
                if (!this.valueSetDirectly && value === this.value) {
                    return;
                }
                this.valueSetDirectly = false;
                this.value = value;
                await this.updateComplete;
                const ev = new Event('change', { bubbles: true });
                this.dispatchEvent(ev);
            }, setSelectedText: (value) => this.selectedText = value, isSelectAnchorFocused: () => {
                const selectAnchorElement = this.anchorElement;
                if (!selectAnchorElement) {
                    return false;
                }
                const rootNode = selectAnchorElement.getRootNode();
                return rootNode.activeElement === selectAnchorElement;
            }, getSelectAnchorAttr: (attr) => {
                const selectAnchorElement = this.anchorElement;
                if (!selectAnchorElement) {
                    return null;
                }
                return selectAnchorElement.getAttribute(attr);
            }, setSelectAnchorAttr: (attr, value) => {
                const selectAnchorElement = this.anchorElement;
                if (!selectAnchorElement) {
                    return;
                }
                selectAnchorElement.setAttribute(attr, value);
            }, openMenu: () => {
                this.menuOpen = true;
            }, closeMenu: () => {
                this.menuOpen = false;
            }, getAnchorElement: () => this.anchorElement, setMenuAnchorElement: () => {
                /* Handled by anchor directive */
            }, setMenuAnchorCorner: () => {
                const menuElement = this.menuElement;
                if (menuElement) {
                    menuElement.corner = 'BOTTOM_START';
                }
            }, setMenuWrapFocus: (wrapFocus) => {
                const menuElement = this.menuElement;
                if (menuElement) {
                    menuElement.wrapFocus = wrapFocus;
                }
            }, setAttributeAtIndex: () => undefined, removeAttributeAtIndex: () => undefined, focusMenuItemAtIndex: (index) => {
                const menuElement = this.menuElement;
                if (!menuElement) {
                    return;
                }
                const element = menuElement.items[index];
                if (!element) {
                    return;
                }
                element.focus();
            }, getMenuItemCount: () => {
                const menuElement = this.menuElement;
                if (menuElement) {
                    return menuElement.items.length;
                }
                return 0;
            }, getMenuItemValues: () => {
                const menuElement = this.menuElement;
                if (!menuElement) {
                    return [];
                }
                const items = menuElement.items;
                return items.map((item) => item.value);
            }, getMenuItemTextAtIndex: (index) => {
                const menuElement = this.menuElement;
                if (!menuElement) {
                    return '';
                }
                const element = menuElement.items[index];
                if (!element) {
                    return '';
                }
                return element.text;
            }, getMenuItemAttr: (menuItem) => {
                const listItem = menuItem;
                return listItem.value;
            }, addClassAtIndex: () => undefined, removeClassAtIndex: () => undefined });
    }
    checkValidity() {
        const isValid = this._checkValidity(this.value);
        if (!isValid) {
            const invalidEvent = new Event('invalid', { bubbles: false, cancelable: true });
            this.dispatchEvent(invalidEvent);
        }
        return isValid;
    }
    reportValidity() {
        const isValid = this.checkValidity();
        this.isUiValid = isValid;
        return isValid;
    }
    _checkValidity(value) {
        const nativeValidity = this.formElement.validity;
        let validity = createValidityObj(nativeValidity);
        if (this.validityTransform) {
            const customValidity = this.validityTransform(value, validity);
            validity = Object.assign(Object.assign({}, validity), customValidity);
        }
        this._validity = validity;
        return this._validity.valid;
    }
    setCustomValidity(message) {
        this.validationMessage = message;
        this.formElement.setCustomValidity(message);
    }
    async _getUpdateComplete() {
        await this._menuUpdateComplete;
        await super._getUpdateComplete();
    }
    async firstUpdated() {
        const menuElement = this.menuElement;
        if (menuElement) {
            this._menuUpdateComplete = menuElement.updateComplete;
            await this._menuUpdateComplete;
        }
        super.firstUpdated();
        this.mdcFoundation.isValid = () => true;
        this.mdcFoundation.setValid = () => undefined;
        this.mdcFoundation.setDisabled(this.disabled);
        if (this.validateOnInitialRender) {
            this.reportValidity();
        }
        // init with value set
        if (this.value && !this.selected) {
            if (!this.items.length && this.slotElement &&
                this.slotElement.assignedNodes({ flatten: true }).length) {
                // Shady DOM initial render fix
                await new Promise((res) => requestAnimationFrame(res));
                await this.layout();
            }
            this.selectByValue(this.value);
        }
        this.renderReady = true;
    }
    select(index) {
        const menuElement = this.menuElement;
        if (menuElement) {
            menuElement.select(index);
        }
    }
    selectByValue(value) {
        let indexToSelect = -1;
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if (item.value === value) {
                indexToSelect = i;
                break;
            }
        }
        this.valueSetDirectly = true;
        this.select(indexToSelect);
        this.mdcFoundation.handleChange();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const listener of this.listeners) {
            listener.target.removeEventListener(listener.name, listener.cb);
        }
    }
    focus() {
        const focusEvt = new CustomEvent('focus');
        const selectAnchorElement = this.anchorElement;
        if (selectAnchorElement) {
            selectAnchorElement.dispatchEvent(focusEvt);
            selectAnchorElement.focus();
        }
    }
    blur() {
        const focusEvt = new CustomEvent('blur');
        const selectAnchorElement = this.anchorElement;
        if (selectAnchorElement) {
            selectAnchorElement.dispatchEvent(focusEvt);
            selectAnchorElement.blur();
        }
    }
    onFocus() {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleFocus();
        }
    }
    onBlur() {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleBlur();
        }
        const menuElement = this.menuElement;
        if (menuElement && !menuElement.open) {
            this.reportValidity();
        }
    }
    onClick(evt) {
        if (this.mdcFoundation) {
            this.focus();
            const targetClientRect = evt.target.getBoundingClientRect();
            let xCoord = 0;
            if ('touches' in evt) {
                xCoord = evt.touches[0].clientX;
            }
            else {
                xCoord = evt.clientX;
            }
            const normalizedX = xCoord - targetClientRect.left;
            this.mdcFoundation.handleClick(normalizedX);
        }
    }
    onKeydown(evt) {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleKeydown(evt);
        }
    }
    async onSelected(evt) {
        if (!this.mdcFoundation) {
            await this.updateComplete;
        }
        this.mdcFoundation.handleMenuItemAction(evt.detail.index);
    }
    onOpened() {
        if (this.mdcFoundation) {
            this.menuOpen = true;
            this.mdcFoundation.handleMenuOpened();
        }
    }
    onClosed() {
        if (this.mdcFoundation) {
            this.menuOpen = false;
            this.mdcFoundation.handleMenuClosed();
        }
    }
    async onLabelChange() {
        if (this.label) {
            await this.layout(false);
        }
    }
    async layout(updateItems = true) {
        if (this.mdcFoundation) {
            this.mdcFoundation.layout();
        }
        await this.updateComplete;
        const labelElement = this.labelElement;
        if (labelElement && this.outlineElement) {
            /* When the textfield automatically notches due to a value and label
             * being defined, the textfield may be set to `display: none` by the user.
             * this means that the notch is of size 0px. We provide this function so
             * that the user may manually resize the notch to the floated label's
             * width.
             */
            if (this.outlineOpen) {
                const labelWidth = labelElement.floatingLabelFoundation.getWidth();
                this.outlineWidth = labelWidth;
            }
        }
        const menuElement = this.menuElement;
        if (menuElement) {
            menuElement.layout(updateItems);
        }
    }
}
__decorate([
    query('.mdc-select')
], SelectBase.prototype, "mdcRoot", void 0);
__decorate([
    query('.formElement')
], SelectBase.prototype, "formElement", void 0);
__decorate([
    query('slot')
], SelectBase.prototype, "slotElement", void 0);
__decorate([
    query('select')
], SelectBase.prototype, "nativeSelectElement", void 0);
__decorate([
    query('input')
], SelectBase.prototype, "nativeInputElement", void 0);
__decorate([
    query('.mdc-line-ripple')
], SelectBase.prototype, "lineRippleElement", void 0);
__decorate([
    query('.mdc-floating-label')
], SelectBase.prototype, "labelElement", void 0);
__decorate([
    query('mwc-notched-outline')
], SelectBase.prototype, "outlineElement", void 0);
__decorate([
    query('.mdc-menu')
], SelectBase.prototype, "menuElement", void 0);
__decorate([
    query('.mdc-select__anchor')
], SelectBase.prototype, "anchorElement", void 0);
__decorate([
    property({ type: Boolean, attribute: 'disabled', reflect: true }),
    observer(function (value) {
        if (this.renderReady) {
            this.mdcFoundation.setDisabled(value);
        }
    })
], SelectBase.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], SelectBase.prototype, "outlined", void 0);
__decorate([
    property({ type: String })
], SelectBase.prototype, "label", void 0);
__decorate([
    property({ type: Boolean })
], SelectBase.prototype, "outlineOpen", void 0);
__decorate([
    property({ type: Number })
], SelectBase.prototype, "outlineWidth", void 0);
__decorate([
    property({ type: String }),
    observer(function (value) {
        if (this.mdcFoundation) {
            const initialization = this.selected === null && !!value;
            const valueSetByUser = this.selected && this.selected.value !== value;
            if (initialization || valueSetByUser) {
                this.selectByValue(value);
            }
            this.reportValidity();
        }
    })
], SelectBase.prototype, "value", void 0);
__decorate([
    property({ type: String })
], SelectBase.prototype, "selectedText", void 0);
__decorate([
    property({ type: String })
], SelectBase.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], SelectBase.prototype, "menuOpen", void 0);
__decorate([
    property({ type: String })
], SelectBase.prototype, "helper", void 0);
__decorate([
    property({ type: Boolean })
], SelectBase.prototype, "validateOnInitialRender", void 0);
__decorate([
    property({ type: String })
], SelectBase.prototype, "validationMessage", void 0);
__decorate([
    property({ type: Boolean })
], SelectBase.prototype, "required", void 0);
__decorate([
    property({ type: Boolean })
], SelectBase.prototype, "fullwidth", void 0);
__decorate([
    property({ type: Boolean })
], SelectBase.prototype, "naturalMenuWidth", void 0);
__decorate([
    property({ type: Boolean })
], SelectBase.prototype, "isUiValid", void 0);

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const style = css `﻿.mdc-select-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid .mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;width:24px;height:24px;border:none;opacity:.54;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / .75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0,0,0,.87)}.mdc-select__anchor:hover .mdc-select__ripple::before{opacity:.04}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:.12}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-list .mdc-list-item--selected::before,.mdc-select__menu .mdc-list .mdc-list-item--selected::after{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list .mdc-list-item--selected:hover::before{opacity:.04}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded--background-focused::before,.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-select{display:inline-block;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__anchor{background-color:#f5f5f5}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0,0,0,.87)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0,0,0,.6)}.mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.42)}.mdc-select:not(.mdc-select--disabled) .mdc-select-helper-text{color:rgba(0,0,0,.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98,0,238,.87)}.mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.87)}.mdc-select .mdc-floating-label{left:16px;right:initial;top:50%;transform:translateY(-50%);pointer-events:none}[dir=rtl] .mdc-select .mdc-floating-label,.mdc-select .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select.mdc-select--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-select.mdc-select--outlined .mdc-floating-label,.mdc-select.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select .mdc-select__anchor{border-radius:4px 4px 0 0}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select__dropdown-icon{fill:rgba(0,0,0,.54);margin-left:12px;margin-right:12px;display:inline-flex;position:relative;width:24px;height:24px;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{height:56px;display:flex;align-items:baseline;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer;min-width:200px}.mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before,.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text,.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before,.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__anchor.mdc-select--focused .mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select__anchor+.mdc-select-helper-text{margin-right:16px;margin-left:16px}.mdc-select--focused .mdc-select__anchor+.mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){opacity:1}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);box-sizing:border-box;width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;white-space:nowrap;appearance:none;pointer-events:none;overflow:hidden;background-color:transparent;color:inherit}.mdc-select__selected-text::-ms-expand{display:none}.mdc-select__selected-text::-ms-value{background-color:transparent;color:inherit}.mdc-select--fullwidth{width:100%}.mdc-select--outlined{border:none}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-radius:0 4px 4px 0}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 4px 4px 0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-radius:4px 0 0 4px}.mdc-select--outlined .mdc-select__selected-text{border-radius:4px}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined .mdc-select__anchor{overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__selected-text{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid .mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg{opacity:1}.mdc-select--required .mdc-floating-label::after{content:"*"}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--disabled .mdc-floating-label{color:rgba(0,0,0,.38)}.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0,0,0,.38)}.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.38)}.mdc-select--disabled .mdc-line-ripple::before{border-bottom-style:dotted}.mdc-select--disabled .mdc-select__icon{color:rgba(0,0,0,.38)}.mdc-select--disabled .mdc-select__selected-text{color:rgba(0,0,0,.38);pointer-events:none}.mdc-select--disabled.mdc-select--outlined .mdc-select__anchor{background-color:transparent}.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__leading,.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__notch,.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.16)}.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{left:36px;right:initial}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above[dir=rtl]{left:initial;right:36px}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon 250ms 1}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake,.mdc-select--with-leading-icon.mdc-select--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl 250ms 1}.mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text{padding-left:32px;padding-right:32px}[dir=rtl] .mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text,.mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text[dir=rtl]{padding-left:32px;padding-right:32px}.mdc-select__menu .mdc-list .mdc-list-item--selected{color:#000;color:var(--mdc-theme-on-surface, #000)}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.hidden,[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc(48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px))}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38));--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0,0,0,.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:#f5f5f5;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-menu{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0,0,0,.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0,0,0,.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined) .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.16))}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0,0,0,.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0,0,0,.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0,0,0,.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0,0,0,.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}.mdc-menu{width:100%}`;

/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
let Select = class Select extends SelectBase {
};
Select.styles = style;
Select = __decorate([
    customElement('mwc-select')
], Select);

export { Select };
