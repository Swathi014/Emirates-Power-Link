(function($) {
    jQuery.ptTimeSelect = {};
    jQuery.ptTimeSelect.version = "__BUILD_VERSION_NUMBER__";
    jQuery.ptTimeSelect.options = {
        containerClass: undefined,
        containerWidth: '22em',
        hoursLabel: 'Hour',
        minutesLabel: 'Minutes',
        setButtonLabel: 'Set',
        popupImage: undefined,
        onFocusDisplay: true,
        zIndex: 10,
        onBeforeShow: undefined,
        onClose: undefined
    };
    jQuery.ptTimeSelect._ptTimeSelectInit = function() {
        jQuery(document).ready(function() {
            if (!jQuery('#ptTimeSelectCntr').length) {
                jQuery("body").append('<div id="ptTimeSelectCntr" class="">' + '        <div class="ui-widget ui-widget-content ui-corner-all">' + '        <div class="ui-widget-header ui-corner-all">' + '            <div id="ptTimeSelectCloseCntr" style="float: right;">' + '                <a href="javascript: void(0);" onclick="jQuery.ptTimeSelect.closeCntr();" ' + '                        onmouseover="jQuery(this).removeClass(\'ui-state-default\').addClass(\'ui-state-hover\');" ' + '                        onmouseout="jQuery(this).removeClass(\'ui-state-hover\').addClass(\'ui-state-default\');"' + '                        class="ui-corner-all ui-state-default">' + '                    <span class="ui-icon ui-icon-circle-close">X</span>' + '                </a>' + '            </div>' + '            <div id="ptTimeSelectUserTime" style="float: left;">' + '                <span id="ptTimeSelectUserSelHr">1</span> : ' + '                <span id="ptTimeSelectUserSelMin">00</span> ' + '                <span id="ptTimeSelectUserSelAmPm">AM</span>' + '            </div>' + '            <br style="clear: both;" /><div></div>' + '        </div>' + '        <div class="ui-widget-content ui-corner-all">' + '            <div>' + '                <div class="ptTimeSelectTimeLabelsCntr">' + '                    <div class="ptTimeSelectLeftPane" style="width: 50%; text-align: center; float: left;" class="">Hour</div>' + '                    <div class="ptTimeSelectRightPane" style="width: 50%; text-align: center; float: left;">Minutes</div>' + '                </div>' + '                <div>' + '                    <div style="float: left; width: 50%;">' + '                        <div class="ui-widget-content ptTimeSelectLeftPane">' + '                            <div class="ptTimeSelectHrAmPmCntr">' + '                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);" ' + '                                        style="display: block; width: 45%; float: left;">AM</a>' + '                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);" ' + '                                        style="display: block; width: 45%; float: left;">PM</a>' + '                                <br style="clear: left;" /><div></div>' + '                            </div>' + '                            <div class="ptTimeSelectHrCntr">' + '                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">1</a>' + '                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">2</a>' + '                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">3</a>' + '                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">4</a>' + '                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">5</a>' + '                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">6</a>' + '                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">7</a>' + '                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">8</a>' + '                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">9</a>' + '                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">10</a>' + '                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">11</a>' + '                                <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">12</a>' + '                                <br style="clear: left;" /><div></div>' + '                            </div>' + '                        </div>' + '                    </div>' + '                    <div style="width: 50%; float: left;">' + '                        <div class="ui-widget-content ptTimeSelectRightPane">' + '                            <div class="ptTimeSelectMinCntr">' + '                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">00</a>' + '                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">05</a>' + '                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">10</a>' + '                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">15</a>' + '                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">20</a>' + '                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">25</a>' + '                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">30</a>' + '                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">35</a>' + '                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">40</a>' + '                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">45</a>' + '                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">50</a>' + '                                <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">55</a>' + '                                <br style="clear: left;" /><div></div>' + '                            </div>' + '                        </div>' + '                    </div>' + '                </div>' + '            </div>' + '            <div style="clear: left;"></div>' + '        </div>' + '        <div id="ptTimeSelectSetButton">' + '            <a href="javascript: void(0);" onclick="jQuery.ptTimeSelect.setTime()"' + '                    onmouseover="jQuery(this).removeClass(\'ui-state-default\').addClass(\'ui-state-hover\');" ' + '                        onmouseout="jQuery(this).removeClass(\'ui-state-hover\').addClass(\'ui-state-default\');"' + '                        class="ui-corner-all ui-state-default">' + '                SET' + '            </a>' + '            <br style="clear: both;" /><div></div>' + '        </div>' + '        <!--[if lte IE 6.5]>' + '            <iframe style="display:block; position:absolute;top: 0;left:0;z-index:-1;' + '                filter:Alpha(Opacity=\'0\');width:3000px;height:3000px"></iframe>' + '        <![endif]-->' + '    </div></div>');
                var e = jQuery('#ptTimeSelectCntr');
                e.find('.ptTimeSelectMin').bind("click", function() {
                    jQuery.ptTimeSelect.setMin($(this).text());
                });
                e.find('.ptTimeSelectHr').bind("click", function() {
                    jQuery.ptTimeSelect.setHr($(this).text());
                });
                $(document).mousedown(jQuery.ptTimeSelect._doCheckMouseClick);
            }
        });
    }();
    jQuery.ptTimeSelect.setHr = function(h) {
        if (h.toLowerCase() == "am" || h.toLowerCase() == "pm") {
            jQuery('#ptTimeSelectUserSelAmPm').empty().append(h);
        } else {
            jQuery('#ptTimeSelectUserSelHr').empty().append(h);
        }
    };
    jQuery.ptTimeSelect.setMin = function(m) {
        jQuery('#ptTimeSelectUserSelMin').empty().append(m);
    };
    jQuery.ptTimeSelect.setTime = function() {
        var tSel = jQuery('#ptTimeSelectUserSelHr').text() + ":" + jQuery('#ptTimeSelectUserSelMin').text() + " " + jQuery('#ptTimeSelectUserSelAmPm').text();
        var i = jQuery(".isPtTimeSelectActive");
        if (i.attr('type') == 'time') {
            i.val(jQuery.ptTimeSelect.convertFromAMPM(tSel));
        } else {
            i.val(tSel);
        }
        i.trigger('change');
        this.closeCntr();
    };
    jQuery.ptTimeSelect.convertFrom24 = function(time) {
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) {
            time = time.slice(1);
            time[5] = +time[0] < 12 ? ' AM' : ' PM';
            time[0] = +time[0] % 12 || 12;
        }
        return time.join('');
    };
    jQuery.ptTimeSelect.convertFromAMPM = function(time) {
        var hours = Number(time.match(/^(\d+)/)[1]);
        var minutes = Number(time.match(/:(\d+)/)[1]);
        var AMPM = time.match(/\s(.*)$/)[1];
        if (AMPM == "PM" && hours < 12) hours = hours + 12;
        if (AMPM == "AM" && hours == 12) hours = hours - 12;
        var sHours = hours.toString();
        var sMinutes = minutes.toString();
        if (hours < 10) sHours = "0" + sHours;
        if (minutes < 10) sMinutes = "0" + sMinutes;
        return sHours + ":" + sMinutes;
    };
    jQuery.ptTimeSelect.openCntr = function(ele) {
        jQuery.ptTimeSelect.closeCntr();
        jQuery(".isPtTimeSelectActive").removeClass("isPtTimeSelectActive");
        var cntr = jQuery("#ptTimeSelectCntr");
        var i = jQuery(ele).eq(0).addClass("isPtTimeSelectActive");
        var opt = i.data("ptTimeSelectOptions");
        var style = i.offset();
        var time = '';
        style['z-index'] = opt.zIndex;
        style.top = (style.top + i.outerHeight());
        if (opt.containerWidth) {
            style.width = opt.containerWidth;
        }
        if (opt.containerClass) {
            cntr.addClass(opt.containerClass);
        }
        cntr.css(style);
        if (i.attr('type') == 'time') {
            time = jQuery.ptTimeSelect.convertFrom24(i.val());
        } else {
            time = i.val();
        }
        var hr = 1;
        var min = '00';
        var tm = 'AM';
        if (time) {
            var re = /([0-9]{1,2}).*:.*([0-9]{2}).*(PM|AM)/i;
            var match = re.exec(time);
            if (match) {
                hr = match[1] || 1;
                min = match[2] || '00';
                tm = match[3] || 'AM';
            }
        }
        cntr.find("#ptTimeSelectUserSelHr").empty().append(hr);
        cntr.find("#ptTimeSelectUserSelMin").empty().append(min);
        cntr.find("#ptTimeSelectUserSelAmPm").empty().append(tm);
        cntr.find(".ptTimeSelectTimeLabelsCntr .ptTimeSelectLeftPane").empty().append(opt.hoursLabel);
        cntr.find(".ptTimeSelectTimeLabelsCntr .ptTimeSelectRightPane").empty().append(opt.minutesLabel);
        cntr.find("#ptTimeSelectSetButton a").empty().append(opt.setButtonLabel);
        if (opt.onBeforeShow) {
            opt.onBeforeShow(i, cntr);
        }
        cntr.slideDown("fast");
    };
    jQuery.ptTimeSelect.closeCntr = function(i) {
        var e = $("#ptTimeSelectCntr");
        if (e.is(":visible") == true) {
            if (jQuery.support.tbody == false) {
                if (!(e[0].offsetWidth > 0) && !(e[0].offsetHeight > 0)) {
                    return;
                }
            }
            jQuery('#ptTimeSelectCntr').css("display", "none").removeClass().css("width", "");
            if (!i) {
                i = $(".isPtTimeSelectActive");
            }
            if (i) {
                var opt = i.removeClass("isPtTimeSelectActive").data("ptTimeSelectOptions");
                if (opt && opt.onClose) {
                    opt.onClose(i);
                }
            }
        }
        return;
    };
    jQuery.ptTimeSelect._doCheckMouseClick = function(ev) {
        if (!$("#ptTimeSelectCntr:visible").length) {
            return;
        }
        if (!jQuery(ev.target).closest("#ptTimeSelectCntr").length && jQuery(ev.target).not("input.isPtTimeSelectActive").length) {
            jQuery.ptTimeSelect.closeCntr();
        }
    };
    jQuery.fn.ptTimeSelect = function(opt) {
        return this.each(function() {
            if (this.nodeName.toLowerCase() != 'input') return;
            var e = jQuery(this);
            if (e.hasClass('hasPtTimeSelect')) {
                return this;
            }
            var thisOpt = {};
            thisOpt = $.extend(thisOpt, jQuery.ptTimeSelect.options, opt);
            e.addClass('hasPtTimeSelect').data("ptTimeSelectOptions", thisOpt);
            if (thisOpt.popupImage || !thisOpt.onFocusDisplay) {
                var img = jQuery('<span>&nbsp;</span><a href="javascript:" onclick="' + 'jQuery.ptTimeSelect.openCntr(jQuery(this).data(\'ptTimeSelectEle\'));">' + thisOpt.popupImage + '</a>').data("ptTimeSelectEle", e);
                e.after(img);
            }
            if (thisOpt.onFocusDisplay) {
                e.focus(function() {
                    jQuery.ptTimeSelect.openCntr(this);
                });
            }
            return this;
        });
    };
})(jQuery);