/**
 * @package    Joomla.Component.Builder
 *
 * @created    30th April, 2015
 * @author     Llewellyn van der Merwe <http://www.joomlacomponentbuilder.com>
 * @github     Joomla Component Builder <https://github.com/vdm-io/Joomla-Component-Builder>
 * @copyright  Copyright (C) 2015 - 2019 Vast Development Method. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */

// Initial Script
jQuery(document).ready(function()
{
	var add_php_view_vvvvvyt = jQuery("#jform_add_php_view input[type='radio']:checked").val();
	vvvvvyt(add_php_view_vvvvvyt);

	var add_php_jview_display_vvvvvyu = jQuery("#jform_add_php_jview_display input[type='radio']:checked").val();
	vvvvvyu(add_php_jview_display_vvvvvyu);

	var add_php_jview_vvvvvyv = jQuery("#jform_add_php_jview input[type='radio']:checked").val();
	vvvvvyv(add_php_jview_vvvvvyv);

	var add_php_document_vvvvvyw = jQuery("#jform_add_php_document input[type='radio']:checked").val();
	vvvvvyw(add_php_document_vvvvvyw);

	var add_css_document_vvvvvyx = jQuery("#jform_add_css_document input[type='radio']:checked").val();
	vvvvvyx(add_css_document_vvvvvyx);

	var add_javascript_file_vvvvvyy = jQuery("#jform_add_javascript_file input[type='radio']:checked").val();
	vvvvvyy(add_javascript_file_vvvvvyy);

	var add_js_document_vvvvvyz = jQuery("#jform_add_js_document input[type='radio']:checked").val();
	vvvvvyz(add_js_document_vvvvvyz);

	var add_css_vvvvvza = jQuery("#jform_add_css input[type='radio']:checked").val();
	vvvvvza(add_css_vvvvvza);

	var add_php_ajax_vvvvvzb = jQuery("#jform_add_php_ajax input[type='radio']:checked").val();
	vvvvvzb(add_php_ajax_vvvvvzb);

	var add_custom_button_vvvvvzc = jQuery("#jform_add_custom_button input[type='radio']:checked").val();
	vvvvvzc(add_custom_button_vvvvvzc);

	var button_position_vvvvvzd = jQuery("#jform_button_position").val();
	vvvvvzd(button_position_vvvvvzd);
});

// the vvvvvyt function
function vvvvvyt(add_php_view_vvvvvyt)
{
	// set the function logic
	if (add_php_view_vvvvvyt == 1)
	{
		jQuery('#jform_php_view-lbl').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_php_view-lbl').closest('.control-group').hide();
	}
}

// the vvvvvyu function
function vvvvvyu(add_php_jview_display_vvvvvyu)
{
	// set the function logic
	if (add_php_jview_display_vvvvvyu == 1)
	{
		jQuery('#jform_php_jview_display-lbl').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_php_jview_display-lbl').closest('.control-group').hide();
	}
}

// the vvvvvyv function
function vvvvvyv(add_php_jview_vvvvvyv)
{
	// set the function logic
	if (add_php_jview_vvvvvyv == 1)
	{
		jQuery('#jform_php_jview-lbl').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_php_jview-lbl').closest('.control-group').hide();
	}
}

// the vvvvvyw function
function vvvvvyw(add_php_document_vvvvvyw)
{
	// set the function logic
	if (add_php_document_vvvvvyw == 1)
	{
		jQuery('#jform_php_document-lbl').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_php_document-lbl').closest('.control-group').hide();
	}
}

// the vvvvvyx function
function vvvvvyx(add_css_document_vvvvvyx)
{
	// set the function logic
	if (add_css_document_vvvvvyx == 1)
	{
		jQuery('#jform_css_document-lbl').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_css_document-lbl').closest('.control-group').hide();
	}
}

// the vvvvvyy function
function vvvvvyy(add_javascript_file_vvvvvyy)
{
	// set the function logic
	if (add_javascript_file_vvvvvyy == 1)
	{
		jQuery('#jform_javascript_file-lbl').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_javascript_file-lbl').closest('.control-group').hide();
	}
}

// the vvvvvyz function
function vvvvvyz(add_js_document_vvvvvyz)
{
	// set the function logic
	if (add_js_document_vvvvvyz == 1)
	{
		jQuery('#jform_js_document-lbl').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_js_document-lbl').closest('.control-group').hide();
	}
}

// the vvvvvza function
function vvvvvza(add_css_vvvvvza)
{
	// set the function logic
	if (add_css_vvvvvza == 1)
	{
		jQuery('#jform_css-lbl').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_css-lbl').closest('.control-group').hide();
	}
}

// the vvvvvzb function
function vvvvvzb(add_php_ajax_vvvvvzb)
{
	// set the function logic
	if (add_php_ajax_vvvvvzb == 1)
	{
		jQuery('#jform_ajax_input-lbl').closest('.control-group').show();
		jQuery('#jform_php_ajaxmethod-lbl').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_ajax_input-lbl').closest('.control-group').hide();
		jQuery('#jform_php_ajaxmethod-lbl').closest('.control-group').hide();
	}
}

// the vvvvvzc function
function vvvvvzc(add_custom_button_vvvvvzc)
{
	// set the function logic
	if (add_custom_button_vvvvvzc == 1)
	{
		jQuery('#jform_custom_button-lbl').closest('.control-group').show();
		jQuery('#jform_php_controller-lbl').closest('.control-group').show();
		jQuery('#jform_php_model-lbl').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_custom_button-lbl').closest('.control-group').hide();
		jQuery('#jform_php_controller-lbl').closest('.control-group').hide();
		jQuery('#jform_php_model-lbl').closest('.control-group').hide();
	}
}

// the vvvvvzd function
function vvvvvzd(button_position_vvvvvzd)
{
	if (isSet(button_position_vvvvvzd) && button_position_vvvvvzd.constructor !== Array)
	{
		var temp_vvvvvzd = button_position_vvvvvzd;
		var button_position_vvvvvzd = [];
		button_position_vvvvvzd.push(temp_vvvvvzd);
	}
	else if (!isSet(button_position_vvvvvzd))
	{
		var button_position_vvvvvzd = [];
	}
	var button_position = button_position_vvvvvzd.some(button_position_vvvvvzd_SomeFunc);


	// set this function logic
	if (button_position)
	{
		jQuery('.note_custom_toolbar_placeholder').closest('.control-group').show();
	}
	else
	{
		jQuery('.note_custom_toolbar_placeholder').closest('.control-group').hide();
	}
}

// the vvvvvzd Some function
function button_position_vvvvvzd_SomeFunc(button_position_vvvvvzd)
{
	// set the function logic
	if (button_position_vvvvvzd == 5)
	{
		return true;
	}
	return false;
}

// the isSet function
function isSet(val)
{
	if ((val != undefined) && (val != null) && 0 !== val.length){
		return true;
	}
	return false;
}


jQuery(document).ready(function()
{
	// get the linked details
	getLinked();
	// check and load all the custom code edit buttons
	getEditCustomCodeButtons();
});

function getLinked_server(type){
	var getUrl = JRouter("index.php?option=com_componentbuilder&task=ajax.getLinked&format=json&raw=true&vdm="+vastDevMod);
	if(token.length > 0 && type > 0){
		var request = token+'=1&type='+type;
	}
	return jQuery.ajax({
		type: 'GET',
		url: getUrl,
		dataType: 'json',
		data: request,
		jsonp: false
	});
}

function getLinked(){
	getLinked_server(1).done(function(result) {
		if(result){
			jQuery('#display_linked_to').html(result);
		}
	});
}

function getSnippetDetails_server(snippetId){
	var getUrl = JRouter("index.php?option=com_componentbuilder&task=ajax.snippetDetails&format=json");
	if(token.length > 0 && snippetId > 0){
		var request = token+'=1&id='+snippetId;
	}
	return jQuery.ajax({
		type: 'GET',
		url: getUrl,
		dataType: 'jsonp',
		data: request,
		jsonp: 'callback'
	});
}

function getSnippetDetails(id){
	getSnippetDetails_server(id).done(function(result) {
		if(result.snippet){
			var description = '';
			if (result.description.length > 0) {
				description = '<p>'+result.description+'</p>';
			}
			var library = '';
			if (result.library.length > 0) {
				library = ' <b>('+result.library+')</b>';
			}
			var code = '<div id="snippet-code"><b>'+result.name+' ('+result.type+')</b> <a href="'+result.url+'" target="_blank" >see more details'+library+'</a><br /><em>'+result.heading+'</em><br /><textarea  id="snippet" class="span12" rows="11">'+result.snippet+'</textarea></div>';
			jQuery('#snippet-code').remove();
			jQuery('.snippet-code').append(code);
			// make sure the code block is active
			jQuery("#snippet").focus(function() {
				var jQuerythis = jQuery(this);
				jQuerythis.select();
			
				// Work around Chrome's little problem
				jQuerythis.mouseup(function() {
					// Prevent further mouseup intervention
					jQuerythis.unbind("mouseup");
					return false;
				});
			});
		}
		if(result.usage){
			var usage = '<div id="snippet-usage"><p>'+result.usage+'</p></div>';
			jQuery('#snippet-usage').remove();
			jQuery('.snippet-usage').append(usage);
		}
	})
}

function getDynamicValues_server(dynamicId){
	var getUrl = JRouter("index.php?option=com_componentbuilder&task=ajax.getDynamicValues&format=json");
	if(token.length > 0 && dynamicId > 0){
		var request = token+'=1&view=site_view&id='+dynamicId;
	}
	return jQuery.ajax({
		type: 'GET',
		url: getUrl,
		dataType: 'jsonp',
		data: request,
		jsonp: 'callback'
	});
}

function getDynamicValues(id){
	getDynamicValues_server(id).done(function(result) {
		if(result){
			jQuery('#dynamic_values').remove();
			jQuery('.dynamic_values').append('<div id="dynamic_values">'+result+'</div>');
			// make sure the code bocks are active
			jQuery("code").click(function() {
				jQuery(this).selText().addClass("selected");
			});
		}
	})
}

function getLayoutDetails_server(id){
	var getUrl = JRouter("index.php?option=com_componentbuilder&task=ajax.getLayoutDetails&format=json&vdm="+vastDevMod);
	if(token.length > 0 && id > 0){
		var request = token+'=1&id='+id;
	}
	return jQuery.ajax({
		type: 'GET',
		url: getUrl,
		dataType: 'jsonp',
		data: request,
		jsonp: 'callback'
	});
}

function getLayoutDetails(id){
	getLayoutDetails_server(id).done(function(result) {
		if(result){
			jQuery('#details').append(result);
			// make sure the code bocks are active
			jQuery("code").click(function() {
				jQuery(this).selText().addClass("selected");
			});
		}
	})
}

function getTemplateDetails_server(id){
	var getUrl = JRouter("index.php?option=com_componentbuilder&task=ajax.templateDetails&format=json&vdm="+vastDevMod);
	if(token.length > 0 && id > 0){
		var request = token+'=1&id='+id;
	}
	return jQuery.ajax({
		type: 'GET',
		url: getUrl,
		dataType: 'jsonp',
		data: request,
		jsonp: 'callback'
	});
}

function getTemplateDetails(id){
	getTemplateDetails_server(id).done(function(result) {
		if(result){
			jQuery('#details').append(result);
			// make sure the code bocks are active
			jQuery("code").click(function() {
				jQuery(this).selText().addClass("selected");
			});
		}
	})
}

// set snippets that are on the page
var snippetIds = [];
var snippets = {};
var snippet = 0;
jQuery(document).ready(function($)
{
	jQuery("#jform_snippet option").each(function()
	{
		var key =  jQuery(this).val();
		var text =  jQuery(this).text();
		snippets[key] = text;
		snippetIds.push(key);
	});
	snippet = jQuery("#jform_snippet").val();
	getSnippets();
});

function getSnippets_server(libraries){
	var getUrl = "index.php?option=com_componentbuilder&task=ajax.getSnippets&raw=true&format=json";
	if(token.length > 0 && libraries.length > 0){
		var request = token+'=1&libraries='+JSON.stringify(libraries);
	}
	return jQuery.ajax({
		type: 'GET',
		url: getUrl,
		dataType: 'json',
		data: request,
		jsonp: false
	});
}
function getSnippets(){
	jQuery("#loading").show();
	// clear the selection
	jQuery('#jform_snippet').find('option').remove().end();
	jQuery('#jform_snippet').trigger('liszt:updated');
	// get country value if set
	var libraries = jQuery("#jform_libraries").val();
	if (libraries) {
		getSnippets_server(libraries).done(function(result) {
			setSnippets(result);
			jQuery("#loading").hide();
			if (typeof snippetButton !== 'undefined') {
				// ensure button is correct
				var snippet = jQuery('#jform_snippet').val();
				snippetButton(snippet);
			}
		});
	}
	else
	{
		// load all snippets in none is selected
		setSnippets(snippetIds);
		jQuery("#loading").hide();
	}
}
function setSnippets(array){
	if (array) {
		jQuery('#jform_snippet').append('<option value="">'+select_a_snippet+'</option>');
		jQuery.each( array, function( i, id ) {
			if (id in snippets) {
				jQuery('#jform_snippet').append('<option value="'+id+'">'+snippets[id]+'</option>');
			}
			if (id == snippet) {
				jQuery('#jform_snippet').val(id);
			}
		});
	} else {
		jQuery('#jform_snippet').append('<option value="">'+create_a_snippet+'</option>');
	}
	jQuery('#jform_snippet').trigger('liszt:updated');
}

function getEditCustomCodeButtons_server(id){
	var getUrl = JRouter("index.php?option=com_componentbuilder&task=ajax.getEditCustomCodeButtons&format=json&raw=true&vdm="+vastDevMod);
	if(token.length > 0 && id > 0){
		var request = token+'=1&id='+id+'&return_here='+return_here;
	}
	return jQuery.ajax({
		type: 'GET',
		url: getUrl,
		dataType: 'json',
		data: request,
		jsonp: false
	});
}

function getEditCustomCodeButtons(){
	// get the id
	id = jQuery("#jform_id").val();
	getEditCustomCodeButtons_server(id).done(function(result) {
		if(isObject(result)){
			jQuery.each(result, function( field, buttons ) {
				jQuery('<div class="control-group"><div class="control-label"><label>Add/Edit Customcode</label></div><div class="controls control-customcode-buttons-'+field+'"></div></div>').insertBefore(".control-wrapper-"+ field);
				jQuery.each(buttons, function( name, button ) {
					jQuery(".control-customcode-buttons-"+field).append(button);
				});
			});
		}
	})
}

// check object is not empty
function isObject(obj) {
	for(var prop in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, prop)) {
			return true;
		}
	}
	return false;
} 
