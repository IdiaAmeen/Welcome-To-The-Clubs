# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.destroy_all
Club.destroy_all
User.destroy_all


@user = User.create!(username: 'test', email: 'idiwashere@gmail.com', password: '123456')
@club = Club.create!(name: 'The Book Club', user: @user , description: '"The Book Club" allows you the access of a reading list full of best-sellers! ', image: 'https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg' )
Club.create!(name: 'The Cooking Club', user: @user , description:'"The Cooking Club" gives you access to recipes for foodies just like you!', image: 'https://www.netmeds.com/images/cms/wysiwyg/blog/Post/2018/iron_vessels_898.jpg')
Club.create!(name: 'The News Club', user: @user , description:'"The News Club" lets you read up on current news whenever you want!', image: 'https://startempathy.org/wp-content/uploads/2015/10/Green-Globe-psd448121.jpg')
Book.create!(title: 'Becoming', author: 'Michelle Obama', description: 'The former first lady describes her journey from the South Side of Chicago to the White House, and how she balanced work, family and the political ascent of her husband.', image: 'https://m.media-amazon.com/images/I/51QMk4Lt1kL._SL500_.jpg', link: 'https://www.strandbooks.com/product/9781524763138?title=becoming', club: @club)
Book.create!(title: 'The Mamba Mentality', author: 'Kobe Bryant' , description: 'The former Los Angeles Lakers player describes various skills and techniques he used on the court.', image:'https://prodimage.images-bn.com/pimages/9780374201234_p0_v1_s550x406.jpg', link: 'https://www.strandbooks.com/product/9786070767302?title=mentalidad_mamba__the_mamba_mentality_los_secretos_de_mi_xito', club: @club  )
Book.create!(title: 'A Tale Of Two Cities', author:'Charles Dickens', description:'The French Revolution comes to vivid life in Charles Dickens’s famous novel about the best of times and the worst of times', image:'https://images1.penguinrandomhouse.com/cover/9780451530578', link: 'https://www.strandbooks.com/product/9780141439600?title=a_tale_of_two_cities', club: @club  )
Book.create!(title: 'It Didnt Start with You', author:'Mark Wolynn', description:'A groundbreaking approach to transforming traumatic legacies passed down in families over generations, by an acclaimed expert in the field', image: 'https://images-na.ssl-images-amazon.com/images/I/41pw2YOTblL._SX324_BO1,204,203,200_.jpg', link: 'https://www.strandbooks.com/product/9781101980385?title=it_didnt_start_with_you_how_inherited_family_trauma_shapes_who_we_are_and_how_to_end_the_cycle', club: @club  )
Book.create!(title: 'The Autobiography of Malcolm X', author: 'Malcolm X', description: 'Malcolm X retells the extraordinary story of his life and the growth of the Black Muslim movement.', image: 'https://books.google.com/books/content/images/frontcover/1rW-QpIAs8UC?fife=w200-h300', link: 'https://www.strandbooks.com/product/9780762462018?title=how_to_win_friends__influence_people_miniature_edition_the_only_book_you_need_to_lead_you_to_success', club: @club )