import React from 'react'

const AddForm = () =>(
    <form className='add-form'>
        <div className="form-group">
            <div>
                <h4>
                    <label htmlFor="title">Title</label>
                </h4>
                <input type="email"
                       className="form-control"
                       _id="title"
                       placeholder="Enter the title"
                />

            </div>
            <div className='add-form'>
                <h4>
                    <label htmlFor="image">Image Url</label>
                </h4>
                <input type="text"
                       className="form-control"
                       id="image"
                       placeholder="Enter image Url"
                />

            </div>
            <div className='add-form'>
                <h4>
                    <label htmlFor="description">Description</label>
                </h4>
                <textarea
                    rows="8"
                    className="form-control"
                    id="description"
                    placeholder="Enter the description"
                />
            </div>
        </div>
        <button
            type="submit"
            className="btn btn-primary"
        >
            Submit
        </button>
    </form>

)

export default AddForm