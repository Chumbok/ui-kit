<div class="modal fade" id="languageChooserModal" tabindex="-1" role="dialog" aria-labelledby="languageChooserModalLabel">

    <div class="modal-dialog" role="document">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title" id="languageChooserModalLabel">Change Language</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span>&times;</span>
                </button>
            </div>

            <div class="modal-body">

                <form>
                    <div class="form-group">

                        <div class="currentLanguage">
                            <label for="currentLanguageName" class="col-form-label">Current language: </label>
                            <input readonly class="form-control-plaintext font-weight-bold" id="currentLanguageName" value="US English">
                        </div>

                        <label for="languageChooserDropdown">Choose language: </label>
                        <select class="form-control" id="languageChooserDropdown">
                            <option>US English</option>
                            <option>UK English</option>
                            <option>Bangla</option>
                        </select>
                    </div>
                </form>

            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>

        </div>
    </div>
</div>