import React, { Component } from 'react';
import { requestCategories, requestBookList, selectCategory } from '../actions/discoveryActions';
import { connect } from 'react-redux';
import BookList from '../components/BookList';
import CategoryList from '../components/CategoryList';
import { NavLink } from "react-router-dom";

class Discovery extends Component {

    componentDidMount() {
        this.props.requestCategories();
        this.props.requestBookList();
    }

    renderCategories = () => {
        let { categories } = this.props;
        console.log(categories)
        let mappedList = categories.map((ele) => {
            return <li key={ele.id} onClick={() => this.handleFilter(ele.id)}>{ele.title}</li>
        })
        return <ul>{mappedList}</ul>
    }

    handleFilter = (category) => {
        this.props.selectCategory(category)
    }
    renderBooks = () => {
        let { bookList, categories, selectedCategory } = this.props;

        if (selectedCategory && Object.keys(bookList).length !== 0) {
            let filtered = categories.filter((ele) => {
                return ele.id === selectedCategory
            })[0];

            let maps = filtered.book_ids.map((bookId) => {
                console.log(bookList)
                return (<li>
                    <img src={bookList[bookId].image_url} alt={bookList[bookId].title} />
                    <h3>{bookList[bookId].title}</h3>
                    <p><NavLink to={`discovery/${bookList[bookId].id}`}>{bookList[bookId].title} </NavLink></p>
                </li>);
            });
            return <ul>{maps}</ul>
        }

    }

    render() {
        let { loadStatus } = this.props;
        return (
            <div>
                {
                    !loadStatus &&
                    (<div style={{ display: 'flex' }}>
                        <div className="left-panel">
                            {this.renderCategories()}
                        </div>
                        <div className="right-panel">
                            {this.renderBooks()}
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.discovery.categories,
    selectedCategory: state.discovery.selectedCategory,
    loadStatus: state.discovery.isLoading,
    bookList: state.discovery.bookList
});


export default connect(mapStateToProps, { requestCategories, requestBookList, selectCategory })(Discovery)